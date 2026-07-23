import { useEffect } from "react";
import { rControlService } from "../rControlService";
import { useDictionariesStore } from "../stores/dictionaries/useDictionariesStore";
import { useFiltersStore } from "../stores/filters/useFiltersStore";

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
                console.log(response.data.error);
                return;
            }

            setMedOrganizations(response.data.value.medOrganizations);
        }

        fetchMedOrganizations();

    }, [targetDb]);
}