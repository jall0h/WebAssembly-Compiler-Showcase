import {
  AContext,
  ArgContext,
  BexpContext,
  DefnContext,
  ExpContext,
  FContext,
  MContext,
  ProgContext,
  TaContext,
  TContext,
} from "./GrammarParser";
import GrammarVisitor from "./GrammarVisitor";
import type { mem_val, type_env } from "./types";

type Context =
  | FContext
  | ExpContext
  | MContext
  | TContext
  | DefnContext
  | ArgContext;

export class CodeGenerator extends GrammarVisitor<[string, type_env]> {
  // Start of a program containing imports and array value assignments
  private code_start: string = `(module\n(import "process" "print_string" (func $print_string (param i32 i32)))
(import "process" "print_int" (func $print_int (param i32)))
(import "process" "print_char" (func $print_char (param i32)))
(import "process" "print_float" (func $print_float (param f32)))
(import "functions" "string_eq" (func $string_eq (param i32 i32) (param i32 i32) (result i32)))
(import "functions" "string_ne" (func $string_ne (param i32 i32) (param i32 i32) (result i32)))
(import "functions" "length" (func $length (param i32) (param i32) (result i32)))
(import "functions" "set_val_i32" (func $set_val_i32 (param i32) (param i32) (param i32) (result )))
(import "functions" "set_val_f32" (func $set_val_f32 (param i32) (param i32) (param f32) (result )))
(import "functions" "read" (func $read (result i32)))\n(import "js" "mem" (memory 1))`;
  private array_assignments: string = "";
  // End of the program
  private code_end: string = ")";
  //Symbol table to keep track of string values
  private string_env: Map<string, mem_val> = new Map<string, mem_val>();
  //Symbol table to keep track of array values
  private array_env: Map<string, mem_val> = new Map<string, mem_val>();
  //Counter to keep track of memory position
  private counter: number = 0;

  /**
   * Retrives the type from the expression that is provided.
   * @param {Context} ctx - The expression context.
   * @param {type_env} ts - The type environment used for variable types aso function parameters and return types. It maps variables identifiers to their types
   * and functions to a list of its return type with parameter types
   * @returns {string | string[]} The single type or list of the type of the expressions
   */
  getType(ctx: Context, ts: type_env): string | string[] | undefined {
    if (ctx instanceof FContext) {
      if (ctx.L_CURLY_PAREN() && ctx.exp(0) && ctx.R_CURLY_PAREN()) {
        return this.getType(ctx.exp(0), ts);
      }
      if (
        ctx.GLOBAL_ID() &&
        ctx.L_SQUARE_PAREN() &&
        ctx.R_SQUARE_PAREN() &&
        ctx.exp(0)
      ) {
        if (ts.get(ctx.GLOBAL_ID().getText()) === "Int[]") {
          return "Int";
        }
        if (ts.get(ctx.GLOBAL_ID().getText()) === "Double[]") {
          return "Double";
        }
        if (ts.get(ctx.GLOBAL_ID().getText()) === "String") {
          return "String";
        }
      }
      if (
        ctx.ID() &&
        ctx.L_SQUARE_PAREN() &&
        ctx.R_SQUARE_PAREN() &&
        ctx.exp(0)
      ) {
        if (ts.get(ctx.ID().getText()) === "Int[]") {
          return "Int";
        }
        if (ts.get(ctx.ID().getText()) === "Double[]") {
          return "Double";
        }
        if (ts.get(ctx.ID().getText()) === "String") {
          return "String";
        }
      }
      if (
        (ctx.ID() && ctx.L_PAREN() && ctx.exp_list() && ctx.R_PAREN()) ||
        (ctx.ID() && ctx.L_PAREN() && ctx.R_PAREN())
      ) {
        const entry = ts?.get(ctx.ID().getText());
        if (entry && entry[0]) {
          return entry[0];
        }
      }
      if (ctx.ID()) {
        return ts.get(ctx.ID().getText());
      }
      if (ctx.L_PAREN() && ctx.exp(0) && ctx.R_PAREN()) {
        return this.getType(ctx.exp(0), ts);
      }
      if (ctx.GLOBAL_ID()) {
        return ts.get(ctx.GLOBAL_ID().getText());
      }
      if (
        (ctx.SUB() && ctx.DECIMAL_NUMBER()) ||
        (ctx.ADD() && ctx.DECIMAL_NUMBER()) ||
        ctx.DECIMAL_NUMBER()
      ) {
        return "Double";
      }
      if (
        (ctx.SUB() && ctx.NUMBER()) ||
        (ctx.ADD() && ctx.NUMBER()) ||
        ctx.NUMBER()
      ) {
        return "Int";
      }
      if (ctx.STRING()) {
        return "String";
      }
    }
    if (ctx instanceof MContext) {
      if (ctx.t() && ctx.exp()) {
        const t1 = this.getType(ctx.t(), ts);
        const t2 = this.getType(ctx.exp(), ts);
        if (t1 === t2) return t1;
        else
          throw new Error(
            `Incorrect Types ${t1} expected but ${t2} was provided instead`
          );
      }
      if (ctx.t()) return this.getType(ctx.t(), ts);
    }
    if (ctx instanceof TContext) {
      if (ctx.f() && ctx.t()) {
        const t1 = this.getType(ctx.f(), ts);
        const t2 = this.getType(ctx.t(), ts);
        if (t1 == t2) return t1;
        else
          throw new Error(
            `Incorrect Types ${t1} expected but ${t2} was provided instead`
          );
      }
      if (ctx.f()) {
        return this.getType(ctx.f(), ts);
      }
    }
    if (ctx instanceof ExpContext) {
      if (
        ctx.IF() &&
        ctx.bexp() &&
        ctx.THEN() &&
        ctx.exp(0) &&
        ctx.ELSE() &&
        ctx.exp(1)
      ) {
        const t1 = this.getType(ctx.exp(0), ts);
        const t2 = this.getType(ctx.exp(1), ts);
        if (t1 === t2) return t1;
        else throw new Error("Incorrect Types");
      }
      if (ctx.m() && ctx.SEMI_COLON() && ctx.exp(0)) {
        const t1 = this.getType(ctx.exp(0), ts);
        return t1;
      }
      if (ctx.T_SKIP() || (ctx.T_SKIP() && ctx.L_PAREN() && ctx.R_PAREN())) {
        return "Void";
      }
      if (ctx.m()) return this.getType(ctx.m(), ts);
    }
    if (ctx instanceof ArgContext) {
      if (ctx.INT() && ctx.L_SQUARE_PAREN() && ctx.R_SQUARE_PAREN()) {
        return "Int[]";
      }
      if (ctx.INT()) {
        return "Int";
      }
      if (ctx.DOUBLE() && ctx.L_SQUARE_PAREN() && ctx.R_SQUARE_PAREN()) {
        return "Double[]";
      }
      if (ctx.DOUBLE()) {
        return "Double";
      }
      if (ctx.STRING_TYPE()) {
        return "String";
      }
    }
    throw Error("Cannot Recognise Expression");
  }
  /**
   * Retrieves the types of arguments or parameters provided from a function by iterating through each argument/parameter, extracting
   * its type and returns an array of the corresponding types in order
   * @param {ArgContext[] | ExpContext[]} ctx - A list of arguments or parameters to iterate through.
   * @param {type_env} env - The type environment used for variable types aso function parameters and return types. It maps variables identifiers to their types
   * and functions to a list of its return type with parameter types
   * @returns {string[]} An array of strings representing the types for arguments or parameters.
   */
  getArgumentTypes(ctx: ArgContext[] | ExpContext[], env: type_env): string[] {
    let args = [];

    for (let i = 0; i < ctx.length; i++) {
      let type = this.getType(ctx[i], env);
      if (typeof type === "string") {
        args.push(type);
      }
    }
    return args;
  }
  /**
   * Generates code for function arguments
   * @param {ArgContext[]} - An array consiting of the function argument contexts.
   * @param {type_env} env - The type environment used for variable types aso function parameters and return types. It maps variables identifiers to their types
   * and functions to a list of its return type with parameter types
   * @returns {string, type_env} An tuple consisting of the generated argumensts and the typing environment respectively
   */
  createArguments: (ctx: ArgContext[], env: type_env) => [string, type_env] = (
    ctx: ArgContext[],
    env: type_env
  ) => {
    let p = "";
    let t = env;
    for (let i = 0; i < ctx.length; i++) {
      let [param, n_ts] = this.visit_node(ctx[i], t);
      p += param;
      t = n_ts;
    }
    return [p, t];
  };

