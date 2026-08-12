import { useEffect } from "react"
import { useDefectsCategoryStore } from "../../stores/categories/useDefectsCategoryStore";
import { useFiltersStore } from "../../stores/filters/useFiltersStore";
import { useCasesStore } from "../../stores/tables/useCasesStore";
import { rControlCategoriesService } from "../../api/rControlCategoriesService";

export const useDefectsCategory = () => {

    const { targetDb } = useFiltersStore();
    const { selectedRecordUid } = useCasesStore();
    const { setSanks, setDefects, setDefectsTablePagination, defectsPaginationState } = useDefectsCategoryStore();

    useEffect(() => {

        const fetchSanks = async () => {

            if (!selectedRecordUid || !targetDb) {
                return;
            }

            const response = await rControlCategoriesService.getSanks(
                selectedRecordUid,
                targetDb
            );

            if (response.data.isFailure) {
                return;
            }

            setSanks(response.data.value.sanks);
        }

        fetchSanks();

    }, [selectedRecordUid]);

    useEffect(() => {

        const fetchDefects = async () => {

            if (!selectedRecordUid || !targetDb) {
                return;
            }

            const response = await rControlCategoriesService.getDefects(
                selectedRecordUid,
                targetDb,
                defectsPaginationState.page,
                defectsPaginationState.pageSize
            );

            if (response.data.isFailure) {
                return;
            }

            setDefects(response.data.value.defects);
            setDefectsTablePagination({ totalItems: response.data.value.totalItems });
        }

        fetchDefects();

    }, [
        selectedRecordUid,
        defectsPaginationState.page,
        defectsPaginationState.pageSize])
}