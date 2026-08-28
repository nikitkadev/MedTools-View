import {
  lazy,
  Suspense,
  type ComponentType,
  type LazyExoticComponent,
} from "react";
import type { CategoryId } from "../../../../model/types/categories/CategoryId";

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
const Oncology = lazy(() => import("../../components/oncology/OncologyRoot"));
const Prescriptions = lazy(
  () => import("../../components/prescriptions/PrescriptionsRoot"),
);
const ClinicalGroups = lazy(
  () => import("../../components/clinicalGroups/ClinicalGroupsCategoryRoot"),
);
const ProvidedServices = lazy(
  () =>
    import("../../components/providedServices/ProvidedServicesCategoryRoot"),
);
const Defects = lazy(
  () =>
    import("../../components/defects/DefectsCategoryRoot"),
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
} satisfies Record<CategoryId, LazyExoticComponent<ComponentType>>;

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
