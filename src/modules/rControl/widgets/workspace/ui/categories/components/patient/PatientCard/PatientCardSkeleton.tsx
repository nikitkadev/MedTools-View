import { Skeleton } from "@mui/material";
import { CardField } from "../../../../../../../../../shared/ui/CardField/CardField";

export const PatientCardSkeleton = () => {
  return (
    <article className="cardRoot">
      <header className="cardHeader">
        <h2>Пациент</h2>
      </header>

      <div className="cardContent">
        <div className="cardBlock">
          <div className="cardBlockField">
            <CardField label="Фамилия" value={<Skeleton />} inline={true} />
            <CardField label="Имя" value={<Skeleton />} inline={true} />
            <CardField label="Отчество" value={<Skeleton />} inline={true} />
          </div>

          <div className="cardBlockField">
            <CardField
              label="Дата рождения"
              value={<Skeleton />}
              inline={true}
            />
            <CardField label="Пол" value={<Skeleton />} inline={true} />
          </div>
        </div>
      </div>
    </article>
  );
};
