import type { InsuranceDto } from "../../../../../model/types/categories/patient/GetInsuranceResult";
import { CardField } from "../../../../../../../../../shared/ui/CardField/CardField";

interface InsuranceCardProps {
  insurance: InsuranceDto;
}

export const InsuranceCard = ({ insurance }: InsuranceCardProps) => {
  return (
    <article className="cardRoot">
      <header className="cardHeader">
        <h2>СМО</h2>
      </header>
      <div className="cardContent">
        <div className="cardBlock">
          <div className="cardBlockField">
            <CardField
              label="Реестровый номер СМО"
              value={insurance.insuranceCompanyCode ?? "-"}
              inline={true}
            />
            <CardField
              label="Наименование СМО"
              value={insurance.insuranceCompanyName ?? "-"}
              inline={true}
            />
          </div>
          <div className="cardBlockField">
            <CardField
              label="ОГРН"
              value={insurance.ogrn ?? "-"}
              inline={true}
            />
            <CardField
              label="ОКАТО"
              value={insurance.okato ?? "-"}
              inline={true}
            />
          </div>
          <div className="cardBlockField">
            <CardField
              label="Номер полиса (старый)"
              value={insurance.insurancePolicyUnifiedNumber ?? "-"}
              inline={true}
            />
            <CardField
              label="Номер полиса (новый)"
              value={insurance.insurancePolicyNumber ?? "-"}
              inline={true}
            />
            <CardField
              label="Серия полиса"
              value={insurance.insurancePolicySeries ?? "-"}
              inline={true}
            />
            <CardField
              label="Тип полиса"
              value={`${insurance.insurancePolicyTypeCode} : ${insurance.insurancePolicyTypeName}`}
              inline={true}
            />
          </div>
        </div>
      </div>
    </article>
  );
};
