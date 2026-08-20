import type { OncologyCaseDto } from "../../../../../model/types/categories/oncology/GetOncologyCaseResult";
import { Divider } from "../../../../../../../../../components/ui/Divider/Divider";
import { CardField } from "../../../../../../../../../shared/ui/CardField/CardField";
import styles from "./styles.module.scss";

interface OncologyCaseCardProps {
  oncologyCase: OncologyCaseDto;
}

export const OncologyCaseCard = ({ oncologyCase }: OncologyCaseCardProps) => {
  return (
    <article className={styles.cardRoot}>
      <header className={styles.cardHeader}>
        <h2>Детали онкологического случая</h2>
      </header>
      <Divider />
      <div className={styles.cardContent}>
        <div className={styles.oneGrid}>
          <CardField
            label="Повод обращения"
            value={oncologyCase.referralReason ?? "-"}
          />
        </div>
        <div className={styles.oneGrid}>
          <CardField
            label="Стадия заболевания"
            value={oncologyCase.stage ?? "-"}
          />
        </div>
        <div className={styles.threeGrid}>
          <CardField
            label="Значение Tumor"
            value={oncologyCase.tumorValue ?? "-"}
          />
          <CardField
            label="Значение Nodus"
            value={oncologyCase.nodusValue ?? "-"}
          />
          <CardField
            label="Значение Metastatsis"
            value={oncologyCase.metastasisValue ?? "-"}
          />
        </div>
        <div className={styles.oneGrid}>
          <CardField
            label="Признак выявления метастазов"
            value={
              oncologyCase.isMetastasisDetected === null
                ? "-"
                : oncologyCase.isMetastasisDetected
                  ? "Да"
                  : "Нет"
            }
          />
        </div>
        <div className={styles.oneGrid}>
          <CardField
            label="Суммарная очаговая доза"
            value={oncologyCase.totalFocusDose ?? "-"}
          />
        </div>
      </div>
    </article>
  );
};
