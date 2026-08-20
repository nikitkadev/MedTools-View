import { CategoriesWorkspace } from "../widgets/workspace/ui/categories/CategoriesWorkspace";
import { FilterPanel } from "../widgets/filters/ui/FilterPanel/FilterPanel";
import { Workspace } from "../widgets/workspace/ui/core/Workspace";

export const RControl = () => {
  return (
    <>
      <FilterPanel />
      <Workspace />
      <CategoriesWorkspace />
    </>
  );
};
