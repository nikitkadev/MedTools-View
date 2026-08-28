import type { ClassificationCriterionDto } from "../../../../../../model/types/categories/clinicalGroup/GetClassificationCriteriaResult";
import { Chip, Skeleton } from "@mui/material";
import styles from "./styles.module.scss";

interface ClassificationCriteriaBodyProps {
  classificationCriteria: ClassificationCriterionDto[];
  isPending: boolean;
}

export const ClassificationCriteriaBody = ({
  classificationCriteria,
  isPending,
}: ClassificationCriteriaBodyProps) => {
  return (
    <div className="cardContent">
      <div className="cardBlock">
        {isPending ? (
          <div className={styles.classificationCriteriaChips}>
            {Array.from({ length: 5 }).map((_index) => (
              <Chip
                size="medium"
                variant="outlined"
                color="default"
                label={<Skeleton width={10} />}
              />
            ))}
          </div>
        ) : (
          <div className={styles.classificationCriteriaChips}>
            {classificationCriteria.map((classificationCriterion) => (
              <Chip
                size="medium"
                variant="filled"
                color="default"
                label={classificationCriterion.classificationCriterion}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
