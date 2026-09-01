import { resolveDataState } from "../../../../../../../../../../shared/helpers/resolveDataState";
import { DataState } from "../../../../../../../../../../shared/ui/DataState/DataState";
import { useFiltersStore } from "../../../../../../../filters/model/store/useFiltersStore";
import { usePrescriptionsQuery } from "../../../../../../model/queries/categories/prescriptions/usePrescriptionsQuery";
import { useWorkspaceStore } from "../../../../../../model/store/useWorkspaceStore";
import { PrescriptionsCards } from "../PrescriptionsCards/PrescriptionsCards";

export const PrescriptionsSection = () => {
  const { targetDb } = useFiltersStore();
  const { selectedMedicalCaseUid } = useWorkspaceStore();
  const {
    data: prescriptions,
    isLoading,
    isPending,
    isError,
    isSuccess,
    error,
  } = usePrescriptionsQuery(selectedMedicalCaseUid, targetDb);

  const dataState = resolveDataState({
    isEnabled: selectedMedicalCaseUid !== null && targetDb !== null,
    isLoading: isLoading,
    isError: isError,
    isSuccess: isSuccess,
    isEmpty: prescriptions?.length === 0 && isSuccess,
  });

  return (
    <>
      {dataState === "error" ? (
        <DataState
          title="Ошибка данных"
          description={error?.message ?? "Неизвестная ошибка"}
          variant="error"
        />
      ) : dataState === "empty" ? (
        <DataState
          title="Данных не найдено"
          description="Медицинский случай не содержит информации о назначениях"
          variant="empty"
        />
      ) : (
        <PrescriptionsCards
          prescriptions={prescriptions ?? []}
          isPending={isPending}
        />
      )}
    </>
  );
};
