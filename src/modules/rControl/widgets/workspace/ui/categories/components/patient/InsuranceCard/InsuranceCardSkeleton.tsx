import { Skeleton } from "@mui/material";
import { CardField } from "../../../../../../../../../shared/ui/CardField/CardField";

export const InsuranceCardSkeleton = () => {
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
              value={<Skeleton />}
              inline={true}
            />
            <CardField
              label="Наименование СМО"
              value={<Skeleton />}
              inline={true}
            />
          </div>
          <div className="cardBlockField">
            <CardField label="ОГРН" value={<Skeleton />} inline={true} />
            <CardField label="ОКАТО" value={<Skeleton />} inline={true} />
          </div>
          <div className="cardBlockField">
            <CardField
              label="Номер полиса (старый)"
              value={<Skeleton />}
              inline={true}
            />
            <CardField
              label="Номер полиса (новый)"
              value={<Skeleton />}
              inline={true}
            />
            <CardField
              label="Серия полиса"
              value={<Skeleton />}
              inline={true}
            />
            <CardField label="Тип полиса" value={<Skeleton />} inline={true} />
          </div>
        </div>
      </div>
    </article>
  );
};
