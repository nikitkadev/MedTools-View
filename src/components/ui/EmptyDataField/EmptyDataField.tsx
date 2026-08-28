import styles from "./styles.module.scss";
import FolderOffOutlinedIcon from "@mui/icons-material/FolderOffOutlined";

interface EmptyDataFieldProps {
  text?: string;
}

export const EmptyDataField = ({
  text = "Данных не обнаружено",
}: EmptyDataFieldProps) => {
  return (
    <div className={styles.emptyDataTableRowRoot}>
      <FolderOffOutlinedIcon
        sx={{
          color: "var(--text-secondary)",
          fontSize: 20,
        }}
      />

      <p className={styles.messsage}>{text}</p>
    </div>
  );
};