  /**
   * Checks if two arrays have identical elements through iterating through the elements in order.
   * @param arr1 - The first array
   * @param arr2 - The second array
   * @returns {Boolean} If both arrays are equal
   */
  checkEqual(arr1: string[], arr2: string[]): Boolean {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }

  /**
   * Visits an boolean node based in the abstract syntax tree and generates output depending on the expression based on the pareser grammar rule 'Bexp'.
   * @param {BexpContext} ctx - The context object that he function visits. It provides access to its children nodes and properties.
   * @param {type_env} ts - The type environment used for variable types aso function parameters and return types. It maps variables identifiers to their types
   * and functions to a list of its return type with parameter types
   * @returns
   */
  visitBexp(ctx: BexpContext, ts: type_env): [string, type_env] {
    if (ctx.a() && ctx.OR_OP() && ctx.bexp()) {
      return [
        `${this.visit_node(ctx.a(), ts)[0]}\n${
          this.visit_node(ctx.bexp(), ts)[0]
        }i32.or\n`,
        ts,
      ];
    }
    if (ctx.a()) {
      return this.visit_node(ctx.a(), ts);
    }
    throw Error("Cannot Recognise Expression");
  }

  /**
   * Visits an boolean node based in the abstract syntax tree and generates output depending on the expression based on the pareser grammar rule 'A'.
   * @param {AContext} ctx - The context object that he function visits. It provides access to its children nodes and properties.
   * @param {type_env} ts - The type environment used for variable types aso function parameters and return types. It maps variables identifiers to their types
   * and functions to a list of its return type with parameter types
   * @returns
   */
  visitA(ctx: AContext, ts?: type_env): [string, type_env] {
    if (ts && ctx.ta() && ctx.AND_OP() && ctx.a()) {
      return [
        `${this.visit_node(ctx.ta(), ts)[0]}\n${
          this.visit_node(ctx.a(), ts)[0]
        }i32.and\n`,
        ts,
      ];
    }
    if (ts && ctx.ta()) {
      return this.visit_node(ctx.ta(), ts);
    }
    throw Error("Cannot Recognise Expression");
  }
  /**
   * Visits an boolean node based in the abstract syntax tree and generates output depending on the expression based on the pareser grammar rule 'Ta'.
   * @param {TaContext} ctx - The context object that he function visits. It provides access to its children nodes and properties.
   * @param {type_env} ts - The type environment used for variable types aso function parameters and return types. It maps variables identifiers to their types
   * and functions to a list of its return type with parameter types
   * @returns
   */
  visitTa(ctx: TaContext, ts?: type_env): [string, type_env] {
    if (ts && ctx.exp(0) && ctx.exp(1)) {
      const e1 = this.visit_node(ctx.exp(0), ts)[0];
      const e2 = this.visit_node(ctx.exp(1), ts)[0];
      const t1 = this.getType(ctx.exp(0), ts);
      const t2 = this.getType(ctx.exp(1), ts);
      const sameType = t1 === t2;
      if (ts && sameType && t1 == "Int") {
        if (ctx.EQUAL_TO()) return [`${e1}${e2}i32.eq\n`, ts];
        if (ctx.NOT_EQUAL_TO()) return [`${e1}${e2}i32.ne\n`, ts];
        if (ctx.LESS_THAN()) return [`${e1}${e2}i32.lt_s\n`, ts];
        if (ctx.LESS_THAN_EQUAL()) return [`${e1}${e2}i32.le_s\n`, ts];
        if (ctx.MORE_THAN()) return [`${e1}${e2}i32.gt_s\n`, ts];
        if (ctx.MORE_THAN_EQUAL()) return [`${e1}${e2}i32.gt_e\n`, ts];
      }
      if (ts && sameType && t1 == "Double") {
        if (ctx.EQUAL_TO()) return [`${e1}${e2}f32.eq\n`, ts];
        if (ctx.NOT_EQUAL_TO()) return [`${e1}${e2}f32.ne\n`, ts];
        if (ctx.LESS_THAN()) return [`${e1}${e2}f32.lt\n`, ts];
        if (ctx.LESS_THAN_EQUAL()) return [`${e1}${e2}f32.le\n`, ts];
        if (ctx.MORE_THAN()) return [`${e1}${e2}f32.gt\n`, ts];
        if (ctx.MORE_THAN_EQUAL()) return [`${e1}${e2}f32.ge\n`, ts];
      }
      if (ts && sameType && t1 == "String") {
        if (ctx.EQUAL_TO()) return [`${e1}${e2}call $string_eq\n`, ts];
        if (ctx.NOT_EQUAL_TO()) return [`${e1}${e2}call $string_ne\n`, ts];
      } else
        throw new Error(
          `Boolean Expression has type ${t2} but was expecting ${t1}`
        );
    }
    if (ts && ctx.L_PAREN() && ctx.bexp() && ctx.R_PAREN()) {
      return this.visit_node(ctx.bexp(), ts);
    }
    throw Error("Cannot Recognise Expression");
  }

