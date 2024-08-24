type Todo = {
  id: number;
  title: string;
  status: "todo" | "in-progress" | "done";
  createdAt: number;
  updatedAt: number;
};

type TodoList = Todo[];
