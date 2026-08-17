import type { CompletedCaseDetailsDto } from "../../../../model/types/MedicalCaseDetails/GetCompletedCaseDetailsResult";
import { Divider } from "../../../../../../../../components/ui/Divider/Divider";
import { CardField } from "../../../../../../../../shared/ui/CardField/CardField";
import styles from "../styles.module.scss";
import dayjs from "dayjs";

interface CompletedCaseCardProps {
  completedCaseDetails: CompletedCaseDetailsDto;
}

export const CompletedCaseCard = ({
  completedCaseDetails,
}: CompletedCaseCardProps) => {
  return (
    <article className={styles.cardRoot}>
      <header className={styles.cardHeader}>
        <h2>Детали законченного случая случая</h2>
      </header>
      <Divider />
      <div className={styles.cardContent}>
        <div className={styles.oneGrid}>
          <CardField
            label="Код ЛПУ"
            value={completedCaseDetails.medicalOrganizationCode}
          />
        </div>
        <div className={styles.oneGrid}>
          <CardField
            label="Наименование ЛПУ"
            value="TODO: Расширить до названия"
          />
        </div>
        <div className={styles.oneGrid}>
          <CardField
            label="Код направившей МО"
            value={completedCaseDetails.referringMedicalOrganizationCode ?? "-"}
          />
        </div>
        <div className={styles.oneGrid}>
          <CardField
            label="Наименование направившей МО"
            value="TODO: Расширить до названия"
          />
        </div>
        <div className={styles.twoGrid}>
          <CardField
            label="Дата направления"
            value={
              completedCaseDetails.referralDate
                ? dayjs(completedCaseDetails.referralDate).format("DD.MM.YYYY")
                : "-"
            }
          />
          <CardField
            label="Условия оказания мед. помощи"
            value={completedCaseDetails.careConditions}
          />
        </div>
        <div className={styles.oneGrid}>
          <CardField
            label="Вид мед. помощи"
            value={completedCaseDetails.medicalCareType}
          />
        </div>
        <div className={styles.twoGrid}>
          <CardField
            label="Форма медицинской помощи"
            value={completedCaseDetails.medicalCareForm}
          />
          <CardField
            label="Способ оплаты"
            value={completedCaseDetails.paymentMethodCode}
          />
        </div>
        <div className={styles.threeGrid}>
          <CardField
            label="Лечение с"
            value={dayjs(completedCaseDetails.treatmentStartDate).format(
              "DD.MM.YYYY",
            )}
          />
          <CardField
            label="Лечение по"
            value={dayjs(completedCaseDetails.treatmentEndDate).format(
              "DD.MM.YYYY",
            )}
          />
          <CardField
            label="Койко- / пациенто дни"
            value={completedCaseDetails.hospitalizationDuration ?? "-"}
          />
        </div>
        <div className={styles.twoGrid}>
          <CardField
            label="Это внутрибольничный перевод"
            value={
              completedCaseDetails.isIntrahospitalTransfer === null
                ? "-"
                : completedCaseDetails.isIntrahospitalTransfer
                  ? "Да"
                  : "Нет"
            }
          />
        </div>
        <div className={styles.twoGrid}>
          <CardField
            label="Результат"
            value={completedCaseDetails.hospitalizationOutcome}
          />
          <CardField
            label="Результат диспансеризации"
            value={completedCaseDetails.screeningResult ?? "-"}
          />
        </div>
        <div className={styles.twoGrid}>
          <CardField
            label="Это отказ от диспансеризации"
            value={
              completedCaseDetails.isRefusal === null
                ? "-"
                : completedCaseDetails.isRefusal
                  ? "Да"
                  : "Нет"
            }
          />
          <CardField
            label="Это мобильная бригада"
            value={
              completedCaseDetails.isMobileTeam === null
                ? "-"
                : completedCaseDetails.isMobileTeam
                  ? "Да"
                  : "Нет"
            }
          />
        </div>
        <div className={styles.oneGrid}>
          <CardField
            label="Исход"
            value={completedCaseDetails.diseaseOutcome}
          />
        </div>
      </div>
    </article>
  );
};
