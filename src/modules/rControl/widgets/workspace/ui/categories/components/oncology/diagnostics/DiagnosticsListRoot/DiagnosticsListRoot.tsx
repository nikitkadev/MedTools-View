import { resolveDataState } from "../../../../../../../../../../shared/helpers/resolveDataStatel";
import { DataState } from "../../../../../../../../../../shared/ui/DataState/DataState";
import { useFiltersStore } from "../../../../../../../filters/model/store/useFiltersStore";
import { useDiagnosticsQuery } from "../../../../../../model/queries/categories/oncology/useDiagnosticsQuery";
import { DiagnosticsListBody } from "../DiagnosticsListBody/DiagnosticsListBody";
import { DiagnosticsListHeader } from "../DiagnosticsListHeader/DiagnosticsListHeader";
import styles from "./styles.module.scss";

interface DiagnosticsListRootProps {
  oncologyCaseUid: number | null;
}

export const DiagnosticsListRoot = ({
  oncologyCaseUid,
}: DiagnosticsListRootProps) => {
  const { targetDb } = useFiltersStore();
  const {
    data: diagnosticRecords,
    isLoading,
    isPending,
    isError,
    isSuccess,
    error,
  } = useDiagnosticsQuery(oncologyCaseUid, targetDb);

  const dataState = resolveDataState({
    isEnabled: oncologyCaseUid !== null && targetDb !== null,
    isLoading: isLoading,
    isError: isError,
    isSuccess: isSuccess,
    isEmpty: diagnosticRecords?.length === 0 && isSuccess,
  });

  return (
    <section className={styles.diagnosticsListRoot}>
      <DiagnosticsListHeader />
      {dataState === "error" ? (
        <DataState
          title="Ошибка данных"
          description={error?.message ?? "Неизвестная ошибка"}
          variant="error"
        />
      ) : dataState === "empty" ? (
        <DataState
          title="Данных не найдено"
          description="Онкологический случай не содержит диагностический блок"
          variant="empty"
        />
      ) : (
        <DiagnosticsListBody
          diagnosticRecords={diagnosticRecords ?? []}
          isPending={isPending}
        />
      )}
    </section>
  );
};