  /**
   * Visits an expression node based in the abstract syntax tree and generates output depending on the expression based on the pareser grammar rule 'Exp'.
   * @param {ExpContext} ctx - The context object that he function visits. It provides access to its children nodes and properties.
   * @param {type_env} env - The type environment used for variable types aso function parameters and return types. It maps variables identifiers to their types
   * and functions to a list of its return type with parameter types
   * @returns {[string,type_env]} A tuple containing the generated code and the typing environment respectively
   */
  visitExp(ctx: ExpContext, ts: type_env): [string, type_env] {
    if (ctx.T_SKIP() && ctx.L_PAREN() && ctx.R_PAREN()) return [`nop\n`, ts];
    if (ctx.T_SKIP()) return [`nop\n`, ts];
    if (
      ctx.IF() &&
      ctx.bexp() &&
      ctx.THEN() &&
      ctx.exp(0) &&
      ctx.ELSE() &&
      ctx.exp(1)
    ) {
      const t1 = this.getType(ctx.exp(0), ts);
      const t2 = this.getType(ctx.exp(1), ts);
      if (t1 === t2) {
        if (t1 === "Int")
          return [
            this.visit_node(ctx.bexp(), ts)[0] +
              `(if (result i32)\n (then\n ${
                this.visit_node(ctx.exp(0), ts)[0]
              }) (else\n ${this.visit_node(ctx.exp(1), ts)[0]})\n)\n`,
            ts,
          ];
        if (t1 === "Double")
          return [
            this.visit_node(ctx.bexp(), ts)[0] +
              `(if (result f32)\n (then\n ${
                this.visit_node(ctx.exp(0), ts)[0]
              }) (else\n ${this.visit_node(ctx.exp(1), ts)[0]})\n)\n`,
            ts,
          ];
        if (t1 === "Int[]")
          return [
            this.visit_node(ctx.bexp(), ts)[0] +
              `(if (result i32)\n (then\n ${
                this.visit_node(ctx.exp(0), ts)[0]
              }) (else\n ${this.visit_node(ctx.exp(1), ts)[0]})\n)\n`,
            ts,
          ];
        if (t1 === "Void")
          return [
            this.visit_node(ctx.bexp(), ts)[0] +
              `(if (result )\n (then\n ${
                this.visit_node(ctx.exp(0), ts)[0]
              }) (else\n ${this.visit_node(ctx.exp(1), ts)[0]})\n)\n`,
            ts,
          ];
      } else throw new Error(`If-else has type ${t2} but was expecting ${t1}`);
    }
    if (ctx.m() && ctx.SEMI_COLON() && ctx.exp(0)) {
      return [
        `${this.visit_node(ctx.m(), ts)[0]}${
          this.visit_node(ctx.exp(0), ts)[0]
        }`,
        ts,
      ];
    }
    if (ctx.m()) {
      return this.visit_node(ctx.m(), ts);
    }
    throw Error("Cannot Recognise Expression");
  }
  /**
   * Visits an expression node based in the abstract syntax tree and generates output depending on the expression based on the pareser grammar rule 'M'.
   * @param {MContext} ctx  - The context object that he function visits. It provides access to its children nodes and properties.
   * @param {type_env} env - The type environment used for variable types aso function parameters and return types. It maps variables identifiers to their types
   * and functions to a list of its return type with parameter types
   * @returns {[string,type_env]} A tuple containing the generated code and the typing environment respectively
   */
  visitM(ctx: MContext, ts: type_env): [string, type_env] {
    if (ctx.t() && ctx.exp()) {
      const t1 = this.getType(ctx.t(), ts);
      const t2 = this.getType(ctx.exp(), ts);
      if (t1 == t2) {
        if (t1 == "Int") {
          if (ctx.ADD()) {
            return [
              `${this.visit_node(ctx.t(), ts)[0]} ${
                this.visit_node(ctx.exp(), ts)[0]
              } i32.add\n`,
              ts,
            ];
          }
          if (ctx.SUB()) {
            return [
              `${this.visit_node(ctx.t(), ts)[0]} ${
                this.visit_node(ctx.exp(), ts)[0]
              } i32.sub\n`,
              ts,
            ];
          }
        }
        if (t1 == "Double") {
          if (ctx.ADD()) {
            return [
              `${this.visit_node(ctx.t(), ts)[0]} ${
                this.visit_node(ctx.exp(), ts)[0]
              } f32.add\n`,
              ts,
            ];
          }
          if (ctx.SUB()) {
            return [
              `${this.visit_node(ctx.t(), ts)[0]} ${
                this.visit_node(ctx.exp(), ts)[0]
              } f32.sub\n`,
              ts,
            ];
          }
        }
      }
    }
    if (ctx.t()) {
      return this.visit_node(ctx.t(), ts);
    }
    throw Error("Cannot Recognise Expression");
  }
  /**
   * Visits an expression node based in the abstract syntax tree and generates output depending on the expression based on the pareser grammar rule 'T'.
   * @param {MContext} ctx  - The context object that he function visits. It provides access to its children nodes and properties.
   * @param {type_env} env - The type environment used for variable types aso function parameters and return types. It maps variables identifiers to their types
   * and functions to a list of its return type with parameter types
   * @returns {[string,type_env]} A tuple containing the generated code and the typing environment respectively
   */
  visitT(ctx: TContext, ts: type_env): [string, type_env] {
    if (ctx.f() && ctx.t()) {
      const t1 = this.getType(ctx.f(), ts);
      const t2 = this.getType(ctx.t(), ts);
      if (t1 == t2) {
        if (t1 == "Int") {
          if (ctx.MULT()) {
            return [
              `${this.visit_node(ctx.f(), ts)[0]}${
                this.visit_node(ctx.t(), ts)[0]
              }i32.mul\n`,
              ts,
            ];
          }
          if (ctx.DIV()) {
            return [
              `${this.visit_node(ctx.f(), ts)[0]}${
                this.visit_node(ctx.t(), ts)[0]
              }i32.div_s\n`,
              ts,
            ];
          }
          if (ctx.MOD()) {
            return [
              `${this.visit_node(ctx.f(), ts)[0]}${
                this.visit_node(ctx.t(), ts)[0]
              }i32.rem_s\n`,
              ts,
            ];
          }
        }
        if (t1 == "Double") {
          if (ctx.MULT()) {
            return [
              `${this.visit_node(ctx.f(), ts)[0]}${
                this.visit_node(ctx.t(), ts)[0]
              }f32.mul\n`,
              ts,
            ];
          }
          if (ctx.DIV()) {
            return [
              `${this.visit_node(ctx.f(), ts)[0]}${
                this.visit_node(ctx.t(), ts)[0]
              }f32.div_s\n`,
              ts,
            ];
          }
          if (ctx.MOD()) {
            return [
              `${this.visit_node(ctx.f(), ts)[0]}${
                this.visit_node(ctx.t(), ts)[0]
              }f32.rem_s\n`,
              ts,
            ];
          }
        }
      }
    }
    if (ctx.f()) {
      return this.visit_node(ctx.f(), ts);
    }
    throw Error("Cannot Recognise Expression");
  }

