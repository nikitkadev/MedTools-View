import {
  lazy,
  Suspense,
  type ComponentType,
  type LazyExoticComponent,
} from "react";
import type { FilterGroupId } from "../../../../model/types/FilterId";

const None = lazy(
  () => import("../../components/NoneFiltersGroup/NoneFiltersGroup"),
);

const Persons = lazy(
  () => import("../../components/PersonFiltersGroup/PersonFiltersGroup"),
);

const MedicalCaseDetails = lazy(
  () =>
    import("../../components/MedicalCaseDetailsFiltersGroup/MedicalCaseDetailsFiltersGroup"),
);

const filterGroupMap = {
  none: None,
  persons: Persons,
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
