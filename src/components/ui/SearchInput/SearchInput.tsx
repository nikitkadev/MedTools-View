import { InputAdornment, TextField } from "@mui/material"
import { SearchIcon } from "../Icons/SearchIcon";

interface SearchInputProps {
    placeholder?: string;
}

export const SearchInput = ({
    placeholder
}: SearchInputProps) => {
    return (
        <TextField
            placeholder={placeholder}
            variant="outlined"
            size="small"
            fullWidth={true}
            slotProps={{
                input: {
                    startAdornment: <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                }
            }} />

    )
}