import styles from "./styles.module.scss";

interface TableStateRowProps {
  colSpan: number;
  title: string;
  description: string;
}

export const TableStateRow = ({
  colSpan,
  title,
  description,
}: TableStateRowProps) => {
  return (
    <tr className="noneHover">
      <td colSpan={colSpan}>
        <div className={styles.stateContent}>
          <p className={styles.title}>{title}</p>
          <p className={styles.description}>{description}</p>
        </div>
      </td>
    </tr>
  );
};
