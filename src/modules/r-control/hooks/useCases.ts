import { useEffect } from "react"
import { useFinishedCasesStore } from "../stores/tables/useFinishedCasesStore"
import { rControlService } from "../api/rControlService";
import { useFiltersStore } from "../stores/filters/useFiltersStore";
import { useCasesStore } from '../stores/tables/useCasesStore';

export const useCases = () => {

    const { targetDb } = useFiltersStore();
    const { selectedRecordUid } = useFinishedCasesStore();
    const { setCases } = useCasesStore();

    useEffect(() => {

        const fetchCases = async () => {
            const response = await rControlService.getCases(targetDb, selectedRecordUid);

            if (response.data.isFailure) {
                return;
            }

            setCases(response.data.value.cases);
        }

        fetchCases();

    }, [selectedRecordUid])
}