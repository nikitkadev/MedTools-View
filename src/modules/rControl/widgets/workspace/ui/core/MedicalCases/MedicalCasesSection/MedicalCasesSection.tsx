import { useMedicalCasesListItemsQuery } from "../../../../model/queries/core/useMedicalCasesListItemsQuery";
import { resolveDataState } from "../../../../../../../../shared/helpers/resolveDataStatel";
import { MedicalCasesCardsSkeleton } from "../MedicalCasesCards/MedicalCasesCardsSkeleton";
import { useFiltersStore } from "../../../../../filters/model/store/useFiltersStore";
import { DataState } from "../../../../../../../../shared/ui/DataState/DataState";
import { useWorkspaceStore } from "../../../../model/store/useWorkspaceStore";
import { MedicalCasesCards } from "../MedicalCasesCards/MedicalCasesCards";
import { useEffect } from "react";

export const MedicalCasesSection = () => {
  const { targetDb } = useFiltersStore();
  const {
    selectedCompletedCaseUid,
    selectedMedicalCaseUid,
    selectMedicalCase,
  } = useWorkspaceStore();
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

  useEffect(() => {
    if (
      medicalCases !== undefined &&
      medicalCases !== null &&
      medicalCases.length > 0
    ) {
      selectMedicalCase(medicalCases[0].medicalCaseUid);
    }
  }, [medicalCases]);

  return (
    <>
      {dataState === "waiting" ? (
        <DataState
          title="Выберите законченный случай"
          description="Нажмите на строку в таблице законченных случаев для просмотра медицинских случаев"
          variant="waiting"
        />
      ) : dataState === "error" ? (
        <DataState
          title="Ошибка данных"
          description={error?.message ?? "Неизвестная ошибка"}
          variant="error"
        />
      ) : dataState === "loading" ? (
        <MedicalCasesCardsSkeleton />
      ) : dataState === "empty" ? (
        <DataState
          title="Данных не найдено"
          description="Не найдены медицинские случаи по выбранному законченному случаю"
          variant="empty"
        />
      ) : (
        <MedicalCasesCards
          medicalCases={medicalCases ?? []}
          selectedMedicalCaseUid={selectedMedicalCaseUid}
          selectMedicalCase={selectMedicalCase}
        />
      )}
    </>
  );
};
