export type Option<T> = { label: string; value: T };
export type Options<T> = Option<T>[];

export type SelectProps<T extends number | string = number> = {
  fieldWrapper: FieldWrapperPassThroughProps;
  muiTextField?: TextFieldProps;
  options: Options<T>;
};