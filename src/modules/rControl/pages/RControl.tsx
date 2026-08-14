import { Categories } from "../widgets/categories/ui/Categories/Categories";
import { FilterPanel } from "../widgets/filters/ui/FilterPanel/FilterPanel";
import { Workspace } from "../widgets/workspace/ui/Workspace/Workspace";

export const RControl = () => {
  return (
    <>
      <FilterPanel />
      <Workspace />
      <Categories />
    </>
  );
};
