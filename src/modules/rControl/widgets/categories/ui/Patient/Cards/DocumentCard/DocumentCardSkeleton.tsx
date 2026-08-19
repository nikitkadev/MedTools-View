import { Skeleton } from "@mui/material";
import { Divider } from "../../../../../../../../components/ui/Divider/Divider";
import styles from "../styles.module.scss";

export const DocumentCardSkeleton = () => {
  return (
    <article className={`${styles.cardRoot} ${styles.documentCard}`}>
      <header className={styles.cardHeader}>
        <h2>Документ</h2>
      </header>
      <Divider />
      
      <div className={styles.cardContent}>
        <div className={styles.oneGrid}>
          <div className={styles.field}>
            <label>Тип</label>
            <p>
              <Skeleton height={40} />
            </p>
          </div>
        </div>
        <div className={styles.twoGrid}>
          <div className={styles.field}>
            <label>Серия</label>
            <p>
              <Skeleton height={40} />
            </p>
          </div>
          <div className={styles.field}>
            <label>Номер</label>
            <p>
              <Skeleton height={40} />
            </p>
          </div>
        </div>
        <div className={styles.oneGrid}>
          
        </div>
        <div className={styles.twoGrid}>
          <div className={styles.field}>
            <label>Дата выдачи</label>
            <p>
              <Skeleton height={40} />
            </p>
          </div>
        </div>
        <div className={styles.oneGrid}>
          <div className={styles.field}>
            <label>Кем выдан</label>
            <p>
              <Skeleton height={40} />
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};
