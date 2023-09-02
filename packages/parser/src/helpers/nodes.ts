import type { ParseTree } from "antlr4ts/tree/ParseTree.js";

import { ParseError } from "./ParseError.js";

export function getAllChildrenFromContext(ctx: ParseTree | undefined) {
  if (!ctx) {
    return [];
  }

  const children: ParseTree[] = [];

  for (let i = 0; i < ctx.childCount; i++) {
    const child = ctx.getChild(i);

    children.push(child);
    children.push(...getAllChildrenFromContext(child));
  }

  return children;
}

export function invariant(condition: any, ctx: ParseTree, message?: string): asserts condition {
  if (condition) {
    return;
  }

  throw new ParseError(message ?? "Expressão inválida", ctx);
}
