import type { TargetDbType } from "../../../../../../../shared/types/TargetDbType";
import { Divider } from "../../../../../../../components/ui/Divider/Divider";
import { useMedicalSanctionsQuery } from "../../../model/queries/Defects/useMedicalSanctionsQuery";
import { TableSkeleton } from "../../../../../../../shared/ui/TableSkeleton/TableSkeleton";
import { TableStateRow } from "../../../../../../../shared/ui/TableStateRow/TableStateRow";
import styles from "./styles.module.scss";
import dayjs from "dayjs";

interface MedicalSanctionsTableProps {
  medicalCaseUid: number | null;
  targetDb: TargetDbType | null;
}

export const MedicalSanctionsTable = ({
  medicalCaseUid,
  targetDb,
}: MedicalSanctionsTableProps) => {
  const {
    data: medicalSanctions,
    isLoading,
    isError,
    error,
  } = useMedicalSanctionsQuery(medicalCaseUid, targetDb);

  return (
    <section className={styles.medicalSanctionsTableRoot}>
      <header className={styles.medicalSanctionsTableRootHeader}>
        <h2>Санкции</h2>
      </header>
      <Divider />
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>Сумма</th>
              <th>Количество</th>
              <th>Тип санкции</th>
              <th>Код отказа</th>
              <th>Номер акта</th>
              <th>Дата акта</th>
              <th>Комментарий</th>
              <th>Имя файла</th>
              <th>Год</th>
              <th>Месяц</th>
              <th>Дата выгрузки</th>
              <th>Код врача</th>
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
            ) : !medicalSanctions ? (
              <TableStateRow
                colSpan={12}
                title="Выберите медицинский случай"
                description="TODO: Перенести в бейджик"
              />
            ) : medicalSanctions.length === 0 ? (
              <TableStateRow
                colSpan={12}
                title="Нет данных"
                description="TODO: Перенести в бейджик"
              />
            ) : (
              medicalSanctions.map((medicalSanction) => (
                <tr
                  key={medicalSanction.medicalSanctionUid}
                  className="noneHover"
                >
                  <td>{medicalSanction.sanctionAmount}</td>
                  <td>{medicalSanction.unitsRemoved}</td>
                  <td>{medicalSanction.sanctionCode}</td>
                  <td>{medicalSanction.refusalReasonCode}</td>
                  <td>{medicalSanction.expertiseActNumber}</td>
                  <td>
                    {dayjs(medicalSanction.expertiseActDate).format(
                      "DD.MM.YYYY",
                    )}
                  </td>
                  <td>{medicalSanction.comment ?? "-"}</td>
                  <td>{medicalSanction.filename}</td>
                  <td>{medicalSanction.year ?? "-"}</td>
                  <td>{medicalSanction.month ?? "-"}</td>
                  <td>
                    {medicalSanction.uploadDate
                      ? dayjs(medicalSanction.uploadDate).format("DD.MM.YYYY")
                      : "-"}
                  </td>
                  <td>{medicalSanction.expertCode ?? "-"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};
