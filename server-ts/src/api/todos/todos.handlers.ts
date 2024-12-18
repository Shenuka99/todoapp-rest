import { Response, NextFunction } from "express";
import {  Todo, Todos, TodoSchema, TodoWithId } from "./todos.model";
import { ZodError } from "zod";

export async function findAll(
  req: Request,
  res: Response<{}, TodoWithId[] >,
  next: NextFunction,
) {
  try {
    const result = await Todos.find();
    const todos = await result.toArray();

    res.json(todos);
  } catch (error) {
    next(error);
  }
}

export async function createOne(
  req: Request,
  res: Response<TodoWithId[]>,
  next: NextFunction
) {
  try {
    const validateResult = await TodoSchema.parse(req.body);
    const insertResult = await Todos.insertOne(validateResult);

    res.json(insertResult);
  } catch (error) {
    if (error instanceof ZodError){
      res.status(422)
    }

    next(error);
  }
}
