import { TextField } from "@mui/material";

interface MedViewFilterStandartInputProps {
  label: string;
  placeholder: string;
}

export const MedViewFilterStandartInput = ({
  label,
  placeholder,
}: MedViewFilterStandartInputProps) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      fullWidth={true}
      size="small"
      placeholder={placeholder}
      slotProps={{
        inputLabel: {
          shrink: true,
        },
      }}
    />
  );
};
