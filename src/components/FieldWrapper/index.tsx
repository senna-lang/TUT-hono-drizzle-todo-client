import { RequiredCircle } from "@/components/RequiredCircle";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import { PropsWithChildren } from "react";

type FieldWrapperProps = PropsWithChildren<{
  label?: string;
  required?: boolean;
  errorMessage?: string;
}>;

export type FieldWrapperPassThroughProps = Omit<FieldWrapperProps, "children">;

// インプットコンポーネント周辺UIの共通化ラッパー
export const FieldWrapper: React.FC<FieldWrapperProps> = ({
  label,
  required,
  errorMessage,
  children,
}) => {
  return (
    <FormControl fullWidth error={!!errorMessage}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
        <Box sx={{ display: "flex", gap: 0.5 }}>
          <Typography sx={{ fontSize: 12 }}>{label}</Typography>
          {required && <RequiredCircle />}
        </Box>
        {children}
        {errorMessage && (
          <Typography color="error" fontSize={12}>
            {errorMessage}
          </Typography>
        )}
      </Box>
    </FormControl>
  );
};
