import styles from "./styles.module.scss";

import { useFiltersStore } from "../../model/store/useFiltersStore";
import { TargetDbToggle } from "../../../../../../shared/ui/TargetDbToggle/TargetDbToggle";
import { useMedicalOrganizationsQuery } from "../../model/queries/useMedicalOrganizationsQuery";
import { AppSelect } from "../../../../../../components/ui/Select/AppSelect";
import { useBillingPeriodsQuery } from "../../model/queries/useBillingPeriodsQuery";
import { useWorkspaceStore } from "../../../workspace/model/store/useWorkspaceStore";

export const FilterPanel = () => {
  const {
    targetDb,
    selectedMedicalOrganization,
    selectedBillingYear,
    selectedBillingMonth,
    selectTargetDb,
    selectMedicalOrganization,
    selectBillingYear,
    selectBillingMonth,
  } = useFiltersStore();

  const {
    data: medicalOrganizations = [],
    isPending: isMedicalOrganizationsFetching,
  } = useMedicalOrganizationsQuery(targetDb);

  const { data: billingPeriods = [], isPending: isBillingPeriodsFetching } =
    useBillingPeriodsQuery(selectedMedicalOrganization, targetDb);

  const { setPagination } = useWorkspaceStore();

  return (
    <section className={styles.filtersPanelRoot}>
      <TargetDbToggle
        value={targetDb ?? ""}
        onChange={(_event: React.MouseEvent<HTMLElement>, newValue: string) => {
          if (newValue === "SMODB18" || newValue === "INOGOROD18") {
            selectTargetDb(newValue);
            setPagination({ page: 0 });
          }
        }}
      />

      <div className={styles.selections}>
        <AppSelect
          label="Организация"
          value={selectedMedicalOrganization?.toString() ?? ""}
          disabled={isMedicalOrganizationsFetching}
          options={medicalOrganizations.map((medicalOrganization) => ({
            label: medicalOrganization.medicalOrganizationCode,
            value: medicalOrganization.medicalOrganizationCode,
          }))}
          onChange={(value: string) => {
            if (value !== null) {
              selectMedicalOrganization(value);
              setPagination({ page: 0 });
            }
          }}
        />

        <AppSelect
          label="Год"
          value={selectedBillingYear?.toString() ?? ""}
          disabled={isBillingPeriodsFetching}
          options={billingPeriods.map((period) => ({
            label: period.billingYear.toString(),
            value: period.billingYear.toString(),
          }))}
          onChange={(value: string) => {
            if (value !== null) {
              selectBillingYear(parseInt(value));
              setPagination({ page: 0 });
            }
          }}
        />

        <AppSelect
          label="Месяц"
          value={selectedBillingMonth?.toString() ?? ""}
          disabled={!selectedBillingYear}
          options={(() => {
            const found = billingPeriods.find(
              (period) => period.billingYear === selectedBillingYear,
            );
            console.log(found);
            return (found?.billingMonths ?? []).map((month) => ({
              label: month.toString(),
              value: month.toString(),
            }));
          })()}
          onChange={(value: string) => {
            if (value !== null) {
              selectBillingMonth(parseInt(value));
              setPagination({ page: 0 });
            }
          }}
        />
      </div>
    </section>
  );
};
