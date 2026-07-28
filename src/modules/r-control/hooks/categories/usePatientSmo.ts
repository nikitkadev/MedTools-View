import { useEffect } from "react"
import { useCasesStore } from "../../stores/tables/useCasesStore";
import { rControlCategoriesService } from "../../api/rControlCategoriesService";
import { useFiltersStore } from "../../stores/filters/useFiltersStore";
import { usePatientSmoStore } from "../../stores/categories/usePatientSmoStore";

export const usePatientSmo = () => {

    const { selectedRecordUid } = useCasesStore();
    const { targetDb } = useFiltersStore();
    const { setPatient, setSmo } = usePatientSmoStore();

    useEffect(() => {

        const fetchPatientSmoCategoryData = async () => {

            const response = await rControlCategoriesService.getPatientSmoData(
                selectedRecordUid,
                targetDb);

            if (response.data.isFailure) {
                return;
            }

            setPatient(response.data.value.patient);
            setSmo(response.data.value.smo);

        }

        fetchPatientSmoCategoryData();

    }, [selectedRecordUid]);
}