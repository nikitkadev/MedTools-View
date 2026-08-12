import { lazy, Suspense } from "react";
import type { CategoryId } from "../../../types/CategoryId";
import { EmptyDataField } from "../../../../../components/ui/EmptyDataField/EmptyDataField";

const PatientSmoCategory = lazy(() => import('../PatientSmo/PatientSmo'));
const CasesCategory = lazy(() => import('../Cases/Cases'));
const OnkologyCategory = lazy(() => import('../Onkology/Onkology'));
const UslCategory = lazy(() => import('../Usl/Usl'));
const KsgVmpCategory = lazy(() => import('../KsgVmp/KsgVmp'));
const NazNaprCategory = lazy(() => import('../NazNapr/NazNapr'));
const DefectsCategory = lazy(() => import('../Defects/Defects'));

const categoryMap = {
    'default': EmptyDataField,
    'patientSmoId': PatientSmoCategory,
    'casesId': CasesCategory,
    'onkId': OnkologyCategory,
    'uslId': UslCategory,
    'ksgVmpId': KsgVmpCategory,
    'nazNaprId': NazNaprCategory,
    'defectsId': DefectsCategory
} as const;

interface RenderProps {
    caregoryId: CategoryId
}

export const Render = ({ caregoryId }: RenderProps) => {

    const Category = categoryMap[caregoryId];

    return (
        <Suspense fallback={<div />}>
            <Category />
        </Suspense>
    )
}