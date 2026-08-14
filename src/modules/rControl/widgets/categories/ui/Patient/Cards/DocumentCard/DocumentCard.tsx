import type { PatientDto } from "../../../../model/types/GetPatientResult";
import { Divider } from "../../../../../../../../components/ui/Divider/Divider";
import styles from "../styles.module.scss";
import dayjs from "dayjs";

interface DocumentCardProps {
  patient: PatientDto;
}
export const DocumentCard = ({ patient }: DocumentCardProps) => {
  return (
    <article className={`${styles.cardRoot} ${styles.documentCard}`}>
      <header className={styles.cardHeader}>
        <h2>Документ</h2>
      </header>
      <Divider />

      <div className={styles.cardContent}>
        <div className={styles.oneGrid}>
          <div className={styles.field}>
            <label>Тип</label>
            <p>
              {`${patient.documentTypeCode ? patient.documentTypeCode + ": " : ""}${patient.documentTypeName}`}
            </p>
          </div>
        </div>
        <div className={styles.twoGrid}>
          <div className={styles.field}>
            <label>Серия</label>
            <p>{patient.documentSeries ?? "-"}</p>
          </div>
          <div className={styles.field}>
            <label>Номер</label>
            <p>{patient.documentNumber ?? "-"}</p>
          </div>
        </div>
        <div className={styles.oneGrid}></div>
        <div className={styles.twoGrid}>
          <div className={styles.field}>
            <label>Дата выдачи</label>
            <p>
              {patient.documentIssueDate
                ? dayjs(patient.documentIssueDate).format("DD.MM.YYYY")
                : "-"}
            </p>
          </div>
        </div>
        <div className={styles.oneGrid}>
          <div className={styles.field}>
            <label>Кем выдан</label>
            <p>{patient.issuedBy ?? "-"}</p>
          </div>
        </div>
      </div>
    </article>
  );
};
