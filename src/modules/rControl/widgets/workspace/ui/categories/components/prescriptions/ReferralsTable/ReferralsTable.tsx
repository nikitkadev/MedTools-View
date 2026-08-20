import type { TargetDbType } from "../../../../../../../../../shared/types/TargetDbType";
import { Divider } from "../../../../../../../../../components/ui/Divider/Divider";
import { TableSkeleton } from "../../../../../../../../../shared/ui/TableSkeleton/TableSkeleton";
import { TableStateRow } from "../../../../../../../../../shared/ui/TableStateRow/TableStateRow";
import { useReferralsQuery } from "../../../../../model/queries/categories/prescriptions/useReferralsQuery";
import styles from "./styles.module.scss";
import dayjs from "dayjs";

interface ReferralsTableProps {
  medicalCaseUid: number | null;
  targetDb: TargetDbType | null;
}

export const ReferralsTable = ({
  medicalCaseUid,
  targetDb,
}: ReferralsTableProps) => {
  const {
    data: referrals,
    isLoading,
    isError,
    error,
  } = useReferralsQuery(medicalCaseUid, targetDb);

  return (
    <section className={styles.referralsTableRoot}>
      <header className={styles.referralsTableRootHeader}>
        <h2>Направления</h2>
      </header>
      <Divider />
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>Медицинская организация</th>
              <th>Дата направления</th>
              <th>Вид направления</th>
              <th>Метод диагностического лечения</th>
              <th>Мед. услуга в направлении</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <TableSkeleton columns={5} rows={5} />
            ) : isError ? (
              <TableStateRow
                colSpan={5}
                title="Уп-с ошибка"
                description={error.message}
              />
            ) : !referrals ? (
              <TableStateRow
                colSpan={5}
                title="Выберите медицинский случай"
                description="TODO: Я не знаю зачем я вообще пишу это, ведь категории нельзя будет открыть без выбора медицинского случая"
              />
            ) : referrals.length === 0 ? (
              <TableStateRow
                colSpan={5}
                title="Данных не найдено"
                description="TODO: Это тоже перенсети в бейдж"
              />
            ) : (
              referrals.map((referral) => (
                <tr key={referral.referralUid}>
                  <td>{referral.referredToMoCode ?? "-"}</td>
                  <td>{dayjs(referral.referralDate).format("DD.MM.YYYY")}</td>
                  <td>{referral.referralType}</td>
                  <td>{referral.diagnosticMethod ?? "-"}</td>
                  <td>{referral.referredService ?? "-"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};
