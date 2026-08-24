import type { CompletedCaseDetailsDto } from "../../../../../model/types/categories/medicalCases/GetCompletedCaseDetailsResult";
import { CardField } from "../../../../../../../../../shared/ui/CardField/CardField";
import dayjs from "dayjs";

interface CompletedCaseCardProps {
  completedCaseDetails: CompletedCaseDetailsDto;
}

export const CompletedCaseCard = ({
  completedCaseDetails,
}: CompletedCaseCardProps) => {
  return (
    <article className="cardRoot">
      <header className="cardHeader">
        <h2>Детали законченного случая случая</h2>
      </header>
      <div className="cardContent">
        <div className="cardLine">
          <div className="cardLineHeader">
            <h3>ЛПУ И НАПРАВЛЕНИЕ</h3>
          </div>
          <div className="cardBlockLineOneGrid">
            <CardField
              label="Код ЛПУ"
              value={completedCaseDetails.medicalOrganizationCode}
              inline={true}
            />
          </div>
          <div className="cardBlockLineOneGrid">
            <CardField
              label="Наименование ЛПУ"
              value="TODO: Расширить до названия"
              inline={true}
            />
          </div>
          <div className="cardBlockLineOneGrid">
            <CardField
              label="Код направившей МО"
              value={
                completedCaseDetails.referringMedicalOrganizationCode ?? "-"
              }
              inline={true}
            />
          </div>
          <div className="cardBlockLineOneGrid">
            <CardField
              label="Наименование направившей МО"
              value="TODO: Расширить до названия"
              inline={true}
            />
          </div>
          <div className="cardBlockLineOneGrid">
            <CardField
              label="Дата направления"
              value={
                completedCaseDetails.referralDate
                  ? dayjs(completedCaseDetails.referralDate).format(
                      "DD.MM.YYYY",
                    )
                  : "-"
              }
              inline={true}
            />
          </div>
        </div>

        <div className="cardLine">
          <div className="cardLineHeader">
            <h3>МЕД. ПОМОЩЬ</h3>
          </div>
          <div className="cardBlockLineTwoGrid">
            <CardField
              label="Вид медицинской помощи"
              value={completedCaseDetails.medicalCareType}
              inline={true}
            />
            <CardField
              label="Форма медицинской помощи"
              value={completedCaseDetails.medicalCareForm}
              inline={true}
            />
          </div>
          <div className="cardBlockLineTwoGrid">
            <CardField
              label="Условия оказания мед. помощи"
              value={completedCaseDetails.careConditions}
              inline={true}
            />
            <CardField
              label="Способ оплаты"
              value={completedCaseDetails.paymentMethodCode}
              inline={true}
            />
          </div>
        </div>

        <div className="cardLine">
          <div className="cardLineHeader">
            <h3>ЛЕЧЕНИЕ</h3>
          </div>
          <div className="cardBlockLineOneGrid">
            <CardField
              label="Период лечения"
              value={`${dayjs(completedCaseDetails.treatmentStartDate).format(
                "DD.MM.YYYY",
              )} — ${dayjs(completedCaseDetails.treatmentEndDate).format(
                "DD.MM.YYYY",
              )}`}
              inline={true}
            />
          </div>
          <div className="cardBlockLineOneGrid">
            <CardField
              label="Койко-дни / пациенто-дни"
              value={completedCaseDetails.hospitalizationDuration ?? "-"}
              inline={true}
            />
          </div>
          <div className="cardBlockLineOneGrid">
            <CardField
              label="Внутрибольничный перевод"
              value={
                completedCaseDetails.isIntrahospitalTransfer === null
                  ? "-"
                  : completedCaseDetails.isIntrahospitalTransfer
                    ? "Да"
                    : "Нет"
              }
              inline={true}
            />
          </div>
        </div>

        <div className="cardLine">
          <div className="cardLineHeader">
            <h3>РЕЗУЛЬТАТ</h3>
          </div>
          <div className="cardBlockLineTwoGrid">
            <CardField
              label="Результат"
              value={completedCaseDetails.hospitalizationOutcome}
              inline={true}
            />
            <CardField
              label="Исход"
              value={completedCaseDetails.diseaseOutcome}
              inline={true}
            />
          </div>
          <div className="cardBlockLineOneGrid">
            <CardField
              label="Результат диспансеризации"
              value={completedCaseDetails.screeningResult ?? "-"}
              inline={true}
            />
          </div>
          <div className="cardBlockLineTwoGrid">
            <CardField
              label="Отказ от диспансеризации"
              value={
                completedCaseDetails.isRefusal === null
                  ? "-"
                  : completedCaseDetails.isRefusal
                    ? "Да"
                    : "Нет"
              }
              inline={true}
            />
            <CardField
              label="Мобильная бригада"
              value={
                completedCaseDetails.isMobileTeam === null
                  ? "-"
                  : completedCaseDetails.isMobileTeam
                    ? "Да"
                    : "Нет"
              }
              inline={true}
            />
          </div>
        </div>
      </div>
    </article>
  );
};
