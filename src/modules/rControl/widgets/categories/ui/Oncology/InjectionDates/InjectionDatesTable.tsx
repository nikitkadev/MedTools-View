import type { TargetDbType } from "../../../../../../../shared/types/TargetDbType";
import { Divider } from "../../../../../../../components/ui/Divider/Divider";
import { useInjectionDatesQuery } from "../../../model/queries/Oncology/useInjectionDatesQuery";
import styles from "./styles.module.scss";
import { TableSkeleton } from "../../../../../../../shared/ui/TableSkeleton/TableSkeleton";
import { TableStateRow } from "../../../../../../../shared/ui/TableStateRow/TableStateRow";
import dayjs from "dayjs";

interface InjectionDatesTableProps {
  medicationUid: number | null;
  targetDb: TargetDbType | null;
}

export const InjectionDatesTable = ({
  medicationUid,
  targetDb,
}: InjectionDatesTableProps) => {
  const {
    data: injectionDates,
    isLoading,
    isError,
    error,
  } = useInjectionDatesQuery(medicationUid, targetDb);

  return (
    <section className={styles.injectionDatesTableRoot}>
      <header className={styles.injectionDatesTableRootHeader}>
        <h2>Дата введения инъекций</h2>
      </header>
      <Divider />
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>Дата введения</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <TableSkeleton columns={1} rows={5} />
            ) : isError ? (
              <TableStateRow
                colSpan={1}
                title="Уп-с ошибка"
                description={error.message}
              />
            ) : !injectionDates ? (
              <TableStateRow
                colSpan={1}
                title="Выберите лекарственный препарат"
                description="Кликните по записе в таблице выше, если записи существуют"
              />
            ) : injectionDates.length === 0 ? (
              <TableStateRow
                colSpan={1}
                title="Данных не найдено"
                description="Лекарственный препарат не содержит дат введения"
              />
            ) : (
              injectionDates.map((injectionDate) => (
                <tr key={injectionDate.injectionDateUid}>
                  <td>
                    {dayjs(injectionDate.administrationDate).format(
                      "DD.MM.YYYY",
                    )}
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
