import { resolveDataState } from "../../../../../../../../../../shared/helpers/resolveDataStatel";
import { DataState } from "../../../../../../../../../../shared/ui/DataState/DataState";
import { useFiltersStore } from "../../../../../../../filters/model/store/useFiltersStore";
import { useInsuranceQuery } from "../../../../../../model/queries/categories/patient/useInsuranceQuery";
import { useWorkspaceStore } from "../../../../../../model/store/useWorkspaceStore";
import { InsuranceBody } from "../InsuranceBody/InsuranceBody";
import { InsuranceHeader } from "../InsuranceHeader/InsuranceHeader";

export const InsuranceRoot = () => {
  const { targetDb } = useFiltersStore();
  const { selectedMedicalCaseUid } = useWorkspaceStore();
  const {
    data: insurance,
    isLoading,
    isPending,
    isError,
    isSuccess,
    error,
  } = useInsuranceQuery(selectedMedicalCaseUid, targetDb);

  const dataState = resolveDataState({
    isEnabled: selectedMedicalCaseUid !== null && targetDb !== null,
    isLoading: isLoading,
    isError: isError,
    isSuccess: isSuccess,
    isEmpty: insurance === null && isSuccess,
  });

  return (
    <article className="cardRoot">
      <InsuranceHeader />
      {dataState === "error" ? (
        <DataState
          title="Ошибка получения данных"
          description={error?.message ?? "-"}
          variant="error"
        />
      ) : dataState === "empty" ? (
        <DataState
          title="Данных не найдено"
          description="Медицинский случай не содержит информации о СМО"
          variant="empty"
        />
      ) : (
        <InsuranceBody insurance={insurance!} isPending={isPending} />
      )}
    </article>
  );
};
