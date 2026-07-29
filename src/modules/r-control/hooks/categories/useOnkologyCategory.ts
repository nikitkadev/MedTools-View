import { useEffect } from "react";
import { useCasesStore } from "../../stores/tables/useCasesStore";
import { rControlCategoriesService } from "../../api/rControlCategoriesService";
import { useFiltersStore } from "../../stores/filters/useFiltersStore";
import { useOnkologyCategoryStore } from '../../stores/categories/useOnkologyCategoryStore';

export const useOnkologyCategory = () => {

    const { selectedRecordUid } = useCasesStore();
    const { setOnkSluch, setConsultations } = useOnkologyCategoryStore();
    const { targetDb } = useFiltersStore();

    useEffect(() => {
        const fetchOnkSluch = async () => {

            if (!selectedRecordUid || !targetDb) {
                return;
            }

            const response = await rControlCategoriesService.getOnkSluchData(selectedRecordUid, targetDb);

            if (!response || response.data.isFailure) {
                return;
            }

            setOnkSluch(response.data.value.onkSluch);
        }

        fetchOnkSluch();

    }, [selectedRecordUid]);

    useEffect(() => {
        const fetchConsultations = async () => {

            if (!selectedRecordUid || !targetDb) {
                return;
            }

            const response = await rControlCategoriesService.getConsultations(selectedRecordUid, targetDb);

            if (!response || response.data.isFailure) {
                return;
            }

            setConsultations(response.data.value.consultations);
        }

        fetchConsultations();

    }, [selectedRecordUid]);

};