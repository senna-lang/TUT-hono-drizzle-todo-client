import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetcher = async () => {
  const res = await axios.get("http://localhost:8787/todos");
  return res.data;
};
export default function useTodos() {
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

  return { todoList, error, isLoading };
}
