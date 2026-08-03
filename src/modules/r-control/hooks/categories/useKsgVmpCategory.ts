import { useEffect } from "react"
import { useCasesStore } from "../../stores/tables/useCasesStore";
import { useFiltersStore } from "../../stores/filters/useFiltersStore";
import { rControlCategoriesService } from "../../api/rControlCategoriesService";
import { useKsgVmpCategoryStore } from "../../stores/categories/useKsgVmpCategoryStore";

export const useKsgVmpCategory = () => {

    const { selectedRecordUid } = useCasesStore();
    const { targetDb } = useFiltersStore();
    const {
        setKsgKpg,
        setVmp,
        setKsgKpgUid,
        setCrits,
        setSlKoefs,
        ksgKpgUid } = useKsgVmpCategoryStore();

    useEffect(() => {

        const fetchCardsData = async () => {

            if (!selectedRecordUid || !targetDb) {
                return;
            }

            const response = await rControlCategoriesService.getKsgVmpCardsData(
                selectedRecordUid,
                targetDb
            )

            if (response.data.isFailure) {
                return;
            }

            setKsgKpg(response.data.value.ksgKpg);
            setVmp(response.data.value.vmp);
            setKsgKpgUid(response.data.value.ksgKpg.uid);
        }

        fetchCardsData();


    }, [selectedRecordUid]);

    useEffect(() => {

        const fetchTablesData = async () => {
            if (!ksgKpgUid || !targetDb) {
                return;
            }

            const response = await rControlCategoriesService.getKsgVmpTablesData(
                ksgKpgUid,
                targetDb
            )

            if (response.data.isFailure) {
                return;
            }

            setCrits(response.data.value.crits);
            setSlKoefs(response.data.value.slKoefs);
        }

        fetchTablesData();
    }, [ksgKpgUid])
}