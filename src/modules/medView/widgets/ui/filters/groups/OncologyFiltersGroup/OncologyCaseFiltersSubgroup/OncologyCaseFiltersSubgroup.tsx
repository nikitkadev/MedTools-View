import type { OncologyCaseFiltersSubgroupDraft } from "../../../../../model/types/FiltersDraft";
import type { FilterOption } from "../../../../../model/types/FilterOptions";
import { MedViewMultipleSelectInput } from "../../../../../../../../shared/ui/medView/inputs/MedViewMultipleSelectInput/MedViewMultipleSelectInput";
import { useFilterOptionsQuery } from "../../../../../model/queries/useFilterOptionsQuery";
import { MedViewAutocompleteInput } from "../../../../../../../../shared/ui/medView/inputs/MedViewAutocompleteInput/MedViewAutocompleteInput";
import { useState } from "react";
import { useAutocompleteFilterOptionsQuery } from "../../../../../model/queries/useAutocompleteFilterOptionsQuery";
import styles from "../styles.module.scss";

interface OncologyCaseFiltersSubgroupProps {
  oncologyCaseFiltersSubgroupDraft: OncologyCaseFiltersSubgroupDraft;
  setOncologyCaseFiltersSubgroupDraft: (
    oncologyCaseFiltersSubgroupDraft: OncologyCaseFiltersSubgroupDraft,
  ) => void;
}

export const OncologyCaseFiltersSubgroup = ({
  oncologyCaseFiltersSubgroupDraft,
  setOncologyCaseFiltersSubgroupDraft,
}: OncologyCaseFiltersSubgroupProps) => {
  const [inputStageValue, setInputStageValue] = useState("");

  const { data: referralReasonFilterOptions } = useFilterOptionsQuery(
    "/med-view/filter-options/referral-reasons",
    "referral-reason",
  );

  const { data: diseaseStageFilterOptions, isPending } =
    useAutocompleteFilterOptionsQuery(
      "/med-view/filter-options/disease-stages",
      inputStageValue,
    );

  return (
    <div className={styles.oncologyCaseSubgroup}>
      <header className={styles.subgroupHeader}>
        <h3>Онкологический случай</h3>
      </header>
      <div className={styles.groupLineGrid}>
        <div className={styles.span6}>
          <MedViewMultipleSelectInput
            label="Повод обращения"
            values={oncologyCaseFiltersSubgroupDraft.referralReasons}
            onChange={(newValue: string[]) =>
              setOncologyCaseFiltersSubgroupDraft({
                ...oncologyCaseFiltersSubgroupDraft,
                referralReasons: newValue,
              })
            }
            options={
              referralReasonFilterOptions?.map((option) => ({
                label: option.label,
                value: option.value,
              })) ?? []
            }
          />
        </div>

        <div className={styles.span6}>
          <MedViewAutocompleteInput
            label="Стадии заболевания"
            values={oncologyCaseFiltersSubgroupDraft.stages}
            options={diseaseStageFilterOptions ?? []}
            inputValue={inputStageValue}
            onInputChange={setInputStageValue}
            onChange={(newValue: FilterOption[]) =>
              setOncologyCaseFiltersSubgroupDraft({
                ...oncologyCaseFiltersSubgroupDraft,
                stages: newValue,
              })
            }
            loading={isPending}
          />
        </div>
      </div>
    </div>
  );
};
