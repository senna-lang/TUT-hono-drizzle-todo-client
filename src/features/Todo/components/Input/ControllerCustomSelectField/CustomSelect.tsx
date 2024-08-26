import MenuItem from "@mui/material/MenuItem";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { Options } from "@/features/Todo/types";
import { styled } from "@mui/material";
import {
  FieldWrapper,
  FieldWrapperPassThroughProps,
} from "@/components/FieldWrapper";

// Tはselectのvalueの型
export type SelectProps<T extends number | string = number> = {
  // FieldWrapperへのパススルーするprops
  fieldWrapper: FieldWrapperPassThroughProps;
  // MUIのTextFieldProps(デフォルトプロップス)
  muiTextField?: TextFieldProps;
  // セレクトオプションを受け取る
  options: Options<T>;
};

// MUIのTextFieldをカスタマイズするためのstyled-components
const MuiCustomTextField = styled(TextField)(({ theme }) => ({
  borderRadius: 8,

  "& .MuiInputBase-input": {
    backgroundColor: "transparent",
    ...theme.typography.body1,
    fontFamily: theme.components?.MuiTypography?.defaultProps?.fontFamily,
    width: "100%",
    padding: "3.6px 4px 3.6px 8px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
  },
}));

export const Select = <T extends number | string = number>({
  fieldWrapper,
  muiTextField,
  options,
}: SelectProps<T>): JSX.Element => {
  return (
    <FieldWrapper {...fieldWrapper}>
      <MuiCustomTextField
        select
        error={!!fieldWrapper?.errorMessage}
        {...muiTextField}
      >
        {options.map(({ label, value }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </MuiCustomTextField>
    </FieldWrapper>
  );
};
