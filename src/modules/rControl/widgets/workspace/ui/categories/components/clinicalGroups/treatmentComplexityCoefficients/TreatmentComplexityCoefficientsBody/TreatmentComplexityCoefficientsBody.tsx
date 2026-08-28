import type { TreatmentComplexityCoefficientDto } from "../../../../../../model/types/categories/clinicalGroup/GetTreatmentComplexityCoefficientsResult";
import styles from "./styles.module.scss";

interface TreatmentComplexityCoefficientsBodyProps {
  treatmentComplexityCoefficients: TreatmentComplexityCoefficientDto[];
  isPending: boolean;
}

export const TreatmentComplexityCoefficientsBody = ({
  treatmentComplexityCoefficients,
  isPending,
}: TreatmentComplexityCoefficientsBodyProps) => {
  return (
    <div className="cardContent">
      <div className="cardBlock">
        {isPending ? (
          <div></div>
        ) : (
          treatmentComplexityCoefficients.map(
            (treatmentComplexityCoefficient, _index) => (
              <div className={styles.listRow}>
                <div className={styles.number}>
                  <p>{_index + 1}</p>
                </div>
                <div className={styles.listRowContent}>
                  <p className={styles.date}>
                    №
                    {treatmentComplexityCoefficient.complexityCoefficientNumber ??
                      "—"}
                  </p>
                  <p className={styles.description}>
                    {treatmentComplexityCoefficient.complexityCoefficientValue}
                  </p>
                </div>
              </div>
            ),
          )
        )}
      </div>
    </div>
  );
};
