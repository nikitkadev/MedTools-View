import type { ReferralFiltersSubgroupDraft } from "../../../../../model/types/FiltersDraft";
import type { Dayjs } from "dayjs";
import { MedViewDateInput } from "../../../../../../../../shared/ui/medView/inputs/MedViewDateInput/MedViewDateInput";
import { MedViewMultipleSelectInput } from "../../../../../../../../shared/ui/medView/inputs/MedViewMultipleSelectInput/MedViewMultipleSelectInput";
import styles from "../styles.module.scss";
import { useFilterOptionsQuery } from "../../../../../model/queries/useFilterOptionsQuery";
import { useMedicalOrganizationFilterOptionsQuery } from "../../../../../model/queries/useMedicalOrganizationFilterOptions";

interface ReferralFiltersSubgroupProps {
  referralsFiltersSubgroupDraft: ReferralFiltersSubgroupDraft;
  setReferralsFiltersSubgroupDraft: (
    referralsFiltersSubgroupDraft: ReferralFiltersSubgroupDraft,
  ) => void;
}

export const ReferralFiltersSubgroup = ({
  referralsFiltersSubgroupDraft,
  setReferralsFiltersSubgroupDraft,
}: ReferralFiltersSubgroupProps) => {
  const { data: referralTypeFilterOptions } = useFilterOptionsQuery(
    "/med-view/filter-options/referral-types",
    "referral-type",
  );

  const { data: diagnosticMethodFilterOptions } = useFilterOptionsQuery(
    "/med-view/filter-options/diagnostic-methods",
    "diagnostic-method",
  );

  const { data: referralMedicalOrganizationFilterOptions } =
    useMedicalOrganizationFilterOptionsQuery(
      "/med-view/filter-options/medical-organizations",
      "medical-organization",
      "SMODB18",
      "ReferralMedicalOrgs",
    );

  return (
    <div className={styles.referralSubgroup}>
      <header className={styles.subgroupHeader}>
        <h3>Направления</h3>
      </header>
      <div className={styles.groupLineGrid}>
        <div className={styles.span6}>
          <MedViewMultipleSelectInput
            label="Вид направления"
            values={referralsFiltersSubgroupDraft.refferalTypes}
            onChange={(newValue: string[]) =>
              setReferralsFiltersSubgroupDraft({
                ...referralsFiltersSubgroupDraft,
                refferalTypes: newValue,
              })
            }
            options={
              referralTypeFilterOptions?.map((option) => ({
                label: option.value,
                value: option.key,
              })) ?? []
            }
          />
        </div>
        <div className={styles.span6}>
          <MedViewMultipleSelectInput
            label="Метод  диагностического исследования"
            values={referralsFiltersSubgroupDraft.diagnosticMethods}
            onChange={(newValue: string[]) =>
              setReferralsFiltersSubgroupDraft({
                ...referralsFiltersSubgroupDraft,
                diagnosticMethods: newValue,
              })
            }
            options={
              diagnosticMethodFilterOptions?.map((option) => ({
                label: option.value,
                value: option.key,
              })) ?? []
            }
          />
        </div>
      </div>

      <div className={styles.groupLineGrid}>
        <div className={styles.span3}>
          <MedViewDateInput
            label="Дата направления"
            value={referralsFiltersSubgroupDraft.referralDate}
            handleDateInputChange={(newValue: Dayjs | null) =>
              setReferralsFiltersSubgroupDraft({
                ...referralsFiltersSubgroupDraft,
                referralDate: newValue,
              })
            }
          />
        </div>
        <div className={styles.span9}>
          <MedViewMultipleSelectInput
            label="МО направления"
            values={
              referralsFiltersSubgroupDraft.referredToMedicalOrganizations
            }
            onChange={(newValue: string[]) =>
              setReferralsFiltersSubgroupDraft({
                ...referralsFiltersSubgroupDraft,
                referredToMedicalOrganizations: newValue,
              })
            }
            options={
              referralMedicalOrganizationFilterOptions?.map((option) => ({
                label: option.value,
                value: option.key,
              })) ?? []
            }
          />
        </div>
      </div>
      <div className={styles.groupLineGrid}>
        <div className={styles.span12}>
          <MedViewMultipleSelectInput
            label="Услуги, указанная в направлении"
            values={referralsFiltersSubgroupDraft.referredServices}
            onChange={(newValue: string[]) =>
              setReferralsFiltersSubgroupDraft({
                ...referralsFiltersSubgroupDraft,
                referredServices: newValue,
              })
            }
            options={[{ label: "V001_NAME", value: "V001_VALUES" }]}
          />
        </div>
      </div>
    </div>
  );
};
