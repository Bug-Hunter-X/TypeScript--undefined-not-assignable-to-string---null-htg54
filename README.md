# TypeScript: Handling undefined in string | null

This repository demonstrates a common TypeScript error related to the `string | null` type and how to handle cases where `undefined` is passed as an argument.

## The Problem

When a function expects a `string | null` parameter, attempting to pass `undefined` will result in a TypeScript error because `undefined` is not part of that union type.  The included `bug.ts` file demonstrates this error.

## The Solution

The solution involves extending the function's parameter type to explicitly include `undefined` using the `string | null | undefined` type.  The `bugSolution.ts` file provides a corrected version of the function that handles both `null` and `undefined` values gracefully.