import type { SetStateAction } from "react";
import type { FilterGroupId } from "../../../model/types/FilterId";
import type { FiltersDraft } from "../../../model/types/FiltersDraft";
import NoneFiltersGroup from "../groups/NoneFiltersGroup/NoneFiltersGroup";
import PersonFiltersGroupRoot from "../groups/PersonFiltersGroup/PersonFiltersGroup";
import MedicalCaseDetailsFiltersGroup from "../groups/MedicalCaseDetailsFiltersGroup/MedicalCaseDetailsFiltersGroup";
import OncologyFiltersGroup from "../groups/OncologyFiltersGroup/OncologyFiltersGroup";
import PrescriptionFiltersGroup from "../groups/PrescriptionFiltersGroup/PrescriptionFiltersGroup";

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

    case "case-details":
      return (
        <MedicalCaseDetailsFiltersGroup
          medicalCaseDetailsFiltersGroupDraft={filtersDraft.medicalCaseDetails}
          setMedicalCaseDetailsFiltersGroupDraft={(medicalCaseDetails) =>
            setFiltersDraft((prev) => ({
              ...prev,
              medicalCaseDetails,
            }))
          }
        />
      );

    case "oncology":
      return (
        <OncologyFiltersGroup
          oncologyFiltersGroupDraft={filtersDraft.oncology}
          setOncologyFiltersGroupDraft={(oncology) =>
            setFiltersDraft((prev) => ({
              ...prev,
              oncology: oncology,
            }))
          }
        />
      );

    case "prescriptions":
      return (
        <PrescriptionFiltersGroup
          prescriptionFiltersGroupDraft={filtersDraft.prescription}
          setPrescriptionFiltersGroupDraft={(prescription) =>
            setFiltersDraft((prev) => ({
              ...prev,
              prescription: prescription,
            }))
          }
        />
      );
  }
};
