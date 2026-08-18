import type { TargetDbType } from "../../../../../../../shared/types/TargetDbType";
import { useOncologyServicesQuery } from "../../../model/queries/Oncology/useOncologyServicesQuery";
import { Divider } from "../../../../../../../components/ui/Divider/Divider";
import { TableSkeleton } from "../../../../../../../shared/ui/TableSkeleton/TableSkeleton";
import { TableStateRow } from "../../../../../../../shared/ui/TableStateRow/TableStateRow";
import { useCategoriesStore } from "../../../model/stores/useCategoriesStore";
import styles from "./styles.module.scss";

interface OncologyServicesTableProps {
  oncologyCaseUid: number | null;
  targetDb: TargetDbType | null;
}

export const OncologyServicesTable = ({
  oncologyCaseUid,
  targetDb,
}: OncologyServicesTableProps) => {
  const {
    data: oncologyServices,
    isLoading,
    isError,
    error,
  } = useOncologyServicesQuery(oncologyCaseUid, targetDb);

  const { selectOncologyService, selectedOncologyServiceUid } =
    useCategoriesStore();

  return (
    <section className={styles.oncologyServicesTable}>
      <header className={styles.oncologyServicesTableHeader}>
        <h2>Онкологические услуги</h2>
      </header>
      <Divider />
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>Тип услуги</th>
              <th>Тип хир. лечения</th>
              <th>Линия лек. терапии</th>
              <th>Это проведение профилактики тошноты</th>
              <th>Тип лучевой терапии</th>
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
            ) : !oncologyServices ? (
              <TableStateRow
                colSpan={5}
                title="Выберите онкологический случай"
                description="И в третий раз, как же вам выбрать интересно его"
              />
            ) : oncologyServices.length === 0 ? (
              <TableStateRow
                colSpan={5}
                title="Данных не найдено"
                description="Онкологический случай не содержит услуг"
              />
            ) : (
              oncologyServices.map((oncologyService) => (
                <tr
                  className={
                    oncologyService.oncologyServiceUid ===
                    selectedOncologyServiceUid
                      ? "selectedRow"
                      : ""
                  }
                  key={oncologyService.oncologyServiceUid}
                  onClick={() =>
                    selectOncologyService(oncologyService.oncologyServiceUid)
                  }
                >
                  <td>{oncologyService.serviceType}</td>
                  <td>{oncologyService.surgicalTreatmentType ?? "-"}</td>
                  <td>{oncologyService.drugTherapyLine ?? "-"}</td>
                  <td>
                    {oncologyService.isAntiemeticProphylaxis === null
                      ? "-"
                      : oncologyService.isAntiemeticProphylaxis
                        ? "Да"
                        : "Нет"}
                  </td>
                  <td>{oncologyService.drugTherapyCycle ?? "-"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};
