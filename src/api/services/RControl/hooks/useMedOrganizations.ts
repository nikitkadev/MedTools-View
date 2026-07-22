import { useEffect } from "react";
import { rControlService } from "../rControlService";
import { useRControlStore } from "../../../../components/pages/RControl/RControlStore"

export const useMedOrganizations = () => {

    const { dbType, setMedOrganizations } = useRControlStore();

    useEffect(() => {

        const fetchMedOrganizations = async () => {
            const response = await rControlService.getOrganizations(dbType);

            if (response.data.isFailure) {
                console.log(response.data.error);
                return;
            }

            setMedOrganizations(response.data.value.medOrganizations);
        }

        fetchMedOrganizations();

    }, [dbType]);
}