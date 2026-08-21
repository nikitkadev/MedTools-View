import { useWorkspaceStore } from "../../../../model/store/useWorkspaceStore";
import { Divider } from "../../../../../../../../components/ui/Divider/Divider";
import { useFiltersStore } from "../../../../../filters/model/store/useFiltersStore";
import { useInvoiceListItemsQuery } from "../../../../model/queries/core/useInvoiceListItemsQuery";
import { InvoicesTableHeader } from "../InvoicesTableHeader/InvoicesTableHeader";
import { DataState } from "../../../../../../../../shared/ui/DataState/DataState";
import { InvoicesTableBody } from "../InvoicesTableBody/InvoicesTableBody";
import styles from "./styles.module.scss";

export const InvoicesTableRoot = () => {
  const {
    invoicesTablePagination,
    selectedInvoiceUid,
    setInvoicesTablePagination,
    selectInvoice,
  } = useWorkspaceStore();
  const {
    targetDb,
    selectedMedicalOrganization,
    selectedBillingYear,
    selectedBillingMonth,
  } = useFiltersStore();

  const {
    data: getInvoicesResult,
    isPending,
    isLoading,
    isError,
    isFetching,
    error,
  } = useInvoiceListItemsQuery({
    medicalOrganizationCode: selectedMedicalOrganization,
    year: selectedBillingYear,
    month: selectedBillingMonth,
    page: invoicesTablePagination.page,
    pageSize: invoicesTablePagination.pageSize,
    targetDb: targetDb,
  });

  const onPageChange = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    page: number,
  ) => {
    if (page >= 0) {
      setInvoicesTablePagination({ page: page });
    }
  };

  const onRowsPerPageChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const newPageSize = parseInt(event.target.value, 10);
    setInvoicesTablePagination({
      pageSize: newPageSize,
      page: 0,
    });
  };

  const isReady =
    selectedMedicalOrganization !== null &&
    selectedBillingYear !== null &&
    selectedBillingMonth !== null &&
    targetDb !== null;

  const invoices = getInvoicesResult?.invoices ?? [];

  return (
    <section className={styles.invoicesTableRoot}>
      <InvoicesTableHeader
        totalCount={getInvoicesResult?.recordsCount ?? 0}
        pagination={invoicesTablePagination}
        onRowsPerPageChange={onRowsPerPageChange}
        onPageChange={onPageChange}
        isLoading={isLoading}
        disabled={isFetching}
      />

      <Divider />

      {!isReady ? (
        <DataState
          variant="waiting"
          title="Выберите период"
          description="Укажите расчётный период для отображения счетов"
        />
      ) : isError ? (
        <DataState
          variant="error"
          title="Невероятная ошибка"
          description={error.message}
        />
      ) : invoices.length === 0 && !isPending ? (
        <DataState
          variant="empty"
          title="Данных не найдено"
          description="Не найдены счета за текущий период"
        />
      ) : (
        <InvoicesTableBody
          isPending={isPending}
          pageSize={invoicesTablePagination.pageSize}
          invoices={invoices}
          selectInvoice={selectInvoice}
          selectedInvoiceUid={selectedInvoiceUid}
        />
      )}
    </section>
  );
};
