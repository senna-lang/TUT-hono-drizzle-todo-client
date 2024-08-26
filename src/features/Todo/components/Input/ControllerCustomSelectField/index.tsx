import {
  FieldPathByValue,
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";

import { Select, SelectProps } from "./CustomSelect";

type SelectControllerProps<
  // react-hook-formのFieldValues（スキーマ）を指定する
  TFieldValues extends FieldValues,
  // selectのvalueの型を指定する
  TValue extends number | string | ""
> = {
  // react-hook-formのuseController関数を指定する
  controller: UseControllerProps<
    TFieldValues,
    // 第一ジェネリクスに指定したフォームの型から二ジェネリクスに指定した型を値として持つフィールドパスを返す型定義
    FieldPathByValue<TFieldValues, TValue>
  >;
  // fieldWrapperとmuiTextFieldとセレクトオプションを指定する
  select: SelectProps<TValue>;
};

export const SelectController = <
  TFieldValues extends FieldValues,
  TValue extends number | string | "" = number | ""
>({
  controller,
  select: { fieldWrapper, muiTextField, options },
}: SelectControllerProps<TFieldValues, TValue>): JSX.Element => {
  const {
    field,
    fieldState: { error },
  } = useController(controller);

  return (
    <Select
      fieldWrapper={{
        ...fieldWrapper,
        errorMessage: error?.message,
      }}
      muiTextField={{
        ...muiTextField,
        ...field,
      }}
      options={options}
    />
  );
};
