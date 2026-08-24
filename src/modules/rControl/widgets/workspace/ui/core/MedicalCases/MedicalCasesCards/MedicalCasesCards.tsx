import type { MedicalCaseDto } from "../../../../model/types/core/results/GetMedicalCaseListItemsResult";
import { CardField } from "../../../../../../../../shared/ui/CardField/CardField";
import styles from "./styles.module.scss";
import dayjs from "dayjs";
import { Divider } from "../../../../../../../../components/ui/Divider/Divider";

interface MedicalCasesCardsProps {
  medicalCases: MedicalCaseDto[];
  selectedMedicalCaseUid: number | null;
  selectMedicalCase: (medicalCaseUid: number | null) => void;
}

export const MedicalCasesCards = ({
  medicalCases,
  selectedMedicalCaseUid,
  selectMedicalCase,
}: MedicalCasesCardsProps) => {
  return (
    <section className={styles.medicalCasesCards}>
      {medicalCases.map((medicalCase) => (
        <article
          onClick={() => selectMedicalCase(medicalCase.medicalCaseUid)}
          className={`${styles.cardRoot} ${selectedMedicalCaseUid === medicalCase.medicalCaseUid ? styles.selectedCard : ""}`}
        >
          <header className={styles.cardHeader}>
            <h2>Медицинский случай</h2>
          </header>
          <div className={styles.cardContent}>
            <div className={styles.cardBlock}>
              <div className={styles.cardBlockField}>
                <CardField
                  label="Профиль"
                  inline={true}
                  value={medicalCase.medicalProfile ?? "-"}
                />

                <CardField
                  inline={true}
                  label="Специальность"
                  value={medicalCase.physicianSpecialty}
                />
                <CardField
                  inline={true}
                  label="Диагноз"
                  value={medicalCase.primaryDiagnosis}
                />
              </div>

              <div className={styles.cardBlockField}>
                <CardField
                  inline={true}
                  label="Период лечения"
                  value={`${dayjs(medicalCase.treatmentStartDate).format("DD.MM.YYYY")} - ${dayjs(medicalCase.treatmentEndDate).format("DD.MM.YYYY")}`}
                />

                <CardField
                  inline={true}
                  label="Категория"
                  value={medicalCase.isPediatric ? "Ребенок" : "Взрослый"}
                />
              </div>
            </div>

            <Divider />

            <div className={styles.cardBlock}>
              <div className={styles.cardBlockField}>
                <CardField
                  inline={true}
                  label="Тариф"
                  value={medicalCase.unitRate ?? "-"}
                />

                <CardField
                  inline={true}
                  label="Количество"
                  value={medicalCase.paidUnits ?? "-"}
                />
              </div>

              <div className={styles.cardBlockField}>
                <CardField
                  inline={true}
                  spaceBetween={true}
                  label="Предъявлено"
                  value={`${medicalCase.amountBilled} ₽`}
                />
                <CardField
                  inline={true}
                  spaceBetween={true}
                  label="Принято"
                  value={
                    medicalCase.approvedAmount
                      ? `${medicalCase.approvedAmount} ₽`
                      : "-"
                  }
                />
                <CardField
                  inline={true}
                  spaceBetween={true}
                  label="Принято СМО"
                  value={
                    medicalCase.insuranceCompanyApprovedAmount
                      ? `${medicalCase.insuranceCompanyApprovedAmount} ₽`
                      : "-"
                  }
                />
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};
