"use server";

import { UseMutationResult } from "@tanstack/react-query";

export const sendCreateTodoForm = async (
  formDataProps: FormData,
  createTodo: UseMutationResult<any, Error, string, unknown>
) => {
  const formData = formDataProps;
  const title = formData.get("title") as string;
  try {
    createTodo.mutate(title);
  } catch (error) {
    if (error instanceof Error) {
      return console.error(error);
    }
  }
};
