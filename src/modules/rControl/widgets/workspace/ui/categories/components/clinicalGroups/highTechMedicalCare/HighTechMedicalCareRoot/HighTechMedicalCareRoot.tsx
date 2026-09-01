import { resolveDataState } from "../../../../../../../../../../shared/helpers/resolveDataStatel";
import { DataState } from "../../../../../../../../../../shared/ui/DataState/DataState";
import { useFiltersStore } from "../../../../../../../filters/model/store/useFiltersStore";
import { useHighTechMedicalCareQuery } from "../../../../../../model/queries/categories/clinicalGroups/useHighTechMedicalCareQuery";
import { useWorkspaceStore } from "../../../../../../model/store/useWorkspaceStore";
import { HighTechMedicalCareBody } from "../HighTechMedicalCareBody/HighTechMedicalCareBody";
import { HighTechMedicalCareHeader } from "../HighTechMedicalCareHeader/HighTechMedicalCareHeader";

export const HighTechMedicalCareRoot = () => {
  const { targetDb } = useFiltersStore();
  const { selectedMedicalCaseUid } = useWorkspaceStore();
  const {
    data: highTechMedicalCare,
    isLoading,
    isPending,
    isError,
    isSuccess,
    error,
  } = useHighTechMedicalCareQuery(selectedMedicalCaseUid, targetDb);

  const dataState = resolveDataState({
    isEnabled: selectedMedicalCaseUid !== null && targetDb !== null,
    isLoading: isLoading,
    isError: isError,
    isSuccess: isSuccess,
    isEmpty: highTechMedicalCare === null && isSuccess,
  });

  return (
    <article className="cardRoot">
      <HighTechMedicalCareHeader />
      {dataState === "error" ? (
        <DataState
          title="Ошибка данных"
          description={error?.message ?? "Неизвестная ошибка"}
          variant="error"
        />
      ) : dataState === "empty" ? (
        <DataState
          title="Данных не найдено"
          description="Медицинский случай не содержит информации о ВМП"
          variant="empty"
        />
      ) : (
        <HighTechMedicalCareBody
          highTechMedicalCare={highTechMedicalCare!}
          isPending={isPending}
        />
      )}
    </article>
  );
};
