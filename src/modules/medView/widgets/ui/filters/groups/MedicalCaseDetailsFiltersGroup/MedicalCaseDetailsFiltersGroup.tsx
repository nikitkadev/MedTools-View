import type { MedicalCaseDetailsFiltersGroupDraft } from "../../../../model/types/FiltersDraft";
import { useBedProfileFilterOptions } from "../../../../model/queries/filterOptions/medicalCaseDetailsGroup/useBedProfileFilterOptions";
import { useMedicalCareProfileFilterOptions } from "../../../../model/queries/filterOptions/medicalCaseDetailsGroup/useMedicalCareProfileFilterOptions";
import { useVisitPlaceFilterOptions } from "../../../../model/queries/filterOptions/medicalCaseDetailsGroup/useVisitPlaceFilterOptions";
import { useVisitPurposeFilterOptions } from "../../../../model/queries/filterOptions/medicalCaseDetailsGroup/useVisitPurposeFilterOptions";
import { CompletedCaseDetailsFiltersSubgroup } from "./CompletedCaseDetailsFiltersSubgroup/CompletedCaseDetailsFiltersSubgroup";
import { MedicalCaseDetailsFiltersSubgroup } from "./MedicalCaseDetailsFiltersSubgroup/MedicalCaseDetailsFiltersSubgroup";
import { useDiseaseCharacterFilterOptions } from "../../../../model/queries/filterOptions/medicalCaseDetailsGroup/useDiseaseCharacterFilterOptions";
import { usePhysicianSpecialityFilterOptions } from "../../../../model/queries/filterOptions/medicalCaseDetailsGroup/usePhysicianSpecialityFilterOptions";
import { useCareConditionFilterOptions } from "../../../../model/queries/filterOptions/medicalCaseDetailsGroup/useCareConditionFilterOptions";
import { useMedicalCareTypeFilterOptions } from "../../../../model/queries/filterOptions/medicalCaseDetailsGroup/useMedicalCareTypeFilterOptions";
import { useMedicalCareFormFiilterOptions } from "../../../../model/queries/filterOptions/medicalCaseDetailsGroup/useMedicalCareFormFiilterOptions";
import { useMedicalOrganizationFilterOptions } from "../../../../model/queries/filterOptions/medicalCaseDetailsGroup/useMedicalOrganizationFilterOptions";
import { useDiseaseOutcomeFilterOptions } from "../../../../model/queries/filterOptions/medicalCaseDetailsGroup/useDiseaseOutcomeFilterOptions";
import { useScreeningResultFilterGroup } from "../../../../model/queries/filterOptions/medicalCaseDetailsGroup/useScreeningResultFilterGroup";
import { useHospitalizationOutcomeFilterOptions } from "../../../../model/queries/filterOptions/medicalCaseDetailsGroup/useHospitalizationOutcomeFilterOptions";
import styles from "./styles.module.scss";
import { usePaymentMethodFilterOptions } from "../../../../model/queries/filterOptions/medicalCaseDetailsGroup/usePaymentMethodFilterOptions";

interface MedicalCaseDetailsFiltersGroupProps {
  medicalCaseDetailsFiltersGroupDraft: MedicalCaseDetailsFiltersGroupDraft;
  setMedicalCaseDetailsFiltersGroupDraft: (
    medicalCaseDetailsFiltersGroupDraft: MedicalCaseDetailsFiltersGroupDraft,
  ) => void;
}

