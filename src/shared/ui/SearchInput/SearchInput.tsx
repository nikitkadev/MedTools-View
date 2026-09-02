import { InputAdornment, TextField } from "@mui/material";
import { SearchIcon } from "../../../components/ui/Icons/SearchIcon";
import styles from "./styles.module.scss";
import type React from "react";

interface SearchInputProps {
  placeholder?: string;
  searchValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

export const SearchInput = ({
  placeholder,
  searchValue,
  onChange,
  onSearch,
}: SearchInputProps) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className={styles.searchInputContainer}>
      <TextField
        value={searchValue}
        onChange={onChange}
        onKeyDown={handleKeyDown}
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
