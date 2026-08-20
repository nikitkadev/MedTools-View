import { Divider } from "../../../../../../../../../components/ui/Divider/Divider";
import { CardField } from "../../../../../../../../../shared/ui/CardField/CardField";
import type { ClinicalGroupDto } from "../../../../../model/types/categories/clinicalGroup/GetClinicalGroupResult";
import styles from "./styles.module.scss";

interface ClinicalGroupsCardProps {
  clinicalGroup: ClinicalGroupDto;
}

export const ClinicalGroupsCard = ({
  clinicalGroup,
}: ClinicalGroupsCardProps) => {
  return (
    <article className={styles.cardRoot}>
      <header className={styles.cardHeader}>
        <h2>Клиническая группа</h2>
      </header>
      <Divider />
      <div className={styles.cardContent}>
        <div className={styles.threeGrid}>
          <CardField
            label="КСГ ТФОМС"
            value={
              clinicalGroup.calculatedClinicalStatisticalGroupNumber ?? "-"
            }
          />
          <CardField
            label="КСГ"
            value={clinicalGroup.clinicalStatisticalGroupNumber}
          />
          <CardField
            label="КПГ"
            value={clinicalGroup.clinicalProfileGroupNumber ?? "-"}
          />
        </div>
        <div className={styles.twoGrid}>
          <CardField
            label="Модель определения КСГ"
            value={clinicalGroup.clinicalStatisticalGroupModelVersion}
          />
          <CardField
            label="Это использование подгруппы КСГ"
            value={clinicalGroup.isCsgSubgroupUsed ? "Да" : "Нет"}
          />
        </div>
        <div className={styles.threeGrid}>
          <CardField
            label="Коэффициент затратоемскости"
            value={clinicalGroup.costCoefficient}
          />
          <CardField
            label="Коэффициент управления"
            value={clinicalGroup.managementCoefficient}
          />
          <CardField
            label="Коэффициент дифференциации"
            value={clinicalGroup.differentiationCoefficient}
          />
        </div>
        <div className={styles.twoGrid}>
          <CardField label="Базовая ставка" value={clinicalGroup.baseRate} />
          <CardField
            label="Коэффициент уровня"
            value={clinicalGroup.levelCoefficient}
          />
        </div>
        <div className={styles.twoGrid}>
          <CardField
            label="Это использование КСЛП"
            value={clinicalGroup.isClspUsed ? "Да" : "Нет"}
          />
          <CardField
            label="Примененный КСЛП"
            value={clinicalGroup.complexityCoefficient ?? "-"}
          />
        </div>
      </div>
    </article>
  );
};