const MedicalCaseDetailsFiltersGroup = ({
  medicalCaseDetailsFiltersGroupDraft,
  setMedicalCaseDetailsFiltersGroupDraft,
}: MedicalCaseDetailsFiltersGroupProps) => {
  const { data: medicalCareProfileFilterOptions } =
    useMedicalCareProfileFilterOptions();
  const { data: bedProfileFilterOptions } = useBedProfileFilterOptions();
  const { data: visitPlaceFilterOptions } = useVisitPlaceFilterOptions();
  const { data: visitPurposeFilterOptions } = useVisitPurposeFilterOptions();
  const { data: diseaseCharacterFilterOptions } =
    useDiseaseCharacterFilterOptions();
  const { data: physicianSpecialityFilterOptions } =
    usePhysicianSpecialityFilterOptions();
  const { data: careConditionFilterOptions } = useCareConditionFilterOptions();
  const { data: medicalCareTypeFilterOptions } =
    useMedicalCareTypeFilterOptions();
  const { data: medicalCareFormFilterOptions } =
    useMedicalCareFormFiilterOptions();
  const { data: medicalOrgsInCompletedCaseFilterOptions } =
    useMedicalOrganizationFilterOptions("CompletedCaseMedicalOrgs");
  const { data: referringMedicalOrgsInCompletedCaseFilterOptions } =
    useMedicalOrganizationFilterOptions("ReferralMedicalOrgs");
  const { data: diseaseOutcomeFilterOptions } =
    useDiseaseOutcomeFilterOptions();
  const { data: screeningResultFilterOptions } =
    useScreeningResultFilterGroup();
  const { data: hospitalizationOutcomeFilterOptions } =
    useHospitalizationOutcomeFilterOptions();
  const { data: paymentMethodFilterOptions } = usePaymentMethodFilterOptions();

  return (
    <section className={styles.medicalCaseDetailsFiltersGroup}>
      <header className={styles.medicalCaseDetailsFiltersGroupHeader}>
        <div className={styles.titleGroup}>
          <h2>Фильтрация по медицинскому случаю</h2>
          <p className={styles.description}>
            Все поля, которые относятся к данным по медицинскому и законченному
            случаям
          </p>
        </div>
      </header>

      <MedicalCaseDetailsFiltersSubgroup
        medicalCaseDetailsFiltersSubgroupDraft={
          medicalCaseDetailsFiltersGroupDraft.medicalCaseDetails
        }
        setMedicalCaseDetailsFiltersSubgroupDraft={(medicalCaseDetails) =>
          setMedicalCaseDetailsFiltersGroupDraft({
            ...medicalCaseDetailsFiltersGroupDraft,
            medicalCaseDetails: medicalCaseDetails,
          })
        }
        medicalCareFilterOptions={medicalCareProfileFilterOptions ?? []}
        bedProfileFilterOptions={bedProfileFilterOptions ?? []}
        visitPlaceFilterOptions={visitPlaceFilterOptions ?? []}
        visitPurposeFilterOptions={visitPurposeFilterOptions ?? []}
        diseaseCharacterFilterOptions={diseaseCharacterFilterOptions ?? []}
        physicianSpecialitiesFilterOptions={
          physicianSpecialityFilterOptions ?? []
        }
      />

      <CompletedCaseDetailsFiltersSubgroup
        completedCaseDetailsFiltersSubgroupDraft={
          medicalCaseDetailsFiltersGroupDraft.completedCaseDetails
        }
        setCompletedCaseDetailsFiltersSubgroupDraft={(completedCaseDetails) =>
          setMedicalCaseDetailsFiltersGroupDraft({
            ...medicalCaseDetailsFiltersGroupDraft,
            completedCaseDetails: completedCaseDetails,
          })
        }
        careConditionFilterOptions={careConditionFilterOptions ?? []}
        medicalCareTypeFilterOptions={medicalCareTypeFilterOptions ?? []}
        medicalCareFormFilterOptions={medicalCareFormFilterOptions ?? []}
        medicalOrgsInCompletedCaseFilterOptions={
          medicalOrgsInCompletedCaseFilterOptions ?? []
        }
        referringMedicalOrgsInCompletedCaseFilterOptions={
          referringMedicalOrgsInCompletedCaseFilterOptions ?? []
        }
        diseaseOutcomeFilterOptions={diseaseOutcomeFilterOptions ?? []}
        screeningResultFilterOptions={screeningResultFilterOptions ?? []}
        hospitalizationOutcomeFilterOptions={
          hospitalizationOutcomeFilterOptions ?? []
        }
        paymentMethodFilterOptions={paymentMethodFilterOptions ?? []}
      />
    </section>
  );
};

export default MedicalCaseDetailsFiltersGroup;
