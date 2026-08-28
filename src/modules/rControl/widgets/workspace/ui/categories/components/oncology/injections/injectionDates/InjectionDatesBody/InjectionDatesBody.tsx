import { Chip } from "@mui/material";
import type { InjectionDateDto } from "../../../../../../../model/types/categories/oncology/GetInjectionDatesResult";
import styles from "./styles.module.scss";
import dayjs from "dayjs";

interface InjectionDatesBodyProps {
  injectionDates: InjectionDateDto[];
  isPending: boolean;
}

export const InjectionDatesBody = ({
  injectionDates,
  isPending,
}: InjectionDatesBodyProps) => {
  return (
    <div className="cardContent">
      <div className="cardBlock">
        {isPending ? (
          <div></div>
        ) : (
          <div className={styles.injectionDateChips}>
            {injectionDates.map((injectionDate) => (
              <Chip
                variant="filled"
                label={dayjs(injectionDate.administrationDate).format(
                  "DD.MM.YYYY",
                )}
                size="small"
                color="default"
                sx={{
                  fontSize: "var(--fs-body2)",
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
