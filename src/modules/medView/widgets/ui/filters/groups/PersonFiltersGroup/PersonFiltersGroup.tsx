import type { PersonFiltersGroupDraft } from "../../../../model/types/FiltersDraft";
import { useInsuranceFilterOptions } from "../../../../model/queries/filterOptions/personalGroup/useInsuranceFilterOptions";
import { InsuranceFiltersSubgroup } from "./InsuranceFiltersSubgroup/InsuranceFiltersSubgroup";
import { PatientFiltersSubgroup } from "./PatientFiltersSubgroup/PatientFiltersSubgroup";
import { RepresentativeFiltersSubgroup } from "./RepresentativeFiltersSubgroup/RepresentativeFiltersSubgroup";
import styles from "./styles.module.scss";
import { useInsurancePolicyTypeFilterOptions } from "../../../../model/queries/filterOptions/personalGroup/useInsurancePolicyTypeFilterOptions";

interface PersonFiltersGroupRootProps {
  personFiltersGroupDraft: PersonFiltersGroupDraft;
  setPersonFiltersGroupDraft: (person: PersonFiltersGroupDraft) => void;
}

const PersonFiltersGroup = ({
  personFiltersGroupDraft,
  setPersonFiltersGroupDraft,
}: PersonFiltersGroupRootProps) => {
  const { data: insuranceFilterOptions } = useInsuranceFilterOptions();
  const { data: insurancePolicyTypeFilterOptions } =
    useInsurancePolicyTypeFilterOptions();

  return (
    <section className={styles.generalFiltersGroup}>
      <header className={styles.generalFiltersGroupHeader}>
        <div className={styles.titleGroup}>
          <h2>Фильтрация по персональным данным</h2>
          <p className={styles.description}>
            Все поля, которые относятся к данным пациента
          </p>
        </div>
      </header>

      <PatientFiltersSubgroup
        patientFiltersSubgroupDraft={personFiltersGroupDraft.patient}
        setPatientFiltersSubgroupDraft={(patient) =>
          setPersonFiltersGroupDraft({ ...personFiltersGroupDraft, patient })
        }
      />

      <RepresentativeFiltersSubgroup
        representativeFiltersSubgroupDraft={
          personFiltersGroupDraft.representative
        }
        setRepresentativeFiltersSubgroupDraft={(representative) =>
          setPersonFiltersGroupDraft({
            ...personFiltersGroupDraft,
            representative,
          })
        }
      />
      <InsuranceFiltersSubgroup
        insuranceFiltersSubgroupDraft={personFiltersGroupDraft.insurance}
        setInsuranceFiltersSubgroupDraft={(insurance) =>
          setPersonFiltersGroupDraft({
            ...personFiltersGroupDraft,
            insurance,
          })
        }
        insuranceFilterOptions={insuranceFilterOptions ?? []}
        insurancePolicyTypeFilterOptions={
          insurancePolicyTypeFilterOptions ?? []
        }
      />
    </section>
  );
};

export default PersonFiltersGroup;
