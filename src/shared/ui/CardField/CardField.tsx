import type React from "react";
import styles from "./styles.module.scss";

interface CardFieldProps {
  label: string;
  value: React.ReactNode;
}

export const CardField = ({ label, value }: CardFieldProps) => {
  return (
    <div className={styles.cardFieldRoot}>
      <label>{label}</label>
      <p>{value}</p>
    </div>
  );
};
