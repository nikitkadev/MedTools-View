import { resolveDataState } from "../../../../../../../../../../shared/helpers/resolveDataState";
import { DataState } from "../../../../../../../../../../shared/ui/DataState/DataState";
import { useFiltersStore } from "../../../../../../../filters/model/store/useFiltersStore";
import { useMedicationsQuery } from "../../../../../../model/queries/categories/oncology/useMedicationsQuery";
import { useWorkspaceStore } from "../../../../../../model/store/useWorkspaceStore";
import { MedicationsCards } from "../MedicationsCards/MedicationsCards";

export const MedicationsSection = () => {
  const { targetDb } = useFiltersStore();
  const {
    selectedOncologyServiceUid,
    selectedMedicationUid,
    selectMedication,
  } = useWorkspaceStore();
  const {
    data: medications,
    isLoading,
    isPending,
    isError,
    isSuccess,
    error,
  } = useMedicationsQuery(selectedOncologyServiceUid, targetDb);

  const dataState = resolveDataState({
    isEnabled: selectedOncologyServiceUid !== null && targetDb !== null,
    isLoading: isLoading,
    isError: isError,
    isSuccess: isSuccess,
    isEmpty: medications?.length === 0 && isSuccess,
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
          description="Онкологический случай не содержит информации о лекарственных препаратах"
          variant="empty"
        />
      ) : (
        <MedicationsCards
          medications={medications ?? []}
          isPending={isPending}
          selectMedication={selectMedication}
          selectedMedicationUid={selectedMedicationUid}
        />
      )}
    </>
  );
};
