import {
  FieldPathByValue,
  FieldValues,
  UseFormRegisterReturn,
} from "react-hook-form";

import { CustomTextField, CustomTextFieldProps } from "./CustomTextField";

type TextFieldControllerProps<TFieldValues extends FieldValues> = {
  // react-hook-formのregister関数を指定する
  registration: UseFormRegisterReturn<FieldPathByValue<TFieldValues, string>>;
  // fieldWrapperとmuiTextFieldのpropsを指定する
  textField: CustomTextFieldProps;
};

export const TextFieldController = <TFieldValues extends FieldValues>({
  registration,
  textField: { fieldWrapper, muiTextField },
}: TextFieldControllerProps<TFieldValues>): JSX.Element => {
  return (
    <CustomTextField
      fieldWrapper={fieldWrapper}
      muiTextField={{
        ...muiTextField,
        ...registration,
      }}
    />
  );
};
