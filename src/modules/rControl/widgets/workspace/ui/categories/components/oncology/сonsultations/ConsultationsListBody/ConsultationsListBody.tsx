import type { ConsultationDto } from "../../../../../../model/types/categories/oncology/GetConsultationsResult";
import dayjs from "dayjs";
import styles from "./styles.module.scss";

interface ConsultationsListBodyProps {
  consultations: ConsultationDto[];
  isPending: boolean;
}

export const ConsultationsListBody = ({
  consultations,
  isPending,
}: ConsultationsListBodyProps) => {
  return (
    <section className={styles.consultationsListBodyRoot}>
      {isPending ? (
        <div className=""></div>
      ) : (
        consultations.map((consultation, _index) => (
          <div className={styles.listRow}>
            <div className={styles.number}>
              <p>{_index + 1}</p>
            </div>
            <div className={styles.listRowContent}>
              <p className={styles.date}>
                {consultation.consultationDate
                  ? dayjs(consultation.consultationDate).format("DD.MM.YYYY")
                  : "Дата неизвестна"}
              </p>
              <p className={styles.description}>
                {consultation.consultationPurpose}
              </p>
            </div>
          </div>
        ))
      )}
    </section>
  );
};
