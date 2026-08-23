import type { MedicalCaseDto } from "../../../../model/types/core/results/GetMedicalCaseListItemsResult";
import { Divider } from "../../../../../../../../components/ui/Divider/Divider";
import styles from "./styles.module.scss";
import { CardField } from "../../../../../../../../shared/ui/CardField/CardField";
import dayjs from "dayjs";

interface MedicalCasesCardsProps {
  medicalCases: MedicalCaseDto[];
}

export const MedicalCasesCards = ({ medicalCases }: MedicalCasesCardsProps) => {
  return (
    <section className={styles.medicalCasesCards}>
      {medicalCases.map((medicalCase) => (
        <article className={styles.cardRoot}>
          <header className={styles.cardHeader}>
            <h2>Медицинский случай</h2>
          </header>
          <Divider />
          <div className={styles.cardContent}>
            <div className={styles.threeGrid}>
              <CardField
                label="Профиль"
                value={medicalCase.medicalProfile ?? "-"}
              />
              <CardField
                label="Это ребенок"
                value={medicalCase.isPediatric ? "Да" : "Нет"}
              />
              <CardField
                label="Специальность врача"
                value={medicalCase.physicianSpecialty}
              />
            </div>
            <div className={styles.twoGrid}>
              <CardField
                label="Лечение с"
                value={dayjs(medicalCase.treatmentStartDate).format(
                  "DD.MM.YYYY",
                )}
              />
              <CardField
                label="Лечение по"
                value={dayjs(medicalCase.treatmentEndDate).format("DD.MM.YYYY")}
              />
            </div>
            <div className={styles.oneGrid}>
              <CardField label="Диагноз" value={medicalCase.primaryDiagnosis} />
            </div>
            <div className={styles.twoGrid}>
              <CardField
                label="Количество"
                value={medicalCase.paidUnits ?? "-"}
              />
              <CardField label="Тариф" value={medicalCase.unitRate ?? "-"} />
            </div>
            <div className={styles.threeGrid}>
              <CardField label="Предъявлено" value={medicalCase.amountBilled} />
              <CardField
                label="Принято"
                value={medicalCase.approvedAmount ?? "-"}
              />
              <CardField
                label="Принято СМО"
                value={medicalCase.insuranceCompanyApprovedAmount ?? "-"}
              />
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};
