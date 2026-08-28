import { resolveDataState } from "../../../../../../../../../../shared/helpers/resolveDataStatel";
import { DataState } from "../../../../../../../../../../shared/ui/DataState/DataState";
import { useFiltersStore } from "../../../../../../../filters/model/store/useFiltersStore";
import { useMedicalSanctionsQuery } from "../../../../../../model/queries/categories/defects/useMedicalSanctionsQuery";
import { useWorkspaceStore } from "../../../../../../model/store/useWorkspaceStore";
import { MedicalSanctionsCards } from "../MedicalSanctionsCards/MedicalSanctionsCards";

export const MedicalSanctionsSection = () => {
  const { targetDb } = useFiltersStore();
  const { selectedMedicalCaseUid } = useWorkspaceStore();
  const {
    data: medicalSanctions,
    isLoading,
    isPending,
    isError,
    isSuccess,
    error,
  } = useMedicalSanctionsQuery(selectedMedicalCaseUid, targetDb);

  const dataState = resolveDataState({
    isEnabled: selectedMedicalCaseUid !== null && targetDb !== null,
    isLoading: isLoading,
    isError: isError,
    isSuccess: isSuccess,
    isEmpty: medicalSanctions?.length === null && isSuccess,
  });

  return (
    <>
      {dataState === "waiting" ? (
        <DataState
          title="Выберите медицинский случай"
          description="После выбора отобразятся санкции"
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
          description="Медицинский случай не содержит санкции"
          variant="empty"
        />
      ) : (
        <MedicalSanctionsCards
          isPending={isPending}
          medicalSanctions={medicalSanctions ?? []}
        />
      )}
    </>
  );
};
