import type React from "react";
import styles from "./styles.module.scss";

interface CardFieldProps {
  label: string;
  value: React.ReactNode;
  inline?: boolean;
  spaceBetween?: boolean;
}

export const CardField = ({
  label,
  value,
  inline = false,
  spaceBetween = false,
}: CardFieldProps) => {
  return (
    <div
      className={`${styles.cardFieldRoot} ${inline ? styles.inline : ""} ${spaceBetween ? styles.spaceBetween : ""}`}
    >
      <label>{label}</label>
      <p>{value}</p>
    </div>
  );
};
