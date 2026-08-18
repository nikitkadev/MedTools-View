import { Skeleton } from "@mui/material";
import { Divider } from "../../../../../../../components/ui/Divider/Divider";
import { CardField } from "../../../../../../../shared/ui/CardField/CardField";
import styles from "./styles.module.scss";

export const HighTechMedicalCareCardSkeleton = () => {
  return (
    <section className={styles.cardRoot}>
      <header className={styles.cardHeader}>
        <h2>ВМП</h2>
      </header>
      <Divider />
      <div className={styles.cardContent}>
        <div className={styles.oneGrid}>
          <CardField label="Вид" value={<Skeleton />} />
        </div>
        <div className={styles.oneGrid}>
          <CardField label="Метод" value={<Skeleton />} />
        </div>
        <div className={styles.twoGrid}>
          <CardField label="Дата выдачи талона" value={<Skeleton />} />
          <CardField label="Номер талона" value={<Skeleton />} />
        </div>
        <div className={styles.twoGrid}>
          <CardField
            label="Дата планируемой госпитализации"
            value={<Skeleton />}
          />
        </div>
      </div>
    </section>
  );
};
