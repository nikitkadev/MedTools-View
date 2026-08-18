import type { TargetDbType } from "../../../../../../../shared/types/TargetDbType";
import { Divider } from "../../../../../../../components/ui/Divider/Divider";
import { TableSkeleton } from "../../../../../../../shared/ui/TableSkeleton/TableSkeleton";
import { TableStateRow } from "../../../../../../../shared/ui/TableStateRow/TableStateRow";
import { useMedicationsQuery } from "../../../model/queries/Oncology/useMedicationsQuery";
import styles from "./styles.module.scss";

interface MedicationsTable {
  oncologySericeUid: number | null;
  targetDb: TargetDbType | null;
}

export const MedicationsTable = ({
  oncologySericeUid,
  targetDb,
}: MedicationsTable) => {
  const {
    data: medications,
    isLoading,
    isError,
    error,
  } = useMedicationsQuery(oncologySericeUid, targetDb);

  return (
    <section className={styles.medicationsTableRoot}>
      <header className={styles.medicationsTableRootHeader}>
        <h2>Лекарственный препарат</h2>
      </header>
      <Divider />
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>Регистрационный номер</th>
              <th>Схема лекарственной терапии</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <TableSkeleton columns={2} rows={5} />
            ) : isError ? (
              <TableStateRow
                colSpan={2}
                title="Уп-с ошибка"
                description={error.message}
              />
            ) : !medications ? (
              <TableStateRow
                colSpan={2}
                title="Выберите онкологическую услугу"
                description="А вот тут вы уже вольны выбирать!"
              />
            ) : medications.length === 0 ? (
              <TableStateRow
                colSpan={2}
                title="Данных не найдено"
                description="Онкологическая услуга не содержит информации о препаратах"
              />
            ) : (
              medications.map((medication) => (
                <tr key={medication.medicamentUid}>
                  <td>{medication.drugIdentifier}</td>
                  <td>{medication.therapyRegimenCode ?? "-"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};
