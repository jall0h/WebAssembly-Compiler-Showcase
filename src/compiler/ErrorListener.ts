import { ErrorListener, RecognitionException, Recognizer, Token } from "antlr4";

export class ThrowErrorListener<T> extends ErrorListener<T> {
  public syntaxError(
    recognizer: Recognizer<T>,
    offendingSymbol: T,
    line: number,
    column: number,
    msg: string,
    e: RecognitionException | undefined
  ): void {
    if (offendingSymbol === null || offendingSymbol === undefined) {
      throw Error(
        `Lexing Error line ${line}, column ${column}.Error Message: \" ${msg}\" `
      );
    }
    if (offendingSymbol instanceof Token) {
      throw Error(
        `Parsing Error line ${line}, column ${column}.Error Message: \" ${msg}\" `
      );
    }
  }
}
