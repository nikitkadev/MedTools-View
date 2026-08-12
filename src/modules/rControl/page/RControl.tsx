import { Cases } from "./Cases/Cases"
import { Categories } from "./Categories/Categories"
import { FilterPanel } from "./FilterPanel/FilterPanel"
import { FinishedCases } from "./FinishedCases/FinishedCases"
import { InvoicesSection } from "./InvoicesSection/InvoicesSection"

export const RControl = () => {
    return (
        <>
            <FilterPanel />
            <InvoicesSection />
            <FinishedCases />
            <Cases />
            <Categories />
        </>
    )
}