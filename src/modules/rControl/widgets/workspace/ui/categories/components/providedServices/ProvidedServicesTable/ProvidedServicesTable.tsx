import type { TargetDbType } from "../../../../../../../../../shared/types/TargetDbType";
import { useProvidedServicesQuery } from "../../../../../model/queries/categories/providedServices/useProvidedServicesQuery";
import { TableSkeleton } from "../../../../../../../../../shared/ui/TableSkeleton/TableSkeleton";
import { TableStateRow } from "../../../../../../../../../shared/ui/TableStateRow/TableStateRow";
import { Divider } from "../../../../../../../../../components/ui/Divider/Divider";
import styles from "./styles.module.scss";
import dayjs from "dayjs";

interface ProvidedServicesTableProps {
  medicalCaseUid: number | null;
  targetDb: TargetDbType | null;
  selectedProvidedServiceUid: number | null;
  selectProvidedService: (providedServiceUid: number | null) => void;
}

export const ProvidedServicesTable = ({
  medicalCaseUid,
  targetDb,
  selectedProvidedServiceUid,
  selectProvidedService,
}: ProvidedServicesTableProps) => {
  const {
    data: providedServices,
    isLoading,
    isError,
    error,
  } = useProvidedServicesQuery(medicalCaseUid, targetDb);

  return (
    <section className={styles.providedServicesTableRoot}>
      <header className={styles.providedServicesTableRootHeader}>
        <h2>Оказанные услуги</h2>
      </header>
      <Divider />
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>Услуга</th>
              <th>Вид мед. вмешательства</th>
              <th>Профиль</th>
              <th>Специальность</th>
              <th>Это ребенок</th>
              <th>Дата с</th>
              <th>Дата по</th>
              <th>Диагноз</th>
              <th>Количество</th>
              <th>Тариф</th>
              <th>Сумма</th>
              <th>Комментарий</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <TableSkeleton columns={12} rows={5} />
            ) : isError ? (
              <TableStateRow
                colSpan={12}
                title="Уп-с ошибка"
                description={error.message}
              />
            ) : !providedServices ? (
              <TableStateRow
                colSpan={12}
                title="Выберите медицинский случай"
                description="TODO: Перенести в бейджик"
              />
            ) : providedServices.length === 0 ? (
              <TableStateRow
                colSpan={12}
                title="Данных не найдено"
                description="TODO: Перенести в бейджик"
              />
            ) : (
              providedServices.map((providedService) => (
                <tr
                  className={
                    selectedProvidedServiceUid ===
                    providedService.providedServiceUid
                      ? "selectedRow"
                      : ""
                  }
                  key={providedService.providedServiceUid}
                  onClick={() =>
                    selectProvidedService(providedService.providedServiceUid)
                  }
                >
                  <td>{`${providedService.serviceCode} - ${providedService.service}`}</td>
                  <td>{providedService.medicalInterventionType ?? "-"}</td>
                  <td>{`${providedService.medicalProfileCode} - ${providedService.medicalProfile}`}</td>
                  <td>{`${providedService.physicianSpecialtyCode} - ${providedService.physicianSpecialty}`}</td>
                  <td>{providedService.isPediatric ? "Да" : "Нет"}</td>
                  <td>
                    {dayjs(providedService.serviceStartDate).format(
                      "DD.MM.YYYY",
                    )}
                  </td>
                  <td>
                    {dayjs(providedService.serviceEndDate).format("DD.MM.YYYY")}
                  </td>
                  <td>{providedService.diagnosis}</td>
                  <td>{providedService.serviceQuantity}</td>
                  <td>{providedService.unitRate ?? "-"}</td>
                  <td>{providedService.amountBilled}</td>
                  <td>{providedService.internalComment ?? "-"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};
