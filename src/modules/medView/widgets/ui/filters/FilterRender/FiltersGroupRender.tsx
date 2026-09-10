import {
  lazy,
  Suspense,
  type ComponentType,
  type LazyExoticComponent,
} from "react";
import type { FilterGroupId } from "../../../model/types/FilterId";

const None = lazy(() => import("../groups/NoneFiltersGroup/NoneFiltersGroup"));

const PersonGroup = lazy(
  () => import("../groups/PersonFiltersGroup/PersonFiltersGroupRoot"),
);

const MedicalCaseDetails = lazy(
  () =>
    import("../groups/MedicalCaseDetailsFiltersGroup/MedicalCaseDetailsFiltersGroup"),
);

const filterGroupMap = {
  none: None,
  persons: PersonGroup,
  "case-details": MedicalCaseDetails,
} satisfies Record<FilterGroupId, LazyExoticComponent<ComponentType>>;

interface FiltersGroupRenderProps {
  filterGroupId: FilterGroupId;
}

export const FiltersGroupRender = ({
  filterGroupId,
}: FiltersGroupRenderProps) => {
  const FilterGroupComponent = filterGroupMap[filterGroupId];

  return (
    <Suspense fallback={<div>Пока пук вернулся</div>}>
      <FilterGroupComponent />
    </Suspense>
  );
};
