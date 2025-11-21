import { CharStream, CommonTokenStream, Token } from "antlr4";
import GrammarLexer from "./GrammarLexer";
import GrammarParser from "./GrammarParser";
import { Compiler } from "./compiler";
import fs from "fs";
import { ThrowErrorListener } from "./ErrorListener";
import type { type_env } from "./types";

const args = process.argv;
if (args.length !== 3) {
  throw new Error("Incorrect Usage");
}
const file = args[2];
const file_input: string = fs.readFileSync(
  `./src/examples/${file}.fun`,
  "utf-8"
);

const input = new CharStream(file_input);
const lexer = new GrammarLexer(input);
lexer.removeErrorListeners();
lexer.addErrorListener(new ThrowErrorListener<number>());
const tokens = new CommonTokenStream(lexer);
const parser = new GrammarParser(tokens);
parser.removeErrorListeners();
parser.addErrorListener(new ThrowErrorListener<Token>());
const tree = parser.prog();
const listener = new Compiler();
const f: type_env = new Map();
f.set("skip", ["Void"]);
f.set("print_string ", ["Void"]);
f.set("print_int", ["Void"]);
f.set("print_float", ["Void"]);
f.set("print_char", ["Void"]);
f.set("read", ["Int"]);
f.set("length", ["Int"]);
f.set("set_val_i32", ["Void"]);

const code = listener.compile(tree, f);
fs.writeFile(`./src/wat/${file}.wat`, code, (err) => {
  console.log(err);
});

// execute(file)
