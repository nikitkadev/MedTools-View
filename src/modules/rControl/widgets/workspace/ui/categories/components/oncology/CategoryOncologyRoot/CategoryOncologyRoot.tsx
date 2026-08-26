import { CategoryLineHeader } from "../../../../../../../../../shared/ui/CategoryLineHeader/CategoryLineHeader";
import { useOncologyCaseQuery } from "../../../../../model/queries/categories/oncology/useOncologyCaseQuery";
import { ConsultationsListRoot } from "../сonsultations/ConsultationsListRoot/ConsultationsListRoot";
import { Divider } from "../../../../../../../../../components/ui/Divider/Divider";
import { useFiltersStore } from "../../../../../../filters/model/store/useFiltersStore";
import { useWorkspaceStore } from "../../../../../model/store/useWorkspaceStore";
import { InjectionDatesTable } from "../InjectionDatesTable/InjectionDatesTable";
import { InjectionsTable } from "../InjectionsTable/InjectionsTable";
import { OncologyCaseCardRoot } from "../oncologyCase/OncologyCaseCardRoot/OncologyCaseCardRoot";
import styles from "./styles.module.scss";
import { DiagnosticsListRoot } from "../diagnostics/DiagnosticsListRoot/DiagnosticsListRoot";
import { ContraindicationsListRoot } from "../contraindications/ContraindicationsListRoot/ContraindicationsListRoot";
import { OncologyServicesSection } from "../oncologyServices/OncologyServicesSection/OncologyServicesSection";
import { MedicationsSection } from "../medications/MedicationsSection/MedicationsSection";

const Oncology = () => {
  const { targetDb } = useFiltersStore();
  const {
    selectedMedicalCaseUid,
    selectedMedicationUid,
    selectedOncologyServiceUid,
    selectOncologyService,
  } = useWorkspaceStore();
  const { data: oncologyCase } = useOncologyCaseQuery(
    selectedMedicalCaseUid,
    targetDb,
  );

  const oncologyCaseUid = oncologyCase?.oncologyCaseUid ?? null;

  return (
    <section className={styles.oncologyRoot}>
      <div className={styles.categoryLine}>
        <CategoryLineHeader
          number={1}
          title="Данные по медицинскому случаю"
          description="Все, что относится к медицинскому случаю в рамках категории"
        />

        <div className={styles.medicalCaseOncologyDetailsLine}>
          <OncologyCaseCardRoot />
          <ConsultationsListRoot />
        </div>
      </div>

      <Divider />

      <div className={styles.categoryLine}>
        <CategoryLineHeader
          number={2}
          title="Данные по онкологическому случаю"
          description="Все, что относится к онкологическому случаю в рамках категории"
        />

        <div className={styles.diagnosticsGroupLine}>
          <DiagnosticsListRoot oncologyCaseUid={oncologyCaseUid} />
          <ContraindicationsListRoot oncologyCaseUid={oncologyCaseUid} />
        </div>

        <Divider />

        <OncologyServicesSection
          oncologyCaseUid={oncologyCaseUid}
          selectOncologyService={selectOncologyService}
          selectedOncologyServiceUid={selectedOncologyServiceUid}
        />
      </div>

      <Divider />

      <div className={styles.categoryLine}>
        <CategoryLineHeader
          number={3}
          title="Данные по онкологической услуге"
          description="Все, что относится к онкологической услуге в рамках категории"
        />
        <MedicationsSection />
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
