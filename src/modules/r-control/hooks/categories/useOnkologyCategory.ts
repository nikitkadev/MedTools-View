import { useEffect } from "react";
import { useCasesStore } from "../../stores/tables/useCasesStore";
import { rControlCategoriesService } from "../../api/rControlCategoriesService";
import { useFiltersStore } from "../../stores/filters/useFiltersStore";
import { useOnkologyCategoryStore } from '../../stores/categories/useOncologyCategoryStore';

export const useOnkologyCategory = () => {

    const { selectedRecordUid } = useCasesStore();
    const {
        setOncSluch,
        setConsultations,
        setOncSluchUid,
        setOncologyServices,
        setContraindications,
        setDiags,
        setMedicaments,
        oncSluchUid,
        oncServiceUid } = useOnkologyCategoryStore();
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

            setOncSluch(response.data.value.oncSluch);
            setOncSluchUid(response.data.value.oncSluch.uid);
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

    useEffect(() => {
        const getDetailedOnkSluchInformation = async () => {

            if (!oncSluchUid || !targetDb) {
                return;
            }

            const response = await rControlCategoriesService.getOncSluchDetailedInformation(oncSluchUid, targetDb);

            if (!response || response.data.isFailure) {
                return;
            }

            setOncologyServices(response.data.value.services);
            setContraindications(response.data.value.contraindications);
            setDiags(response.data.value.diags);

        };

        getDetailedOnkSluchInformation();

    }, [oncSluchUid]);

    useEffect(() => {

        const fetchMedicaments = async () => {

            if (!oncServiceUid || !targetDb) {
                return;
            }

            const response = await rControlCategoriesService.getMedicaments(
                oncServiceUid,
                targetDb
            );

            if (!response || response.data.isFailure) {
                return;
            }

            setMedicaments(response.data.value.medicaments);
        }

        fetchMedicaments();
        
    }, [oncServiceUid])

};