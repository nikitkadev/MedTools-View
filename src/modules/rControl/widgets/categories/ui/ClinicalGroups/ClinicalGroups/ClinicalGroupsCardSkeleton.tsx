import { Skeleton } from "@mui/material";
import { Divider } from "../../../../../../../components/ui/Divider/Divider";
import { CardField } from "../../../../../../../shared/ui/CardField/CardField";
import styles from "./styles.module.scss";

export const ClinicalGroupsCardSkeleton = () => {
  return (
    <article className={styles.cardRoot}>
      <header className={styles.cardHeader}>
        <h2>Клиническая группа</h2>
      </header>
      <Divider />
      <div className={styles.cardContent}>
        <div className={styles.threeGrid}>
          <CardField label="КСГ ТФОМС" value={<Skeleton />} />
          <CardField label="КСГ" value={<Skeleton />} />
          <CardField label="КСГ" value={<Skeleton />} />
        </div>
        <div className={styles.twoGrid}>
          <CardField label="Модель определения КСГ" value={<Skeleton />} />
          <CardField
            label="Это использование подгруппы КСГ"
            value={<Skeleton />}
          />
        </div>
        <div className={styles.threeGrid}>
          <CardField label="Коэффициент затратоемскости" value={<Skeleton />} />
          <CardField label="Коэффициент управления" value={<Skeleton />} />
          <CardField label="Коэффициент дифференциации" value={<Skeleton />} />
        </div>
        <div className={styles.twoGrid}>
          <CardField label="Базовая ставка" value={<Skeleton />} />
          <CardField label="Коэффициент уровня" value={<Skeleton />} />
        </div>
        <div className={styles.twoGrid}>
          <CardField label="Это использование КСЛП" value={<Skeleton />} />
          <CardField label="Примененный КСЛП" value={<Skeleton />} />
        </div>
      </div>
    </article>
  );
};
