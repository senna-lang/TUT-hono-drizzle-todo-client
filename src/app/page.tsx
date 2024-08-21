"use client";
import Box from "@mui/material/Box";
import TodoListBox from "@/features/Todo/components/TodoListBox";
import useTodos from "@/features/Todo/hooks/useTodos";

export default function Home() {
  const { todoList, error, isLoading } = useTodos();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  
  return (
    <main className=" h-screen flex flex-col items-center justify-center gap-6">
      <h1>Welcome to the Next.js app</h1>
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
        <TodoListBox headingText="Just do it" todos={todoList!}/>
        {/* <TodoListBox headingText="Done" /> */}
      </Box>
    </main>
  );
}
