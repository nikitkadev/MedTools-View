import { Skeleton } from "@mui/material";
import { Divider } from "../../../../../../../../../components/ui/Divider/Divider";
import styles from "./styles.module.scss";

export const InsuranceCardSkeleton = () => {
  return (
    <article className={`${styles.cardRoot} ${styles.insuranceCard}`}>
      <header className={styles.cardHeader}>
        <h2>СМО</h2>
      </header>
      <Divider />

      <div className={styles.cardContent}>
        <div className={styles.oneGrid}>
          <div className={styles.field}>
            <label>Реестровый номер СМО</label>
            <p>
              <Skeleton height={40} />
            </p>
          </div>
        </div>
        <div className={styles.oneGrid}>
          <div className={styles.field}>
            <label>Наименование СМО</label>
            <p>
              <Skeleton height={40} />
            </p>
          </div>
        </div>
        <div className={styles.twoGrid}>
          <div className={styles.field}>
            <label>ОГРН</label>
            <p>
              <Skeleton height={40} />
            </p>
          </div>
          <div className={styles.field}>
            <label>ОКАТО</label>
            <p>
              <Skeleton height={40} />
            </p>
          </div>
        </div>
        <div className={styles.twoGrid}>
          <div className={styles.field}>
            <label>Номер полиса (новый)</label>
            <p>
              <Skeleton height={40} />
            </p>
          </div>
          <div className={styles.field}>
            <label>Номер полиса (старый)</label>
            <p>
              <Skeleton height={40} />
            </p>
          </div>
        </div>
        <div className={styles.oneGrid}>
          <div className={styles.field}>
            <label>Серия полиса</label>
            <p>
              <Skeleton height={40} />
            </p>
          </div>
        </div>
        <div className={styles.oneGrid}>
          <div className={styles.field}>
            <label>Тип полиса</label>
            <p>
              <Skeleton height={40} />
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};
