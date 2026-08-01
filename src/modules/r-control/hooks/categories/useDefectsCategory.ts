import { useEffect } from "react"
import { useDefectsCategoryStore } from "../../stores/categories/useDefectsCategoryStore";
import { useFiltersStore } from "../../stores/filters/useFiltersStore";
import { useCasesStore } from "../../stores/tables/useCasesStore";
import { rControlCategoriesService } from "../../api/rControlCategoriesService";

export const useDefectsCategory = () => {

    const { targetDb } = useFiltersStore();
    const { selectedRecordUid } = useCasesStore();
    const { setDefects, setSanks } = useDefectsCategoryStore();

    useEffect(() => {

        const fetchDefectsSanksCategoryData = async () => {

            if (!selectedRecordUid || !targetDb) {
                return;
            }

            const response = await rControlCategoriesService.getDefectsSanksCategoryData(
                selectedRecordUid,
                targetDb
            );

            if (response.data.isFailure) {
                return;
            }

            setDefects(response.data.value.defects);
            setSanks(response.data.value.sanks);
        }

        fetchDefectsSanksCategoryData();

    }, []);
}