import type { MedicalCaseDto } from "../../../../model/types/core/results/GetMedicalCaseListItemsResult";
import { CardField } from "../../../../../../../../shared/ui/CardField/CardField";
import { Divider } from "../../../../../../../../components/ui/Divider/Divider";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import styles from "./styles.module.scss";
import dayjs from "dayjs";

interface MedicalCasesCardsProps {
  medicalCases: MedicalCaseDto[];
  selectedMedicalCaseUid: number | null;
  selectMedicalCase: (medicalCaseUid: number | null) => void;
}

export const MedicalCasesCards = ({
  medicalCases,
  selectedMedicalCaseUid,
  selectMedicalCase,
}: MedicalCasesCardsProps) => {
  return (
    <section className={styles.medicalCasesCards}>
      {medicalCases.map((medicalCase) => (
        <article
          key={medicalCase.medicalCaseUid}
          onClick={() => selectMedicalCase(medicalCase.medicalCaseUid)}
          className={`cardRoot selectedCardRoot ${selectedMedicalCaseUid === medicalCase.medicalCaseUid ? "selectedCard" : ""}`}
        >
          <header className="cardHeader">
            <h2>Медицинский случай</h2>
            {selectedMedicalCaseUid === medicalCase.medicalCaseUid ? (
              <RadioButtonCheckedIcon />
            ) : (
              <RadioButtonUncheckedIcon />
            )}
          </header>
          <div className="cardContent">
            <div className="cardBlock">
              <div className="cardBlockField">
                <CardField
                  label="Профиль"
                  inline={true}
                  value={medicalCase.medicalProfile ?? "-"}
                />
                <CardField
                  inline={true}
                  label="Диагноз"
                  value={medicalCase.primaryDiagnosis}
                />
                <CardField
                  inline={true}
                  label="Специальность"
                  value={medicalCase.physicianSpecialty}
                />
              </div>

              <div className="cardBlockField">
                <CardField
                  inline={true}
                  label="Дата лечения"
                  value={`с ${dayjs(medicalCase.treatmentStartDate).format("DD.MM.YYYY")} по ${dayjs(medicalCase.treatmentEndDate).format("DD.MM.YYYY")}`}
                />

                <CardField
                  inline={true}
                  label="Категория"
                  value={medicalCase.isPediatric ? "Ребенок" : "Взрослый"}
                />
              </div>
            </div>

            <Divider />

            <div className="cardBlock">
              <div className="cardBlockField">
                <CardField
                  inline={true}
                  label="Тариф"
                  value={medicalCase.unitRate ?? "-"}
                />

                <CardField
                  inline={true}
                  label="Количество"
                  value={medicalCase.paidUnits ?? "-"}
                />
              </div>

              <div className="cardBlockField">
                <CardField
                  inline={true}
                  spaceBetween={true}
                  label="Предъявлено"
                  value={`${medicalCase.amountBilled} ₽`}
                />
                <CardField
                  inline={true}
                  spaceBetween={true}
                  label="Принято"
                  value={
                    medicalCase.approvedAmount
                      ? `${medicalCase.approvedAmount} ₽`
                      : "-"
                  }
                />
                <CardField
                  inline={true}
                  spaceBetween={true}
                  label="Принято СМО"
                  value={
                    medicalCase.insuranceCompanyApprovedAmount
                      ? `${medicalCase.insuranceCompanyApprovedAmount} ₽`
                      : "-"
                  }
                />
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};
