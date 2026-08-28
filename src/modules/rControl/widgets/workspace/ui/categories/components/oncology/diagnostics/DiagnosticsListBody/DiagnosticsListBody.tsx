import type { DiagnosticListItemDto } from "../../../../../../model/types/categories/oncology/GetDiagnosticsResult";
import { CardField } from "../../../../../../../../../../shared/ui/CardField/CardField";
import styles from "./styles.module.scss";
import dayjs from "dayjs";
import { Skeleton } from "@mui/material";

interface DiagnosticsListBodyProps {
  diagnosticRecords: DiagnosticListItemDto[];
  isPending: boolean;
}

export const DiagnosticsListBody = ({
  diagnosticRecords,
  isPending,
}: DiagnosticsListBodyProps) => {
  return (
    <section className={styles.diagnosticsListBodyRoot}>
      {isPending
        ? Array.from({ length: 5 }).map((_index) => (
            <div className={styles.listRow}>
              <div className={styles.listRowContent}>
                <div className={styles.lineOneGrid}>
                  <p className={styles.lineTitle}>
                    <Skeleton width={50} />
                  </p>
                </div>
                <div className={styles.lineTwoGrid}>
                  <CardField
                    label="Тип д.п."
                    value={<Skeleton />}
                    inline={true}
                  />
                  <CardField
                    label="Код д.п."
                    value={<Skeleton />}
                    inline={true}
                  />
                </div>
                <div className={styles.lineTwoGrid}>
                  <CardField
                    label="Код результата диагностики"
                    value={<Skeleton />}
                    inline={true}
                  />
                  <CardField
                    label="Результат диагностики"
                    value={<Skeleton />}
                    inline={true}
                  />
                </div>
              </div>
            </div>
          ))
        : diagnosticRecords.map((diagnosticRecord, _index) => (
            <div className={styles.listRow}>
              <div className={styles.listRowContent}>
                <div className={styles.lineOneGrid}>
                  <p className={styles.lineTitle}>
                    {diagnosticRecord.specimenCollectionDate
                      ? dayjs(diagnosticRecord.specimenCollectionDate).format(
                          "DD.MM.YYYY",
                        )
                      : "—"}
                  </p>
                </div>
                <div className={styles.lineTwoGrid}>
                  <CardField
                    label="Тип д.п."
                    value={diagnosticRecord.diagnosticType ?? "—"}
                    inline={true}
                  />
                  <CardField
                    label="Код д.п."
                    value={diagnosticRecord.diagnosticCode ?? "—"}
                    inline={true}
                  />
                </div>
                <div className={styles.lineTwoGrid}>
                  <CardField
                    label="Код результата диагностики"
                    value={diagnosticRecord.diagnosticResultCode ?? "—"}
                    inline={true}
                  />
                  <CardField
                    label="Результат диагностики"
                    value={
                      diagnosticRecord.isResultReceived === null
                        ? "—"
                        : diagnosticRecord.isResultReceived
                          ? "Положительный"
                          : "Отрицательный"
                    }
                    inline={true}
                  />
                </div>
              </div>
            </div>
          ))}
    </section>
  );
};
