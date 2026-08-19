import { CardState } from "../../../../../../shared/ui/CardState/CardState";
import { useFiltersStore } from "../../../filters/model/store/useFiltersStore";
import { useWorkspaceStore } from "../../../workspace/model/store/useWorkspaceStore";
import { useInsuranceQuery } from "../../model/queries/useInsuranceQuery";
import { usePatientQuery } from "../../model/queries/usePatientQuery";
import { DocumentCard } from "./Cards/DocumentCard/DocumentCard";
import { DocumentCardSkeleton } from "./Cards/DocumentCard/DocumentCardSkeleton";
import { InsuranceCard } from "./Cards/InsuranceCard/InsuranceCard";
import { InsuranceCardSkeleton } from "./Cards/InsuranceCard/InsuranceCardSkeleton";
import { PatientCard } from "./Cards/PatientCard/PatientCard";
import { PatientCardSkeleton } from "./Cards/PatientCard/PatientCardSkeleton";
import { RepresentativeCard } from "./Cards/RepresentativeCard/RepresentativeCard";
import { RepresentativeCardSkeleton } from "./Cards/RepresentativeCard/RepresentativeCardSkeleton";
import styles from "./styles.module.scss";

const Patient = () => {
  const { targetDb } = useFiltersStore();
  const { selectedMedicalCaseUid } = useWorkspaceStore();
  const {
    data: patient,
    isLoading: isPatientLoading,
    isError: isPatientError,
  } = usePatientQuery(selectedMedicalCaseUid, targetDb);

  const {
    data: insurance,
    isLoading: isInsuranceLoading,
    isError: isInsuranceError,
  } = useInsuranceQuery(selectedMedicalCaseUid, targetDb);

  return (
    <section className={styles.patientCategoryRoot}>
      {isPatientLoading ? (
        <>
          <PatientCardSkeleton />
          <RepresentativeCardSkeleton />
          <DocumentCardSkeleton />
        </>
      ) : isPatientError ? (
        <>
          <CardState
            headline="Пациент"
            title="Ошибка данных"
            description="Не удалось получить данные из-за внутренней ошибки"
          />

          <CardState
            headline="Документ"
            title="Ошибка данных"
            description="Не удалось получить данные из-за внутренней ошибки"
          />

          <CardState
            headline="Представитель"
            title="Ошибка данных"
            description="Не удалось получить данные из-за внутренней ошибки"
          />
        </>
      ) : !patient ? (
        <>
          <CardState
            headline="Пациент"
            title="Данные не найдены"
            description="Не удалось найти данных о пациенте"
          />

          <CardState
            headline="Документ"
            title="Данные не найдены"
            description="Не удалось найти данных о документе"
          />

          <CardState
            headline="Представитель"
            title="Данные не найдены"
            description="Не удалось найти данных о представителе"
          />
        </>
      ) : (
        <>
          <PatientCard patient={patient} />
          <RepresentativeCard patient={patient} />
          <DocumentCard patient={patient} />
        </>
      )}

      {isInsuranceLoading ? (
        <>
          <InsuranceCardSkeleton />
        </>
      ) : isInsuranceError ? (
        <>
          <CardState
            headline="СМО"
            title="Ошибка данных"
            description="Не удалось получить данные из-за внутренней ошибки"
          />
        </>
      ) : !insurance ? (
        <>
          <CardState
            headline="СМО"
            title="Данные не найдены"
            description="Не удалось найти данных о страховой"
          />
        </>
      ) : (
        <InsuranceCard insurance={insurance} />
      )}
    </section>
  );
};

export default Patient;
