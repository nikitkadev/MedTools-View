import { CategoryLineHeader } from "../../../../../../../../shared/ui/CategoryLineHeader/CategoryLineHeader";
import { useOncologyCaseQuery } from "../../../../model/queries/categories/oncology/useOncologyCaseQuery";
import { ConsultationsListRoot } from "./сonsultations/ConsultationsListRoot/ConsultationsListRoot";
import { Divider } from "../../../../../../../../components/ui/Divider/Divider";
import { useFiltersStore } from "../../../../../filters/model/store/useFiltersStore";
import { useWorkspaceStore } from "../../../../model/store/useWorkspaceStore";
import { OncologyCaseCardRoot } from "./oncologyCase/OncologyCaseCardRoot/OncologyCaseCardRoot";
import { DiagnosticsListRoot } from "./diagnostics/DiagnosticsListRoot/DiagnosticsListRoot";
import { ContraindicationsListRoot } from "./contraindications/ContraindicationsListRoot/ContraindicationsListRoot";
import { OncologyServicesSection } from "./oncologyServices/OncologyServicesSection/OncologyServicesSection";
import { MedicationsSection } from "./medications/MedicationsSection/MedicationsSection";
import { InjectionDatesRoot } from "./injections/injectionDates/InjectionDatesRoot/InjectionDatesRoot";
import { InjectionsRoot } from "./injections/injections/InjectionsRoot/InjectionsRoot";
import { DataState } from "../../../../../../../../shared/ui/DataState/DataState";
import styles from "./styles.module.scss";

const OncologyRoot = () => {
  const { targetDb } = useFiltersStore();
  const {
    selectedMedicalCaseUid,
    selectedOncologyServiceUid,
    selectedMedicationUid,
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
        {selectedMedicalCaseUid === null ? (
          <DataState
            title="Выберите медицинский случай"
            description="После выбора станут доступны данные об онкологическом случае и консилиумах"
            variant="waiting"
          />
        ) : (
          <div className={styles.medicalCaseOncologyDetailsLine}>
            <OncologyCaseCardRoot />
            <ConsultationsListRoot />
          </div>
        )}
      </div>

      <Divider />

      <div className={styles.categoryLine}>
        <CategoryLineHeader
          number={2}
          title="Данные по онкологическому случаю"
          description="Все, что относится к онкологическому случаю в рамках категории"
        />

        {oncologyCaseUid === null ? (
          <DataState
            title="Выберите онкологический случай"
            description="После выбора станут доступны детальные данные об онкологическом случае"
            variant="waiting"
          />
        ) : (
          <>
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
          </>
        )}
      </div>

      <Divider />

      <div className={styles.categoryLine}>
        <CategoryLineHeader
          number={3}
          title="Данные по онкологической услуге"
          description="Все, что относится к онкологической услуге в рамках категории"
        />
        {selectedOncologyServiceUid === null ? (
          <DataState
            title="Выберите онкологическую услугу"
            description="После выбора станут доступны данные о лекарственном препарате"
            variant="waiting"
          />
        ) : (
          <MedicationsSection />
        )}
      </div>

      <Divider />

      <div className={styles.categoryLine}>
        <CategoryLineHeader
          number={4}
          title="Данные по лекарственному препарату"
          description="Все, что относится к лекарственному препарату в рамках категории"
        />

        {selectedMedicationUid === null ? (
          <DataState
            title="Выберите лекарственный препарат"
            description="После выбора станут доступны данные о введение препарата"
            variant="waiting"
          />
        ) : (
          <div className={styles.injectionsGroup}>
            <InjectionDatesRoot />
            <InjectionsRoot />
          </div>
        )}
      </div>
    </section>
  );
};

export default OncologyRoot;
