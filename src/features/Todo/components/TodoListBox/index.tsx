import React from "react";
import Box from "@mui/material/Box";
import TypoGraphy from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import TodoItem from "./TodoItem";

interface TodoAreaPaperProps {
  headingText: string;
  todos: TodoList;
}

const TodoListBox = ({ headingText, todos }: TodoAreaPaperProps) => {
  return (
    <Paper
      elevation={3}
      sx={{
        width: "40%",
        height: "80%",
      }}
    >
      <Box
        sx={{
          height: "100%",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <TypoGraphy variant="h4">{headingText}</TypoGraphy>
        <TodoItem todos={todos} />
      </Box>
    </Paper>
  );
};

export default TodoListBox;
