import { z } from "zod";

export const createTodoFormSchema = z.object({
  title: z
    .string()
    .min(1, "入力してください。")
    .max(20, "20文字以内で入力してください。"),
});
