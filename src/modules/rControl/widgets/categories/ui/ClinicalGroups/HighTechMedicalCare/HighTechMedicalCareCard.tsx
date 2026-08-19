import type { HighTechMedicalCareDto } from "../../../model/types/ClinicalGroups/GetHighTechMedicalCareResult";
import { Divider } from "../../../../../../../components/ui/Divider/Divider";
import { CardField } from "../../../../../../../shared/ui/CardField/CardField";
import styles from "./styles.module.scss";
import dayjs from "dayjs";

interface HighTechMedicalCareCardProps {
  highTechMedicalCare: HighTechMedicalCareDto;
}

export const HighTechMedicalCareCard = ({
  highTechMedicalCare,
}: HighTechMedicalCareCardProps) => {
  return (
    <section className={styles.cardRoot}>
      <header className={styles.cardHeader}>
        <h2>ВМП</h2>
      </header>
      <Divider />
      <div className={styles.cardContent}>
        <div className={styles.oneGrid}>
          <CardField
            label="Вид"
            value={highTechMedicalCare.highTechCareTypeCode ?? "-"}
          />
        </div>
        <div className={styles.oneGrid}>
          <CardField
            label="Метод"
            value={highTechMedicalCare.highTechCareMethodCode ?? "-"}
          />
        </div>
        <div className={styles.twoGrid}>
          <CardField
            label="Дата выдачи талона"
            value={
              highTechMedicalCare.voucherIssueDate
                ? dayjs(highTechMedicalCare.voucherIssueDate).format(
                    "DD.MM.YYYY",
                  )
                : ""
            }
          />
          <CardField
            label="Номер талона"
            value={highTechMedicalCare.voucherNumber ?? "-"}
          />
        </div>
        <div className={styles.twoGrid}>
          <CardField
            label="Дата планируемой госпитализации"
            value={
              highTechMedicalCare.plannedAdmissionDate
                ? dayjs(highTechMedicalCare.plannedAdmissionDate).format(
                    "DD.MM.YYYY",
                  )
                : "-"
            }
          />
        </div>
      </div>
    </section>
  );
};
