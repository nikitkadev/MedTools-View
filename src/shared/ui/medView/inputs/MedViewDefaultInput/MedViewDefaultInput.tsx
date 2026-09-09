import { TextField } from "@mui/material";
import { medViewFiltersSx } from "../../../../sxConfigs/medViewFiltersSx";

interface MedViewDefaultInputProps {
  label: string;
  placeholder: string;
  fullWidth?: boolean;
  size?: "small" | "medium";
  variant?: "outlined" | "standard";
}

export const MedViewDefaultInput = ({
  label,
  placeholder,
  fullWidth = true,
  size = "small",
  variant = "outlined",
}: MedViewDefaultInputProps) => {
  return (
    <TextField
      fullWidth={fullWidth}
      label={label}
      placeholder={placeholder}
      size={size}
      variant={variant}
      slotProps={{
        inputLabel: {
          shrink: true,
        },
      }}
      sx={medViewFiltersSx}
    />
  );
};
