import type { PatientDto } from "../../../../../model/types/categories/patient/GetPatientResult";
import { CardField } from "../../../../../../../../../shared/ui/CardField/CardField";
import dayjs from "dayjs";

interface DocumentCardProps {
  patient: PatientDto;
}
export const DocumentCard = ({ patient }: DocumentCardProps) => {
  return (
    <article className="cardRoot">
      <header className="cardHeader">
        <h2>Документ</h2>
      </header>
      <div className="cardContent">
        <div className="cardBlock">
          <div className="cardBlockField">
            <CardField
              label="Тип"
              value={`${patient.documentTypeCode ? patient.documentTypeCode + ": " : ""}${patient.documentTypeName}`}
              inline={true}
            />
            <CardField
              label="Серия"
              value={patient.documentSeries ?? "-"}
              inline={true}
            />
            <CardField
              label="Номер"
              value={patient.documentNumber ?? "-"}
              inline={true}
            />
          </div>
          <div className="cardBlockField">
            <CardField
              label="Дата выдачи"
              value={
                patient.documentIssueDate
                  ? dayjs(patient.documentIssueDate).format("DD.MM.YYYY")
                  : "-"
              }
              inline={true}
            />
            <CardField
              label="Кем выдан"
              value={patient.issuedBy ?? "-"}
              inline={true}
            />
          </div>
        </div>
      </div>
    </article>
  );
};
