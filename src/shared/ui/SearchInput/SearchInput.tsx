import { InputAdornment, TextField } from "@mui/material";
import { SearchIcon } from "../../../components/ui/Icons/SearchIcon";
import styles from "./styles.module.scss";

interface SearchInputProps {
  placeholder?: string;
}

export const SearchInput = ({ placeholder }: SearchInputProps) => {
  return (
    <div className={styles.searchInputContainer}>
      <TextField
        placeholder={placeholder}
        variant="outlined"
        size="small"
        fullWidth={true}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: "var(--radius-l)",
            borderColor: "var(--border-default)",
            color: "var(--text-secondary)",
          },
          "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--border-hover)",
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "var(--border-focus)",
              borderWidth: "1px",
            },
        }}
      />
    </div>
  );
};
