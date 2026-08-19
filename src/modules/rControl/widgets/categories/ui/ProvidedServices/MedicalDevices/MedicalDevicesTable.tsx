import type { TargetDbType } from "../../../../../../../shared/types/TargetDbType";
import { Divider } from "../../../../../../../components/ui/Divider/Divider";
import { TableSkeleton } from "../../../../../../../shared/ui/TableSkeleton/TableSkeleton";
import { TableStateRow } from "../../../../../../../shared/ui/TableStateRow/TableStateRow";
import { useMedicalDevicesQuery } from "../../../model/queries/ProvidedServices/useMedicalDevicesQuery";
import styles from "./styles.module.scss";
import dayjs from "dayjs";

interface MedicalDevicesTableProps {
  providedServiceUid: number | null;
  targetDb: TargetDbType | null;
}

export const MedicalDevicesTable = ({
  providedServiceUid,
  targetDb,
}: MedicalDevicesTableProps) => {
  const {
    data: medicalDevices,
    isLoading,
    isError,
    error,
  } = useMedicalDevicesQuery(providedServiceUid, targetDb);

  return (
    <section className={styles.medicalDevicesTableRoot}>
      <header className={styles.medicalDevicesTableRootHeader}>
        <h2>Медицинские изделия</h2>
      </header>
      <Divider />
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>Дата установки</th>
              <th>Код вида</th>
              <th>Серийный номер / маркировочный код</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <TableSkeleton columns={3} rows={5} />
            ) : isError ? (
              <TableStateRow
                colSpan={3}
                title="Уп-с ошибка"
                description={error.message}
              />
            ) : !medicalDevices ? (
              <TableStateRow
                colSpan={3}
                title="Выберите оказанную услугу"
                description="TODO: Перенести в бейджик"
              />
            ) : medicalDevices.length === 0 ? (
              <TableStateRow
                colSpan={3}
                title="Данных не найдено"
                description="TODO: Перенести в бейджик"
              />
            ) : (
              medicalDevices.map((medicalDevice) => (
                <tr key={medicalDevice.medicalDeviceUid}>
                  <td>
                    {dayjs(medicalDevice.implantationDate).format("DD.MM.YYYY")}
                  </td>
                  <td>{medicalDevice.medicalDeviceTypeCode}</td>
                  <td>{medicalDevice.serialNumber}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};
