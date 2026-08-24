import { ToggleButton, ToggleButtonGroup } from "@mui/material";

import type React from "react";

interface TargetDbToggleProps {
  value: string;
  onChange: (event: React.MouseEvent<HTMLElement>, newAligment: string) => void;
}

export const TargetDbToggle = ({ value, onChange }: TargetDbToggleProps) => {
  return (
    <ToggleButtonGroup
      size="medium"
      value={value}
      exclusive
      onChange={onChange}
      aria-label="Database type"
      sx={{
        height: "100%",
        "& .MuiToggleButtonGroup-grouped": {
          fontSize: "var(--fs-body2)",
          fontWeight: "var(--fw-semibold)",
          fontFamily: "var(--inter)",
          border: "1px solid var(--border-default)",
          margin: "0",
          padding: "var(--space-3) var(--space-10)",
        },

        "& .MuiToggleButtonGroup-firstButton": {
          borderTopLeftRadius: "var(--radius-xl)",
          borderBottomLeftRadius: "var(--radius-xl)",
        },

        "& .MuiToggleButtonGroup-lastButton": {
          borderTopRightRadius: "var(--radius-xl)",
          borderBottomRightRadius: "var(--radius-xl)",
          borderLeft: "none",
        },

        "& .Mui-selected": {
          color: "var(--black)",
          background: "var(--selected-background)",
        },

        "& .Mui-selected:hover": {
          background: "none",
        },
      }}
    >
      <ToggleButton value="SMODB18">СМО РХ</ToggleButton>
      <ToggleButton value="INOGOROD18">Иногород</ToggleButton>
    </ToggleButtonGroup>
  );
};
