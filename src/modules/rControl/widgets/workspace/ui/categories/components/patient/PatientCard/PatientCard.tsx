import { Divider } from "../../../../../../../../../components/ui/Divider/Divider";
import type { PatientDto } from "../../../../../model/types/categories/patient/GetPatientResult";
import styles from "./styles.module.scss";
import dayjs from "dayjs";

interface PatientCardProps {
  patient: PatientDto;
}

export const PatientCard = ({ patient }: PatientCardProps) => {
  return (
    <article className={`${styles.cardRoot} ${styles.patientCard}`}>
      <header className={styles.cardHeader}>
        <h2>Пациент</h2>
      </header>
      <Divider />
      <div className={styles.cardContent}>
        <div className={styles.twoGrid}>
          <div className={styles.field}>
            <label>Имя</label>
            <p>{patient.patientFirstName}</p>
          </div>
          <div className={styles.field}>
            <label>Отчество</label>
            <p>{patient.patientMiddleName}</p>
          </div>
        </div>
        <div className={styles.oneGrid}>
          <div className={styles.field}>
            <label>Фамилия</label>
            <p>{patient.patientLastName}</p>
          </div>
        </div>
        <div className={styles.twoGrid}>
          <div className={styles.field}>
            <label>Дата рождения</label>
            <p>{dayjs(patient.patientBirthDate).format("DD.MM.YYYY")}</p>
          </div>
          <div className={styles.field}>
            <label>Пол</label>
            <p>{patient.patientSex}</p>
          </div>
        </div>
      </div>
    </article>
  );
};
