import type { PatientDto } from "../../../../../model/types/categories/patient/GetPatientResult";
import { CardField } from "../../../../../../../../../shared/ui/CardField/CardField";
import dayjs from "dayjs";

interface PatientCardProps {
  patient: PatientDto;
}

export const PatientCard = ({ patient }: PatientCardProps) => {
  return (
    <article className="cardRoot">
      <header className="cardHeader">
        <h2>Пациент</h2>
      </header>

      <div className="cardContent">
        <div className="cardBlock">
          <div className="cardBlockField">
            <CardField
              label="Фамилия"
              value={patient.patientLastName}
              inline={true}
            />

            <CardField
              label="Имя"
              value={patient.patientFirstName}
              inline={true}
            />

            <CardField
              label="Отчество"
              value={patient.patientMiddleName}
              inline={true}
            />
          </div>
          <div className="cardBlockField">
            <CardField
              label="Дата рождения"
              value={dayjs(patient.patientBirthDate).format("DD.MM.YYYY")}
              inline={true}
            />

            <CardField label="Пол" value={patient.patientSex} inline={true} />
          </div>
        </div>
      </div>
    </article>
  );
};
