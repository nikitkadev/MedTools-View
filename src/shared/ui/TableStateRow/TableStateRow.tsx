import styles from "./styles.module.scss";

interface TableStateRowProps {
  rowCount: number;
  title: string;
  descriptions: string;
}

export const TableStateRow = ({
  rowCount,
  title,
  descriptions,
}: TableStateRowProps) => {
  return (
    <tr className="noneHover">
      <td colSpan={rowCount}>
        <div className={styles.stateContent}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{descriptions}</p>
        </div>
      </td>
    </tr>
  );
};