  /**
   * Visits an expression node based in the abstract syntax tree and generates output depending on the expression based on the pareser grammar rule 'F'.
   * @param {FContext} ctx  - The context object that he function visits. It provides access to its children nodes and properties.
   * @param {type_env} env - The type environment used for variable types aso function parameters and return types. It maps variables identifiers to their types
   * and functions to a list of its return type with parameter types
   * @returns {[string,type_env]} A tuple containing the generated code and the typing environment respectively
   */
  visitF(ctx: FContext, ts: type_env): [string, type_env] {
    if (
      ctx.ID() &&
      ctx.L_SQUARE_PAREN() &&
      ctx.R_SQUARE_PAREN() &&
      ctx.exp(0)
    ) {
      if (this.array_env.get(ctx.ID().getText())) {
        if (this.getType(ctx.exp(0), ts) === "Int") {
          const mem_offset = this.array_env.get(ctx.ID().getText())?.offset;
          if (ts.get(ctx.ID().getText()) === "Int[]") {
            return [
              `i32.const ${mem_offset}\n${
                this.visit_node(ctx.exp(0), ts)[0]
              }\ni32.const 4\ni32.mul\ni32.add\ni32.load\n`,
              ts,
            ];
          }
          if (ts.get(ctx.ID().getText()) === "Double[]") {
            return [
              `i32.const ${mem_offset}\n${
                this.visit_node(ctx.exp(0), ts)[0]
              }\ni32.const 4\ni32.mul\ni32.add\ni32.load\n`,
              ts,
            ];
          }
        }
      }
      if (ts.get(ctx.ID().getText()) === "String") {
        return [
          `local.get $${ctx.ID().getText()}_o\n${
            this.visit_node(ctx.exp(0), ts)[0]
          }\ni32.add\ni32.const 1\n`,
          ts,
        ];
      }
    }
    if (ctx.ID() && ctx.L_PAREN() && ctx.exp_list() && ctx.R_PAREN()) {
      const arg_types: string[] = this.getArgumentTypes(ctx.exp_list(), ts);
      let params: string[] = [];
      const param_types = ts.get(ctx.ID().getText());
      if (typeof param_types === "string") {
        params.push(param_types as string);
      } else {
        if (param_types) {
          params = param_types.slice(1);
        }
      }
      if (!this.checkEqual(params, arg_types)) {
        throw new Error(
          `Expected [${param_types}] but got [${arg_types}] instead`
        );
      }
      return [
        `${ctx
          .exp_list()
          .map((ctx) => this.visit_node(ctx, ts)[0])
          .join("")} call $${ctx.ID().getText()}\n`,
        ts,
      ];
    }
    if (ctx.ID() && ctx.L_PAREN() && ctx.R_PAREN()) {
      return [`call ${ctx.ID().getText()}`, ts];
    }
    if (ctx.L_PAREN() && ctx.exp(0) && ctx.R_PAREN()) {
      return [this.visit_node(ctx.exp(0), ts)[0] + "\n", ts];
    }
    if (ctx.L_CURLY_PAREN() && ctx.exp(0) && ctx.R_CURLY_PAREN()) {
      return ["" + this.visit_node(ctx.exp(0), ts)[0] + "\n", ts];
    }
    if (ctx.ID()) {
      if (ts.get(ctx.ID().getText()) == "String") {
        return [
          `local.get $${ctx.ID().getText()}_o\nlocal.get $${ctx
            .ID()
            .getText()}_l\n`,
          ts,
        ];
      }
      if (ts.get(ctx.ID().getText()) == "Int[]") {
        const mem_offset: number | undefined = this.array_env.get(
          ctx.ID().getText()
        )?.offset;
        return [`i32.const ${mem_offset}\n`, ts];
      }
      return [`local.get $${ctx.ID().getText()}\n`, ts];
    }
    if (
      ctx.GLOBAL_ID() &&
      ctx.L_SQUARE_PAREN() &&
      ctx.R_SQUARE_PAREN() &&
      ctx.exp(0)
    ) {
      if (this.array_env.get(ctx.GLOBAL_ID().getText())) {
        if (this.getType(ctx.exp(0), ts) === "Int") {
          const mem_offset = this.array_env.get(
            ctx.GLOBAL_ID().getText()
          )?.offset;
          if (ts.get(ctx.GLOBAL_ID().getText()) === "Int[]") {
            return [
              `i32.const ${mem_offset}\n${
                this.visit_node(ctx.exp(0), ts)[0]
              }\ni32.const 4\ni32.mul\ni32.add\ni32.load\n`,
              ts,
            ];
          }
          if (ts.get(ctx.GLOBAL_ID().getText()) === "Double[]") {
            return [
              `i32.const ${mem_offset}\n${
                this.visit_node(ctx.exp(0), ts)[0]
              }\ni32.const 4\ni32.mul\ni32.add\nf32.load\n`,
              ts,
            ];
          } else
            throw new Error(
              "Incorrect indexing for array, please use expression of type int"
            );
        }
      }
      if (this.getType(ctx.exp(0), ts) === "Int") {
        if (ts.get(ctx.GLOBAL_ID().getText()) === "String") {
          const offset = this.string_env.get(ctx.GLOBAL_ID().getText())?.offset;
          return [
            `i32.const ${offset}\n${
              this.visit_node(ctx.exp(0), ts)[0]
            }i32.add\ni32.const 1\n`,
            ts,
          ];
        } else
          throw new Error(
            "Incorrect indexing for array, please use expression of type int"
          );
      } else throw new Error("Array Indexing is not of type Int");
    }
    if (ctx.GLOBAL_ID()) {
      if (ts.get(ctx.GLOBAL_ID().getText()) == "String") {
        return [
          `global.get $${ctx.GLOBAL_ID().getText()}_o\nglobal.get $${ctx
            .GLOBAL_ID()
            .getText()}_l\n`,
          ts,
        ];
      }
      if (ts.get(ctx.GLOBAL_ID().getText()) == "Int[]") {
        const mem_offset: number | undefined = this.array_env.get(
          ctx.GLOBAL_ID().getText()
        )?.offset;
        return [`i32.const ${mem_offset}\n`, ts];
      }
      return [`global.get $${ctx.GLOBAL_ID().getText()}\n`, ts];
    }
    if (ctx.SUB() && ctx.DECIMAL_NUMBER()) {
      return [`f32.const ${ctx.DECIMAL_NUMBER().getText()}\nf32.neg\n`, ts];
    }
    if ((ctx.ADD() && ctx.DECIMAL_NUMBER()) || ctx.DECIMAL_NUMBER()) {
      return [`f32.const ${ctx.DECIMAL_NUMBER().getText()}\n`, ts];
    }
    if (ctx.SUB() && ctx.NUMBER()) {
      return [`i32.const ${ctx.NUMBER().getText()}\ni32.neg\n`, ts];
    }
    if ((ctx.ADD() && ctx.NUMBER()) || ctx.NUMBER()) {
      return [`i32.const ${ctx.NUMBER().getText()} \n`, ts];
    }
    if (ctx.STRING()) {
      if (this.string_env.get(ctx.STRING().getText())) {
        const s = this.string_env.get(ctx.STRING().getText());
        return [`i32.const ${s?.offset}\ni32.const ${s?.length}\n`, ts];
      } else {
        const offset = this.counter;
        this.code_start += `(data (i32.const ${offset}) ${ctx
          .STRING()
          .getText()})\n`;
        this.counter += ctx.STRING().getText().length - 2;
        return [
          `i32.const ${offset}\n i32.const ${
            ctx.STRING().getText().length - 2
          }\n`,
          ts,
        ];
      }
    }
    throw Error("Cannot Recognise Expression");
  }

