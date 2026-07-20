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
            }}
            sx={{
                '& .MuiOutlinedInput-notchedOutline': {
                    borderRadius: 'var(--radius-l)',
                    borderColor: 'var(--border-default)',
                    color: 'var(--text-secondary)'
                },
                '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'var(--border-hover)',  
                },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'var(--border-focus)',  
                    borderWidth: '1px',                  
                }
            }} />

    )
}