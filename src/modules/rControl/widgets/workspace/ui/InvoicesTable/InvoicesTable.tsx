import { useWorkspaceStore } from "../../model/store/useWorkspaceStore";
import { Divider } from "../../../../../../components/ui/Divider/Divider";
import { SearchInput } from "../../../../../../shared/ui/SearchInput/SearchInput";
import { AppTablePagination } from "../../../../../../shared/ui/AppTablePagination/AppTablePagination";
import { useInvoiceListItemsQuery } from "../../model/queries/useInvoiceListItemsQuery";
import { useFiltersStore } from "../../../filters/model/store/useFiltersStore";
import styles from "./styles.module.scss";
import dayjs from "dayjs";

export const InvoicesTable = () => {
  const { pagination, setPagination } = useWorkspaceStore();
  const {
    targetDb,
    selectedMedicalOrganization,
    selectedBillingYear,
    selectedBillingMonth,
  } = useFiltersStore();

  const { data: getInvoiceListItemsResult } = useInvoiceListItemsQuery(
    selectedMedicalOrganization,
    selectedBillingYear,
    selectedBillingMonth,
    pagination.page,
    pagination.pageSize,
    targetDb,
  );

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

  if (!getInvoiceListItemsResult?.invoices) {
    return <div>Пу-пу-пу</div>;
  }

  return (
    <section className={styles.invoicesTableRoot}>
      <header className={styles.invoicesTableRootHeader}>
        <h1>Счета</h1>
        <SearchInput />
        <AppTablePagination
          totalCount={getInvoiceListItemsResult?.recordsCount ?? 0}
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
            {getInvoiceListItemsResult?.invoices.length > 0 ? (
              getInvoiceListItemsResult.invoices.map((invoice) => (
                <tr>
                  <td>{invoice.number}</td>
                  <td>{dayjs(invoice.billingDate).format("DD.MM.YYYY")}</td>
                  <td>{invoice.amount}</td>
                  <td>{invoice.medicalCasesCount}</td>
                  <td>{invoice.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5}>Данных не найдено</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};
