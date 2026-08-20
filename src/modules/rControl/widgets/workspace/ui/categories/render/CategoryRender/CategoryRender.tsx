import { lazy, Suspense } from "react";

const DefaultCategory = lazy(
  () => import("../../components/default/CategoryDefault/CategoryDefault"),
);

const Patient = lazy(
  () =>
    import("../../components/patient/CategoryPatientRoot/CategoryPatientRoot"),
);
const MedicalCaseDetails = lazy(
  () =>
    import("../../components/medicalCaseDetails/CategoryMedicalCaseDetailsRoot/CategoryMedicalCaseDetailsRoot"),
);
const Oncology = lazy(
  () =>
    import("../../components/oncology/CategoryOncologyRoot/CategoryOncologyRoot"),
);
const Prescriptions = lazy(
  () =>
    import("../../components/prescriptions/CategoryPrescriptionsRoot/CategoryPrescriptionsRoot"),
);
const ClinicalGroups = lazy(
  () =>
    import("../../components/clinicalGroups/CategoryClinicalGroupsRoot/CategoryClinicalGroupsRoot"),
);
const ProvidedServices = lazy(
  () =>
    import("../../components/providedServices/CategoryProvidedServicesRoot/CategoryProvidedServicesRoot"),
);
const Defects = lazy(
  () =>
    import("../../components/defects/CategoryDefectsRoot/CategoryDefectsRoot"),
);

const categoryMap = {
  default: DefaultCategory,
  patient: Patient,
  "case-details": MedicalCaseDetails,
  oncology: Oncology,
  referrals: Prescriptions,
  "clinical-groups": ClinicalGroups,
  "provided-services": ProvidedServices,
  defects: Defects,
} as const;

export type CategoryId = keyof typeof categoryMap;

interface CategoryRenderProps {
  targetCategory: CategoryId;
}

export const CategoryRender = ({ targetCategory }: CategoryRenderProps) => {
  const CategoryComponent = categoryMap[targetCategory];
  return (
    <Suspense fallback={<div>Пока пук</div>}>
      <CategoryComponent />
    </Suspense>
  );
};
