import type { TargetDbType } from "../../../../../../../../../shared/types/TargetDbType";
import { Divider } from "../../../../../../../../../components/ui/Divider/Divider";
import { TableSkeleton } from "../../../../../../../../../shared/ui/TableSkeleton/TableSkeleton";
import { TableStateRow } from "../../../../../../../../../shared/ui/TableStateRow/TableStateRow";
import { usePrescriptionsQuery } from "../../../../../model/queries/categories/prescriptions/usePrescriptionsQuery";
import styles from "./styles.module.scss";
import dayjs from "dayjs";

interface PrescriptionsTableProps {
  medicalCaseUid: number | null;
  targetDb: TargetDbType | null;
}

export const PrescriptionsTable = ({
  medicalCaseUid,
  targetDb,
}: PrescriptionsTableProps) => {
  const {
    data: prescriptions,
    isLoading,
    isError,
    error,
  } = usePrescriptionsQuery(medicalCaseUid, targetDb);

  return (
    <section className={styles.prescriptionsTableRoot}>
      <header className={styles.prescriptionsTableRootHeader}>
        <h2>Назначения</h2>
      </header>
      <Divider />
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>Номер</th>
              <th>Вид назначения</th>
              <th>Метод диаг. исследования</th>
              <th>Мед. услуга в направление</th>
              <th>Дата направления</th>
              <th>В какую МО</th>
              <th>Профиль МП</th>
              <th>Профиль койки</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <TableSkeleton columns={8} rows={5} />
            ) : isError ? (
              <TableStateRow
                colSpan={8}
                title="Уп-с ошибка"
                description={error.message}
              />
            ) : !prescriptions ? (
              <TableStateRow
                colSpan={8}
                title="Выберите медицинский случай"
                description="TODO: Я не знаю зачем я вообще пишу это, ведь категории нельзя будет открыть без выбора медицинского случая"
              />
            ) : prescriptions.length === 0 ? (
              <TableStateRow
                colSpan={8}
                title="Данных не найдено"
                description="TODO: Это тоже перенсети в бейдж"
              />
            ) : (
              prescriptions.map((prescription) => (
                <tr key={prescription.perscriptionUid}>
                  <td>{prescription.sequenceNumber}</td>
                  <td>{prescription.prescriptionType}</td>
                  <td>{prescription.diagnosticMethod ?? "-"}</td>
                  <td>{prescription.serviceCode ?? "-"}</td>
                  <td>
                    {prescription.referralDate
                      ? dayjs(prescription.referralDate).format("DD.MM.YYYY")
                      : "-"}
                  </td>
                  <td>{prescription.referredToMoCode ?? "-"}</td>
                  <td>{prescription.medicalCareProfile ?? "-"}</td>
                  <td>{prescription.bedProfile ?? "-"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};
