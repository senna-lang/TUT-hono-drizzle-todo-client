import { Stack, Typography } from "@mui/material";
import { RequiredCircle } from "../../../../../components/RequiredCircle";

export type FieldLabelProps = {
  required?: boolean;
  label: React.ReactNode;
};

export const FieldLabel = ({ required, label }: FieldLabelProps) => (
  <Stack
    direction={"row"}
    spacing={0.5}
    alignItems={"center"}
    sx={{ marginBottom: "4px" }}
  >
    {required && <RequiredCircle size={6} />}
    <Typography variant="caption" fontWeight={700} color={"text.secondary"}>
      {label}
    </Typography>
  </Stack>
);
