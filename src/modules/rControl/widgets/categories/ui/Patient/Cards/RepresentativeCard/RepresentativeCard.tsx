import type { PatientDto } from "../../../../model/types/GetPatientResult";
import { Divider } from "../../../../../../../../components/ui/Divider/Divider";
import styles from "../styles.module.scss";
import dayjs from "dayjs";

interface RepresentativeCardProps {
  patient: PatientDto;
}

export const RepresentativeCard = ({ patient }: RepresentativeCardProps) => {
  return (
    <article className={styles.cardRoot}>
      <header className={styles.cardHeader}>
        <h2>Представитель</h2>
      </header>
      <Divider />
      <div className={styles.cardContent}>
        <div className={styles.twoGrid}>
          <div className={styles.field}>
            <label>Имя</label>
            <p>{patient.patientRepresentativeFirstName ?? "-"}</p>
          </div>
          <div className={styles.field}>
            <label>Отчество</label>
            <p>{patient.patientRepresentativeMiddleName ?? "-"}</p>
          </div>
        </div>
        <div className={styles.oneGrid}>
          <div className={styles.field}>
            <label>Фамилия</label>
            <p>{patient.patientRepresentativeLastName ?? "-"}</p>
          </div>
        </div>
        <div className={styles.twoGrid}>
          <div className={styles.field}>
            <label>Дата рождения</label>
            <p>
              {patient.patientRepresentativeBirthday
                ? dayjs(patient.patientRepresentativeBirthday).format(
                    "DD.MM.YYYY",
                  )
                : "-"}
            </p>
          </div>
          <div className={styles.field}>
            <label>Пол</label>
            <p>{patient.patientRepresentativeSex ?? "-"}</p>
          </div>
        </div>
      </div>
    </article>
  );
};
