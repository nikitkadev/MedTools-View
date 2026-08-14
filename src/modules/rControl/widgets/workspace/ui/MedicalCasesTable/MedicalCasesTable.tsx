import { Divider } from "../../../../../../components/ui/Divider/Divider";
import { TableSkeleton } from "../../../../../../shared/ui/TableSkeleton/TableSkeleton";
import { TableStateRow } from "../../../../../../shared/ui/TableStateRow/TableStateRow";
import { useFiltersStore } from "../../../filters/model/store/useFiltersStore";
import { useMedicalCasesListItemsQuery } from "../../model/queries/useMedicalCasesListItemsQuery";
import { useWorkspaceStore } from "../../model/store/useWorkspaceStore";
import styles from "./styles.module.scss";
import dayjs from "dayjs";

export const MedicalCasesTable = () => {
  const { targetDb } = useFiltersStore();
  const {
    selectedCompletedCaseUid,
    selectedMedicalCaseUid,
    selectMedicalCase,
  } = useWorkspaceStore();
  const {
    data: medicalCases,
    isLoading,
    isError,
    error,
  } = useMedicalCasesListItemsQuery(selectedCompletedCaseUid, targetDb);

  return (
    <section className={styles.medicalCasesTableRoot}>
      <header className={styles.medicalCasesTableRootHeader}>
        <h2>Медицинские случаи</h2>
      </header>
      <Divider />
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>Профиль</th>
              <th>Дет.</th>
              <th>Спец.</th>
              <th>Лечение с</th>
              <th>Лечение по</th>
              <th>Диагноз</th>
              <th>Кол-во</th>
              <th>Тариф</th>
              <th>Предъявлено</th>
              <th>Принято</th>
              <th>Принято СМО</th>
            </tr>
          </thead>
          <tbody>
            {selectedCompletedCaseUid === null ? (
              <TableStateRow
                colSpan={11}
                title="Кликните по законченному случаю"
                description="Выберите законченный случай и магия повторится!"
              />
            ) : isLoading ? (
              <TableSkeleton columns={11} rows={1} />
            ) : isError ? (
              <TableStateRow
                colSpan={11}
                title="Упс-с, произошла ошибка"
                description={error.message}
              />
            ) : (
              medicalCases?.map((medicalCase) => (
                <tr
                  className={
                    medicalCase.medicalCaseUid === selectedMedicalCaseUid
                      ? "selectedRow"
                      : ""
                  }
                  key={medicalCase.medicalCaseUid}
                  onClick={() => selectMedicalCase(medicalCase.medicalCaseUid)}
                >
                  <td>{medicalCase.medicalProfile ?? "-"}</td>
                  <td>{medicalCase.isPediatric ? "Да" : "Нет"}</td>
                  <td>{medicalCase.physicianSpecialty}</td>
                  <td>
                    {dayjs(medicalCase.treatmentStartDate).format("DD.MM.YYYY")}
                  </td>
                  <td>
                    {dayjs(medicalCase.treatmentEndDate).format("DD.MM.YYYY")}
                  </td>
                  <td>{medicalCase.primaryDiagnosis}</td>
                  <td>{medicalCase.paidUnits ?? "-"}</td>
                  <td>{medicalCase.unitRate ?? "-"}</td>
                  <td>{medicalCase.amountBilled}</td>
                  <td>{medicalCase.approvedAmount ?? "-"}</td>
                  <td>{medicalCase.insuranceCompanyApprovedAmount ?? "-"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};
