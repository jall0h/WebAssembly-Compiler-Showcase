// Generated from Grammar.g4 by ANTLR 4.13.2

import {ParseTree, ParseTreeVisitor} from 'antlr4';
import { AContext, ArgContext, ExpContext, TaContext } from "./GrammarParser";
import { MContext } from "./GrammarParser";
import { TContext } from "./GrammarParser";
import { FContext } from "./GrammarParser";
import { BexpContext } from "./GrammarParser";
import { DefnContext } from "./GrammarParser";
import { ProgContext } from "./GrammarParser";
import { BlockContext } from "./GrammarParser";
import { type_env } from '../../types';



/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `GrammarParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class GrammarVisitor<Result> extends ParseTreeVisitor<Result> {
	visit_node(tree: ParseTree, ts: type_env): Result {
		if (tree instanceof ExpContext){
			return this.visitExp(tree,ts)
		}
		if (tree instanceof MContext){
			return this.visitM(tree,ts)
		}
		if (tree instanceof TContext){
			return this.visitT(tree,ts)
		}
		if (tree instanceof FContext){
			return this.visitF(tree,ts)
		}
		if (tree instanceof BexpContext){
			return this.visitBexp(tree,ts)
		}
		if (tree instanceof TaContext){
			return this.visitTa(tree,ts)
		}
		if (tree instanceof AContext){
			return this.visitA(tree,ts)
		}
		if (tree instanceof DefnContext){
			return this.visitDefn(tree,ts)
		}
		if (tree instanceof ProgContext){
			return this.visitProg(tree,ts)
		}
		if (tree instanceof BlockContext){
			return this.visitBlock(tree,ts)
		}
		if (tree instanceof ArgContext){
			return this.visitArg(tree,ts)
		}
	}
	/**
	 * Visit a parse tree produced by `GrammarParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExp?(ctx: ExpContext, ts?: type_env):Result;
	/**
	 * Visit a parse tree produced by `GrammarParser.m`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitM?(ctx: MContext, ts?: type_env):Result;
	/**
	 * Visit a parse tree produced by `GrammarParser.t`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitT?(ctx: TContext, ts?: type_env):Result;
	/**
	 * Visit a parse tree produced by `GrammarParser.f`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitF?(ctx: FContext, ts?: type_env):Result;
	/**
	 * Visit a parse tree produced by `GrammarParser.bexp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBexp?(ctx: BexpContext, ts?: type_env):Result;
	/**
	 * Visit a parse tree produced by `GrammarParser.a`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitA?(ctx: AContext, ts?: type_env):Result;
	/**
	 * Visit a parse tree produced by `GrammarParser.ta`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTa?(ctx: TaContext, ts?: type_env):Result;
	/**
	 * Visit a parse tree produced by `GrammarParser.defn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefn?(ctx: DefnContext, ts?: type_env):Result;
	/**
	 * Visit a parse tree produced by `GrammarParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?(ctx: ProgContext, ts?: type_env):Result;
	/**
	 * Visit a parse tree produced by `GrammarParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?(ctx: BlockContext, ts?: type_env):Result;

	visitArg?(ctx: ArgContext, ts?: type_env):Result;
	


}

