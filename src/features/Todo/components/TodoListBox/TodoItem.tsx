"use client";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import { Delete, Edit } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import { UseMutationResult } from "@tanstack/react-query";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import { CustomTextField } from "../Input/ControllerCustomTextField/CustomTextField";
import { TextFieldController } from "../Input/ControllerCustomTextField";
import useTodos from "../../hooks/useTodos";
import { useUpdateTodoForm } from "../../hooks/useUpdateTodoForm";
import { SelectController } from "../Input/ControllerCustomSelectField";
import { z } from "zod";
import { updateTodoFormSchema } from "../../hooks/useUpdateTodoForm/schema";

interface TodoItemProps {
  todos: TodoList;
}

export default function TodoItem({ todos }: TodoItemProps) {
  const { updateTodo, deleteTodo } = useTodos();
  const { methods, onSubmit } = useUpdateTodoForm(updateTodo);
  const [checked, setChecked] = useState([0]);
  const [edit, setEdit] = useState(false);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleEdit = () => {
    setEdit(true);
  };

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {todos.map(todo => {
        const labelId = `checkbox-list-label-${todo}`;
        return (
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <ListItem
              key={todo.id}
              secondaryAction={
                <>
                  {edit ? (
                    <IconButton
                      edge="end"
                      aria-label="comments"
                      onClick={() => setEdit(false)}
                    >
                      <SendIcon />
                    </IconButton>
                  ) : (
                    <IconButton
                      edge="end"
                      aria-label="comments"
                      onClick={() => handleEdit()}
                    >
                      <Edit />
                    </IconButton>
                  )}
                  <IconButton
                    edge="end"
                    aria-label="comments"
                    onClick={() => deleteTodo.mutate(todo.id)}
                  >
                    <Delete />
                  </IconButton>
                </>
              }
              disablePadding
            >
              <ListItemButton
                role={undefined}
                onClick={handleToggle(todo.id)}
                dense
              >
                <Grid container>
                  <Grid xs={0.5}>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={checked.indexOf(todo.id) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </ListItemIcon>
                  </Grid>
                  <Grid
                    xs={3}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      paddingX: 1,
                    }}
                  >
                    {edit ? (
                      <TextFieldController<z.infer<typeof updateTodoFormSchema>>
                        registration={methods.register("title")}
                        textField={{
                          fieldWrapper: {
                            errorMessage:
                              methods.formState.errors.title?.message,
                          },
                          muiTextField: {
                            textFieldProps: {
                              fullWidth: true,
                              placeholder: "Edit todo",
                            },
                          },
                        }}
                      />
                    ) : (
                      <ListItemText id={labelId} primary={todo.title} />
                    )}
                  </Grid>
                  <Grid
                    xs={2}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      paddingX: 1,
                    }}
                  >
                    {edit ? (
                      <SelectController<
                        z.infer<typeof updateTodoFormSchema>,
                        "todo" | "doing" | "done"
                      >
                        controller={{
                          name: "status",
                          control: methods.control,
                        }}
                        select={{
                          fieldWrapper: {},
                          muiTextField: undefined,
                          options: [
                            { label: "todo", value: "todo" },
                            { label: "doing", value: "doing" },
                            { label: "done", value: "done" },
                          ],
                        }}
                      />
                    ) : (
                      <ListItemText id={labelId} primary={todo.status} />
                    )}
                  </Grid>
                  <Grid
                    xs={3}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      paddingX: 1,
                    }}
                  >
                    <ListItemText id={labelId} primary={todo.createdAt} />
                  </Grid>
                  <Grid
                    xs={3}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      paddingX: 1,
                    }}
                  >
                    <ListItemText id={labelId} primary={todo.updatedAt} />
                  </Grid>
                </Grid>
              </ListItemButton>
            </ListItem>
          </form>
        );
      })}
    </List>
  );
}
