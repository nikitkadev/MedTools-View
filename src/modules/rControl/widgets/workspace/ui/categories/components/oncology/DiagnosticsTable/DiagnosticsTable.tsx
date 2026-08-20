import { Divider } from "../../../../../../../../../components/ui/Divider/Divider";
import type { TargetDbType } from "../../../../../../../../../shared/types/TargetDbType";
import { TableSkeleton } from "../../../../../../../../../shared/ui/TableSkeleton/TableSkeleton";
import { TableStateRow } from "../../../../../../../../../shared/ui/TableStateRow/TableStateRow";
import { useDiagnosticsQuery } from "../../../../../model/queries/categories/oncology/useDiagnosticsQuery";
import styles from "./styles.module.scss";
import dayjs from "dayjs";

interface DiagnosticsTableProps {
  oncologyCaseUid: number | null;
  targetDb: TargetDbType | null;
}

export const DiagnosticsTable = ({
  oncologyCaseUid,
  targetDb,
}: DiagnosticsTableProps) => {
  const {
    data: diagnostics,
    isLoading,
    isError,
    error,
  } = useDiagnosticsQuery(oncologyCaseUid, targetDb);

  return (
    <section className={styles.diagnosticsTableRoot}>
      <header className={styles.diagnosticsTableRootHeader}>
        <h2>Диагностический блок</h2>
      </header>
      <Divider />
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>Дата взятия материала</th>
              <th>Тип д. п.</th>
              <th>Код д. п.</th>
              <th>Код результата диагностики</th>
              <th>Результат диагностики</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <TableSkeleton columns={5} rows={5} />
            ) : isError ? (
              <TableStateRow
                colSpan={5}
                title="Уп-с ошибка"
                description={error.message}
              />
            ) : !diagnostics ? (
              <TableStateRow
                colSpan={5}
                title="Выберите онкологический случай"
                description="Хотя как вы его можете выбрать..."
              />
            ) : diagnostics.length === 0 ? (
              <TableStateRow
                colSpan={5}
                title="Данных не найдено"
                description="Онкологический случай не содержит диагностики"
              />
            ) : (
              diagnostics.map((diagnosticItem) => (
                <tr className="noneHover">
                  <td>
                    {diagnosticItem.specimenCollectionDate
                      ? dayjs(diagnosticItem.specimenCollectionDate).format(
                          "DD.MM.YYYY",
                        )
                      : "-"}
                  </td>
                  <td>{diagnosticItem.diagnosticType ?? "-"}</td>
                  <td>{diagnosticItem.diagnosticCode ?? "-"}</td>
                  <td>{diagnosticItem.diagnosticResultCode ?? "-"}</td>
                  <td>
                    {diagnosticItem.isResultReceived === null
                      ? "-"
                      : diagnosticItem.isResultReceived
                        ? "Да"
                        : "Нет"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};
