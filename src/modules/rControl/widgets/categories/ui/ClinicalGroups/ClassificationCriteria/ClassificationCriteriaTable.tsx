import type { TargetDbType } from "../../../../../../../shared/types/TargetDbType";
import { Divider } from "../../../../../../../components/ui/Divider/Divider";
import { TableSkeleton } from "../../../../../../../shared/ui/TableSkeleton/TableSkeleton";
import { TableStateRow } from "../../../../../../../shared/ui/TableStateRow/TableStateRow";
import { useClassificationCriteriaQuery } from "../../../model/queries/ClinicalGroups/useClassificationCriteriaQuery";
import styles from "./styles.module.scss";

interface ClassificationCriteriaTableProps {
  clinicalGroupUid: number | null;
  targetDb: TargetDbType | null;
}

export const ClassificationCriteriaTable = ({
  clinicalGroupUid,
  targetDb,
}: ClassificationCriteriaTableProps) => {
  const {
    data: classificationCriteria,
    isLoading,
    isError,
    error,
  } = useClassificationCriteriaQuery(clinicalGroupUid, targetDb);

  return (
    <section className={styles.classificationCriteriaTableRoot}>
      <header className={styles.classificationCriteriaTableRootHeader}>
        <h2>Классификационные критерии</h2>
      </header>
      <Divider />
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>Критерий</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <TableSkeleton columns={1} rows={1} />
            ) : isError ? (
              <TableStateRow
                colSpan={1}
                title="Уп-с ошибка"
                description={error.message}
              />
            ) : !classificationCriteria ? (
              <TableStateRow
                colSpan={1}
                title="Выберите клиническую группу"
                description="TODO: Перенести в бейджик"
              />
            ) : classificationCriteria.length === 0 ? (
              <TableStateRow
                colSpan={1}
                title="Данных не найдено"
                description="TODO: Перенести в бейджик"
              />
            ) : (
              classificationCriteria.map((classificationCriterion) => (
                <tr
                  className="noneHover"
                  key={classificationCriterion.classificationCriterionUid}
                >
                  <td>{classificationCriterion.classificationCriterion}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};
