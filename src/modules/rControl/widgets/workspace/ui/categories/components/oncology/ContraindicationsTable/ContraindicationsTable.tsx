import type { TargetDbType } from "../../../../../../../../../shared/types/TargetDbType";
import { Divider } from "../../../../../../../../../components/ui/Divider/Divider";
import { TableSkeleton } from "../../../../../../../../../shared/ui/TableSkeleton/TableSkeleton";
import { TableStateRow } from "../../../../../../../../../shared/ui/TableStateRow/TableStateRow";
import { useContraindicationsQuery } from "../../../../../model/queries/categories/oncology/useContraindicationsQuery";
import styles from "./styles.module.scss";
import dayjs from "dayjs";

interface ContraindicationsTableProps {
  oncologyCaseUid: number | null;
  targetDb: TargetDbType | null;
}

export const ContraindicationsTable = ({
  oncologyCaseUid,
  targetDb,
}: ContraindicationsTableProps) => {
  const {
    data: contraindications,
    isLoading,
    isError,
    error,
  } = useContraindicationsQuery(oncologyCaseUid, targetDb);

  return (
    <section className={styles.contraindicationsTableRoot}>
      <header className={styles.contraindicationsTableRootHeader}>
        <h2>Противопоказания</h2>
      </header>
      <Divider />
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>Код</th>
              <th>Дата регистрации</th>
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
            ) : !contraindications ? (
              <TableStateRow
                colSpan={2}
                title="Выберите онкологический случай"
                description="Хотя опять же, как вы его выберите не понятно"
              />
            ) : contraindications.length === 0 ? (
              <TableStateRow
                colSpan={2}
                title="Данных не найдено"
                description="Не найдены противпоказания по данному онкологическому случаю"
              />
            ) : (
              contraindications.map((contraindication) => (
                <tr
                  className="noneHover"
                  key={contraindication.contraindicationUid}
                >
                  <td>{contraindication.contraindication}</td>
                  <td>
                    {dayjs(contraindication.contraindicationDate).format(
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