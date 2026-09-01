import { useClinicalGroupQuery } from "../../../../../../model/queries/categories/clinicalGroups/useClinicalGroupQuery";
import { useWorkspaceStore } from "../../../../../../model/store/useWorkspaceStore";
import { ClinicalGroupBody } from "../ClinicalGroupBody/ClinicalGroupBody";
import { resolveDataState } from "../../../../../../../../../../shared/helpers/resolveDataState";
import { useFiltersStore } from "../../../../../../../filters/model/store/useFiltersStore";
import { DataState } from "../../../../../../../../../../shared/ui/DataState/DataState";
import { ClinicalGroupHeader } from "../ClinicalGroupHeader/ClinicalGroupHeader";

export const ClinicalGroupRoot = () => {
  const { targetDb } = useFiltersStore();
  const { selectedMedicalCaseUid } = useWorkspaceStore();
  const {
    data: clinicalGroup,
    isLoading,
    isPending,
    isError,
    isSuccess,
    error,
  } = useClinicalGroupQuery(selectedMedicalCaseUid, targetDb);

  const dataState = resolveDataState({
    isEnabled: selectedMedicalCaseUid !== null && targetDb !== null,
    isLoading: isLoading,
    isError: isError,
    isSuccess: isSuccess,
    isEmpty: clinicalGroup === null && isSuccess,
  });

  return (
    <div className="cardRoot">
      <ClinicalGroupHeader />
      {dataState === "error" ? (
        <DataState
          title="Ошибка данных"
          description={error?.message ?? "Неизвестная ошибка"}
          variant="error"
        />
      ) : dataState === "empty" ? (
        <DataState
          title="Данных не найдено"
          description="Медицинский случай не содержит информации о КСГ/КПГ"
          variant="empty"
        />
      ) : (
        <ClinicalGroupBody
          clinicalGroup={clinicalGroup!}
          isPending={isPending}
        />
      )}
    </div>
  );
};
