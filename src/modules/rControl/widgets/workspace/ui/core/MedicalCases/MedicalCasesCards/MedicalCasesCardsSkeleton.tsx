import { CardField } from "../../../../../../../../shared/ui/CardField/CardField";
import { Skeleton } from "@mui/material";
import styles from "./styles.module.scss";

export const MedicalCasesCardsSkeleton = () => {
  return (
    <article className={styles.cardRoot}>
      <header className={styles.cardHeader}>
        <h2>Медицинский случай</h2>
      </header>
      <div className={styles.cardContent}>
        <div className={styles.threeGrid}>
          <CardField label="Профиль" value={<Skeleton />} />
          <CardField label="Это ребенок" value={<Skeleton />} />
          <CardField label="Специальность врача" value={<Skeleton />} />
        </div>
        <div className={styles.twoGrid}>
          <CardField label="Лечение с" value={<Skeleton />} />
          <CardField label="Лечение по" value={<Skeleton />} />
        </div>
        <div className={styles.oneGrid}>
          <CardField label="Диагноз" value={<Skeleton />} />
        </div>
        <div className={styles.twoGrid}>
          <CardField label="Количество" value={<Skeleton />} />
          <CardField label="Тариф" value={<Skeleton />} />
        </div>
        <div className={styles.threeGrid}>
          <CardField label="Предъявлено" value={<Skeleton />} />
          <CardField label="Принято" value={<Skeleton />} />
          <CardField label="Принято СМО" value={<Skeleton />} />
        </div>
      </div>
    </article>
  );
};
