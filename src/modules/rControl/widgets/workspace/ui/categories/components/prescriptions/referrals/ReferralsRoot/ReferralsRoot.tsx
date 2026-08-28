import { resolveDataState } from "../../../../../../../../../../shared/helpers/resolveDataStatel";
import { DataState } from "../../../../../../../../../../shared/ui/DataState/DataState";
import { useFiltersStore } from "../../../../../../../filters/model/store/useFiltersStore";
import { useReferralsQuery } from "../../../../../../model/queries/categories/prescriptions/useReferralsQuery";
import { useWorkspaceStore } from "../../../../../../model/store/useWorkspaceStore";
import { ReferralsBody } from "../ReferralsBody/ReferralsBody";
import { ReferralsHeader } from "../ReferralsHeader/ReferralsHeader";

export const ReferralsRoot = () => {
  const { targetDb } = useFiltersStore();
  const { selectedMedicalCaseUid } = useWorkspaceStore();
  const {
    data: referrals,
    isLoading,
    isPending,
    isError,
    isSuccess,
    error,
  } = useReferralsQuery(selectedMedicalCaseUid, targetDb);

  const dataState = resolveDataState({
    isEnabled: selectedMedicalCaseUid !== null && targetDb !== null,
    isLoading: isLoading,
    isError: isError,
    isSuccess: isSuccess,
    isEmpty: referrals?.length === 0 && isSuccess,
  });

  return (
    <section className="cardRoot">
      <ReferralsHeader />
      {dataState === "waiting" ? (
        <DataState
          title="Выберите медицинский случай"
          description="После выбора отобразяться данные по направлениями"
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
          description="Медицинский случай не содержит информации о направлениях"
          variant="empty"
        />
      ) : (
        <ReferralsBody referrals={referrals ?? []} isPending={isPending} />
      )}
    </section>
  );
};
