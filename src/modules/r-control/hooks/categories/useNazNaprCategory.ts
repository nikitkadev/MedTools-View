import { useEffect } from "react"
import { useCasesStore } from "../../stores/tables/useCasesStore";
import { useFiltersStore } from "../../stores/filters/useFiltersStore";
import { rControlCategoriesService } from "../../api/rControlCategoriesService";
import { useNazNaprCategoryStore } from "../../stores/categories/useNazNaprCategoryStore";

export const useNazNaprCategory = () => {

    const { selectedRecordUid } = useCasesStore();
    const { targetDb } = useFiltersStore();
    const { setDirections, setPurposes } = useNazNaprCategoryStore();

    useEffect(() => {
        const fetchNazNaprCategoryData = async () => {

            if (!selectedRecordUid || !targetDb) {
                return;
            }

            const response = await rControlCategoriesService.getNazNaprCategoryData(
                selectedRecordUid,
                targetDb
            );

            if (response.data.isFailure) {
                return;
            }

            setDirections(response.data.value.directions);
            setPurposes(response.data.value.purposes);
        }

        fetchNazNaprCategoryData();
        
    }, [selectedRecordUid]);
}