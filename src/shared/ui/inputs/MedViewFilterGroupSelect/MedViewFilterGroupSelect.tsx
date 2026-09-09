import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

export const MedViewFilterGroupSelect = () => {
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div>
      <FormControl fullWidth={true} size="small">
        <InputLabel id="demo-multiple-checkbox-label">Инвалидность</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Инвалидность" />}
          renderValue={(selected) => selected.join(", ")}
        >
          {names.map((name) => {
            const selected = personName.includes(name);
            const SelectionIcon = selected
              ? CheckBoxIcon
              : CheckBoxOutlineBlankIcon;

            return (
              <MenuItem key={name} value={name}>
                <SelectionIcon
                  fontSize="small"
                  style={{
                    marginRight: 8,
                    padding: 9,
                    boxSizing: "content-box",
                  }}
                />
                <ListItemText primary={name} />
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};
