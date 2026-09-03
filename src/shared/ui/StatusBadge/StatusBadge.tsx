import { CircularProgress } from "@mui/material";
import type { DataState } from "../../types/DataState";
import styles from "./styles.module.scss";

interface StatusBadgeProps {
  state: DataState;
}

export const StatusBadge = ({ state }: StatusBadgeProps) => {
  const config = {
    waiting: {
      text: "Ожидается",
      className: styles.waiting,
    },
    error: {
      text: "Ошибка",
      className: styles.error,
    },
    empty: {
      text: "Нет данных",
      className: styles.empty,
    },
    loading: {
      text: "Загрузка",
      className: styles.loading,
    },
    fetching: {
      text: "Обновление",
      className: styles.fetching,
    },
    success: {
      text: "",
      className: "",
    },
  }[state];

  return (
    <div className={`${styles.badge} ${config.className}`}>
      {state === "loading" && (
        <CircularProgress
          aria-label="Загрузка ..."
          size={13}
          sx={{ color: "var(--blue)" }}
        />
      )}
      {state === 'fetching' && (
        <CircularProgress
          aria-label="Загрузка ..."
          size={13}
          sx={{ color: "var(--violet)" }}
        />
      )}
      <p className={styles.text}>{config.text ?? "Неизвестно"}</p>
    </div>
  );
};
