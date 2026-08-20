import type { MedicalCaseDetailsDto } from "../../../../../model/types/categories/medicalCases/GetMedicalCaseDetailsResult";
import { Divider } from "../../../../../../../../../components/ui/Divider/Divider";
import { CardField } from "../../../../../../../../../shared/ui/CardField/CardField";
import styles from "./styles.module.scss";
import dayjs from "dayjs";

interface MedicalCaseCardProps {
  medicalCaseDetails: MedicalCaseDetailsDto;
}

export const MedicalCaseCard = ({
  medicalCaseDetails,
}: MedicalCaseCardProps) => {
  return (
    <article className={styles.cardRoot}>
      <header className={styles.cardHeader}>
        <h2>Детали медицинского случая</h2>
      </header>
      <Divider />
      <div className={styles.cardContent}>
        <div className={styles.threeGrid}>
          <CardField
            label="Профиль"
            value={medicalCaseDetails.medicalProfile}
          />
          <CardField
            label="Подразделение"
            value={medicalCaseDetails.department ?? "-"}
          />
          <CardField
            label="Отделение"
            value={medicalCaseDetails.departmentCode ?? "-"}
          />
        </div>
        <div className={styles.twoGrid}>
          <CardField
            label="Специальность"
            value={medicalCaseDetails.physicianSpecialty}
          />
          <CardField
            label="Это ребенок"
            value={medicalCaseDetails.isPediatric ? "Да" : "Нет"}
          />
        </div>
        <div className={styles.oneGrid}>
          <CardField
            label="Цель посещения"
            value={medicalCaseDetails.visitPurpose ?? "-"}
          />
        </div>
        <div className={styles.threeGrid}>
          <CardField
            label="Профиль койки"
            value={medicalCaseDetails.bedProfile ?? "-"}
          />
          <CardField
            label="Номер истории"
            value={medicalCaseDetails.medicalRecordNumber}
          />
          <CardField
            label="Койко- / пациенто дни"
            value={medicalCaseDetails.hospitalizationDuration ?? "-"}
          />
        </div>
        <div className={styles.threeGrid}>
          <CardField
            label="Это поступление / перевод"
            value={
              medicalCaseDetails.isAdmissionTransfer === null
                ? "-"
                : medicalCaseDetails.isAdmissionTransfer
                  ? "Да"
                  : "Нет"
            }
          />
          <CardField
            label="Это реабилитация"
            value={
              medicalCaseDetails.isRehabilitation === null
                ? "-"
                : medicalCaseDetails.isRehabilitation
                  ? "Да"
                  : "Нет"
            }
          />
          <CardField
            label="Масса тела (кг)"
            value={medicalCaseDetails.weight ?? "-"}
          />
        </div>
        <div className={styles.threeGrid}>
          <CardField
            label="Уровень ЛПУ"
            value={medicalCaseDetails.facilityLevel ?? "-"}
          />
          <CardField
            label="Это подозрение на ЗНО"
            value={
              medicalCaseDetails.isOncologySuspicion === null
                ? "-"
                : medicalCaseDetails.isOncologySuspicion
                  ? "Да"
                  : "Нет"
            }
          />
          <CardField
            label="Код лечащего врача"
            value={medicalCaseDetails.physicianCode}
          />
        </div>
        <div className={styles.threeGrid}>
          <CardField
            label="Лечение с"
            value={dayjs(medicalCaseDetails.treatmentStartDate).format(
              "DD.MM.YYYY",
            )}
          />
          <CardField
            label="Лечение по"
            value={dayjs(medicalCaseDetails.treatmentEndDate).format(
              "DD.MM.YYYY",
            )}
          />
          <CardField
            label="Количество"
            value={medicalCaseDetails.paidUnits ?? "-"}
          />
        </div>
        <div className={styles.oneGrid}>
          <CardField
            label="Первичный диагноз"
            value={medicalCaseDetails.initialDiagnosis ?? "-"}
          />
        </div>
        <div className={styles.oneGrid}>
          <CardField
            label="Основной диагноз"
            value={medicalCaseDetails.primaryDiagnosis}
          />
        </div>
        <div className={styles.twoGrid}>
          <CardField
            label="Характер основного заболевания"
            value={medicalCaseDetails.diseaseCharacter ?? "-"}
          />
          <CardField
            label="Комментарий"
            value={medicalCaseDetails.internalComment ?? "-"}
          />
        </div>
      </div>
    </article>
  );
};
