import { lazy, Suspense } from "react";

const DefaultCategory = lazy(
  () => import("../CategoryDefault/CategoryDefault"),
);

const Patient = lazy(() => import("../Patient/Patient"));

const categoryMap = {
  default: DefaultCategory,
  patient: Patient,
  "case-details": DefaultCategory,
  oncology: DefaultCategory,
  referrals: DefaultCategory,
  "clinical-groups": DefaultCategory,
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
