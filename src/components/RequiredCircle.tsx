import { Box } from "@mui/material";

export type RequiredCircleProps = {
  size?: number;
};

export const RequiredCircle = ({ size = 6 }: RequiredCircleProps) => {
  return (
    <Box
      bgcolor={"error.main"}
      borderRadius={9999}
      width={size}
      height={size}
    />
  );
};