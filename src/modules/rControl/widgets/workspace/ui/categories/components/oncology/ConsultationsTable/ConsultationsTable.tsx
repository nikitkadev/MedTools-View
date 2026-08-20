import { Divider } from "../../../../../../../../../components/ui/Divider/Divider";
import { TableSkeleton } from "../../../../../../../../../shared/ui/TableSkeleton/TableSkeleton";
import { TableStateRow } from "../../../../../../../../../shared/ui/TableStateRow/TableStateRow";
import { useFiltersStore } from "../../../../../../filters/model/store/useFiltersStore";
import { useWorkspaceStore } from "../../../../../model/store/useWorkspaceStore";
import { useConsultationsQuery } from "../../../../../model/queries/categories/oncology/useConsultationsQuery";
import styles from "./styles.module.scss";
import dayjs from "dayjs";

export const ConsultationsTable = () => {
  const { targetDb } = useFiltersStore();
  const { selectedMedicalCaseUid } = useWorkspaceStore();
  const {
    data: consultations,
    isLoading,
    isError,
    error,
  } = useConsultationsQuery(selectedMedicalCaseUid, targetDb);

  return (
    <section className={styles.consultationsTableRoot}>
      <header className={styles.consultationsTableRootHeader}>
        <h2>Консилиум</h2>
      </header>
      <Divider />
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>Цель проведения</th>
              <th>Дата проведения</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <TableSkeleton columns={2} rows={2} />
            ) : isError ? (
              <TableStateRow
                colSpan={2}
                title="Упс-с, произошла ошибка"
                description={error.message}
              />
            ) : !consultations ? (
              <TableStateRow
                colSpan={2}
                title="Выберите медицинский счет"
                description="Вообще этой записи не должно быть в целом в силу логики программы, но мало ли"
              />
            ) : consultations.length === 0 ? (
              <TableStateRow
                colSpan={2}
                title="Данных не найдено"
                description="В данном случае нет консилиумов"
              />
            ) : (
              consultations?.map((consultation) => (
                <tr key={consultation.consultationUid} className="noneHover">
                  <td>{consultation.consultationPurpose}</td>
                  <td>
                    {consultation.consultationDate
                      ? dayjs(consultation.consultationDate).format(
                          "DD.MM.YYYY",
                        )
                      : "-"}
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
