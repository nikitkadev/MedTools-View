import styles from "./styles.module.scss";

import { useFiltersStore } from "../../model/store/useFiltersStore";
import { TargetDbToggle } from "../../../../../../shared/ui/TargetDbToggle/TargetDbToggle";
import { useMedicalOrganizationsQuery } from "../../model/queries/useMedicalOrganizationsQuery";
import { AppSelect } from "../../../../../../components/ui/Select/AppSelect";
import { useBillingPeriodsQuery } from "../../model/queries/useBillingPeriodsQuery";

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

  return (
    <section className={styles.filtersPanelRoot}>
      <TargetDbToggle
        value={targetDb ?? ""}
        onChange={(_event: React.MouseEvent<HTMLElement>, newValue: string) => {
          if (newValue === "SMODB18" || newValue === "INOGOROD18") {
            selectTargetDb(newValue);
          }
        }}
      />

      <div className={styles.selections}>
        <AppSelect
          label="Организация"
          value={selectedMedicalOrganization}
          disabled={isMedicalOrganizationsFetching}
          options={medicalOrganizations.map((medicalOrganization) => ({
            label: medicalOrganization.medicalOrganizationCode,
            value: medicalOrganization.medicalOrganizationCode,
          }))}
          onChange={(value: string) => {
            if (value !== null) {
              selectMedicalOrganization(value);
            }
          }}
        />

        <AppSelect
          label="Год"
          value={selectedBillingYear}
          disabled={isBillingPeriodsFetching}
          options={billingPeriods.map((period) => ({
            label: period.billingYear,
            value: period.billingYear,
          }))}
          onChange={(value: string) => {
            if (value !== null) {
              selectBillingYear(value);
            }
          }}
        />

        <AppSelect
          label="Месяц"
          value={selectedBillingMonth}
          disabled={selectedBillingYear === ""}
          options={(() => {
            const found = billingPeriods.find(
              (period) => period.billingYear === selectedBillingYear,
            );
            console.log(found);
            return (found?.billingMonths ?? []).map((month) => ({
              label: month,
              value: month,
            }));
          })()}
          onChange={(value: string) => {
            if (value !== null) {
              selectBillingMonth(value);
            }
          }}
        />
      </div>
    </section>
  );
};
