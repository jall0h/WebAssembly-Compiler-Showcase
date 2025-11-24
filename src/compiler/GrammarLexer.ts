// Generated from Grammar.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
  ATN,
  ATNDeserializer,
  CharStream,
  DecisionState,
  DFA,
  Lexer,
  LexerATNSimulator,
  PredictionContextCache,
  Token,
} from "antlr4";
export default class GrammarLexer extends Lexer {
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
  public static readonly EOF = Token.EOF;

  public static readonly channelNames: string[] = [
    "DEFAULT_TOKEN_CHANNEL",
    "HIDDEN",
  ];
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
  public static readonly modeNames: string[] = ["DEFAULT_MODE"];

  public static readonly ruleNames: string[] = [
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

  constructor(input: CharStream) {
    super(input);
    this._interp = new LexerATNSimulator(
      this,
      GrammarLexer._ATN,
      GrammarLexer.DecisionsToDFA,
      new PredictionContextCache()
    );
  }

  public get grammarFileName(): string {
    return "Grammar.g4";
  }

  public get literalNames(): (string | null)[] {
    return GrammarLexer.literalNames;
  }
  public get symbolicNames(): (string | null)[] {
    return GrammarLexer.symbolicNames;
  }
  public get ruleNames(): string[] {
    return GrammarLexer.ruleNames;
  }

  public get serializedATN(): number[] {
    return GrammarLexer._serializedATN;
  }

  public get channelNames(): string[] {
    return GrammarLexer.channelNames;
  }

  public get modeNames(): string[] {
    return GrammarLexer.modeNames;
  }

  public static readonly _serializedATN: number[] = [
    4, 0, 41, 248, 6, -1, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4,
    7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7,
    10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2,
    16, 7, 16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20, 7, 20, 2, 21, 7,
    21, 2, 22, 7, 22, 2, 23, 7, 23, 2, 24, 7, 24, 2, 25, 7, 25, 2, 26, 7, 26, 2,
    27, 7, 27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2, 31, 7, 31, 2, 32, 7,
    32, 2, 33, 7, 33, 2, 34, 7, 34, 2, 35, 7, 35, 2, 36, 7, 36, 2, 37, 7, 37, 2,
    38, 7, 38, 2, 39, 7, 39, 2, 40, 7, 40, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1,
    1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1,
    4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 5, 1, 5, 1, 5, 1, 6, 1, 6, 1, 6, 1, 6,
    1, 7, 1, 7, 1, 7, 1, 7, 1, 8, 1, 8, 1, 8, 1, 8, 1, 9, 1, 9, 1, 9, 1, 9, 1,
    9, 1, 9, 1, 9, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 11, 1,
    11, 1, 11, 1, 11, 1, 11, 1, 12, 1, 12, 5, 12, 144, 8, 12, 10, 12, 12, 12,
    147, 9, 12, 1, 12, 3, 12, 150, 8, 12, 1, 13, 4, 13, 153, 8, 13, 11, 13, 12,
    13, 154, 1, 13, 1, 13, 4, 13, 159, 8, 13, 11, 13, 12, 13, 160, 1, 14, 1, 14,
    1, 14, 1, 14, 5, 14, 167, 8, 14, 10, 14, 12, 14, 170, 9, 14, 1, 15, 1, 15,
    1, 15, 1, 15, 5, 15, 176, 8, 15, 10, 15, 12, 15, 179, 9, 15, 1, 16, 1, 16,
    5, 16, 183, 8, 16, 10, 16, 12, 16, 186, 9, 16, 1, 16, 1, 16, 1, 17, 1, 17,
    1, 18, 1, 18, 1, 19, 1, 19, 1, 20, 1, 20, 1, 21, 1, 21, 1, 22, 1, 22, 1, 23,
    1, 23, 1, 24, 1, 24, 1, 24, 1, 25, 1, 25, 1, 25, 1, 26, 1, 26, 1, 26, 1, 27,
    1, 27, 1, 27, 1, 28, 1, 28, 1, 29, 1, 29, 1, 29, 1, 30, 1, 30, 1, 30, 1, 31,
    1, 31, 1, 32, 1, 32, 1, 33, 1, 33, 1, 34, 1, 34, 1, 35, 1, 35, 1, 36, 1, 36,
    1, 37, 1, 37, 1, 38, 1, 38, 1, 39, 1, 39, 1, 40, 4, 40, 243, 8, 40, 11, 40,
    12, 40, 244, 1, 40, 1, 40, 0, 0, 41, 1, 1, 3, 2, 5, 3, 7, 4, 9, 5, 11, 6,
    13, 7, 15, 8, 17, 9, 19, 10, 21, 11, 23, 12, 25, 13, 27, 14, 29, 15, 31, 16,
    33, 17, 35, 18, 37, 19, 39, 20, 41, 21, 43, 22, 45, 23, 47, 24, 49, 25, 51,
    26, 53, 27, 55, 28, 57, 29, 59, 30, 61, 31, 63, 32, 65, 33, 67, 34, 69, 35,
    71, 36, 73, 37, 75, 38, 77, 39, 79, 40, 81, 41, 1, 0, 8, 1, 0, 49, 57, 1, 0,
    48, 57, 1, 0, 48, 48, 1, 0, 97, 122, 2, 0, 65, 90, 97, 122, 1, 0, 65, 90, 1,
    0, 34, 34, 3, 0, 9, 10, 13, 13, 32, 32, 259, 0, 1, 1, 0, 0, 0, 0, 3, 1, 0,
    0, 0, 0, 5, 1, 0, 0, 0, 0, 7, 1, 0, 0, 0, 0, 9, 1, 0, 0, 0, 0, 11, 1, 0, 0,
    0, 0, 13, 1, 0, 0, 0, 0, 15, 1, 0, 0, 0, 0, 17, 1, 0, 0, 0, 0, 19, 1, 0, 0,
    0, 0, 21, 1, 0, 0, 0, 0, 23, 1, 0, 0, 0, 0, 25, 1, 0, 0, 0, 0, 27, 1, 0, 0,
    0, 0, 29, 1, 0, 0, 0, 0, 31, 1, 0, 0, 0, 0, 33, 1, 0, 0, 0, 0, 35, 1, 0, 0,
    0, 0, 37, 1, 0, 0, 0, 0, 39, 1, 0, 0, 0, 0, 41, 1, 0, 0, 0, 0, 43, 1, 0, 0,
    0, 0, 45, 1, 0, 0, 0, 0, 47, 1, 0, 0, 0, 0, 49, 1, 0, 0, 0, 0, 51, 1, 0, 0,
    0, 0, 53, 1, 0, 0, 0, 0, 55, 1, 0, 0, 0, 0, 57, 1, 0, 0, 0, 0, 59, 1, 0, 0,
    0, 0, 61, 1, 0, 0, 0, 0, 63, 1, 0, 0, 0, 0, 65, 1, 0, 0, 0, 0, 67, 1, 0, 0,
    0, 0, 69, 1, 0, 0, 0, 0, 71, 1, 0, 0, 0, 0, 73, 1, 0, 0, 0, 0, 75, 1, 0, 0,
    0, 0, 77, 1, 0, 0, 0, 0, 79, 1, 0, 0, 0, 0, 81, 1, 0, 0, 0, 1, 83, 1, 0, 0,
    0, 3, 88, 1, 0, 0, 0, 5, 91, 1, 0, 0, 0, 7, 96, 1, 0, 0, 0, 9, 101, 1, 0, 0,
    0, 11, 107, 1, 0, 0, 0, 13, 110, 1, 0, 0, 0, 15, 114, 1, 0, 0, 0, 17, 118,
    1, 0, 0, 0, 19, 122, 1, 0, 0, 0, 21, 129, 1, 0, 0, 0, 23, 136, 1, 0, 0, 0,
    25, 149, 1, 0, 0, 0, 27, 152, 1, 0, 0, 0, 29, 162, 1, 0, 0, 0, 31, 171, 1,
    0, 0, 0, 33, 180, 1, 0, 0, 0, 35, 189, 1, 0, 0, 0, 37, 191, 1, 0, 0, 0, 39,
    193, 1, 0, 0, 0, 41, 195, 1, 0, 0, 0, 43, 197, 1, 0, 0, 0, 45, 199, 1, 0, 0,
    0, 47, 201, 1, 0, 0, 0, 49, 203, 1, 0, 0, 0, 51, 206, 1, 0, 0, 0, 53, 209,
    1, 0, 0, 0, 55, 212, 1, 0, 0, 0, 57, 215, 1, 0, 0, 0, 59, 217, 1, 0, 0, 0,
    61, 220, 1, 0, 0, 0, 63, 223, 1, 0, 0, 0, 65, 225, 1, 0, 0, 0, 67, 227, 1,
    0, 0, 0, 69, 229, 1, 0, 0, 0, 71, 231, 1, 0, 0, 0, 73, 233, 1, 0, 0, 0, 75,
    235, 1, 0, 0, 0, 77, 237, 1, 0, 0, 0, 79, 239, 1, 0, 0, 0, 81, 242, 1, 0, 0,
    0, 83, 84, 5, 115, 0, 0, 84, 85, 5, 107, 0, 0, 85, 86, 5, 105, 0, 0, 86, 87,
    5, 112, 0, 0, 87, 2, 1, 0, 0, 0, 88, 89, 5, 105, 0, 0, 89, 90, 5, 102, 0, 0,
    90, 4, 1, 0, 0, 0, 91, 92, 5, 116, 0, 0, 92, 93, 5, 104, 0, 0, 93, 94, 5,
    101, 0, 0, 94, 95, 5, 110, 0, 0, 95, 6, 1, 0, 0, 0, 96, 97, 5, 101, 0, 0,
    97, 98, 5, 108, 0, 0, 98, 99, 5, 115, 0, 0, 99, 100, 5, 101, 0, 0, 100, 8,
    1, 0, 0, 0, 101, 102, 5, 119, 0, 0, 102, 103, 5, 104, 0, 0, 103, 104, 5,
    105, 0, 0, 104, 105, 5, 108, 0, 0, 105, 106, 5, 101, 0, 0, 106, 10, 1, 0, 0,
    0, 107, 108, 5, 100, 0, 0, 108, 109, 5, 111, 0, 0, 109, 12, 1, 0, 0, 0, 110,
    111, 5, 100, 0, 0, 111, 112, 5, 101, 0, 0, 112, 113, 5, 102, 0, 0, 113, 14,
    1, 0, 0, 0, 114, 115, 5, 118, 0, 0, 115, 116, 5, 97, 0, 0, 116, 117, 5, 108,
    0, 0, 117, 16, 1, 0, 0, 0, 118, 119, 5, 73, 0, 0, 119, 120, 5, 110, 0, 0,
    120, 121, 5, 116, 0, 0, 121, 18, 1, 0, 0, 0, 122, 123, 5, 68, 0, 0, 123,
    124, 5, 111, 0, 0, 124, 125, 5, 117, 0, 0, 125, 126, 5, 98, 0, 0, 126, 127,
    5, 108, 0, 0, 127, 128, 5, 101, 0, 0, 128, 20, 1, 0, 0, 0, 129, 130, 5, 83,
    0, 0, 130, 131, 5, 116, 0, 0, 131, 132, 5, 114, 0, 0, 132, 133, 5, 105, 0,
    0, 133, 134, 5, 110, 0, 0, 134, 135, 5, 103, 0, 0, 135, 22, 1, 0, 0, 0, 136,
    137, 5, 86, 0, 0, 137, 138, 5, 111, 0, 0, 138, 139, 5, 105, 0, 0, 139, 140,
    5, 100, 0, 0, 140, 24, 1, 0, 0, 0, 141, 145, 7, 0, 0, 0, 142, 144, 7, 1, 0,
    0, 143, 142, 1, 0, 0, 0, 144, 147, 1, 0, 0, 0, 145, 143, 1, 0, 0, 0, 145,
    146, 1, 0, 0, 0, 146, 150, 1, 0, 0, 0, 147, 145, 1, 0, 0, 0, 148, 150, 7, 2,
    0, 0, 149, 141, 1, 0, 0, 0, 149, 148, 1, 0, 0, 0, 150, 26, 1, 0, 0, 0, 151,
    153, 7, 1, 0, 0, 152, 151, 1, 0, 0, 0, 153, 154, 1, 0, 0, 0, 154, 152, 1, 0,
    0, 0, 154, 155, 1, 0, 0, 0, 155, 156, 1, 0, 0, 0, 156, 158, 5, 46, 0, 0,
    157, 159, 7, 1, 0, 0, 158, 157, 1, 0, 0, 0, 159, 160, 1, 0, 0, 0, 160, 158,
    1, 0, 0, 0, 160, 161, 1, 0, 0, 0, 161, 28, 1, 0, 0, 0, 162, 168, 7, 3, 0, 0,
    163, 167, 7, 4, 0, 0, 164, 167, 3, 25, 12, 0, 165, 167, 5, 95, 0, 0, 166,
    163, 1, 0, 0, 0, 166, 164, 1, 0, 0, 0, 166, 165, 1, 0, 0, 0, 167, 170, 1, 0,
    0, 0, 168, 166, 1, 0, 0, 0, 168, 169, 1, 0, 0, 0, 169, 30, 1, 0, 0, 0, 170,
    168, 1, 0, 0, 0, 171, 177, 7, 5, 0, 0, 172, 176, 7, 4, 0, 0, 173, 176, 3,
    25, 12, 0, 174, 176, 5, 95, 0, 0, 175, 172, 1, 0, 0, 0, 175, 173, 1, 0, 0,
    0, 175, 174, 1, 0, 0, 0, 176, 179, 1, 0, 0, 0, 177, 175, 1, 0, 0, 0, 177,
    178, 1, 0, 0, 0, 178, 32, 1, 0, 0, 0, 179, 177, 1, 0, 0, 0, 180, 184, 5, 34,
    0, 0, 181, 183, 8, 6, 0, 0, 182, 181, 1, 0, 0, 0, 183, 186, 1, 0, 0, 0, 184,
    182, 1, 0, 0, 0, 184, 185, 1, 0, 0, 0, 185, 187, 1, 0, 0, 0, 186, 184, 1, 0,
    0, 0, 187, 188, 5, 34, 0, 0, 188, 34, 1, 0, 0, 0, 189, 190, 5, 43, 0, 0,
    190, 36, 1, 0, 0, 0, 191, 192, 5, 45, 0, 0, 192, 38, 1, 0, 0, 0, 193, 194,
    5, 42, 0, 0, 194, 40, 1, 0, 0, 0, 195, 196, 5, 47, 0, 0, 196, 42, 1, 0, 0,
    0, 197, 198, 5, 37, 0, 0, 198, 44, 1, 0, 0, 0, 199, 200, 5, 62, 0, 0, 200,
    46, 1, 0, 0, 0, 201, 202, 5, 60, 0, 0, 202, 48, 1, 0, 0, 0, 203, 204, 5, 62,
    0, 0, 204, 205, 5, 61, 0, 0, 205, 50, 1, 0, 0, 0, 206, 207, 5, 60, 0, 0,
    207, 208, 5, 61, 0, 0, 208, 52, 1, 0, 0, 0, 209, 210, 5, 61, 0, 0, 210, 211,
    5, 61, 0, 0, 211, 54, 1, 0, 0, 0, 212, 213, 5, 33, 0, 0, 213, 214, 5, 61, 0,
    0, 214, 56, 1, 0, 0, 0, 215, 216, 5, 61, 0, 0, 216, 58, 1, 0, 0, 0, 217,
    218, 5, 38, 0, 0, 218, 219, 5, 38, 0, 0, 219, 60, 1, 0, 0, 0, 220, 221, 5,
    124, 0, 0, 221, 222, 5, 124, 0, 0, 222, 62, 1, 0, 0, 0, 223, 224, 5, 123, 0,
    0, 224, 64, 1, 0, 0, 0, 225, 226, 5, 125, 0, 0, 226, 66, 1, 0, 0, 0, 227,
    228, 5, 91, 0, 0, 228, 68, 1, 0, 0, 0, 229, 230, 5, 93, 0, 0, 230, 70, 1, 0,
    0, 0, 231, 232, 5, 40, 0, 0, 232, 72, 1, 0, 0, 0, 233, 234, 5, 41, 0, 0,
    234, 74, 1, 0, 0, 0, 235, 236, 5, 59, 0, 0, 236, 76, 1, 0, 0, 0, 237, 238,
    5, 44, 0, 0, 238, 78, 1, 0, 0, 0, 239, 240, 5, 58, 0, 0, 240, 80, 1, 0, 0,
    0, 241, 243, 7, 7, 0, 0, 242, 241, 1, 0, 0, 0, 243, 244, 1, 0, 0, 0, 244,
    242, 1, 0, 0, 0, 244, 245, 1, 0, 0, 0, 245, 246, 1, 0, 0, 0, 246, 247, 6,
    40, 0, 0, 247, 82, 1, 0, 0, 0, 11, 0, 145, 149, 154, 160, 166, 168, 175,
    177, 184, 244, 1, 6, 0, 0,
  ];

  private static __ATN: ATN;
  public static get _ATN(): ATN {
    if (!GrammarLexer.__ATN) {
      GrammarLexer.__ATN = new ATNDeserializer().deserialize(
        GrammarLexer._serializedATN
      );
    }

    return GrammarLexer.__ATN;
  }

  static DecisionsToDFA = GrammarLexer._ATN.decisionToState.map(
    (ds: DecisionState, index: number) => new DFA(ds, index)
  );
}