  /**
   * Visits an definiton node based in the abstract syntax tree and generates output depending on the expression based on the pareser grammar rule 'Defn', used
   * for function and variable definitions.
   * @param {DefnContext} ctx  - The context object that the function visits. It provides access to its children nodes and properties.
   * @param {type_env} ts - The type environment used for variable types aso function parameters and return types. It maps variables identifiers to their types
   * and functions to a list of its return type with parameter types
   * @returns {[string,type_env]} A tuple containing the generated code and the typing environment respectively
   */
  visitDefn(ctx: DefnContext, ts: type_env): [string, type_env] {
    /* Array declaration*/
    if (
      ctx.VAL() &&
      ctx.GLOBAL_ID() &&
      ctx.L_SQUARE_PAREN() &&
      ctx.NUMBER() &&
      ctx.R_SQUARE_PAREN() &&
      ctx.COLON() &&
      (ctx.INT() || ctx.DOUBLE)
    ) {
      this.array_env.set(ctx.GLOBAL_ID().getText(), {
        offset: this.counter,
        length: Number(ctx.NUMBER().getText()),
      });
      let new_ts: type_env = ts;
      if (ctx.INT()) {
        new_ts = new Map([...ts, [ctx.GLOBAL_ID().getText(), "Int[]"]]);
      }
      if (ctx.DOUBLE()) {
        new_ts = new Map([...ts, [ctx.GLOBAL_ID().getText(), "Double[]"]]);
      }
      const global_id = this.array_env.get(ctx.GLOBAL_ID().getText());
      if (global_id) this.counter += global_id?.length * 4;
      return [``, new_ts];
    }

    /* Global variable declaration*/
    if (ctx.VAL() && ctx.GLOBAL_ID() && ctx.COLON() && ctx.EQUAL()) {
      if (ctx.INT()) {
        const new_ts: type_env = new Map([
          ...ts,
          [ctx.GLOBAL_ID().getText(), "Int"],
        ]);
        if (ctx.NUMBER() && ctx.SUB()) {
          return [
            `(global $${ctx.GLOBAL_ID().getText()} i32 (i32.const -${ctx
              .NUMBER()
              .getText()}))\n`,
            new_ts,
          ];
        }
        if (ctx.NUMBER()) {
          return [
            `(global $${ctx.GLOBAL_ID().getText()} i32 (i32.const ${ctx
              .NUMBER()
              .getText()}))\n`,
            new_ts,
          ];
        } else throw Error("Value not recognised please provide an Integer");
      }
      if (ctx.DOUBLE()) {
        const new_ts: type_env = new Map([
          ...ts,
          [ctx.GLOBAL_ID().getText(), "Double"],
        ]);
        if (ctx.DECIMAL_NUMBER() && ctx.SUB()) {
          return [
            `(global $${ctx.GLOBAL_ID().getText()} f32 (f32.const -${ctx
              .DECIMAL_NUMBER()
              .getText()}))\n`,
            new_ts,
          ];
        }
        if (ctx.DECIMAL_NUMBER()) {
          return [
            `(global $${ctx.GLOBAL_ID().getText()} f32 (f32.const ${ctx
              .DECIMAL_NUMBER()
              .getText()}))\n`,
            new_ts,
          ];
        } else throw Error("Value not recognised please provide an Integer");
      }
      if (ctx.STRING() && ctx.STRING_TYPE()) {
        const new_ts: type_env = new Map([
          ...ts,
          [ctx.GLOBAL_ID().getText(), "String"],
        ]);
        const str_len = ctx.STRING().getText().length - 2;
        this.string_env.set(ctx.GLOBAL_ID().getText(), {
          offset: this.counter,
          length: str_len,
        });
        this.code_start += `(data (i32.const ${this.counter}) ${ctx
          .STRING()
          .getText()})`;
        this.counter += str_len;
        return [
          `(global $${ctx.GLOBAL_ID().getText()}_o i32 (i32.const ${
            this.string_env.get(ctx.GLOBAL_ID().getText())?.offset
          }))\n(global $${ctx.GLOBAL_ID().getText()}_l i32 (i32.const ${
            this.string_env.get(ctx.GLOBAL_ID().getText())?.length
          }))\n`,
          new_ts,
        ];
      }
    }

    /* Array value assignment*/
    if (
      ctx.GLOBAL_ID() &&
      ctx.L_SQUARE_PAREN() &&
      ctx.R_SQUARE_PAREN() &&
      ctx.EQUAL() &&
      ctx.exp(0) &&
      ctx.exp(1)
    ) {
      const mem_offset: number | undefined = this.array_env.get(
        ctx.GLOBAL_ID().getText()
      )?.offset;
      const position: string =
        this.visit_node(ctx.exp(0), ts)[0] + "i32.const 4\ni32.mul\n";
      if (ts.get(ctx.GLOBAL_ID().getText()) === "Int[]") {
        this.array_assignments += `i32.const ${mem_offset}\n${position}i32.add\n${
          this.visit_node(ctx.exp(1), ts)[0]
        }\ni32.store\n`;
      }
      if (ts.get(ctx.GLOBAL_ID().getText()) === "Double[]") {
        this.array_assignments += `i32.const ${mem_offset}\n${position}i32.add\n${
          this.visit_node(ctx.exp(1), ts)[0]
        }\nf32.store\n`;
      }
      return [``, ts];
    }

    /*Function definitions with parameters */
    if (
      ctx.DEF() &&
      ctx.L_PAREN() &&
      ctx.ID() &&
      ctx.arg_list() &&
      ctx.COLON() &&
      ctx.EQUAL() &&
      ctx.exp(0)
    ) {
      if (ctx.STRING_TYPE()) {
        const new_ts: type_env = new Map([
          ...ts,
          [
            ctx.ID().getText(),
            ["String", ...this.getArgumentTypes(ctx.arg_list(), ts)],
          ],
        ]);
        const [params, u_ts] = this.createArguments(ctx.arg_list(), new_ts);
        return [
          `(func $${ctx.ID()} ${params} (result i32 i32)\n ${
            this.visit_node(ctx.exp(0), u_ts)[0]
          })\n`,
          u_ts,
        ];
      }
      if (ctx.INT() && ctx.L_SQUARE_PAREN() && ctx.R_SQUARE_PAREN()) {
        const new_ts: type_env = new Map([
          ...ts,
          [
            ctx.ID().getText(),
            ["Int[]", ...this.getArgumentTypes(ctx.arg_list(), ts)],
          ],
        ]);
        const [params, u_ts] = this.createArguments(ctx.arg_list(), new_ts);
        return [
          `(func $${ctx.ID().getText()} ${params} (result i32)\n ${
            this.visit_node(ctx.exp(0), u_ts)[0]
          })\n`,
          u_ts,
        ];
      }
      if (ctx.INT()) {
        const new_ts: type_env = new Map([
          ...ts,
          [
            ctx.ID().getText(),
            ["Int", ...this.getArgumentTypes(ctx.arg_list(), ts)],
          ],
        ]);
        const [params, u_ts] = this.createArguments(ctx.arg_list(), new_ts);
        return [
          `(func $${ctx.ID()} ${params} (result i32)\n ${
            this.visit_node(ctx.exp(0), u_ts)[0]
          })\n`,
          u_ts,
        ];
      }
      if (ctx.DOUBLE() && ctx.L_SQUARE_PAREN() && ctx.R_SQUARE_PAREN()) {
        const new_ts: type_env = new Map([
          ...ts,
          [
            ctx.ID().getText(),
            ["Double[]", ...this.getArgumentTypes(ctx.arg_list(), ts)],
          ],
        ]);
        const [params, u_ts] = this.createArguments(ctx.arg_list(), new_ts);
        return [
          `(func $${ctx.ID().getText()} ${params} (result f32)\n ${
            this.visit_node(ctx.exp(0), u_ts)[0]
          })\n`,
          u_ts,
        ];
      }
      if (ctx.DOUBLE()) {
        const new_ts: type_env = new Map([
          ...ts,
          [
            ctx.ID().getText(),
            ["Int", ...this.getArgumentTypes(ctx.arg_list(), ts)],
          ],
        ]);
        const [params, u_ts] = this.createArguments(ctx.arg_list(), new_ts);
        return [
          `(func $${ctx.ID()} ${params} (result f32)\n ${
            this.visit_node(ctx.exp(0), u_ts)[0]
          })\n`,
          u_ts,
        ];
      }
      if (ctx.VOID()) {
        const new_ts: type_env = new Map([
          ...ts,
          [
            ctx.ID().getText(),
            ["Void", ...this.getArgumentTypes(ctx.arg_list(), ts)],
          ],
        ]);
        const [params, u_ts] = this.createArguments(ctx.arg_list(), new_ts);
        return [
          `(func $${ctx.ID()} ${params} (result  )\n ${
            this.visit_node(ctx.exp(0), u_ts)[0]
          })\n`,
          u_ts,
        ];
      }
    }

    /*Function definitions without parameters */
    if (
      ctx.DEF() &&
      ctx.L_PAREN() &&
      ctx.ID() &&
      ctx.R_PAREN() &&
      ctx.COLON() &&
      ctx.EQUAL() &&
      ctx.exp(0)
    ) {
      if (ctx.STRING_TYPE()) {
        const new_ts: type_env = new Map([
          ...ts,
          [ctx.ID().getText(), ["String"]],
        ]);
        return [
          `(func $${ctx.ID().getText()} (result i32 i32)\n ${
            this.visit_node(ctx.exp(0), new_ts)[0]
          })\n`,
          new_ts,
        ];
      }
      if (ctx.INT() && ctx.L_SQUARE_PAREN() && ctx.R_SQUARE_PAREN()) {
        const new_ts: type_env = new Map([
          ...ts,
          [ctx.ID().getText(), ["Int[]"]],
        ]);
        return [
          `(func $${ctx.ID().getText()} (result i32)\n ${
            this.visit_node(ctx.exp(0), new_ts)[0]
          })\n`,
          new_ts,
        ];
      }
      if (ctx.INT()) {
        const new_ts: type_env = new Map([
          ...ts,
          [ctx.ID().getText(), ["Int"]],
        ]);
        return [
          `(func $${ctx.ID().getText()} (result i32)\n ${
            this.visit_node(ctx.exp(0), new_ts)[0]
          })\n`,
          new_ts,
        ];
      }
      if (ctx.DOUBLE() && ctx.L_SQUARE_PAREN() && ctx.R_SQUARE_PAREN()) {
        const new_ts: type_env = new Map([
          ...ts,
          [ctx.ID().getText(), ["Double[]"]],
        ]);
        return [
          `(func $${ctx.ID().getText()} (result f32)\n ${
            this.visit_node(ctx.exp(0), new_ts)[0]
          })\n`,
          new_ts,
        ];
      }
      if (ctx.DOUBLE()) {
        const new_ts: type_env = new Map([
          ...ts,
          [ctx.ID().getText(), ["Double"]],
        ]);
        return [
          `(func $${ctx.ID().getText()} (result f32)\n ${
            this.visit_node(ctx.exp(0), new_ts)[0]
          })\n`,
          new_ts,
        ];
      }
      if (ctx.VOID()) {
        const new_ts: type_env = new Map([
          ...ts,
          [ctx.ID().getText(), ["Void"]],
        ]);
        return [
          `(func $${ctx.ID().getText()} (result  )\n ${
            this.visit_node(ctx.exp(0), new_ts)[0]
          })\n`,
          new_ts,
        ];
      }
    }
    throw Error("Cannot Recognise Definiton Expression");
  }

