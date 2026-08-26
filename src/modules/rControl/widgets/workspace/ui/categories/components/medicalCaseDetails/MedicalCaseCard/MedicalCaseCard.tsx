import type { MedicalCaseDetailsDto } from "../../../../../model/types/categories/medicalCases/GetMedicalCaseDetailsResult";
import { CardField } from "../../../../../../../../../shared/ui/CardField/CardField";
import dayjs from "dayjs";

interface MedicalCaseCardProps {
  medicalCaseDetails: MedicalCaseDetailsDto;
}

export const MedicalCaseCard = ({
  medicalCaseDetails,
}: MedicalCaseCardProps) => {
  return (
    <article className="cardRoot">
      <header className="cardHeader">
        <h2>Детали медицинского случая</h2>
      </header>
      <div className="cardContent">
        <div className="cardLineGroup">
          <div className="cardLine">
            <header className="cardLineHeader">
              <h3>ОСНОВНОЕ</h3>
            </header>
            <div className="cardBlockLineTwoGrid">
              <CardField
                label="Профиль"
                value={medicalCaseDetails.medicalProfile}
                inline={true}
              />
              <CardField
                label="Специальность"
                value={medicalCaseDetails.physicianSpecialty}
                inline={true}
              />
            </div>
            <div className="cardBlockLineTwoGrid">
              <CardField
                label="Номер истории"
                value={medicalCaseDetails.medicalRecordNumber}
                inline={true}
              />
              <CardField
                label="Код лечащего врача"
                value={medicalCaseDetails.physicianCode}
                inline={true}
              />
            </div>
            <div className="cardBlockLineTwoGrid">
              <CardField
                label="Количество"
                value={medicalCaseDetails.paidUnits ?? "-"}
                inline={true}
              />
              <CardField
                label="Категория"
                value={medicalCaseDetails.isPediatric ? "Ребенок" : "Взрослый"}
                inline={true}
              />
            </div>
            <div className="cardBlockLineTwoGrid">
              <CardField
                label="Цель посещения"
                value={medicalCaseDetails.visitPurpose ?? "-"}
                inline={true}
              />
              <CardField
                label="Уровень ЛПУ"
                value={medicalCaseDetails.facilityLevel ?? "-"}
                inline={true}
              />
            </div>
          </div>

          <div className="cardLine">
            <header className="cardLineHeader">
              <h3>ЛЕЧЕНИЕ</h3>
            </header>
            <div className="cardBlockLineOneGrid">
              <CardField
                label="Период лечения"
                value={`${dayjs(medicalCaseDetails.treatmentStartDate).format(
                  "DD.MM.YYYY",
                )} — ${dayjs(medicalCaseDetails.treatmentEndDate).format(
                  "DD.MM.YYYY",
                )}`}
                inline={true}
              />
            </div>
            <div className="cardBlockLineTwoGrid">
              <CardField
                label="Профиль койки"
                value={medicalCaseDetails.bedProfile ?? "-"}
                inline={true}
              />
              <CardField
                label="Масса тела (кг)"
                value={medicalCaseDetails.weight ?? "-"}
                inline={true}
              />
            </div>
            <div className="cardBlockLineTwoGrid">
              <CardField
                label="Реабилитация"
                value={
                  medicalCaseDetails.isRehabilitation === null
                    ? "-"
                    : medicalCaseDetails.isRehabilitation
                      ? "Да"
                      : "Нет"
                }
                inline={true}
              />
              <CardField
                label="Подозрение на ЗНО"
                value={
                  medicalCaseDetails.isOncologySuspicion === null
                    ? "-"
                    : medicalCaseDetails.isOncologySuspicion
                      ? "Да"
                      : "Нет"
                }
                inline={true}
              />
            </div>
            <div className="cardBlockLineOneGrid">
              <CardField
                label="Поступление или перевод"
                value={
                  medicalCaseDetails.isAdmissionTransfer === null
                    ? "-"
                    : medicalCaseDetails.isAdmissionTransfer
                      ? "Да"
                      : "Нет"
                }
                inline={true}
              />
            </div>
          </div>

          <div className="cardLine">
            <header className="cardLineHeader">
              <h3>ДИАГНОЗ</h3>
            </header>

            <div className="cardBlockLineOneGrid">
              <CardField
                label="Основной диагноз"
                value={medicalCaseDetails.primaryDiagnosis}
                inline={true}
              />
            </div>
            <div className="cardBlockLineOneGrid">
              <CardField
                label="Первичный диагноз"
                value={medicalCaseDetails.initialDiagnosis ?? "-"}
                inline={true}
              />
            </div>
            <div className="cardBlockLineOneGrid">
              <CardField
                label="Характер основного заболевания"
                value={medicalCaseDetails.diseaseCharacter ?? "-"}
                inline={true}
              />
            </div>
          </div>

          <div className="cardLine">
            <header className="cardLineHeader">
              <h3>ДОПОЛНИТЕЛЬНО</h3>
            </header>
            <div className="cardBlockLineTwoGrid">
              <CardField
                label="Подразделение"
                value={medicalCaseDetails.department ?? "-"}
                inline={true}
              />
              <CardField
                label="Отделение"
                value={medicalCaseDetails.departmentCode ?? "-"}
                inline={true}
              />
            </div>
            <div className="cardBlockLineOneGrid">
              <CardField
                label="Комментарий"
                value={medicalCaseDetails.internalComment ?? "-"}
                inline={true}
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
