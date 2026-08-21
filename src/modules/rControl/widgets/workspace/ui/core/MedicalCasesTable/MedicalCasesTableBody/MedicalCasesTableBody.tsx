import type { MedicalCaseDto } from "../../../../model/types/core/results/GetMedicalCaseListItemsResult";
import { TableSkeleton } from "../../../../../../../../shared/ui/TableSkeleton/TableSkeleton";
import dayjs from "dayjs";

interface MedicalCasesTableBodyProps {
  isPending: boolean;
  medicalCases: MedicalCaseDto[];
  selectedMedicalCaseUid: number | null;
  selectMedicalCase: (medicalCaseUid: number | null) => void;
}

export const MedicalCasesTableBody = ({
  isPending,
  medicalCases,
  selectedMedicalCaseUid,
  selectMedicalCase,
}: MedicalCasesTableBodyProps) => {
  return (
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
          {isPending ? (
            <TableSkeleton columns={11} rows={2} />
          ) : (
            medicalCases.map((medicalCase) => (
              <tr
                className={
                  medicalCase.medicalCaseUid === selectedMedicalCaseUid
                    ? "selectedRow"
                    : ""
                }
                key={medicalCase.medicalCaseUid}
                onClick={() => {
                  selectMedicalCase(medicalCase.medicalCaseUid);
                }}
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
  );
};
