import { Skeleton } from "@mui/material";
import { CardField } from "../../../../../../../../../../shared/ui/CardField/CardField";
import type { InsuranceDto } from "../../../../../../model/types/categories/patient/GetInsuranceResult";

interface InsuranceBodyProps {
  insurance: InsuranceDto;
  isPending: boolean;
}

export const InsuranceBody = ({ insurance, isPending }: InsuranceBodyProps) => {
  return (
    <div className="cardContent">
      {isPending ? (
        <div className="cardLineGroup">
          <div className="cardLine">
            <div className="cardBlockLineOneGrid">
              <CardField
                label="Реестровый номер СМО"
                value={<Skeleton />}
                inline={true}
              />
            </div>
            <div className="cardBlockLineOneGrid">
              <CardField
                label="Наименование СМО"
                value={<Skeleton />}
                inline={true}
              />
            </div>
          </div>
          <div className="cardLine">
            <div className="cardBlockLineOneGrid">
              <CardField label="ОГРН" value={<Skeleton />} inline={true} />
            </div>
            <div className="cardBlockLineOneGrid">
              <CardField label="ОКАТО" value={<Skeleton />} inline={true} />
            </div>
          </div>
          <div className="cardLine">
            <div className="cardBlockLineOneGrid">
              <CardField
                label="Номер полиса (старый)"
                value={<Skeleton />}
                inline={true}
              />
            </div>
            <div className="cardBlockLineOneGrid">
              <CardField
                label="Номер полиса (новый)"
                value={<Skeleton />}
                inline={true}
              />
            </div>
            <div className="cardBlockLineOneGrid">
              <CardField
                label="Серия полиса"
                value={<Skeleton />}
                inline={true}
              />
            </div>
            <div className="cardBlockLineOneGrid">
              <CardField
                label="Тип полиса"
                value={<Skeleton />}
                inline={true}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="cardLineGroup">
          <div className="cardLine">
            <div className="cardBlockLineOneGrid">
              <CardField
                label="Реестровый номер СМО"
                value={insurance.insuranceCompanyCode ?? "—"}
                inline={true}
              />
            </div>
            <div className="cardBlockLineOneGrid">
              <CardField
                label="Наименование СМО"
                value={insurance.insuranceCompanyName ?? "—"}
                inline={true}
              />
            </div>
          </div>
          <div className="cardLine">
            <div className="cardBlockLineOneGrid">
              <CardField
                label="ОГРН"
                value={insurance.ogrn ?? "—"}
                inline={true}
              />
            </div>
            <div className="cardBlockLineOneGrid">
              <CardField
                label="ОКАТО"
                value={insurance.okato ?? "—"}
                inline={true}
              />
            </div>
          </div>
          <div className="cardLine">
            <div className="cardBlockLineOneGrid">
              <CardField
                label="Номер полиса (старый)"
                value={insurance.insurancePolicyUnifiedNumber ?? "—"}
                inline={true}
              />
            </div>
            <div className="cardBlockLineOneGrid">
              <CardField
                label="Номер полиса (новый)"
                value={insurance.insurancePolicyNumber ?? "—"}
                inline={true}
              />
            </div>
            <div className="cardBlockLineOneGrid">
              <CardField
                label="Серия полиса"
                value={insurance.insurancePolicySeries ?? "—"}
                inline={true}
              />
            </div>
            <div className="cardBlockLineOneGrid">
              <CardField
                label="Тип полиса"
                value={`${insurance.insurancePolicyTypeCode} : ${insurance.insurancePolicyTypeName}`}
                inline={true}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
