import { Autocomplete, TextField } from "@mui/material";
import type { FilterOption } from "../../../../../modules/medView/widgets/model/types/FilterOptions";

interface MedViewAutocompleteInputProps {
  label: string;
  values: FilterOption[];
  options: FilterOption[];
  inputValue: string;

  onInputChange: (value: string) => void;
  onChange: (values: FilterOption[]) => void;

  loading?: boolean;
}

export const MedViewAutocompleteInput = ({
  label,
  values,
  options,
  inputValue,
  onInputChange,
  onChange,
  loading,
}: MedViewAutocompleteInputProps) => {
  return (
    <Autocomplete
      multiple
      options={options}
      value={values}
      inputValue={inputValue}
      onInputChange={(_, newValue) => onInputChange(newValue)}
      onChange={(_, newValues) => onChange(newValues)}
      getOptionLabel={(option) => option.label}
      filterOptions={(options) => options}
      loading={loading}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};
