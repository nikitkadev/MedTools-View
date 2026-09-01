import type { OncologyCaseDto } from "../../../../../../model/types/categories/oncology/GetOncologyCaseResult";
import { CardField } from "../../../../../../../../../../shared/ui/CardField/CardField";
import { Skeleton } from "@mui/material";

interface OncologyCaseCardBodyProps {
  oncologyCase: OncologyCaseDto;
  isPending: boolean;
}

export const OncologyCaseBody = ({
  oncologyCase,
  isPending,
}: OncologyCaseCardBodyProps) => {
  return (
    <div className="cardContent">
      {isPending ? (
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
      ) : (
        <div className="cardBlock">
          <div className="cardBlockField">
            <CardField
              label="Повод обращения"
              value={oncologyCase.referralReason ?? "—"}
              inline={true}
            />
            <CardField
              label="Стадия заболевания"
              value={oncologyCase.stage ?? "—"}
              inline={true}
            />
          </div>
          <div className="cardBlockField">
            <CardField
              label="Значение Tumor"
              value={oncologyCase.tumorValue ?? "—"}
              inline={true}
            />
            <CardField
              label="Значение Nodus"
              value={oncologyCase.nodusValue ?? "—"}
              inline={true}
            />
            <CardField
              label="Значение Metastatsis"
              value={oncologyCase.metastasisValue ?? "—"}
              inline={true}
            />
          </div>
          <div className="cardBlockField">
            <CardField
              label="Выявления метастазов"
              value={
                oncologyCase.isMetastasisDetected === null
                  ? "—"
                  : oncologyCase.isMetastasisDetected
                    ? "Да"
                    : "Нет"
              }
              inline={true}
            />
            <CardField
              label="Суммарная очаговая доза"
              value={oncologyCase.totalFocusDose ?? "—"}
              inline={true}
            />
          </div>
        </div>
      )}
    </div>
  );
};
