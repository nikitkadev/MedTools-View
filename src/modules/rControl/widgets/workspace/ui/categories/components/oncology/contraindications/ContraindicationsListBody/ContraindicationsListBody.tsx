import dayjs from "dayjs";
import type { ContraindicationDto } from "../../../../../../model/types/categories/oncology/GetContraindicationsResult";
import styles from "./styles.module.scss";

interface ContraindicationsListBody {
  contraindications: ContraindicationDto[];
  isPending: boolean;
}

export const ContraindicationsListBody = ({
  contraindications,
  isPending,
}: ContraindicationsListBody) => {
  return (
    <section className={styles.contraindicationsListBody}>
      {isPending ? (
        <div className=""></div>
      ) : (
        contraindications.map((contraindication, _index) => (
          <div className={styles.listRow}>
            <div className={styles.number}>
              <p>{_index + 1}</p>
            </div>
            <div className={styles.listRowContent}>
              <p className={styles.date}>
                {dayjs(contraindication.contraindicationDate).format(
                  "DD.MM.YYYY",
                )}
              </p>
              <p className={styles.description}>
                {`${contraindication.contraindicationCode} : ${contraindication.contraindication}`}
              </p>
            </div>
          </div>
        ))
      )}
    </section>
  );
};
