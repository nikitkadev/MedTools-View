import type { InjectionDto } from "../../../../../../../model/types/categories/oncology/GetInjectionsResult";
import { TableSkeleton } from "../../../../../../../../../../../shared/ui/TableSkeleton/TableSkeleton";
import dayjs from "dayjs";

interface InjectionsBodyProps {
  injections: InjectionDto[];
  isPending: boolean;
}

export const InjectionsBody = ({
  injections,
  isPending,
}: InjectionsBodyProps) => {
  return (
    <div className="tableContainer">
      <table>
        <thead>
          <tr>
            <th>Дата инъекции</th>
            <th>Количество в. л. п.</th>
            <th>Количество и. л. п.</th>
            <th>Факт. стоимость л.п.</th>
            <th>Стоимость в. л. п.</th>
            <th>Стоимость и. л. п.</th>
            <th>Редукция применялась</th>
          </tr>
        </thead>
        <tbody>
          {isPending ? (
            <TableSkeleton columns={7} rows={5} />
          ) : (
            injections.map((injection) => (
              <tr key={injection.injectionUid} className="noneHover">
                <td>
                  {dayjs(injection.administrationDate).format("DD.MM.YYYY")}
                </td>
                <td>{injection.administeredQuantity ?? "-"}</td>
                <td>{injection.consumedQuantity ?? "-"}</td>
                <td>{injection.unitCost ?? "-"}</td>
                <td>{injection.administeredCost ?? "-"}</td>
                <td>{injection.consumedCost ?? "-"}</td>
                <td>
                  {injection.isReductionApplied === null
                    ? "-"
                    : injection.isReductionApplied
                      ? "Да"
                      : "Нет"}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
