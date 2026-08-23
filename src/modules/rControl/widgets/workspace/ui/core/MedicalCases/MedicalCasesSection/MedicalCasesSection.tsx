import { MedicalCaseCardSkeleton } from "../../../categories/components/medicalCaseDetails/MedicalCaseCard/MedicalCaseCardSkeleton";
import { useMedicalCasesListItemsQuery } from "../../../../model/queries/core/useMedicalCasesListItemsQuery";
import { resolveDataState } from "../../../../../../../../shared/helpers/resolveDataStatel";
import { useFiltersStore } from "../../../../../filters/model/store/useFiltersStore";
import { DataState } from "../../../../../../../../shared/ui/DataState/DataState";
import { useWorkspaceStore } from "../../../../model/store/useWorkspaceStore";
import { MedicalCasesCards } from "../MedicalCasesCards/MedicalCasesCards";
import styles from "./styles.module.scss";

export const MedicalCasesSection = () => {
  const { targetDb } = useFiltersStore();
  const { selectedCompletedCaseUid } = useWorkspaceStore();
  const {
    data: medicalCases,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useMedicalCasesListItemsQuery(selectedCompletedCaseUid, targetDb);

  const dataState = resolveDataState({
    isEnabled: selectedCompletedCaseUid !== null && targetDb !== null,
    isLoading: isLoading,
    isError: isError,
    isEmpty: medicalCases?.length === 0 && isSuccess,
    isSuccess: isSuccess,
  });

  return (
    <section className={styles.medicalCasesSection}>
      {dataState === "waiting" ? (
        <DataState
          title="Выберите законченный случай"
          description="Кликните на строку в таблице законченный случаев для отображения медицинских случаев"
          variant="waiting"
        />
      ) : dataState === "error" ? (
        <DataState
          title="Ошибка получения данных"
          description={error?.message ?? "-"}
          variant="error"
        />
      ) : dataState === "loading" ? (
        <MedicalCaseCardSkeleton />
      ) : dataState === "empty" ? (
        <DataState
          title="Данных не найдено"
          description="Медицинских случаев внутри законченного случая не найдено"
          variant="empty"
        />
      ) : (
        <MedicalCasesCards medicalCases={medicalCases ?? []} />
      )}
    </section>
  );
};
