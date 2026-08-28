import type { PatientDto } from "../../../../../model/types/categories/patient/GetPatientResult";
import { CardField } from "../../../../../../../../../shared/ui/CardField/CardField";
import dayjs from "dayjs";

interface RepresentativeCardProps {
  patient: PatientDto;
}

export const RepresentativeCard = ({ patient }: RepresentativeCardProps) => {
  return (
    <article className="cardRoot">
      <header className="cardHeader">
        <h2>Представитель</h2>
      </header>
      <div className="cardContent">
        <div className="cardBlock">
          <div className="cardBlockField">
            <CardField
              label="Фамилия"
              value={patient.patientRepresentativeLastName ?? "-"}
              inline={true}
            />

            <CardField
              label="Имя"
              value={patient.patientRepresentativeFirstName ?? "-"}
              inline={true}
            />

            <CardField
              label="Отчество"
              value={patient.patientRepresentativeMiddleName ?? "-"}
              inline={true}
            />
          </div>
          <div className="cardBlockField">
            <CardField
              label="Дата рождения"
              value={
                patient.patientRepresentativeBirthday
                  ? dayjs(patient.patientRepresentativeBirthday).format(
                      "DD.MM.YYYY",
                    )
                  : "-"
              }
              inline={true}
            />

            <CardField
              label="Пол"
              value={patient.patientRepresentativeSex ?? "-"}
              inline={true}
            />
          </div>
        </div>
      </div>
    </article>
  );
};
