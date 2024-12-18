import * as z from "zod";
import { db } from "../../db";
import { WithId } from "mongodb";

export const TodoSchema = z.object({
  title: z.string().min(10),
  tag: z.string().min(10),
  dueDate: z.date(),
  dueTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/, {
    message: "Invalid time format. Expected format is HH:MM:SS.",
  }),
  done: z.boolean().default(false),
});

export type Todo = z.infer<typeof TodoSchema>;
export type TodoWithId = WithId<Todo>;
export const Todos = db.collection("todo");
