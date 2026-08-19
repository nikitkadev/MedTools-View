import { Skeleton } from "@mui/material";
import { CardField } from "../../../../../../../../shared/ui/CardField/CardField";
import { Divider } from "../../../../../../../../components/ui/Divider/Divider";
import styles from "../styles.module.scss";

export const MedicalCaseCardSkeleton = () => {
  return (
    <article className={styles.cardRoot}>
      <header className={styles.cardHeader}>
        <h2>Детали медицинского случая</h2>
      </header>
      <Divider />
      <div className={styles.cardContent}>
        <div className={styles.threeGrid}>
          <CardField label="Профиль" value={<Skeleton />} />
          <CardField label="Подразделение" value={<Skeleton />} />
          <CardField label="Отделение" value={<Skeleton />} />
        </div>
        <div className={styles.twoGrid}>
          <CardField label="Специальность" value={<Skeleton />} />
          <CardField label="Это ребенок" value={<Skeleton />} />
        </div>
        <div className={styles.oneGrid}>
          <CardField label="Цель посещения" value={<Skeleton />} />
        </div>
        <div className={styles.threeGrid}>
          <CardField label="Профиль койки" value={<Skeleton />} />
          <CardField label="Номер истории" value={<Skeleton />} />
          <CardField label="Койко- / пациенто дни" value={<Skeleton />} />
        </div>
        <div className={styles.threeGrid}>
          <CardField label="Это поступление / перевод" value={<Skeleton />} />
          <CardField label="Это реабилитация" value={<Skeleton />} />
          <CardField label="Масса тела (кг)" value={<Skeleton />} />
        </div>
        <div className={styles.threeGrid}>
          <CardField label="Уровень ЛПУ" value={<Skeleton />} />
          <CardField label="Это подозрение на ЗНО" value={<Skeleton />} />
          <CardField label="Код лечащего врача" value={<Skeleton />} />
        </div>
        <div className={styles.threeGrid}>
          <CardField label="Лечение с" value={<Skeleton />} />
          <CardField label="Лечение по" value={<Skeleton />} />
          <CardField label="Количество" value={<Skeleton />} />
        </div>
        <div className={styles.oneGrid}>
          <CardField label="Первичный диагноз" value={<Skeleton />} />
        </div>
        <div className={styles.oneGrid}>
          <CardField label="Основной диагноз" value={<Skeleton />} />
        </div>
        <div className={styles.oneGrid}>
          <CardField label="Сопутствующий диагноз" value={<Skeleton />} />
        </div>
        <div className={styles.oneGrid}>
          <CardField label="Осложнение" value={<Skeleton />} />
        </div>
        <div className={styles.twoGrid}>
          <CardField
            label="Характер основного заболевания"
            value={<Skeleton />}
          />
          <CardField label="Комментарий" value={<Skeleton />} />
        </div>
      </div>
    </article>
  );
};