  /**
   * Visits an argument node based in the abstract syntax tree and generates output depending on the expression based on the pareser grammar rule 'Arg'.
   * @param {ArgContext} ctx - The context object that the function visits. It provides access to its children nodes and properties.
   * @param {type_env} ts - The type environment used for variable types aso function parameters and return types. It maps variables identifiers to their types
   * and functions to a list of its return type with parameter types
   * @returns {[string,type_env]} A tuple containing the generated code and the typing environment respectively
   */
  visitArg(ctx: ArgContext, ts: type_env): [string, type_env] {
    if (
      ctx.ID() &&
      ctx.COLON() &&
      ctx.INT() &&
      ctx.L_SQUARE_PAREN() &&
      ctx.R_SQUARE_PAREN()
    ) {
      const new_ts: type_env = new Map([...ts, [ctx.ID().getText(), "Int[]"]]);
      return [`(param $${ctx.ID().getText() + "_o"} i32)`, new_ts];
    }
    if (ctx.ID() && ctx.COLON() && ctx.INT()) {
      const new_ts: type_env = new Map([...ts, [ctx.ID().getText(), "Int"]]);
      return [`(param $${ctx.ID().getText()} i32) `, new_ts];
    }
    if (ctx.ID() && ctx.COLON() && ctx.DOUBLE()) {
      const new_ts: type_env = new Map([...ts, [ctx.ID().getText(), "Double"]]);
      return [`(param $${ctx.ID().getText()} f32)`, new_ts];
    }
    if (ctx.ID() && ctx.COLON() && ctx.STRING_TYPE()) {
      const new_ts: type_env = new Map([...ts, [ctx.ID().getText(), "String"]]);
      return [
        `(param $${ctx.ID().getText() + "_o"} i32) (param $${
          ctx.ID().getText() + "_l"
        } i32)`,
        new_ts,
      ];
    }
    throw Error("Cannot Recognise Argument Expression");
  }

