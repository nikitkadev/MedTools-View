import { Divider } from "../../../../../../../../../../components/ui/Divider/Divider";
import { resolveDataState } from "../../../../../../../../../../shared/helpers/resolveDataStatel";
import { DataState } from "../../../../../../../../../../shared/ui/DataState/DataState";
import { useFiltersStore } from "../../../../../../../filters/model/store/useFiltersStore";
import { useDefectsQuery } from "../../../../../../model/queries/categories/defects/useDefectsQuery";
import { useWorkspaceStore } from "../../../../../../model/store/useWorkspaceStore";
import { DefectsBody } from "../DefectsBody/DefectsBody";
import { DefectsHeader } from "../DefectsHeader/DefectsHeader";

export const DefectsRoot = () => {
  const { targetDb } = useFiltersStore();
  const {
    selectedMedicalCaseUid,
    defectsTablePagination,
    setDefectsTablePagination,
  } = useWorkspaceStore();
  const {
    data: getDefectsResult,
    isLoading,
    isPending,
    isFetching,
    isError,
    isSuccess,
    error,
  } = useDefectsQuery(
    selectedMedicalCaseUid,
    targetDb,
    defectsTablePagination.page,
    defectsTablePagination.pageSize,
  );

  const onPageChange = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    page: number,
  ) => {
    if (page >= 0) {
      setDefectsTablePagination({ page: page });
    }
  };

  const onRowsPerPageChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const pageSize = parseInt(event.target.value, 10);

    setDefectsTablePagination({
      pageSize: pageSize,
    });
  };

  const totalCount = getDefectsResult?.totalCount ?? 0;
  const defects = getDefectsResult?.defects ?? [];

  const dataState = resolveDataState({
    isEnabled: selectedMedicalCaseUid !== null && targetDb !== null,
    isLoading: isLoading,
    isError: isError,
    isSuccess: isSuccess,
    isEmpty: defects.length === 0 && isSuccess,
  });

  return (
    <article className="cardRoot">
      <DefectsHeader
        page={defectsTablePagination.page}
        pageSize={defectsTablePagination.pageSize}
        totalCount={totalCount}
        isFetching={isFetching}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
      />
      <Divider />
      {dataState === "waiting" ? (
        <DataState
          title="Выберите медицинский случай"
          description="После выбора станет доступы дефекты"
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
          description="Медицинский случай не содержит дефектов"
          variant="empty"
        />
      ) : (
        <DefectsBody
          defects={defects}
          isPending={isPending}
          pageSize={defectsTablePagination.pageSize}
        />
      )}
    </article>
  );
};
