"use client";
import Box from "@mui/material/Box";
import TodoListBox from "@/features/Todo/components/TodoListBox";
import useTodos from "@/features/Todo/hooks/useTodos";
import { Typography } from "@mui/material";

export default function Home() {
  const { todoList, error, isLoading } = useTodos();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <main className=" h-screen py-10 flex flex-col items-center justify-center gap-6">
      <Box
        sx={{
          mt: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          padding: "1rem",
          backgroundColor: "lightgray",
          borderRadius: "0.5rem",
        }}
      >
        <Typography variant="h5">Welcome to the Next.js app</Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <TodoListBox
          headingText="Just do it"
          todos={todoList!}
        />
        <TodoListBox
          headingText="Done"
          todos={todoList!}
        />
      </Box>
    </main>
  );
}
