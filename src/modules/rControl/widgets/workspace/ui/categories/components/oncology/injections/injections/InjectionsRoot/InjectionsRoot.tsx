import { resolveDataState } from "../../../../../../../../../../../shared/helpers/resolveDataStatel";
import { DataState } from "../../../../../../../../../../../shared/ui/DataState/DataState";
import { useFiltersStore } from "../../../../../../../../filters/model/store/useFiltersStore";
import { useInjectionsQuery } from "../../../../../../../model/queries/categories/oncology/useInjectionsQuery";
import { useWorkspaceStore } from "../../../../../../../model/store/useWorkspaceStore";
import { InjectionsBody } from "../InjectionsBody/InjectionsBody";
import { InjectionsHeader } from "../InjectionsHeader/InjectionsHeader";

export const InjectionsRoot = () => {
  const { targetDb } = useFiltersStore();
  const { selectedMedicationUid } = useWorkspaceStore();
  const {
    data: injections,
    isLoading,
    isPending,
    isError,
    isSuccess,
    error,
  } = useInjectionsQuery(selectedMedicationUid, targetDb);

  const dataState = resolveDataState({
    isEnabled: selectedMedicationUid !== null && targetDb !== null,
    isLoading: isLoading,
    isError: isError,
    isSuccess: isSuccess,
    isEmpty: injections?.length === 0 && isSuccess,
  });

  return (
    <section className="cardRoot">
      <InjectionsHeader />
      {dataState === "waiting" ? (
        <DataState
          title="Выберите лекарственный препарат"
          description="Кликните по карточке лекарственного препарата"
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
          description="Лекарственный препарат не содержит информации о инъекциях"
          variant="empty"
        />
      ) : (
        <InjectionsBody injections={injections ?? []} isPending={isPending} />
      )}
    </section>
  );
};
