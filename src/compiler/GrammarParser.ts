// Generated from Grammar.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
  ATN,
  ATNDeserializer,
  DecisionState,
  DFA,
  FailedPredicateException,
  RecognitionException,
  Parser,
  ParserATNSimulator,
  ParserRuleContext,
  PredictionContextCache,
  TerminalNode,
  Token,
  TokenStream,
} from "antlr4";
import GrammarListener from "./GrammarListener";
import GrammarVisitor from "./GrammarVisitor";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class GrammarParser extends Parser {
  public static readonly T_SKIP = 1;
  public static readonly IF = 2;
  public static readonly THEN = 3;
  public static readonly ELSE = 4;
  public static readonly WHILE = 5;
  public static readonly DO = 6;
  public static readonly DEF = 7;
  public static readonly VAL = 8;
  public static readonly INT = 9;
  public static readonly DOUBLE = 10;
  public static readonly STRING_TYPE = 11;
  public static readonly VOID = 12;
  public static readonly NUMBER = 13;
  public static readonly DECIMAL_NUMBER = 14;
  public static readonly ID = 15;
  public static readonly GLOBAL_ID = 16;
  public static readonly STRING = 17;
  public static readonly ADD = 18;
  public static readonly SUB = 19;
  public static readonly MULT = 20;
  public static readonly DIV = 21;
  public static readonly MOD = 22;
  public static readonly MORE_THAN = 23;
  public static readonly LESS_THAN = 24;
  public static readonly MORE_THAN_EQUAL = 25;
  public static readonly LESS_THAN_EQUAL = 26;
  public static readonly EQUAL_TO = 27;
  public static readonly NOT_EQUAL_TO = 28;
  public static readonly EQUAL = 29;
  public static readonly AND_OP = 30;
  public static readonly OR_OP = 31;
  public static readonly L_CURLY_PAREN = 32;
  public static readonly R_CURLY_PAREN = 33;
  public static readonly L_SQUARE_PAREN = 34;
  public static readonly R_SQUARE_PAREN = 35;
  public static readonly L_PAREN = 36;
  public static readonly R_PAREN = 37;
  public static readonly SEMI_COLON = 38;
  public static readonly COMMA = 39;
  public static readonly COLON = 40;
  public static readonly WHITESPACE = 41;
  public static override readonly EOF = Token.EOF;
  public static readonly RULE_exp = 0;
  public static readonly RULE_m = 1;
  public static readonly RULE_t = 2;
  public static readonly RULE_f = 3;
  public static readonly RULE_bexp = 4;
  public static readonly RULE_a = 5;
  public static readonly RULE_ta = 6;
  public static readonly RULE_defn = 7;
  public static readonly RULE_prog = 8;
  public static readonly RULE_block = 9;
  public static readonly RULE_arg = 10;
  public static readonly literalNames: (string | null)[] = [
    null,
    "'skip'",
    "'if'",
    "'then'",
    "'else'",
    "'while'",
    "'do'",
    "'def'",
    "'val'",
    "'Int'",
    "'Double'",
    "'String'",
    "'Void'",
    null,
    null,
    null,
    null,
    null,
    "'+'",
    "'-'",
    "'*'",
    "'/'",
    "'%'",
    "'>'",
    "'<'",
    "'>='",
    "'<='",
    "'=='",
    "'!='",
    "'='",
    "'&&'",
    "'||'",
    "'{'",
    "'}'",
    "'['",
    "']'",
    "'('",
    "')'",
    "';'",
    "','",
    "':'",
  ];
  public static readonly symbolicNames: (string | null)[] = [
    null,
    "T_SKIP",
    "IF",
    "THEN",
    "ELSE",
    "WHILE",
    "DO",
    "DEF",
    "VAL",
    "INT",
    "DOUBLE",
    "STRING_TYPE",
    "VOID",
    "NUMBER",
    "DECIMAL_NUMBER",
    "ID",
    "GLOBAL_ID",
    "STRING",
    "ADD",
    "SUB",
    "MULT",
    "DIV",
    "MOD",
    "MORE_THAN",
    "LESS_THAN",
    "MORE_THAN_EQUAL",
    "LESS_THAN_EQUAL",
    "EQUAL_TO",
    "NOT_EQUAL_TO",
    "EQUAL",
    "AND_OP",
    "OR_OP",
    "L_CURLY_PAREN",
    "R_CURLY_PAREN",
    "L_SQUARE_PAREN",
    "R_SQUARE_PAREN",
    "L_PAREN",
    "R_PAREN",
    "SEMI_COLON",
    "COMMA",
    "COLON",
    "WHITESPACE",
  ];
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    "exp",
    "m",
    "t",
    "f",
    "bexp",
    "a",
    "ta",
    "defn",
    "prog",
    "block",
    "arg",
  ];
  public get grammarFileName(): string {
    return "Grammar.g4";
  }
  public get literalNames(): (string | null)[] {
    return GrammarParser.literalNames;
  }
  public get symbolicNames(): (string | null)[] {
    return GrammarParser.symbolicNames;
  }
  public get ruleNames(): string[] {
    return GrammarParser.ruleNames;
  }
  public get serializedATN(): number[] {
    return GrammarParser._serializedATN;
  }

  protected createFailedPredicateException(
    predicate?: string,
    message?: string
  ): FailedPredicateException {
    return new FailedPredicateException(this, predicate, message);
  }

  constructor(input: TokenStream) {
    super(input);
    this._interp = new ParserATNSimulator(
      this,
      GrammarParser._ATN,
      GrammarParser.DecisionsToDFA,
      new PredictionContextCache()
    );
  }
  // @RuleVersion(0)
  public exp(): ExpContext {
    let localctx: ExpContext = new ExpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, GrammarParser.RULE_exp);
    try {
      this.state = 38;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 0, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 22;
            this.match(GrammarParser.T_SKIP);
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 23;
            this.match(GrammarParser.T_SKIP);
            this.state = 24;
            this.match(GrammarParser.L_PAREN);
            this.state = 25;
            this.match(GrammarParser.R_PAREN);
          }
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 26;
            this.match(GrammarParser.IF);
            this.state = 27;
            this.bexp();
            this.state = 28;
            this.match(GrammarParser.THEN);
            this.state = 29;
            this.exp();
            this.state = 30;
            this.match(GrammarParser.ELSE);
            this.state = 31;
            this.exp();
          }
          break;
        case 4:
          this.enterOuterAlt(localctx, 4);
          {
            this.state = 33;
            this.m();
            this.state = 34;
            this.match(GrammarParser.SEMI_COLON);
            this.state = 35;
            this.exp();
          }
          break;
        case 5:
          this.enterOuterAlt(localctx, 5);
          {
            this.state = 37;
            this.m();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public m(): MContext {
    let localctx: MContext = new MContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, GrammarParser.RULE_m);
    let _la: number;
    try {
      this.state = 45;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 1, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 40;
            this.t();
            this.state = 41;
            _la = this._input.LA(1);
            if (!(_la === 18 || _la === 19)) {
              this._errHandler.recoverInline(this);
            } else {
              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 42;
            this.exp();
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 44;
            this.t();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public t(): TContext {
    let localctx: TContext = new TContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, GrammarParser.RULE_t);
    let _la: number;
    try {
      this.state = 52;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 2, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 47;
            this.f();
            this.state = 48;
            _la = this._input.LA(1);
            if (!((_la & ~0x1f) === 0 && ((1 << _la) & 7340032) !== 0)) {
              this._errHandler.recoverInline(this);
            } else {
              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 49;
            this.t();
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 51;
            this.f();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public f(): FContext {
    let localctx: FContext = new FContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, GrammarParser.RULE_f);
    let _la: number;
    try {
      this.state = 100;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 4, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 54;
            this.match(GrammarParser.L_PAREN);
            this.state = 55;
            this.exp();
            this.state = 56;
            this.match(GrammarParser.R_PAREN);
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 58;
            this.match(GrammarParser.L_CURLY_PAREN);
            this.state = 59;
            this.exp();
            this.state = 60;
            this.match(GrammarParser.R_CURLY_PAREN);
          }
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 62;
            this.match(GrammarParser.ID);
            this.state = 63;
            this.match(GrammarParser.L_PAREN);
            this.state = 64;
            this.exp();
            this.state = 69;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 39) {
              {
                {
                  this.state = 65;
                  this.match(GrammarParser.COMMA);
                  this.state = 66;
                  this.exp();
                }
              }
              this.state = 71;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 72;
            this.match(GrammarParser.R_PAREN);
          }
          break;
        case 4:
          this.enterOuterAlt(localctx, 4);
          {
            this.state = 74;
            this.match(GrammarParser.ID);
            this.state = 75;
            this.match(GrammarParser.L_PAREN);
            this.state = 76;
            this.match(GrammarParser.R_PAREN);
          }
          break;
        case 5:
          this.enterOuterAlt(localctx, 5);
          {
            this.state = 77;
            this.match(GrammarParser.ID);
            this.state = 78;
            this.match(GrammarParser.L_SQUARE_PAREN);
            this.state = 79;
            this.exp();
            this.state = 80;
            this.match(GrammarParser.R_SQUARE_PAREN);
          }
          break;
        case 6:
          this.enterOuterAlt(localctx, 6);
          {
            this.state = 82;
            this.match(GrammarParser.ID);
          }
          break;
        case 7:
          this.enterOuterAlt(localctx, 7);
          {
            this.state = 83;
            this.match(GrammarParser.GLOBAL_ID);
            this.state = 84;
            this.match(GrammarParser.L_SQUARE_PAREN);
            this.state = 85;
            this.exp();
            this.state = 86;
            this.match(GrammarParser.R_SQUARE_PAREN);
          }
          break;
        case 8:
          this.enterOuterAlt(localctx, 8);
          {
            this.state = 88;
            this.match(GrammarParser.GLOBAL_ID);
          }
          break;
        case 9:
          this.enterOuterAlt(localctx, 9);
          {
            this.state = 89;
            this.match(GrammarParser.SUB);
            this.state = 90;
            this.match(GrammarParser.NUMBER);
          }
          break;
        case 10:
          this.enterOuterAlt(localctx, 10);
          {
            this.state = 91;
            this.match(GrammarParser.ADD);
            this.state = 92;
            this.match(GrammarParser.NUMBER);
          }
          break;
        case 11:
          this.enterOuterAlt(localctx, 11);
          {
            this.state = 93;
            this.match(GrammarParser.SUB);
            this.state = 94;
            this.match(GrammarParser.DECIMAL_NUMBER);
          }
          break;
        case 12:
          this.enterOuterAlt(localctx, 12);
          {
            this.state = 95;
            this.match(GrammarParser.ADD);
            this.state = 96;
            this.match(GrammarParser.DECIMAL_NUMBER);
          }
          break;
        case 13:
          this.enterOuterAlt(localctx, 13);
          {
            this.state = 97;
            this.match(GrammarParser.NUMBER);
          }
          break;
        case 14:
          this.enterOuterAlt(localctx, 14);
          {
            this.state = 98;
            this.match(GrammarParser.DECIMAL_NUMBER);
          }
          break;
        case 15:
          this.enterOuterAlt(localctx, 15);
          {
            this.state = 99;
            this.match(GrammarParser.STRING);
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public bexp(): BexpContext {
    let localctx: BexpContext = new BexpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, GrammarParser.RULE_bexp);
    try {
      this.state = 107;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 5, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 102;
            this.a();
            this.state = 103;
            this.match(GrammarParser.OR_OP);
            this.state = 104;
            this.bexp();
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 106;
            this.a();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public a(): AContext {
    let localctx: AContext = new AContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, GrammarParser.RULE_a);
    try {
      this.state = 114;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 6, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 109;
            this.ta();
            this.state = 110;
            this.match(GrammarParser.AND_OP);
            this.state = 111;
            this.a();
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 113;
            this.ta();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public ta(): TaContext {
    let localctx: TaContext = new TaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, GrammarParser.RULE_ta);
    let _la: number;
    try {
      this.state = 124;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 7, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 116;
            this.match(GrammarParser.L_PAREN);
            this.state = 117;
            this.bexp();
            this.state = 118;
            this.match(GrammarParser.R_PAREN);
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 120;
            this.exp();
            this.state = 121;
            _la = this._input.LA(1);
            if (!((_la & ~0x1f) === 0 && ((1 << _la) & 528482304) !== 0)) {
              this._errHandler.recoverInline(this);
            } else {
              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 122;
            this.exp();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public defn(): DefnContext {
    let localctx: DefnContext = new DefnContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, GrammarParser.RULE_defn);
    let _la: number;
    try {
      this.state = 195;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 12, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 126;
            this.match(GrammarParser.DEF);
            this.state = 127;
            this.match(GrammarParser.ID);
            this.state = 128;
            this.match(GrammarParser.L_PAREN);
            this.state = 129;
            this.arg();
            this.state = 134;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 39) {
              {
                {
                  this.state = 130;
                  this.match(GrammarParser.COMMA);
                  this.state = 131;
                  this.arg();
                }
              }
              this.state = 136;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 137;
            this.match(GrammarParser.R_PAREN);
            this.state = 138;
            this.match(GrammarParser.COLON);
            this.state = 146;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 9, this._ctx)) {
              case 1:
                {
                  this.state = 139;
                  this.match(GrammarParser.INT);
                }
                break;
              case 2:
                {
                  this.state = 140;
                  this.match(GrammarParser.DOUBLE);
                }
                break;
              case 3:
                {
                  this.state = 141;
                  this.match(GrammarParser.STRING_TYPE);
                }
                break;
              case 4:
                {
                  this.state = 142;
                  this.match(GrammarParser.VOID);
                }
                break;
              case 5:
                {
                  {
                    this.state = 143;
                    _la = this._input.LA(1);
                    if (!(_la === 9 || _la === 10)) {
                      this._errHandler.recoverInline(this);
                    } else {
                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 144;
                    this.match(GrammarParser.L_SQUARE_PAREN);
                    this.state = 145;
                    this.match(GrammarParser.R_SQUARE_PAREN);
                  }
                }
                break;
            }
            this.state = 148;
            this.match(GrammarParser.EQUAL);
            this.state = 149;
            this.exp();
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 151;
            this.match(GrammarParser.DEF);
            this.state = 152;
            this.match(GrammarParser.ID);
            this.state = 153;
            this.match(GrammarParser.L_PAREN);
            this.state = 154;
            this.match(GrammarParser.R_PAREN);
            this.state = 155;
            this.match(GrammarParser.COLON);
            this.state = 163;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 10, this._ctx)) {
              case 1:
                {
                  this.state = 156;
                  this.match(GrammarParser.INT);
                }
                break;
              case 2:
                {
                  this.state = 157;
                  this.match(GrammarParser.DOUBLE);
                }
                break;
              case 3:
                {
                  this.state = 158;
                  this.match(GrammarParser.STRING_TYPE);
                }
                break;
              case 4:
                {
                  this.state = 159;
                  this.match(GrammarParser.VOID);
                }
                break;
              case 5:
                {
                  {
                    this.state = 160;
                    _la = this._input.LA(1);
                    if (!(_la === 9 || _la === 10)) {
                      this._errHandler.recoverInline(this);
                    } else {
                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 161;
                    this.match(GrammarParser.L_SQUARE_PAREN);
                    this.state = 162;
                    this.match(GrammarParser.R_SQUARE_PAREN);
                  }
                }
                break;
            }
            this.state = 165;
            this.match(GrammarParser.EQUAL);
            this.state = 166;
            this.exp();
          }
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 167;
            this.match(GrammarParser.VAL);
            this.state = 168;
            this.match(GrammarParser.GLOBAL_ID);
            this.state = 169;
            this.match(GrammarParser.COLON);
            this.state = 170;
            _la = this._input.LA(1);
            if (!((_la & ~0x1f) === 0 && ((1 << _la) & 3584) !== 0)) {
              this._errHandler.recoverInline(this);
            } else {
              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 171;
            this.match(GrammarParser.EQUAL);
            this.state = 179;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 11, this._ctx)) {
              case 1:
                {
                  this.state = 172;
                  this.match(GrammarParser.NUMBER);
                }
                break;
              case 2:
                {
                  this.state = 173;
                  this.match(GrammarParser.DECIMAL_NUMBER);
                }
                break;
              case 3:
                {
                  this.state = 174;
                  this.match(GrammarParser.SUB);
                  this.state = 175;
                  this.match(GrammarParser.DECIMAL_NUMBER);
                }
                break;
              case 4:
                {
                  this.state = 176;
                  this.match(GrammarParser.SUB);
                  this.state = 177;
                  this.match(GrammarParser.NUMBER);
                }
                break;
              case 5:
                {
                  this.state = 178;
                  this.match(GrammarParser.STRING);
                }
                break;
            }
          }
          break;
        case 4:
          this.enterOuterAlt(localctx, 4);
          {
            this.state = 181;
            this.match(GrammarParser.VAL);
            this.state = 182;
            this.match(GrammarParser.GLOBAL_ID);
            this.state = 183;
            this.match(GrammarParser.L_SQUARE_PAREN);
            this.state = 184;
            this.match(GrammarParser.NUMBER);
            this.state = 185;
            this.match(GrammarParser.R_SQUARE_PAREN);
            this.state = 186;
            this.match(GrammarParser.COLON);
            this.state = 187;
            _la = this._input.LA(1);
            if (!(_la === 9 || _la === 10)) {
              this._errHandler.recoverInline(this);
            } else {
              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
          break;
        case 5:
          this.enterOuterAlt(localctx, 5);
          {
            this.state = 188;
            this.match(GrammarParser.GLOBAL_ID);
            this.state = 189;
            this.match(GrammarParser.L_SQUARE_PAREN);
            this.state = 190;
            this.exp();
            this.state = 191;
            this.match(GrammarParser.R_SQUARE_PAREN);
            this.state = 192;
            this.match(GrammarParser.EQUAL);
            this.state = 193;
            this.exp();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public prog(): ProgContext {
    let localctx: ProgContext = new ProgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, GrammarParser.RULE_prog);
    let _la: number;
    try {
      this.state = 207;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 14, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 197;
            this.defn();
            this.state = 198;
            this.match(GrammarParser.SEMI_COLON);
            this.state = 199;
            this.prog();
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 202;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
              {
                {
                  this.state = 201;
                  this.exp();
                }
              }
              this.state = 204;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            } while (
              ((_la & ~0x1f) === 0 && ((1 << _la) & 1040390) !== 0) ||
              _la === 32 ||
              _la === 36
            );
          }
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 206;
            this.block();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public block(): BlockContext {
    let localctx: BlockContext = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, GrammarParser.RULE_block);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 209;
        this.match(GrammarParser.L_CURLY_PAREN);
        this.state = 210;
        this.prog();
        this.state = 211;
        this.match(GrammarParser.R_CURLY_PAREN);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public arg(): ArgContext {
    let localctx: ArgContext = new ArgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, GrammarParser.RULE_arg);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 213;
        this.match(GrammarParser.ID);
        this.state = 214;
        this.match(GrammarParser.COLON);
        this.state = 221;
        this._errHandler.sync(this);
        switch (this._interp.adaptivePredict(this._input, 15, this._ctx)) {
          case 1:
            {
              this.state = 215;
              this.match(GrammarParser.INT);
            }
            break;
          case 2:
            {
              this.state = 216;
              this.match(GrammarParser.DOUBLE);
            }
            break;
          case 3:
            {
              this.state = 217;
              this.match(GrammarParser.STRING_TYPE);
            }
            break;
          case 4:
            {
              {
                this.state = 218;
                _la = this._input.LA(1);
                if (!(_la === 9 || _la === 10)) {
                  this._errHandler.recoverInline(this);
                } else {
                  this._errHandler.reportMatch(this);
                  this.consume();
                }
                this.state = 219;
                this.match(GrammarParser.L_SQUARE_PAREN);
                this.state = 220;
                this.match(GrammarParser.R_SQUARE_PAREN);
              }
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  public static readonly _serializedATN: number[] = [
    4, 1, 41, 224, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4,
    2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 1,
    0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
    1, 0, 1, 0, 1, 0, 3, 0, 39, 8, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 46, 8,
    1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 3, 2, 53, 8, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1,
    3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 5, 3, 68, 8, 3, 10, 3,
    12, 3, 71, 9, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3,
    1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1,
    3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 101, 8, 3, 1, 4, 1, 4, 1, 4, 1, 4, 1,
    4, 3, 4, 108, 8, 4, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 3, 5, 115, 8, 5, 1, 6, 1,
    6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 3, 6, 125, 8, 6, 1, 7, 1, 7, 1, 7, 1,
    7, 1, 7, 1, 7, 5, 7, 133, 8, 7, 10, 7, 12, 7, 136, 9, 7, 1, 7, 1, 7, 1, 7,
    1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 3, 7, 147, 8, 7, 1, 7, 1, 7, 1, 7, 1, 7,
    1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 3, 7, 164,
    8, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1,
    7, 1, 7, 1, 7, 3, 7, 180, 8, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1,
    7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 3, 7, 196, 8, 7, 1, 8, 1, 8, 1, 8, 1,
    8, 1, 8, 4, 8, 203, 8, 8, 11, 8, 12, 8, 204, 1, 8, 3, 8, 208, 8, 8, 1, 9, 1,
    9, 1, 9, 1, 9, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 3,
    10, 222, 8, 10, 1, 10, 0, 0, 11, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 0,
    5, 1, 0, 18, 19, 1, 0, 20, 22, 1, 0, 23, 28, 1, 0, 9, 10, 1, 0, 9, 11, 259,
    0, 38, 1, 0, 0, 0, 2, 45, 1, 0, 0, 0, 4, 52, 1, 0, 0, 0, 6, 100, 1, 0, 0, 0,
    8, 107, 1, 0, 0, 0, 10, 114, 1, 0, 0, 0, 12, 124, 1, 0, 0, 0, 14, 195, 1, 0,
    0, 0, 16, 207, 1, 0, 0, 0, 18, 209, 1, 0, 0, 0, 20, 213, 1, 0, 0, 0, 22, 39,
    5, 1, 0, 0, 23, 24, 5, 1, 0, 0, 24, 25, 5, 36, 0, 0, 25, 39, 5, 37, 0, 0,
    26, 27, 5, 2, 0, 0, 27, 28, 3, 8, 4, 0, 28, 29, 5, 3, 0, 0, 29, 30, 3, 0, 0,
    0, 30, 31, 5, 4, 0, 0, 31, 32, 3, 0, 0, 0, 32, 39, 1, 0, 0, 0, 33, 34, 3, 2,
    1, 0, 34, 35, 5, 38, 0, 0, 35, 36, 3, 0, 0, 0, 36, 39, 1, 0, 0, 0, 37, 39,
    3, 2, 1, 0, 38, 22, 1, 0, 0, 0, 38, 23, 1, 0, 0, 0, 38, 26, 1, 0, 0, 0, 38,
    33, 1, 0, 0, 0, 38, 37, 1, 0, 0, 0, 39, 1, 1, 0, 0, 0, 40, 41, 3, 4, 2, 0,
    41, 42, 7, 0, 0, 0, 42, 43, 3, 0, 0, 0, 43, 46, 1, 0, 0, 0, 44, 46, 3, 4, 2,
    0, 45, 40, 1, 0, 0, 0, 45, 44, 1, 0, 0, 0, 46, 3, 1, 0, 0, 0, 47, 48, 3, 6,
    3, 0, 48, 49, 7, 1, 0, 0, 49, 50, 3, 4, 2, 0, 50, 53, 1, 0, 0, 0, 51, 53, 3,
    6, 3, 0, 52, 47, 1, 0, 0, 0, 52, 51, 1, 0, 0, 0, 53, 5, 1, 0, 0, 0, 54, 55,
    5, 36, 0, 0, 55, 56, 3, 0, 0, 0, 56, 57, 5, 37, 0, 0, 57, 101, 1, 0, 0, 0,
    58, 59, 5, 32, 0, 0, 59, 60, 3, 0, 0, 0, 60, 61, 5, 33, 0, 0, 61, 101, 1, 0,
    0, 0, 62, 63, 5, 15, 0, 0, 63, 64, 5, 36, 0, 0, 64, 69, 3, 0, 0, 0, 65, 66,
    5, 39, 0, 0, 66, 68, 3, 0, 0, 0, 67, 65, 1, 0, 0, 0, 68, 71, 1, 0, 0, 0, 69,
    67, 1, 0, 0, 0, 69, 70, 1, 0, 0, 0, 70, 72, 1, 0, 0, 0, 71, 69, 1, 0, 0, 0,
    72, 73, 5, 37, 0, 0, 73, 101, 1, 0, 0, 0, 74, 75, 5, 15, 0, 0, 75, 76, 5,
    36, 0, 0, 76, 101, 5, 37, 0, 0, 77, 78, 5, 15, 0, 0, 78, 79, 5, 34, 0, 0,
    79, 80, 3, 0, 0, 0, 80, 81, 5, 35, 0, 0, 81, 101, 1, 0, 0, 0, 82, 101, 5,
    15, 0, 0, 83, 84, 5, 16, 0, 0, 84, 85, 5, 34, 0, 0, 85, 86, 3, 0, 0, 0, 86,
    87, 5, 35, 0, 0, 87, 101, 1, 0, 0, 0, 88, 101, 5, 16, 0, 0, 89, 90, 5, 19,
    0, 0, 90, 101, 5, 13, 0, 0, 91, 92, 5, 18, 0, 0, 92, 101, 5, 13, 0, 0, 93,
    94, 5, 19, 0, 0, 94, 101, 5, 14, 0, 0, 95, 96, 5, 18, 0, 0, 96, 101, 5, 14,
    0, 0, 97, 101, 5, 13, 0, 0, 98, 101, 5, 14, 0, 0, 99, 101, 5, 17, 0, 0, 100,
    54, 1, 0, 0, 0, 100, 58, 1, 0, 0, 0, 100, 62, 1, 0, 0, 0, 100, 74, 1, 0, 0,
    0, 100, 77, 1, 0, 0, 0, 100, 82, 1, 0, 0, 0, 100, 83, 1, 0, 0, 0, 100, 88,
    1, 0, 0, 0, 100, 89, 1, 0, 0, 0, 100, 91, 1, 0, 0, 0, 100, 93, 1, 0, 0, 0,
    100, 95, 1, 0, 0, 0, 100, 97, 1, 0, 0, 0, 100, 98, 1, 0, 0, 0, 100, 99, 1,
    0, 0, 0, 101, 7, 1, 0, 0, 0, 102, 103, 3, 10, 5, 0, 103, 104, 5, 31, 0, 0,
    104, 105, 3, 8, 4, 0, 105, 108, 1, 0, 0, 0, 106, 108, 3, 10, 5, 0, 107, 102,
    1, 0, 0, 0, 107, 106, 1, 0, 0, 0, 108, 9, 1, 0, 0, 0, 109, 110, 3, 12, 6, 0,
    110, 111, 5, 30, 0, 0, 111, 112, 3, 10, 5, 0, 112, 115, 1, 0, 0, 0, 113,
    115, 3, 12, 6, 0, 114, 109, 1, 0, 0, 0, 114, 113, 1, 0, 0, 0, 115, 11, 1, 0,
    0, 0, 116, 117, 5, 36, 0, 0, 117, 118, 3, 8, 4, 0, 118, 119, 5, 37, 0, 0,
    119, 125, 1, 0, 0, 0, 120, 121, 3, 0, 0, 0, 121, 122, 7, 2, 0, 0, 122, 123,
    3, 0, 0, 0, 123, 125, 1, 0, 0, 0, 124, 116, 1, 0, 0, 0, 124, 120, 1, 0, 0,
    0, 125, 13, 1, 0, 0, 0, 126, 127, 5, 7, 0, 0, 127, 128, 5, 15, 0, 0, 128,
    129, 5, 36, 0, 0, 129, 134, 3, 20, 10, 0, 130, 131, 5, 39, 0, 0, 131, 133,
    3, 20, 10, 0, 132, 130, 1, 0, 0, 0, 133, 136, 1, 0, 0, 0, 134, 132, 1, 0, 0,
    0, 134, 135, 1, 0, 0, 0, 135, 137, 1, 0, 0, 0, 136, 134, 1, 0, 0, 0, 137,
    138, 5, 37, 0, 0, 138, 146, 5, 40, 0, 0, 139, 147, 5, 9, 0, 0, 140, 147, 5,
    10, 0, 0, 141, 147, 5, 11, 0, 0, 142, 147, 5, 12, 0, 0, 143, 144, 7, 3, 0,
    0, 144, 145, 5, 34, 0, 0, 145, 147, 5, 35, 0, 0, 146, 139, 1, 0, 0, 0, 146,
    140, 1, 0, 0, 0, 146, 141, 1, 0, 0, 0, 146, 142, 1, 0, 0, 0, 146, 143, 1, 0,
    0, 0, 147, 148, 1, 0, 0, 0, 148, 149, 5, 29, 0, 0, 149, 150, 3, 0, 0, 0,
    150, 196, 1, 0, 0, 0, 151, 152, 5, 7, 0, 0, 152, 153, 5, 15, 0, 0, 153, 154,
    5, 36, 0, 0, 154, 155, 5, 37, 0, 0, 155, 163, 5, 40, 0, 0, 156, 164, 5, 9,
    0, 0, 157, 164, 5, 10, 0, 0, 158, 164, 5, 11, 0, 0, 159, 164, 5, 12, 0, 0,
    160, 161, 7, 3, 0, 0, 161, 162, 5, 34, 0, 0, 162, 164, 5, 35, 0, 0, 163,
    156, 1, 0, 0, 0, 163, 157, 1, 0, 0, 0, 163, 158, 1, 0, 0, 0, 163, 159, 1, 0,
    0, 0, 163, 160, 1, 0, 0, 0, 164, 165, 1, 0, 0, 0, 165, 166, 5, 29, 0, 0,
    166, 196, 3, 0, 0, 0, 167, 168, 5, 8, 0, 0, 168, 169, 5, 16, 0, 0, 169, 170,
    5, 40, 0, 0, 170, 171, 7, 4, 0, 0, 171, 179, 5, 29, 0, 0, 172, 180, 5, 13,
    0, 0, 173, 180, 5, 14, 0, 0, 174, 175, 5, 19, 0, 0, 175, 180, 5, 14, 0, 0,
    176, 177, 5, 19, 0, 0, 177, 180, 5, 13, 0, 0, 178, 180, 5, 17, 0, 0, 179,
    172, 1, 0, 0, 0, 179, 173, 1, 0, 0, 0, 179, 174, 1, 0, 0, 0, 179, 176, 1, 0,
    0, 0, 179, 178, 1, 0, 0, 0, 180, 196, 1, 0, 0, 0, 181, 182, 5, 8, 0, 0, 182,
    183, 5, 16, 0, 0, 183, 184, 5, 34, 0, 0, 184, 185, 5, 13, 0, 0, 185, 186, 5,
    35, 0, 0, 186, 187, 5, 40, 0, 0, 187, 196, 7, 3, 0, 0, 188, 189, 5, 16, 0,
    0, 189, 190, 5, 34, 0, 0, 190, 191, 3, 0, 0, 0, 191, 192, 5, 35, 0, 0, 192,
    193, 5, 29, 0, 0, 193, 194, 3, 0, 0, 0, 194, 196, 1, 0, 0, 0, 195, 126, 1,
    0, 0, 0, 195, 151, 1, 0, 0, 0, 195, 167, 1, 0, 0, 0, 195, 181, 1, 0, 0, 0,
    195, 188, 1, 0, 0, 0, 196, 15, 1, 0, 0, 0, 197, 198, 3, 14, 7, 0, 198, 199,
    5, 38, 0, 0, 199, 200, 3, 16, 8, 0, 200, 208, 1, 0, 0, 0, 201, 203, 3, 0, 0,
    0, 202, 201, 1, 0, 0, 0, 203, 204, 1, 0, 0, 0, 204, 202, 1, 0, 0, 0, 204,
    205, 1, 0, 0, 0, 205, 208, 1, 0, 0, 0, 206, 208, 3, 18, 9, 0, 207, 197, 1,
    0, 0, 0, 207, 202, 1, 0, 0, 0, 207, 206, 1, 0, 0, 0, 208, 17, 1, 0, 0, 0,
    209, 210, 5, 32, 0, 0, 210, 211, 3, 16, 8, 0, 211, 212, 5, 33, 0, 0, 212,
    19, 1, 0, 0, 0, 213, 214, 5, 15, 0, 0, 214, 221, 5, 40, 0, 0, 215, 222, 5,
    9, 0, 0, 216, 222, 5, 10, 0, 0, 217, 222, 5, 11, 0, 0, 218, 219, 7, 3, 0, 0,
    219, 220, 5, 34, 0, 0, 220, 222, 5, 35, 0, 0, 221, 215, 1, 0, 0, 0, 221,
    216, 1, 0, 0, 0, 221, 217, 1, 0, 0, 0, 221, 218, 1, 0, 0, 0, 222, 21, 1, 0,
    0, 0, 16, 38, 45, 52, 69, 100, 107, 114, 124, 134, 146, 163, 179, 195, 204,
    207, 221,
  ];

  private static __ATN: ATN;
  public static get _ATN(): ATN {
    if (!GrammarParser.__ATN) {
      GrammarParser.__ATN = new ATNDeserializer().deserialize(
        GrammarParser._serializedATN
      );
    }

    return GrammarParser.__ATN;
  }

  static DecisionsToDFA = GrammarParser._ATN.decisionToState.map(
    (ds: DecisionState, index: number) => new DFA(ds, index)
  );
}

export class ExpContext extends ParserRuleContext {
  constructor(
    parser?: GrammarParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public T_SKIP(): TerminalNode {
    return this.getToken(GrammarParser.T_SKIP, 0);
  }
  public L_PAREN(): TerminalNode {
    return this.getToken(GrammarParser.L_PAREN, 0);
  }
  public R_PAREN(): TerminalNode {
    return this.getToken(GrammarParser.R_PAREN, 0);
  }
  public IF(): TerminalNode {
    return this.getToken(GrammarParser.IF, 0);
  }
  public bexp(): BexpContext {
    return this.getTypedRuleContext(BexpContext, 0) as BexpContext;
  }
  public THEN(): TerminalNode {
    return this.getToken(GrammarParser.THEN, 0);
  }
  public exp_list(): ExpContext[] {
    return this.getTypedRuleContexts(ExpContext) as ExpContext[];
  }
  public exp(i: number): ExpContext {
    return this.getTypedRuleContext(ExpContext, i) as ExpContext;
  }
  public ELSE(): TerminalNode {
    return this.getToken(GrammarParser.ELSE, 0);
  }
  public m(): MContext {
    return this.getTypedRuleContext(MContext, 0) as MContext;
  }
  public SEMI_COLON(): TerminalNode {
    return this.getToken(GrammarParser.SEMI_COLON, 0);
  }
  public get ruleIndex(): number {
    return GrammarParser.RULE_exp;
  }
  public enterRule(listener: GrammarListener): void {
    if (listener.enterExp) {
      listener.enterExp(this);
    }
  }
  public exitRule(listener: GrammarListener): void {
    if (listener.exitExp) {
      listener.exitExp(this);
    }
  }
  // @Override
  public accept<Result>(visitor: GrammarVisitor<Result>): Result {
    if (visitor.visitExp) {
      return visitor.visitExp(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class MContext extends ParserRuleContext {
  constructor(
    parser?: GrammarParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public t(): TContext {
    return this.getTypedRuleContext(TContext, 0) as TContext;
  }
  public exp(): ExpContext {
    return this.getTypedRuleContext(ExpContext, 0) as ExpContext;
  }
  public ADD(): TerminalNode {
    return this.getToken(GrammarParser.ADD, 0);
  }
  public SUB(): TerminalNode {
    return this.getToken(GrammarParser.SUB, 0);
  }
  public get ruleIndex(): number {
    return GrammarParser.RULE_m;
  }
  public enterRule(listener: GrammarListener): void {
    if (listener.enterM) {
      listener.enterM(this);
    }
  }
  public exitRule(listener: GrammarListener): void {
    if (listener.exitM) {
      listener.exitM(this);
    }
  }
  // @Override
  public accept<Result>(visitor: GrammarVisitor<Result>): Result {
    if (visitor.visitM) {
      return visitor.visitM(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class TContext extends ParserRuleContext {
  constructor(
    parser?: GrammarParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public f(): FContext {
    return this.getTypedRuleContext(FContext, 0) as FContext;
  }
  public t(): TContext {
    return this.getTypedRuleContext(TContext, 0) as TContext;
  }
  public MULT(): TerminalNode {
    return this.getToken(GrammarParser.MULT, 0);
  }
  public DIV(): TerminalNode {
    return this.getToken(GrammarParser.DIV, 0);
  }
  public MOD(): TerminalNode {
    return this.getToken(GrammarParser.MOD, 0);
  }
  public get ruleIndex(): number {
    return GrammarParser.RULE_t;
  }
  public enterRule(listener: GrammarListener): void {
    if (listener.enterT) {
      listener.enterT(this);
    }
  }
  public exitRule(listener: GrammarListener): void {
    if (listener.exitT) {
      listener.exitT(this);
    }
  }
  // @Override
  public accept<Result>(visitor: GrammarVisitor<Result>): Result {
    if (visitor.visitT) {
      return visitor.visitT(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class FContext extends ParserRuleContext {
  constructor(
    parser?: GrammarParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public L_PAREN(): TerminalNode {
    return this.getToken(GrammarParser.L_PAREN, 0);
  }
  public exp_list(): ExpContext[] {
    return this.getTypedRuleContexts(ExpContext) as ExpContext[];
  }
  public exp(i: number): ExpContext {
    return this.getTypedRuleContext(ExpContext, i) as ExpContext;
  }
  public R_PAREN(): TerminalNode {
    return this.getToken(GrammarParser.R_PAREN, 0);
  }
  public L_CURLY_PAREN(): TerminalNode {
    return this.getToken(GrammarParser.L_CURLY_PAREN, 0);
  }
  public R_CURLY_PAREN(): TerminalNode {
    return this.getToken(GrammarParser.R_CURLY_PAREN, 0);
  }
  public ID(): TerminalNode {
    return this.getToken(GrammarParser.ID, 0);
  }
  public COMMA_list(): TerminalNode[] {
    return this.getTokens(GrammarParser.COMMA);
  }
  public COMMA(i: number): TerminalNode {
    return this.getToken(GrammarParser.COMMA, i);
  }
  public L_SQUARE_PAREN(): TerminalNode {
    return this.getToken(GrammarParser.L_SQUARE_PAREN, 0);
  }
  public R_SQUARE_PAREN(): TerminalNode {
    return this.getToken(GrammarParser.R_SQUARE_PAREN, 0);
  }
  public GLOBAL_ID(): TerminalNode {
    return this.getToken(GrammarParser.GLOBAL_ID, 0);
  }
  public SUB(): TerminalNode {
    return this.getToken(GrammarParser.SUB, 0);
  }
  public NUMBER(): TerminalNode {
    return this.getToken(GrammarParser.NUMBER, 0);
  }
  public ADD(): TerminalNode {
    return this.getToken(GrammarParser.ADD, 0);
  }
  public DECIMAL_NUMBER(): TerminalNode {
    return this.getToken(GrammarParser.DECIMAL_NUMBER, 0);
  }
  public STRING(): TerminalNode {
    return this.getToken(GrammarParser.STRING, 0);
  }
  public get ruleIndex(): number {
    return GrammarParser.RULE_f;
  }
  public enterRule(listener: GrammarListener): void {
    if (listener.enterF) {
      listener.enterF(this);
    }
  }
  public exitRule(listener: GrammarListener): void {
    if (listener.exitF) {
      listener.exitF(this);
    }
  }
  // @Override
  public accept<Result>(visitor: GrammarVisitor<Result>): Result {
    if (visitor.visitF) {
      return visitor.visitF(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class BexpContext extends ParserRuleContext {
  constructor(
    parser?: GrammarParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public a(): AContext {
    return this.getTypedRuleContext(AContext, 0) as AContext;
  }
  public OR_OP(): TerminalNode {
    return this.getToken(GrammarParser.OR_OP, 0);
  }
  public bexp(): BexpContext {
    return this.getTypedRuleContext(BexpContext, 0) as BexpContext;
  }
  public get ruleIndex(): number {
    return GrammarParser.RULE_bexp;
  }
  public enterRule(listener: GrammarListener): void {
    if (listener.enterBexp) {
      listener.enterBexp(this);
    }
  }
  public exitRule(listener: GrammarListener): void {
    if (listener.exitBexp) {
      listener.exitBexp(this);
    }
  }
  // @Override
  public accept<Result>(visitor: GrammarVisitor<Result>): Result {
    if (visitor.visitBexp) {
      return visitor.visitBexp(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class AContext extends ParserRuleContext {
  constructor(
    parser?: GrammarParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public ta(): TaContext {
    return this.getTypedRuleContext(TaContext, 0) as TaContext;
  }
  public AND_OP(): TerminalNode {
    return this.getToken(GrammarParser.AND_OP, 0);
  }
  public a(): AContext {
    return this.getTypedRuleContext(AContext, 0) as AContext;
  }
  public get ruleIndex(): number {
    return GrammarParser.RULE_a;
  }
  public enterRule(listener: GrammarListener): void {
    if (listener.enterA) {
      listener.enterA(this);
    }
  }
  public exitRule(listener: GrammarListener): void {
    if (listener.exitA) {
      listener.exitA(this);
    }
  }
  // @Override
  public accept<Result>(visitor: GrammarVisitor<Result>): Result {
    if (visitor.visitA) {
      return visitor.visitA(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class TaContext extends ParserRuleContext {
  constructor(
    parser?: GrammarParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public L_PAREN(): TerminalNode {
    return this.getToken(GrammarParser.L_PAREN, 0);
  }
  public bexp(): BexpContext {
    return this.getTypedRuleContext(BexpContext, 0) as BexpContext;
  }
  public R_PAREN(): TerminalNode {
    return this.getToken(GrammarParser.R_PAREN, 0);
  }
  public exp_list(): ExpContext[] {
    return this.getTypedRuleContexts(ExpContext) as ExpContext[];
  }
  public exp(i: number): ExpContext {
    return this.getTypedRuleContext(ExpContext, i) as ExpContext;
  }
  public EQUAL_TO(): TerminalNode {
    return this.getToken(GrammarParser.EQUAL_TO, 0);
  }
  public NOT_EQUAL_TO(): TerminalNode {
    return this.getToken(GrammarParser.NOT_EQUAL_TO, 0);
  }
  public LESS_THAN(): TerminalNode {
    return this.getToken(GrammarParser.LESS_THAN, 0);
  }
  public MORE_THAN(): TerminalNode {
    return this.getToken(GrammarParser.MORE_THAN, 0);
  }
  public LESS_THAN_EQUAL(): TerminalNode {
    return this.getToken(GrammarParser.LESS_THAN_EQUAL, 0);
  }
  public MORE_THAN_EQUAL(): TerminalNode {
    return this.getToken(GrammarParser.MORE_THAN_EQUAL, 0);
  }
  public get ruleIndex(): number {
    return GrammarParser.RULE_ta;
  }
  public enterRule(listener: GrammarListener): void {
    if (listener.enterTa) {
      listener.enterTa(this);
    }
  }
  public exitRule(listener: GrammarListener): void {
    if (listener.exitTa) {
      listener.exitTa(this);
    }
  }
  // @Override
  public accept<Result>(visitor: GrammarVisitor<Result>): Result {
    if (visitor.visitTa) {
      return visitor.visitTa(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class DefnContext extends ParserRuleContext {
  constructor(
    parser?: GrammarParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public DEF(): TerminalNode {
    return this.getToken(GrammarParser.DEF, 0);
  }
  public ID(): TerminalNode {
    return this.getToken(GrammarParser.ID, 0);
  }
  public L_PAREN(): TerminalNode {
    return this.getToken(GrammarParser.L_PAREN, 0);
  }
  public arg_list(): ArgContext[] {
    return this.getTypedRuleContexts(ArgContext) as ArgContext[];
  }
  public arg(i: number): ArgContext {
    return this.getTypedRuleContext(ArgContext, i) as ArgContext;
  }
  public R_PAREN(): TerminalNode {
    return this.getToken(GrammarParser.R_PAREN, 0);
  }
  public COLON(): TerminalNode {
    return this.getToken(GrammarParser.COLON, 0);
  }
  public EQUAL(): TerminalNode {
    return this.getToken(GrammarParser.EQUAL, 0);
  }
  public exp_list(): ExpContext[] {
    return this.getTypedRuleContexts(ExpContext) as ExpContext[];
  }
  public exp(i: number): ExpContext {
    return this.getTypedRuleContext(ExpContext, i) as ExpContext;
  }
  public INT(): TerminalNode {
    return this.getToken(GrammarParser.INT, 0);
  }
  public DOUBLE(): TerminalNode {
    return this.getToken(GrammarParser.DOUBLE, 0);
  }
  public STRING_TYPE(): TerminalNode {
    return this.getToken(GrammarParser.STRING_TYPE, 0);
  }
  public VOID(): TerminalNode {
    return this.getToken(GrammarParser.VOID, 0);
  }
  public COMMA_list(): TerminalNode[] {
    return this.getTokens(GrammarParser.COMMA);
  }
  public COMMA(i: number): TerminalNode {
    return this.getToken(GrammarParser.COMMA, i);
  }
  public L_SQUARE_PAREN(): TerminalNode {
    return this.getToken(GrammarParser.L_SQUARE_PAREN, 0);
  }
  public R_SQUARE_PAREN(): TerminalNode {
    return this.getToken(GrammarParser.R_SQUARE_PAREN, 0);
  }
  public VAL(): TerminalNode {
    return this.getToken(GrammarParser.VAL, 0);
  }
  public GLOBAL_ID(): TerminalNode {
    return this.getToken(GrammarParser.GLOBAL_ID, 0);
  }
  public NUMBER(): TerminalNode {
    return this.getToken(GrammarParser.NUMBER, 0);
  }
  public DECIMAL_NUMBER(): TerminalNode {
    return this.getToken(GrammarParser.DECIMAL_NUMBER, 0);
  }
  public SUB(): TerminalNode {
    return this.getToken(GrammarParser.SUB, 0);
  }
  public STRING(): TerminalNode {
    return this.getToken(GrammarParser.STRING, 0);
  }
  public get ruleIndex(): number {
    return GrammarParser.RULE_defn;
  }
  public enterRule(listener: GrammarListener): void {
    if (listener.enterDefn) {
      listener.enterDefn(this);
    }
  }
  public exitRule(listener: GrammarListener): void {
    if (listener.exitDefn) {
      listener.exitDefn(this);
    }
  }
  // @Override
  public accept<Result>(visitor: GrammarVisitor<Result>): Result {
    if (visitor.visitDefn) {
      return visitor.visitDefn(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ProgContext extends ParserRuleContext {
  constructor(
    parser?: GrammarParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public defn(): DefnContext {
    return this.getTypedRuleContext(DefnContext, 0) as DefnContext;
  }
  public SEMI_COLON(): TerminalNode {
    return this.getToken(GrammarParser.SEMI_COLON, 0);
  }
  public prog(): ProgContext {
    return this.getTypedRuleContext(ProgContext, 0) as ProgContext;
  }
  public exp_list(): ExpContext[] {
    return this.getTypedRuleContexts(ExpContext) as ExpContext[];
  }
  public exp(i: number): ExpContext {
    return this.getTypedRuleContext(ExpContext, i) as ExpContext;
  }
  public block(): BlockContext {
    return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
  }
  public get ruleIndex(): number {
    return GrammarParser.RULE_prog;
  }
  public enterRule(listener: GrammarListener): void {
    if (listener.enterProg) {
      listener.enterProg(this);
    }
  }
  public exitRule(listener: GrammarListener): void {
    if (listener.exitProg) {
      listener.exitProg(this);
    }
  }
  // @Override
  public accept<Result>(visitor: GrammarVisitor<Result>): Result {
    if (visitor.visitProg) {
      return visitor.visitProg(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class BlockContext extends ParserRuleContext {
  constructor(
    parser?: GrammarParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public L_CURLY_PAREN(): TerminalNode {
    return this.getToken(GrammarParser.L_CURLY_PAREN, 0);
  }
  public prog(): ProgContext {
    return this.getTypedRuleContext(ProgContext, 0) as ProgContext;
  }
  public R_CURLY_PAREN(): TerminalNode {
    return this.getToken(GrammarParser.R_CURLY_PAREN, 0);
  }
  public get ruleIndex(): number {
    return GrammarParser.RULE_block;
  }
  public enterRule(listener: GrammarListener): void {
    if (listener.enterBlock) {
      listener.enterBlock(this);
    }
  }
  public exitRule(listener: GrammarListener): void {
    if (listener.exitBlock) {
      listener.exitBlock(this);
    }
  }
  // @Override
  public accept<Result>(visitor: GrammarVisitor<Result>): Result {
    if (visitor.visitBlock) {
      return visitor.visitBlock(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ArgContext extends ParserRuleContext {
  constructor(
    parser?: GrammarParser,
    parent?: ParserRuleContext,
    invokingState?: number
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public ID(): TerminalNode {
    return this.getToken(GrammarParser.ID, 0);
  }
  public COLON(): TerminalNode {
    return this.getToken(GrammarParser.COLON, 0);
  }
  public INT(): TerminalNode {
    return this.getToken(GrammarParser.INT, 0);
  }
  public DOUBLE(): TerminalNode {
    return this.getToken(GrammarParser.DOUBLE, 0);
  }
  public STRING_TYPE(): TerminalNode {
    return this.getToken(GrammarParser.STRING_TYPE, 0);
  }
  public L_SQUARE_PAREN(): TerminalNode {
    return this.getToken(GrammarParser.L_SQUARE_PAREN, 0);
  }
  public R_SQUARE_PAREN(): TerminalNode {
    return this.getToken(GrammarParser.R_SQUARE_PAREN, 0);
  }
  public get ruleIndex(): number {
    return GrammarParser.RULE_arg;
  }
  public enterRule(listener: GrammarListener): void {
    if (listener.enterArg) {
      listener.enterArg(this);
    }
  }
  public exitRule(listener: GrammarListener): void {
    if (listener.exitArg) {
      listener.exitArg(this);
    }
  }
  // @Override
  public accept<Result>(visitor: GrammarVisitor<Result>): Result {
    if (visitor.visitArg) {
      return visitor.visitArg(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
