import { resolveDataState } from "../../../../../../../../../../shared/helpers/resolveDataStatel";
import { DataState } from "../../../../../../../../../../shared/ui/DataState/DataState";
import { useFiltersStore } from "../../../../../../../filters/model/store/useFiltersStore";
import { usePatientQuery } from "../../../../../../model/queries/categories/patient/usePatientQuery";
import { useWorkspaceStore } from "../../../../../../model/store/useWorkspaceStore";
import { PatientBody } from "../PatientBody/PatientBody";
import { PatientHeader } from "../PatientHeader/PatientHeader";

export const PatientRoot = () => {
  const { targetDb } = useFiltersStore();
  const { selectedMedicalCaseUid } = useWorkspaceStore();

  const {
    data: patient,
    isLoading,
    isPending,
    isError,
    isSuccess,
    error,
  } = usePatientQuery(selectedMedicalCaseUid, targetDb);

  const dataState = resolveDataState({
    isEnabled: selectedMedicalCaseUid !== null && targetDb !== null,
    isLoading: isLoading,
    isError: isError,
    isSuccess: isSuccess,
    isEmpty: patient === null && isSuccess,
  });

  return (
    <article className="cardRoot">
      <PatientHeader />

      {dataState === "error" ? (
        <DataState
          title="Ошибка данных"
          description={error?.message ?? "Неизвестная ошибка"}
          variant="error"
        />
      ) : dataState === "empty" ? (
        <DataState
          title="Данных не найдено"
          description="Медицинский случай не содержит информации о пациенте"
          variant="empty"
        />
      ) : (
        <PatientBody patient={patient!} isPending={isPending} />
      )}
    </article>
  );
};
