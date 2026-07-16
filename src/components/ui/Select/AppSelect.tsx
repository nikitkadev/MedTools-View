import { Box, FormControl, InputLabel, MenuItem, Select, type SelectChangeEvent } from "@mui/material";

interface Option {
    label: string;
    value: string;
}

interface SelectProps {
    label: string;
    value: string;
    options: Option[],
    onChange: (value: string) => void;
}

export const AppSelect = ({
    label,
    value,
    options,
    onChange }: SelectProps) => {

    const handleChange = (event: SelectChangeEvent) => {
        onChange(event.target.value);
    }

    return (
        <Box sx={{ minWidth: 175 }}>
            <FormControl fullWidth>
                <InputLabel>
                    {label}
                </InputLabel>
                <Select
                    size="small"
                    value={value}
                    label={label}
                    onChange={handleChange}>

                    {options.map((opt) => (
                        <MenuItem key={opt.value}>
                            {opt.label}
                        </MenuItem>
                    ))}

                </Select>
            </FormControl>
        </Box>
    )
}