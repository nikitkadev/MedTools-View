import type { ProvidedServicesFiltersGroupDraft } from "../../../../model/types/FiltersDraft";
import { MedViewMultipleSelectInput } from "../../../../../../../shared/ui/medView/inputs/MedViewMultipleSelectInput/MedViewMultipleSelectInput";
import styles from "./styles.module.scss";

interface ProvidedServiceFiltersGroupProps {
  providedServiceDraft: ProvidedServicesFiltersGroupDraft;
  setProvidedServiceDraft: (
    providedServiceDraft: ProvidedServicesFiltersGroupDraft,
  ) => void;
}

const ProvidedServiceFiltersGroup = ({
  providedServiceDraft,
  setProvidedServiceDraft,
}: ProvidedServiceFiltersGroupProps) => {
  return (
    <section className={styles.providedServiceFiltersGroup}>
      <header className={styles.providedServiceFiltersGroupHeader}>
        <div className={styles.titleGroup}>
          <h2>Фильтрация по услугам</h2>
          <p className={styles.description}>
            Все поля, которые относятся к услугам
          </p>
        </div>
      </header>
      <div className={styles.providedServiceFiltersSubgroup}>
        <header className={styles.subgroupHeader}>
          <h3>Услуги</h3>
        </header>
        <div className={styles.groupLineGrid}>
          <div className={styles.span12}>
            <MedViewMultipleSelectInput
              label="Название услуги"
              values={providedServiceDraft.serviceCodes}
              onChange={(newValue: string[]) =>
                setProvidedServiceDraft({
                  ...providedServiceDraft,
                  serviceCodes: newValue,
                })
              }
              options={[{ label: "T003_NAME", value: "T003_VALUES" }]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvidedServiceFiltersGroup;
