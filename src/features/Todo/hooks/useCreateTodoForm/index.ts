import { SubmitHandler, useForm } from "react-hook-form";
import { createTodoFormSchema } from "./schema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { UseMutationResult } from "@tanstack/react-query";

export const useCreateTodoForm = (
  createTodo: UseMutationResult<any, Error, string, unknown>
) => {
  const methods = useForm<z.infer<typeof createTodoFormSchema>>({
    resolver: zodResolver(createTodoFormSchema),
    defaultValues: {
      title: "",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof createTodoFormSchema>> =
    useCallback(async values => {
      const { title } = values;
      createTodo.mutate(title);
    }, []);

  return { methods, onSubmit };
};
