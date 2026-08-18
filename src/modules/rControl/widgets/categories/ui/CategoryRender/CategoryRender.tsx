import { lazy, Suspense } from "react";

const DefaultCategory = lazy(
  () => import("../CategoryDefault/CategoryDefault"),
);

const Patient = lazy(() => import("../Patient/Patient"));
const MedicalCaseDetails = lazy(
  () => import("../MedicalCaseDetails/MedicalCaseDetails"),
);
const Oncology = lazy(() => import("../Oncology/Oncology"));
const Prescriptions = lazy(() => import("../Prescriptions/Prescriptions"));
const ClinicalGroups = lazy(() => import("../ClinicalGroups/ClinicalGroups"));

const categoryMap = {
  default: DefaultCategory,
  patient: Patient,
  "case-details": MedicalCaseDetails,
  oncology: Oncology,
  referrals: Prescriptions,
  "clinical-groups": ClinicalGroups,
  "provided-services": DefaultCategory,
  defects: DefaultCategory,
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
