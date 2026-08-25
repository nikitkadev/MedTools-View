import { resolveDataState } from "../../../../../../../../../../shared/helpers/resolveDataStatel";
import { DataState } from "../../../../../../../../../../shared/ui/DataState/DataState";
import { useFiltersStore } from "../../../../../../../filters/model/store/useFiltersStore";
import { useDiagnosticsQuery } from "../../../../../../model/queries/categories/oncology/useDiagnosticsQuery";
import { DiagnosticsListBody } from "../DiagnosticsListBody/DiagnosticsListBody";
import { DiagnosticsListHeader } from "../DiagnosticsListHeader/DiagnosticsListHeader";
import styles from "./styles.module.scss";

interface DiagnosticsListRootProps {
  oncologyServiceUid: number | null;
}

export const DiagnosticsListRoot = ({
  oncologyServiceUid,
}: DiagnosticsListRootProps) => {
  const { targetDb } = useFiltersStore();
  const {
    data: diagnosticRecords,
    isLoading,
    isPending,
    isError,
    isSuccess,
    error,
  } = useDiagnosticsQuery(oncologyServiceUid, targetDb);

  const dataState = resolveDataState({
    isEnabled: oncologyServiceUid !== null && targetDb !== null,
    isLoading: isLoading,
    isError: isError,
    isSuccess: isSuccess,
    isEmpty: diagnosticRecords?.length === 0 && isSuccess,
  });

  return (
    <section className={styles.diagnosticsListRoot}>
      <DiagnosticsListHeader />
      {dataState === "waiting" ? (
        <DataState
          title="Выберите окнологический случай"
          description="Выберите нкологический случай для отображения диагностического блока"
          variant="waiting"
        />
      ) : dataState === "error" ? (
        <DataState
          title="Ошибка данных"
          description={error?.message ?? "-"}
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
