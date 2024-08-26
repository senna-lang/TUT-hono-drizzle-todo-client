import { SubmitHandler, useForm } from "react-hook-form";
import { updateTodoFormSchema } from "./schema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { UseMutationResult } from "@tanstack/react-query";

export const useUpdateTodoForm = (
  updateTodo: UseMutationResult<
    any,
    Error,
    {
      id: number;
      title: string;
      status: string;
    },
    unknown
  >
) => {
  const methods = useForm<z.infer<typeof updateTodoFormSchema>>({
    resolver: zodResolver(updateTodoFormSchema),
    defaultValues: {
      id: null,
      title: "",
      status: "todo",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof updateTodoFormSchema>> =
    useCallback(async values => {
      const { id, title, status } = values;
      if (id === null) return;
      updateTodo.mutate({ id, title, status });
    }, []);

  return { methods, onSubmit };
};
