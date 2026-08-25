import { resolveDataState } from "../../../../../../../../../../shared/helpers/resolveDataStatel";
import { DataState } from "../../../../../../../../../../shared/ui/DataState/DataState";
import { useFiltersStore } from "../../../../../../../filters/model/store/useFiltersStore";
import { useOncologyServicesQuery } from "../../../../../../model/queries/categories/oncology/useOncologyServicesQuery";
import { OncologyServicesCards } from "../OncologyServicesCards/OncologyServicesCards";

interface OncologyServicesSectionProps {
  oncologyCaseUid: number | null;
  selectedOncologyServiceUid: number | null;
  selectOncologyService: (oncologyServiceUid: number | null) => void;
}

export const OncologyServicesSection = ({
  oncologyCaseUid,
  selectedOncologyServiceUid,
  selectOncologyService,
}: OncologyServicesSectionProps) => {
  const { targetDb } = useFiltersStore();
  const {
    data: oncologyServices,
    isLoading,
    isPending,
    isError,
    isSuccess,
    error,
  } = useOncologyServicesQuery(oncologyCaseUid, targetDb);

  const dataState = resolveDataState({
    isEnabled: oncologyCaseUid !== null && targetDb !== null,
    isLoading: isLoading,
    isError: isError,
    isSuccess: isSuccess,
    isEmpty: oncologyServices?.length === 0 && isSuccess,
  });

  return (
    <>
      {dataState === "waiting" ? (
        <DataState
          title="Выберите онкологический случай"
          description="Выберите онкологический случай для отображения онкологических услуг"
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
          description="Онкологический случай не содержит онкологических услуг"
          variant="empty"
        />
      ) : (
        <OncologyServicesCards
          isPending={isPending}
          oncologyServices={oncologyServices ?? []}
          selectOncologyService={selectOncologyService}
          selectedOncologyServiceUid={selectedOncologyServiceUid}
        />
      )}
    </>
  );
};
