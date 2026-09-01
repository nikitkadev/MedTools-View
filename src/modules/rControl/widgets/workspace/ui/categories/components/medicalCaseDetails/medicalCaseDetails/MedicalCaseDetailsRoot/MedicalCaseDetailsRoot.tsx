import { resolveDataState } from "../../../../../../../../../../shared/helpers/resolveDataStatel";
import { DataState } from "../../../../../../../../../../shared/ui/DataState/DataState";
import { useFiltersStore } from "../../../../../../../filters/model/store/useFiltersStore";
import { useMedicalCaseDetailsQuery } from "../../../../../../model/queries/categories/medicalCaseDetails/useMedicalCaseDetailsQuery";
import { useWorkspaceStore } from "../../../../../../model/store/useWorkspaceStore";
import { MedicalCaseDetailsBody } from "../MedicalCaseDetailsBody/MedicalCaseDetailsBody";
import { MedicalCaseDetailsHeader } from "../MedicalCaseDetailsHeader/MedicalCaseDetailsHeader";

export const MedicalCaseDetailsRoot = () => {
  const { targetDb } = useFiltersStore();
  const { selectedMedicalCaseUid } = useWorkspaceStore();
  const {
    data: medicalCaseDetails,
    isLoading,
    isPending,
    isError,
    isSuccess,
    error,
  } = useMedicalCaseDetailsQuery(selectedMedicalCaseUid, targetDb);
  const dataState = resolveDataState({
    isEnabled: selectedMedicalCaseUid !== null && targetDb !== null,
    isLoading: isLoading,
    isError: isError,
    isSuccess: isSuccess,
    isEmpty: medicalCaseDetails === null && isSuccess,
  });

  return (
    <article className="cardRoot">
      <MedicalCaseDetailsHeader />
      {dataState === "error" ? (
        <DataState
          title="Ошибка данных"
          description={error?.message ?? "Неизвестная ошибка"}
          variant="error"
        />
      ) : dataState === "empty" ? (
        <DataState
          title="Данных не найдено"
          description="Медицинский случай не содержит информации о деталях медицинского случая"
          variant="empty"
        />
      ) : (
        <MedicalCaseDetailsBody
          medicalCaseDetails={medicalCaseDetails!}
          isPending={isPending}
        />
      )}
    </article>
  );
};
