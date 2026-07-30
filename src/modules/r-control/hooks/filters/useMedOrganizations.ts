import { useEffect } from "react";
import { useFiltersStore } from "../../stores/filters/useFiltersStore";
import { useDictionariesStore } from "../../stores/dictionaries/useDictionariesStore";
import { rControlService } from "../../api/rControlService";

export const useMedOrganizations = () => {

    const { targetDb } = useFiltersStore();
    const { setMedOrganizations } = useDictionariesStore();


    useEffect(() => {

        if (!targetDb) {
            return;
        }

        const fetchMedOrganizations = async () => {
            const response = await rControlService.getOrganizations(targetDb);

            if (response.data.isFailure) {
                return;
            }

            setMedOrganizations(response.data.value.medOrganizations);
        }

        fetchMedOrganizations();

    }, [targetDb]);
}