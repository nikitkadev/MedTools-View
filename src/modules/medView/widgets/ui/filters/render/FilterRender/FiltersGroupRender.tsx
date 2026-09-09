import {
  lazy,
  Suspense,
  type ComponentType,
  type LazyExoticComponent,
} from "react";
import type { FilterGroupId } from "../../../../types/FilterId";

const None = lazy(
  () => import("../../components/NoneFiltersGroup/NoneFiltersGroup"),
);

const filterGroupMap = {
  none: None,
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
