import { Skeleton } from "@mui/material";
import { Divider } from "../../../../../../../../../components/ui/Divider/Divider";
import styles from "./styles.module.scss";

export const RepresentativeCardSkeleton = () => {
  return (
    <article className={styles.cardRoot}>
      <header className={styles.cardHeader}>
        <h2>Представитель</h2>
      </header>
      <Divider />
      <div className={styles.cardContent}>
        <div className={styles.twoGrid}>
          <div className={styles.field}>
            <label>Имя</label>
            <p>
              <Skeleton height={40} />
            </p>
          </div>
          <div className={styles.field}>
            <label>Отчество</label>
            <p>
              <Skeleton height={40} />
            </p>
          </div>
        </div>
        <div className={styles.oneGrid}>
          <div className={styles.field}>
            <label>Фамилия</label>
            <p>
              <Skeleton height={40} />
            </p>
          </div>
        </div>
        <div className={styles.twoGrid}>
          <div className={styles.field}>
            <label>Дата рождения</label>
            <p>
              <Skeleton height={40} />
            </p>
          </div>
          <div className={styles.field}>
            <label>Пол</label>
            <p>
              <Skeleton height={40} />
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};
