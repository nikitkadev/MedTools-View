import { useWorkspaceStore } from "../../model/store/useWorkspaceStore";
import { Divider } from "../../../../../../components/ui/Divider/Divider";
import { SearchInput } from "../../../../../../shared/ui/SearchInput/SearchInput";
import { AppTablePagination } from "../../../../../../shared/ui/AppTablePagination/AppTablePagination";
import { useInvoiceListItemsQuery } from "../../model/queries/useInvoiceListItemsQuery";
import { useFiltersStore } from "../../../filters/model/store/useFiltersStore";
import { TableStateRow } from "../../../../../../shared/ui/TableStateRow/TableStateRow";
import { TableSkeleton } from "../../../../../../shared/ui/TableSkeleton/TableSkeleton";
import styles from "./styles.module.scss";
import dayjs from "dayjs";

export const InvoicesTable = () => {
  const { pagination, selectedInvoiceUid, setPagination, selectInvoice } =
    useWorkspaceStore();
  const {
    targetDb,
    selectedMedicalOrganization,
    selectedBillingYear,
    selectedBillingMonth,
  } = useFiltersStore();

  const {
    data: getInvoicesResult,
    isLoading,
    isError,
    isFetching,
    error,
  } = useInvoiceListItemsQuery({
    medicalOrganizationCode: selectedMedicalOrganization,
    year: selectedBillingYear,
    month: selectedBillingMonth,
    page: pagination.page,
    pageSize: pagination.pageSize,
    targetDb: targetDb,
  });

  const onPageChange = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    page: number,
  ) => {
    if (page >= 0) {
      setPagination({ page: page });
    }
  };

  const onRowsPerPageChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const newPageSize = parseInt(event.target.value, 10);
    setPagination({
      pageSize: newPageSize,
      page: 0,
    });
  };

  const invoices = getInvoicesResult?.invoices;

  return (
    <section className={styles.invoicesTableRoot}>
      <header className={styles.invoicesTableRootHeader}>
        <h1>Счета</h1>
        <SearchInput />
        <AppTablePagination
          disabled={isFetching || isLoading}
          totalCount={getInvoicesResult?.recordsCount ?? 0}
          onRowsPerPageChange={onRowsPerPageChange}
          onPageChange={onPageChange}
          pagination={pagination}
        />
      </header>
      <Divider />
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>№ счета</th>
              <th>Дата счета</th>
              <th>Сумма, ₽</th>
              <th>Случаев</th>
              <th className="thCenter">Статус</th>
            </tr>
          </thead>
          <tbody>
            {selectedBillingMonth === null ? (
              <TableStateRow
                colSpan={5}
                title="Укажите период"
                description="Выберите желанную базу данных и укажите организацию с расчетным периодом"
              />
            ) : isLoading ? (
              <TableSkeleton columns={5} rows={pagination.pageSize} />
            ) : isError ? (
              <TableStateRow
                colSpan={5}
                title="Упс-с, произошла ошибка"
                description={error.message}
              />
            ) : (
              invoices?.map((invoice) => (
                <tr
                  className={
                    invoice.invoiceUid === selectedInvoiceUid
                      ? "selectedRow"
                      : ""
                  }
                  key={invoice.invoiceUid}
                  onClick={() => selectInvoice(invoice.invoiceUid)}
                >
                  <td>{invoice.number}</td>
                  <td>{dayjs(invoice.billingDate).format("DD.MM.YYYY")}</td>
                  <td>{invoice.amount}</td>
                  <td>{invoice.medicalCasesCount}</td>
                  <td className="tdCenter">{invoice.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};
