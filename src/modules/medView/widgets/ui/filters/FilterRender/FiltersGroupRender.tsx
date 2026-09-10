import type { SetStateAction } from "react";
import type { FilterGroupId } from "../../../model/types/FilterId";
import type { FiltersDraft } from "../../../model/types/FiltersDraft";
import NoneFiltersGroup from "../groups/NoneFiltersGroup/NoneFiltersGroup";
import PersonFiltersGroupRoot from "../groups/PersonFiltersGroup/PersonFiltersGroup";

interface FiltersGroupRenderProps {
  filterGroupId: FilterGroupId;
  filtersDraft: FiltersDraft;
  setFiltersDraft: React.Dispatch<SetStateAction<FiltersDraft>>;
}

export const FiltersGroupRender = ({
  filterGroupId,
  filtersDraft,
  setFiltersDraft,
}: FiltersGroupRenderProps) => {
  switch (filterGroupId) {
    case "none":
      return <NoneFiltersGroup />;
    case "persons":
      return (
        <PersonFiltersGroupRoot
          personFiltersGroupDraft={filtersDraft.person}
          setPersonFiltersGroupDraft={(person) =>
            setFiltersDraft((prev) => ({
              ...prev,
              person,
            }))
          }
        />
      );
  }
};
