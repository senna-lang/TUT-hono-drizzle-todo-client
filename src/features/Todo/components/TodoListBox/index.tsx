"use client";
import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import TypoGraphy from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import TodoItem from "./TodoItem";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import useTodos from "../../hooks/useTodos";
import { TextFieldController } from "../Input/ControllerCustomTextField";
import { useCreateTodoForm } from "../../hooks/useCreateTodoForm";

interface TodoAreaPaperProps {
  headingText: string;
  todos: TodoList;
}

const TodoListBox = ({ headingText, todos }: TodoAreaPaperProps) => {
  const { createTodo } = useTodos();
  const { methods, onSubmit } = useCreateTodoForm(createTodo);

  useEffect(() => {
    if (methods.formState.isSubmitSuccessful) {
      methods.reset();
    }
  }, [methods.formState.isSubmitSuccessful, methods.reset]);
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
          width: "100%",
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
            width: "100%",
            flexGrow: 1,
          }}
        >
          <TodoItem todos={todos} />
        </Box>
        <Stack
          sx={{
            width: "100%",
            justifyContent: "center",
          }}
          direction="row"
          spacing={2}
        >
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Box
              sx={{
                display: "flex",
                gap: "1rem",
              }}
            >
              <TextFieldController
                registration={methods.register("title")}
                textField={{
                  fieldWrapper: {
                    label: "NEW TODO",
                    required: true,
                    errorMessage: methods.formState.errors.title?.message,
                  },
                  muiTextField: {
                    textFieldProps: {
                      fullWidth: true,
                      placeholder: "Enter new todo",
                    },
                  },
                }}
              />
              <Button variant="contained" endIcon={<SendIcon />} type="submit">
                Send
              </Button>
            </Box>
          </form>
        </Stack>
      </Box>
    </Paper>
  );
};

export default TodoListBox;