  /**
   * Starting visit node for the program following parser grammar rules 'Prog'.
   * @param {ProgContext} ctx - The context object that the function visits. It provides access to its children nodes and properties.
   * @param {type_env} ts - The type environment used for variable types aso function parameters and return types. It maps variables identifiers to their types
   * and functions to a list of its return type with parameter types
   * @returns {[string,type_env]} A tuple containing the generated code and the typing environment respectively
   */
  visitProg(ctx: ProgContext, ts: type_env): [string, type_env] {
    if (ctx.defn() && ctx.SEMI_COLON() && ctx.prog()) {
      const [code, new_ts] = this.visit_node(ctx.defn(), ts);
      return [`${code} ${this.visit_node(ctx.prog(), new_ts)[0]}`, new_ts];
    }
    if (ctx.exp_list()) {
      return [
        '(func (export "main") (result i32)\n' +
          this.array_assignments +
          this.visit_node(ctx.exp(0), ts)[0] +
          "\ni32.const 0\nreturn)\n",
        ts,
      ];
    }
    if (ctx.block()) {
      return [`(${this.visit_node(ctx.block(), ts)[0]})`, ts];
    }
    throw Error("Cannot Recognise Program Expression");
  }
  /**
   * Generates code for abstract syntax tree from the root node of a program.
   * @param program - The root of the programt to generate code for.
   * @param initalTypeEnvironment - Initial typing environment where predefined functions are added
   * @returns {string} - A string containing generated code
   */
  compile(program: ProgContext, initalTypeEnvironment: type_env): string {
    const body: string = this.visit_node(program, initalTypeEnvironment)[0];
    return this.code_start + body + this.code_end;
  }
}
