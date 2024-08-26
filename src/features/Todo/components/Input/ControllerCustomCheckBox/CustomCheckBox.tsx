import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { styled } from "@mui/material";

import {
  FieldWrapper,
  FieldWrapperPassThroughProps,
} from "@/components/FieldWrapper";

export type CheckboxGroupProps = {
  fieldWrapper: FieldWrapperPassThroughProps;
  muiCheckbox?: CheckboxProps;
  options: {
    label: string;
    checked: boolean;
    onChange: () => void;
  }[];
};

export const CustomCheckbox = styled(Checkbox)(() => ({
  padding: 0,
}));

export const CustomFormControlLabel = styled(FormControlLabel)({
  marginLeft: 0,
  "& .MuiFormControlLabel-label": {
    paddingLeft: 4,
  },
});

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  fieldWrapper,
  muiCheckbox,
  options,
}) => {
  return (
    <FieldWrapper {...fieldWrapper}>
      <FormGroup row>
        {options.map(({ label, checked, onChange }) => (
          <CustomFormControlLabel
            key={label}
            label={label}
            control={
              <CustomCheckbox
                size="small"
                checked={checked}
                onChange={onChange}
                {...muiCheckbox}
              />
            }
          />
        ))}
      </FormGroup>
    </FieldWrapper>
  );
};
