import { Skeleton } from "@mui/material";
import { CardField } from "../../../../../../../../../shared/ui/CardField/CardField";
import { Divider } from "../../../../../../../../../components/ui/Divider/Divider";
import styles from "./styles.module.scss";

export const OncologyCaseCardSkeleton = () => {
  return (
    <article className={styles.cardRoot}>
      <header className={styles.cardHeader}>
        <h2>Детали онкологического случая</h2>
      </header>
      <Divider />
      <div className={styles.cardContent}>
        <div className={styles.oneGrid}>
          <CardField label="Повод обращения" value={<Skeleton />} />
        </div>
        <div className={styles.oneGrid}>
          <CardField label="Стадия заболевания" value={<Skeleton />} />
        </div>
        <div className={styles.threeGrid}>
          <CardField label="Значение Tumor" value={<Skeleton />} />
          <CardField label="Значение Nodus" value={<Skeleton />} />
          <CardField label="Значение Metastatsis" value={<Skeleton />} />
        </div>
        <div className={styles.oneGrid}>
          <CardField
            label="Признак выявления метастазов"
            value={<Skeleton />}
          />
        </div>
        <div className={styles.oneGrid}>
          <CardField label="Суммарная очаговая доза" value={<Skeleton />} />
        </div>
      </div>
    </article>
  );
};
