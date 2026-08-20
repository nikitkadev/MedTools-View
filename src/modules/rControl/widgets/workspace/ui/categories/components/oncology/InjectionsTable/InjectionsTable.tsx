import type { TargetDbType } from "../../../../../../../../../shared/types/TargetDbType";
import { useInjectionsQuery } from "../../../../../model/queries/categories/oncology/useInjectionsQuery";
import { TableSkeleton } from "../../../../../../../../../shared/ui/TableSkeleton/TableSkeleton";
import { TableStateRow } from "../../../../../../../../../shared/ui/TableStateRow/TableStateRow";
import { Divider } from "../../../../../../../../../components/ui/Divider/Divider";
import styles from "./styles.module.scss";
import dayjs from "dayjs";

interface InjectionsTableProps {
  medicationUid: number | null;
  targetDb: TargetDbType | null;
}

export const InjectionsTable = ({
  medicationUid,
  targetDb,
}: InjectionsTableProps) => {
  const {
    data: injections,
    isLoading,
    isError,
    error,
  } = useInjectionsQuery(medicationUid, targetDb);

  return (
    <section className={styles.injectionsTableRoot}>
      <header className={styles.injectionsTableRootHeader}>
        <h2>Инъекции</h2>
      </header>
      <Divider />
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>Дата инъекции</th>
              <th>Количество в. л. п.</th>
              <th>Количество и. л. п.</th>
              <th>Факт. стоимость л.п.</th>
              <th>Стоимость в. л. п.</th>
              <th>Стоимость и. л. п.</th>
              <th>Редукция применялась</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <TableSkeleton columns={7} rows={5} />
            ) : isError ? (
              <TableStateRow
                colSpan={7}
                title="Уп-с ошибка"
                description={error.message}
              />
            ) : !injections ? (
              <TableStateRow
                colSpan={7}
                title="Выберите лекарственный препарат"
                description="Кликните по записе в таблице препарата, если записи существуют"
              />
            ) : injections.length === 0 ? (
              <TableStateRow
                colSpan={7}
                title="Данных не найдено"
                description="Лекарственный препарат не содержит инъекций"
              />
            ) : (
              injections.map((injection) => (
                <tr key={injection.injectionUid}>
                  <td>
                    {dayjs(injection.administrationDate).format("DD.MM.YYYY")}
                  </td>
                  <td>{injection.administeredQuantity ?? "-"}</td>
                  <td>{injection.consumedQuantity ?? "-"}</td>
                  <td>{injection.unitCost ?? "-"}</td>
                  <td>{injection.administeredCost ?? "-"}</td>
                  <td>{injection.consumedCost ?? "-"}</td>
                  <td>
                    {injection.isReductionApplied === null
                      ? "-"
                      : injection.isReductionApplied
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
