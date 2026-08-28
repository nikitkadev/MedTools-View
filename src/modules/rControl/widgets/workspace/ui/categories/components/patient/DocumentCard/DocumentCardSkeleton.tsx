import { CardField } from "../../../../../../../../../shared/ui/CardField/CardField";
import { Skeleton } from "@mui/material";

export const DocumentCardSkeleton = () => {
  return (
    <article className="cardRoot">
      <header className="cardHeader">
        <h2>Документ</h2>
      </header>
      <div className="cardContent">
        <div className="cardBlock">
          <div className="cardBlockField">
            <CardField label="Тип" value={<Skeleton />} inline={true} />
            <CardField label="Серия" value={<Skeleton />} inline={true} />
            <CardField label="Номер" value={<Skeleton />} inline={true} />
          </div>
          <div className="cardBlockField">
            <CardField label="Дата выдачи" value={<Skeleton />} inline={true} />
            <CardField label="Кем выдан" value={<Skeleton />} inline={true} />
          </div>
        </div>
      </div>
    </article>
  );
};
