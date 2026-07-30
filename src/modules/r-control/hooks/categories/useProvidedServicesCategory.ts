import { useEffect } from "react"
import { useCasesStore } from "../../stores/tables/useCasesStore";
import { rControlCategoriesService } from "../../api/rControlCategoriesService";
import { useFiltersStore } from "../../stores/filters/useFiltersStore";
import { useProvidedServicesCategoryStore } from "../../stores/categories/useProvidedServicesCategoryStore";

export const useProvidedServicesCategory = () => {

    const { selectedRecordUid } = useCasesStore();
    const { targetDb } = useFiltersStore();
    const { setServices, setServiceUid, setMedDevs, serviceUid } = useProvidedServicesCategoryStore();

    useEffect(() => {
        const fetchProvidedServices = async () => {

            if (!selectedRecordUid || !targetDb) {
                return;
            }

            const response = await rControlCategoriesService.getProvidedServices(
                selectedRecordUid,
                targetDb
            )

            if (!response || (await response).data.isFailure) {
                return;
            }

            setServices(response.data.value.services);
            setServiceUid(response.data.value.services[0]?.uid);
        }

        fetchProvidedServices();

    }, [selectedRecordUid]);

    useEffect(() => {
        const fetchMedDevs = async () => {

            if (!serviceUid || !targetDb) {
                return;
            }

            const response = await rControlCategoriesService.getMedDevs(
                serviceUid,
                targetDb);

            if (!response || response.data.isFailure) {
                return;
            }

            setMedDevs(response.data.value.medDevs);
        }

        fetchMedDevs();
        
    }, [serviceUid])
}