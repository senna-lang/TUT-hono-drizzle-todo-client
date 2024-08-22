"use client";
import React from "react";
import Box from "@mui/material/Box";
import TypoGraphy from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import TodoItem from "./TodoItem";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { UseMutateFunction } from "@tanstack/react-query";

interface TodoAreaPaperProps {
  headingText: string;
  todos: TodoList;
  createTodo: UseMutateFunction<any, Error, string, unknown>;
}

const TodoListBox = ({
  headingText,
  todos,
  createTodo,
}: TodoAreaPaperProps) => {
  const [newTodo, setNewTodo] = React.useState<string>("");
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
        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <TodoItem todos={todos} />
        </Box>
        <Stack direction="row" spacing={2}>
          <TextField
            fullWidth
            label="NEW TODO"
            id="fullWidth"
            onChange={e => {
              e.preventDefault();
              setNewTodo(e.target.value);
            }}
            value={newTodo}
          />
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={() => {
              createTodo(newTodo);
              setNewTodo("");
            }}
          >
            Send
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
};

export default TodoListBox;
