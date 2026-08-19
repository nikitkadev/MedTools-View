import type { TargetDbType } from "../../../../../../../shared/types/TargetDbType";
import { Divider } from "../../../../../../../components/ui/Divider/Divider";
import { useTreatmentComplexityCoefficientsQuery } from "../../../model/queries/ClinicalGroups/useTreatmentComplexityCoefficientsQuery";
import styles from "./styles.module.scss";
import { TableSkeleton } from "../../../../../../../shared/ui/TableSkeleton/TableSkeleton";
import { TableStateRow } from "../../../../../../../shared/ui/TableStateRow/TableStateRow";

interface TreatmentComplexityCoefficientsTableProps {
  clinicalGroupUid: number | null;
  targetDb: TargetDbType | null;
}

export const TreatmentComplexityCoefficientsTable = ({
  clinicalGroupUid,
  targetDb,
}: TreatmentComplexityCoefficientsTableProps) => {
  const {
    data: treatmentComplexityCoefficients,
    isLoading,
    isError,
    error,
  } = useTreatmentComplexityCoefficientsQuery(clinicalGroupUid, targetDb);

  return (
    <section className={styles.treatmentComplexityCoefficientsTableRoot}>
      <header className={styles.treatmentComplexityCoefficientsTableRootHeader}>
        <h2>Коэффициенты сложности лечения пациента</h2>
      </header>
      <Divider />
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>КСЛП</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <TableSkeleton columns={2} rows={2} />
            ) : isError ? (
              <TableStateRow
                colSpan={2}
                title="Уп-с ошибка"
                description={error.message}
              />
            ) : !treatmentComplexityCoefficients ? (
              <TableStateRow
                colSpan={2}
                title="Выберите клиническую группу"
                description="TODO: Перенести в бейджик"
              />
            ) : treatmentComplexityCoefficients.length === 0 ? (
              <TableStateRow
                colSpan={2}
                title="Данных не найдено"
                description="TODO: Перенести в бейджик"
              />
            ) : (
              treatmentComplexityCoefficients.map(
                (treatmentComplexityCoefficient) => (
                  <tr
                    className="noneHover"
                    key={
                      treatmentComplexityCoefficient.treatmentComplexityCoefficientUid ??
                      "-"
                    }
                  >
                    <td>
                      {treatmentComplexityCoefficient.complexityCoefficientNumber ??
                        "-"}
                    </td>
                    <td>
                      {
                        treatmentComplexityCoefficient.complexityCoefficientValue
                      }
                    </td>
                  </tr>
                ),
              )
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};
