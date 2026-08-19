import { Divider } from "../../../../../../components/ui/Divider/Divider";
import { CardState } from "../../../../../../shared/ui/CardState/CardState";
import { CategoryLineHeader } from "../../../../../../shared/ui/CategoryLineHeader/CategoryLineHeader";
import { useFiltersStore } from "../../../filters/model/store/useFiltersStore";
import { useWorkspaceStore } from "../../../workspace/model/store/useWorkspaceStore";
import { useOncologyCaseQuery } from "../../model/queries/Oncology/useOncologyCaseQuery";
import { useCategoriesStore } from "../../model/stores/useCategoriesStore";
import { ConsultationsTable } from "./Consultations/ConsultationsTable";
import { ContraindicationsTable } from "./Contraindications/ContraindicationsTable";
import { DiagnosticsTable } from "./Diagnostics/DiagnosticsTable";
import { InjectionDatesTable } from "./InjectionDates/InjectionDatesTable";
import { InjectionsTable } from "./Injections/InjectionsTable";
import { MedicationsTable } from "./Medications/MedicationsTable";
import { OncologyCaseCard } from "./OncologyCaseDetails/OncologyCaseCard";
import { OncologyCaseCardSkeleton } from "./OncologyCaseDetails/OncologyCaseCardSkeleton";
import { OncologyServicesTable } from "./OncologyServices/OncologyServicesTable";
import styles from "./styles.module.scss";

const Oncology = () => {
  const { targetDb } = useFiltersStore();
  const { selectedMedicalCaseUid } = useWorkspaceStore();
  const { selectedOncologyServiceUid, selectedMedicationUid } =
    useCategoriesStore();
  const {
    data: oncologyCase,
    isLoading: isOncologyCaseLoading,
    isError: isOncologyCaseError,
    error: oncologyCaseError,
  } = useOncologyCaseQuery(selectedMedicalCaseUid, targetDb);

  const oncologyCaseUid = oncologyCase?.oncologyCaseUid ?? null;

  return (
    <section className={styles.oncologyRoot}>
      <div className={styles.categoryLine}>
        <CategoryLineHeader
          number={1}
          title="Данные по медицинскому случаю"
          description="Все, что относится к медицинскому случаю в рамках категории"
        />
        <div className={styles.twoGridLine}>
          {isOncologyCaseLoading ? (
            <OncologyCaseCardSkeleton />
          ) : isOncologyCaseError ? (
            <CardState
              headline="Детали онкологического случая"
              title="Ошибка данных"
              description={oncologyCaseError.message}
            />
          ) : !oncologyCase ? (
            <CardState
              headline="Детали онкологического случая"
              title="Данные не найдены"
              description="Не удалось найти данные о онкологическом случае"
            />
          ) : (
            <OncologyCaseCard oncologyCase={oncologyCase} />
          )}
          <ConsultationsTable />
        </div>
      </div>
      <Divider />
      <div className={styles.categoryLine}>
        <CategoryLineHeader
          number={2}
          title="Данные по онкологическому случаю"
          description="Все, что относится к онкологическому случаю в рамках категории"
        />
        <DiagnosticsTable
          targetDb={targetDb}
          oncologyCaseUid={oncologyCaseUid}
        />
        <ContraindicationsTable
          oncologyCaseUid={oncologyCaseUid}
          targetDb={targetDb}
        />
        <OncologyServicesTable
          oncologyCaseUid={oncologyCaseUid}
          targetDb={targetDb}
        />
      </div>
      <Divider />
      <div className={styles.categoryLine}>
        <CategoryLineHeader
          number={3}
          title="Данные по онкологической услуге"
          description="Все, что относится к онкологической услуге в рамках категории"
        />
        <MedicationsTable
          oncologySericeUid={selectedOncologyServiceUid}
          targetDb={targetDb}
        />
      </div>
      <Divider />
      <div className={styles.categoryLine}>
        <CategoryLineHeader
          number={4}
          title="Данные по лекарственному препарату"
          description="Все, что относится к лекарственному препарату в рамках категории"
        />
        <InjectionDatesTable
          medicationUid={selectedMedicationUid}
          targetDb={targetDb}
        />
        <InjectionsTable
          medicationUid={selectedMedicationUid}
          targetDb={targetDb}
        />
      </div>
    </section>
  );
};

export default Oncology;
