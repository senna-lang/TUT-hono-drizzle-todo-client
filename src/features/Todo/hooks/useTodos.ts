import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const fetcher = async () => {
  const res = await axios.get("http://localhost:8787/todos");
  return res.data;
};

const postFetcher = async (newTodo: string) => {
  const res = await axios.post("http://localhost:8787/todos", {
    title: newTodo,
  });
  return res.data;
};

const deleteFetcher = async (id: number) => {
  const res = await axios.delete(`http://localhost:8787/todos/${id}`);
  return res.data;
};

export default function useTodos() {
  const queryClient = useQueryClient();
  const {
    data: todoList,
    error,
    isLoading,
  } = useQuery<TodoList>({
    queryKey: ["todos"],
    queryFn: async () => {
      const data = await fetcher();
      return data;
    },
  });

  const createTodo = useMutation({
    mutationFn: async (newTodo: string) => {
      const data = await postFetcher(newTodo);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });

  const deleteTodo = useMutation({
    mutationFn: async (id: number) => {
      const data = await deleteFetcher(id);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });

  return { todoList, error, isLoading, createTodo, deleteTodo };
}
