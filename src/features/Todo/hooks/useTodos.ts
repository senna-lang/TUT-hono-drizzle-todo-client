import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const fetcher = async () => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT_URL}/todos`
  );
  return res.data;
};

const postFetcher = async (newTodo: string) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT_URL}/todos`,
    {
      title: newTodo,
    }
  );
  return res.data;
};

const updateFetcher = async ({
  id,
  title,
  status,
}: {
  id: number;
  title: string;
  status: string;
}) => {
  const res = await axios.put(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT_URL}/todos/${id}`,
    {
      title,
      status,
    }
  );
  return res.data;
};

const deleteFetcher = async (id: number) => {
  const res = await axios.delete(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT_URL}/todos/${id}`
  );
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

  const updateTodo = useMutation({
    mutationFn: async ({
      id,
      title,
      status,
    }: {
      id: number;
      title: string;
      status: string;
    }) => {
      const data = await updateFetcher({ id, title, status });
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

  return { todoList, error, isLoading, createTodo, updateTodo, deleteTodo };
}
