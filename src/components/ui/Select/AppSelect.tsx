import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from "@mui/material";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  label: string;
  value: string;
  options: Option[];
  disabled: boolean;
  onChange: (value: string) => void;
}

export const AppSelect = ({
  label,
  value,
  options,
  disabled,
  onChange,
}: SelectProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 175 }}>
      <FormControl fullWidth>
        <InputLabel
          sx={{
            "&.MuiInputLabel-root": {
              fontFamily: "var(--inter)",
            },
            "&.Mui-focused": {
              color: "var(--text-primary)",
            },
          }}
        >
          {label}
        </InputLabel>
        <Select
          MenuProps={{
            transitionDuration: 50,
            sx: {
              maxHeight: 500,
            },
          }}
          size="medium"
          value={value}
          label={label}
          onChange={handleChange}
          disabled={disabled}
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              borderRadius: "var(--radius-xl)",
              borderColor: "var(--border-default)",
            },
            "&.MuiSelect-root:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--border-hover)",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--border-focus)",
              borderWidth: "1px",
            },
            "& .MuiMenuList-root": {
              minWidth: "10rem",
            },
          }}
        >
          {options.length > 0 ? (
            options.map((opt) => (
              <MenuItem key={opt.value} value={opt.value}>
                {opt.label}
              </MenuItem>
            ))
          ) : (
            <MenuItem disabled>Нет данных</MenuItem>
          )}
        </Select>
      </FormControl>
    </Box>
  );
};
