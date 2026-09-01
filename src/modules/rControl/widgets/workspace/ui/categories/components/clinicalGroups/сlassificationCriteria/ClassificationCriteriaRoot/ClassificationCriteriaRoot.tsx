import { resolveDataState } from "../../../../../../../../../../shared/helpers/resolveDataStatel";
import { DataState } from "../../../../../../../../../../shared/ui/DataState/DataState";
import { useFiltersStore } from "../../../../../../../filters/model/store/useFiltersStore";
import { useClassificationCriteriaQuery } from "../../../../../../model/queries/categories/clinicalGroups/useClassificationCriteriaQuery";
import { ClassificationCriteriaBody } from "../ClassificationCriteriaBody/ClassificationCriteriaBody";
import { ClassificationCriteriaHeader } from "../ClassificationCriteriaHeader/ClassificationCriteriaHeader";

interface ClassificationCriteriaRootProps {
  clinicalGroupUid: number | null;
}

export const ClassificationCriteriaRoot = ({
  clinicalGroupUid,
}: ClassificationCriteriaRootProps) => {
  const { targetDb } = useFiltersStore();
  const {
    data: classificationCriteria,
    isLoading,
    isPending,
    isError,
    isSuccess,
    error,
  } = useClassificationCriteriaQuery(clinicalGroupUid, targetDb);

  const dataState = resolveDataState({
    isEnabled: clinicalGroupUid !== null && targetDb !== null,
    isLoading: isLoading,
    isError: isError,
    isSuccess: isSuccess,
    isEmpty: classificationCriteria?.length === 0 && isSuccess,
  });

  return (
    <div className="cardRoot">
      <ClassificationCriteriaHeader />
      {dataState === "error" ? (
        <DataState
          title="Ошибка данных"
          description={error?.message ?? "Неизвестная ошибка"}
          variant="error"
        />
      ) : dataState === "empty" ? (
        <DataState
          title="Данных не найдено"
          description="Клиническая группа не содержит информации о классификационных критериях"
          variant="empty"
        />
      ) : (
        <ClassificationCriteriaBody
          classificationCriteria={classificationCriteria ?? []}
          isPending={isPending}
        />
      )}
    </div>
  );
};
