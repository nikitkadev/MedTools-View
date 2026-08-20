import type { TargetDbType } from "../../../../../../../../../shared/types/TargetDbType";
import { Divider } from "../../../../../../../../../components/ui/Divider/Divider";
import { AppTablePagination } from "../../../../../../../../../shared/ui/AppTablePagination/AppTablePagination";
import { TableSkeleton } from "../../../../../../../../../shared/ui/TableSkeleton/TableSkeleton";
import { TableStateRow } from "../../../../../../../../../shared/ui/TableStateRow/TableStateRow";
import { useDefectsQuery } from "../../../../../model/queries/categories/defects/useDefectsQuery";
import styles from "./styles.module.scss";

interface DefectsTableProps {
  medicalCaseUid: number | null;
  targetDb: TargetDbType | null;
  page: number;
  pageSize: number;
  onPageChange: (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    page: number,
  ) => void;
  onRowsPerPageChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

export const DefectsTable = ({
  medicalCaseUid,
  targetDb,
  page,
  pageSize,
  onPageChange,
  onRowsPerPageChange,
}: DefectsTableProps) => {
  const {
    data: getDefectsResult,
    isFetching,
    isLoading,
    isError,
    error,
  } = useDefectsQuery(medicalCaseUid, targetDb, page, pageSize);

  return (
    <section className={styles.defectsTableRoot}>
      <header className={styles.defectsTableRootHeader}>
        <h2>Дефекты</h2>
        <AppTablePagination
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
          pagination={{
            page: page,
            pageSize: pageSize,
          }}
          totalCount={getDefectsResult?.totalCount ?? 0}
          disabled={isFetching}
        />
      </header>
      <Divider />
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>Код</th>
              <th>Комментарий</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <TableSkeleton columns={2} rows={pageSize} />
            ) : isError ? (
              <TableStateRow
                colSpan={2}
                title="Уп-с ошибка"
                description={error.message}
              />
            ) : !getDefectsResult?.defects ? (
              <TableStateRow
                colSpan={2}
                title="Выберите медицинский случай"
                description="TODO: Перенести в бейджик"
              />
            ) : getDefectsResult.defects.length === 0 ? (
              <TableStateRow
                colSpan={2}
                title="Нет данных"
                description="TODO: Перенести в бейджик"
              />
            ) : (
              getDefectsResult.defects.map((defect) => (
                <tr key={defect.defectUid}>
                  <td>{defect.code ?? "-"}</td>
                  <td>{defect.comment}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};
