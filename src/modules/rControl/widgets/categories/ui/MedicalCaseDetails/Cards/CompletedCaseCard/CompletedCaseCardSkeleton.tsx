import { Skeleton } from "@mui/material";
import { Divider } from "../../../../../../../../components/ui/Divider/Divider";
import { CardField } from "../../../../../../../../shared/ui/CardField/CardField";
import styles from "../styles.module.scss";

export const CompletedCaseCardSkeleton = () => {
  return (
    <article className={styles.cardRoot}>
      <header className={styles.cardHeader}>
        <h2>Детали законченного случая случая</h2>
      </header>
      <Divider />
      <div className={styles.cardContent}>
        <div className={styles.oneGrid}>
          <CardField label="Код ЛПУ" value={<Skeleton />} />
        </div>
        <div className={styles.oneGrid}>
          <CardField label="Наименование ЛПУ" value={<Skeleton />} />
        </div>
        <div className={styles.oneGrid}>
          <CardField label="Код направившей МО" value={<Skeleton />} />
        </div>
        <div className={styles.oneGrid}>
          <CardField label="Наименование направившей МО" value={<Skeleton />} />
        </div>
        <div className={styles.twoGrid}>
          <CardField label="Дата направления" value={<Skeleton />} />
          <CardField
            label="Условия оказания мед. помощи"
            value={<Skeleton />}
          />
        </div>
        <div className={styles.oneGrid}>
          <CardField label="Вид мед. помощи" value={<Skeleton />} />
        </div>
        <div className={styles.twoGrid}>
          <CardField label="Форма медицинской помощи" value={<Skeleton />} />
          <CardField label="Способ оплаты" value={<Skeleton />} />
        </div>
        <div className={styles.threeGrid}>
          <CardField label="Лечение с" value={<Skeleton />} />
          <CardField label="Лечение по" value={<Skeleton />} />
          <CardField label="Койко- / пациенто дни" value={<Skeleton />} />
        </div>
        <div className={styles.twoGrid}>
          <CardField
            label="Это внутрибольничный перевод"
            value={<Skeleton />}
          />
        </div>
        <div className={styles.twoGrid}>
          <CardField label="Результат" value={<Skeleton />} />
          <CardField label="Результат диспансеризации" value={<Skeleton />} />
        </div>
        <div className={styles.twoGrid}>
          <CardField
            label="Это отказ от диспансеризации"
            value={<Skeleton />}
          />
          <CardField label="Это мобильная бригада" value={<Skeleton />} />
        </div>
        <div className={styles.oneGrid}>
          <CardField label="Исход" value={<Skeleton />} />
        </div>
      </div>
    </article>
  );
};
