import type { Dayjs } from "dayjs";
import type { SanctionFiltersGroupDraft } from "../../../../model/types/FiltersDraft";
import { MedViewDateInput } from "../../../../../../../shared/ui/medView/inputs/MedViewDateInput/MedViewDateInput";
import { MedViewDefaultInput } from "../../../../../../../shared/ui/medView/inputs/MedViewDefaultInput/MedViewDefaultInput";
import { MedViewMultipleSelectInput } from "../../../../../../../shared/ui/medView/inputs/MedViewMultipleSelectInput/MedViewMultipleSelectInput";
import { useFilterOptionsQuery } from "../../../../model/queries/useFilterOptionsQuery";
import styles from "./styles.module.scss";

interface SanctionFiltersGroupProps {
  sanctionFiltersGroupDraft: SanctionFiltersGroupDraft;
  setSanctionFiltersGroupDraft: (
    sanctionFiltersGroupDraft: SanctionFiltersGroupDraft,
  ) => void;
}

const SanctionFiltersGroup = ({
  sanctionFiltersGroupDraft,
  setSanctionFiltersGroupDraft,
}: SanctionFiltersGroupProps) => {
  const { data: controlTypeFilterOptions } = useFilterOptionsQuery(
    "/med-view/filter-options/control-type-codes",
    "control-type-code",
  );

  return (
    <section className={styles.sanctionFiltersGroup}>
      <header className={styles.sanctionFiltersGroupeader}>
        <div className={styles.titleGroup}>
          <h2>Фильтрация по санкциям</h2>
          <p className={styles.description}>
            Все поля, которые относятся к санкциям
          </p>
        </div>
      </header>
      <div className={styles.sanctionFiltersSubgroup}>
        <header className={styles.subgroupHeader}>
          <h3>Санкции</h3>
        </header>
        <div className={styles.groupLineGrid}>
          <div className={styles.span6}>
            <MedViewMultipleSelectInput
              label="Код вида контроля"
              values={sanctionFiltersGroupDraft.controlTypeCodes}
              onChange={(newValue: string[]) =>
                setSanctionFiltersGroupDraft({
                  ...sanctionFiltersGroupDraft,
                  controlTypeCodes: newValue,
                })
              }
              options={
                controlTypeFilterOptions?.map((option) => ({
                  label: option.value,
                  value: option.key,
                })) ?? []
              }
            />
          </div>
          <div className={styles.span6}>
            <MedViewMultipleSelectInput
              label="Код причины отказа"
              values={sanctionFiltersGroupDraft.refusalReasons}
              onChange={(newValue: string[]) =>
                setSanctionFiltersGroupDraft({
                  ...sanctionFiltersGroupDraft,
                  refusalReasons: newValue,
                })
              }
              options={[{ label: "F014_NAME", value: "F014_VALUES" }]}
            />
          </div>
        </div>
        <div className={styles.groupLineGrid}>
          <div className={styles.span3}>
            <MedViewDefaultInput
              label="Номер акта МЭК, МЭЭ или ЭКМП"
              placeholder="0000"
              value={sanctionFiltersGroupDraft.expertiseActNumber}
              handleInputChange={(newValue: string) =>
                setSanctionFiltersGroupDraft({
                  ...sanctionFiltersGroupDraft,
                  expertiseActNumber: newValue,
                })
              }
            />
          </div>
          <div className={styles.span3}>
            <MedViewDateInput
              label="Дата акта МЭК, МЭЭ или ЭКМП"
              value={sanctionFiltersGroupDraft.expertiseActDate}
              handleDateInputChange={(newValue: Dayjs | null) =>
                setSanctionFiltersGroupDraft({
                  ...sanctionFiltersGroupDraft,
                  expertiseActDate: newValue,
                })
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SanctionFiltersGroup;
