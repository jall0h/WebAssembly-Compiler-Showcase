import { CommonTokenStream, CharStream, Token } from "antlr4";
import { ThrowErrorListener } from "./ErrorListener";
import GrammarLexer from "./GrammarLexer";
import GrammarParser, { ProgContext } from "./GrammarParser";
import { CodeGenerator } from "./codegen";
import type { type_env } from "./types";

export class Compiler {
  private initialEnvironment: type_env = new Map();
  /**
   * Defines the Initial Typing Environment
   */
  defineInitialEnvironment() {
    this.initialEnvironment.set("skip", ["Void"]);
    this.initialEnvironment.set("print_string", ["Void", "String"]);
    this.initialEnvironment.set("print_int", ["Void", "Int"]);
    this.initialEnvironment.set("print_float", ["Void", "Double"]);
    this.initialEnvironment.set("print_char", ["Void", "Int"]);
    this.initialEnvironment.set("read", ["Int"]);
    this.initialEnvironment.set("length", ["Int", "String"]);
    this.initialEnvironment.set("set_val_i32", ["Void", "Int[]", "Int", "Int"]);
    this.initialEnvironment.set("set_val_f32", [
      "Void",
      "Double[]",
      "Int",
      "Double",
    ]);
  }
  /**
   * Breaks the source program down into characters then tokenises them.
   * @param {string} source - The source Program to lex
   * @returns {GrammarLexer} - Lexer class object with tokens
   * */
  lexProgram(source: string): GrammarLexer {
    const input: CharStream = new CharStream(source);
    const lexer: GrammarLexer = new GrammarLexer(input);
    lexer.removeErrorListeners();
    lexer.addErrorListener(new ThrowErrorListener<number>());
    return lexer;
  }

  /**
   * Produces a syntax tree from tokens given.
   * @param tokens - Lexer class object with tokens
   * @returns - The root of the syntax tree
   */
  parseProgram(tokens: GrammarLexer): ProgContext {
    const tokenStream: CommonTokenStream = new CommonTokenStream(tokens);
    const parser: GrammarParser = new GrammarParser(tokenStream);
    parser.removeErrorListeners();
    parser.addErrorListener(new ThrowErrorListener<Token>());
    const tree = parser.prog();
    return tree;
  }

  /**
   * Compiles the file to WebAssembly Text Format(WAT) and saves to the file system.
   * @param file - The source code A-FUN file in the examples folder.
   */
  compile = async (file: string) => {
    const code = this.generateWATString(file);
    console.log(code);
    return code;
  };

  /**
   * Creates a string of source program in WebAssembly(WAT) text format.
   * @param file - The source code A-FUN file in the examples folder.
   */
  generateWATString = (file: string) => {
    const fileContent: string = file;
    const tokens = this.lexProgram(fileContent);
    const tree = this.parseProgram(tokens);
    const listener = new CodeGenerator();
    this.defineInitialEnvironment();
    const code = listener.compile(tree, this.initialEnvironment);
    return code;
  };
}
