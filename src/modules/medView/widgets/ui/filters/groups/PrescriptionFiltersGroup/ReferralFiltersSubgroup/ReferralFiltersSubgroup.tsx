import type { ReferralFiltersSubgroupDraft } from "../../../../../model/types/FiltersDraft";
import type { Dayjs } from "dayjs";
import { MedViewDateInput } from "../../../../../../../../shared/ui/medView/inputs/MedViewDateInput/MedViewDateInput";
import { MedViewMultipleSelectInput } from "../../../../../../../../shared/ui/medView/inputs/MedViewMultipleSelectInput/MedViewMultipleSelectInput";
import styles from "../styles.module.scss";

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
            options={[{ label: "V028_NAME", value: "V028_VALUES" }]}
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
            options={[{ label: "V029_NAME", value: "V029_VALUES" }]}
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
            options={[{ label: "F003_NAME", value: "F003_VALUES" }]}
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
