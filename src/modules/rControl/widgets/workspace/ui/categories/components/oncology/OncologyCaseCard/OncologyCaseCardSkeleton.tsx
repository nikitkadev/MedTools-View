import { Skeleton } from "@mui/material";
import { CardField } from "../../../../../../../../../shared/ui/CardField/CardField";

export const OncologyCaseCardSkeleton = () => {
  return (
    <article className="cardRoot">
      <header className="cardHeader">
        <h2>Онкологический случай</h2>
      </header>
      <div className="cardContent">
        <div className="cardBlock">
          <div className="cardBlockField">
            <CardField
              label="Повод обращения"
              value={<Skeleton />}
              inline={true}
            />
            <CardField
              label="Стадия заболевания"
              value={<Skeleton />}
              inline={true}
            />
          </div>
          <div className="cardBlockField">
            <CardField
              label="Значение Tumor"
              value={<Skeleton />}
              inline={true}
            />
            <CardField
              label="Значение Nodus"
              value={<Skeleton />}
              inline={true}
            />
            <CardField
              label="Значение Metastatsis"
              value={<Skeleton />}
              inline={true}
            />
          </div>
          <div className="cardBlockField">
            <CardField
              label="Выявления метастазов"
              value={<Skeleton />}
              inline={true}
            />
            <CardField
              label="Суммарная очаговая доза"
              value={<Skeleton />}
              inline={true}
            />
          </div>
        </div>
      </div>
    </article>
  );
};
