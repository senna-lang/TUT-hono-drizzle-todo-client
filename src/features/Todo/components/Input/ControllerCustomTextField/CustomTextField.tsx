import {
  Box,
  TextField,
  TextFieldProps,
  Typography,
  styled,
} from "@mui/material";
import { FieldLabel } from "./FieldLabel";
import {
  FieldWrapper,
  FieldWrapperPassThroughProps,
} from "@/components/FieldWrapper";

// MUIのTextFieldをカスタマイズするためのstyled-components
const MuiCustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    borderRadius: 8,
    marginTop: 0,
  },
  "& .MuiInputBase-input": {
    position: "relative",
    backgroundColor: "transparent",
    ...theme.typography.body1,
    fontFamily: theme.components?.MuiTypography?.defaultProps?.fontFamily,
    width: "100%",
    padding: "3.6px 4px 3.6px 8px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
  },

  "& .MuiInputBase-multiline": {
    padding: 0,
  },

  "& .Mui-readOnly": {
    borderColor: "#7D7D7D",
    backgroundColor: "#EBEBEB",
  },
}));

// MuiCustomTextFieldPropsの型定義
type MuiCustomTextFieldProps = {
  required?: boolean;
  label?: React.ReactNode;
  sideLabel?: string;
  textFieldProps?: TextFieldProps;
};

// CustomTextFieldPropsの型定義
export type CustomTextFieldProps = {
  muiTextField: MuiCustomTextFieldProps;
  // FieldWrapperへのパススルーするprops
  fieldWrapper: FieldWrapperPassThroughProps;
};

export const CustomTextField = ({
  fieldWrapper,
  muiTextField: { label, sideLabel, required, textFieldProps },
}: CustomTextFieldProps) => {
  return (
    <FieldWrapper {...fieldWrapper}>
      {label && <FieldLabel required={required} label={label} />}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
        }}
      >
        {sideLabel && <Typography>{sideLabel}</Typography>}
        <MuiCustomTextField
          {...textFieldProps}
          error={!!fieldWrapper.errorMessage}
        />
      </Box>
    </FieldWrapper>
  );
};
