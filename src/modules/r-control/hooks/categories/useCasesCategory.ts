import { useEffect } from "react";
import { useCasesStore } from "../../stores/tables/useCasesStore";
import { rControlCategoriesService } from "../../api/rControlCategoriesService";
import { useFiltersStore } from "../../stores/filters/useFiltersStore";
import { useCasesCategoryStore } from "../../stores/categories/useCasesCategoryStore";

export const useCasesCategory = () => {

    const { selectedRecordUid } = useCasesStore();
    const { targetDb } = useFiltersStore();
    const { setCategoryCase, setCategoryFinishedCase } = useCasesCategoryStore();

    useEffect(() => {

        const fetchCasesCategoryData = async () => {
            const response = await rControlCategoriesService.getCasesData(selectedRecordUid, targetDb);

            if (response.data.isFailure) {
                return;
            }

            setCategoryCase(response.data.value.cases);
            setCategoryFinishedCase(response.data.value.finishedCase);
        }

        fetchCasesCategoryData();

    }, [selectedRecordUid]);
}