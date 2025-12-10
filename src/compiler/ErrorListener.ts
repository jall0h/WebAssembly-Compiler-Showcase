import { ErrorListener, RecognitionException, Recognizer, Token } from "antlr4";

export class ThrowErrorListener<T> extends ErrorListener<T> {
  public syntaxError(
    _recognizer: Recognizer<T>,
    offendingSymbol: T,
    _line: number,
    _column: number,
    _msg: string,
    _e: RecognitionException | undefined
  ): void {
    if (offendingSymbol === null || offendingSymbol === undefined) {
      throw Error(`Lexing Error`);
    }
    if (offendingSymbol instanceof Token) {
      throw Error(`Parsing Error`);
    }
  }
}
