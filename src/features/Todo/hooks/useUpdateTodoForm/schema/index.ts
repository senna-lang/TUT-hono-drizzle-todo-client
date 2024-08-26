import { z } from "zod";

export const updateTodoFormSchema = z.object({
  id: z.number().nullable(),
  title: z
    .string()
    .min(1, "入力してください。")
    .max(20, "20文字以内で入力してください。"),
  status: z.enum(["todo", "doing", "done"]),
});
