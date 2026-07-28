import { usePatientSmo } from '../../../../../modules/r-control/hooks/categories/usePatientSmo';
import { usePatientSmoStore } from '../../../../../modules/r-control/stores/categories/usePatientSmoStore';
import { Divider } from '../../../../ui/Divider/Divider';
import styles from './styles.module.scss';
import dayjs from 'dayjs';

const PatientSmo = () => {

    usePatientSmo();

    const { patient, smo } = usePatientSmoStore();

    if (!patient || !smo) {
        return <div>Пук</div>
    }
    return (
        <section className={styles.patientSmoRoot}>

            <div className={styles.cardsGrid}>

                <article className={styles.patientCard}>

                    <header className={styles.cardHeader}>
                        <h2>Пациент</h2>
                    </header>

                    <Divider />

                    <div className={styles.subcategory}>

                        <div className={styles.cardLine}>
                            <div className={styles.cardField}>
                                <label>Фамилия</label>
                                <p>{patient.surname}</p>
                            </div>
                        </div>

                        <div className={styles.cardLine}>
                            <div className={styles.cardField}>
                                <label>Имя</label>
                                <p>{patient.name}</p>
                            </div>
                            <div className={styles.cardField}>
                                <label>Отчество</label>
                                <p>{patient.patronymic}</p>
                            </div>
                        </div>

                        <div className={styles.cardLine}>
                            <div className={styles.cardField}>
                                <label>Пол</label>
                                <p>{patient.sex}</p>
                            </div>
                            <div className={styles.cardField}>
                                <label>Дата рождения</label>
                                <p>{dayjs(patient.birthday).format("DD.MM.YYYY")}</p>
                            </div>
                        </div>

                    </div>

                </article>

                <article className={styles.documentCard}>

                    <header className={styles.cardHeader}>
                        <h2>Документ</h2>
                    </header>

                    <Divider />

                    <div className={styles.subcategory}>

                        <div className={styles.cardLine}>
                            <div className={styles.cardField}>
                                <label>Тип</label>
                                <p>{patient.documentType ?? '-'}</p>
                            </div>
                        </div>

                        <div className={styles.cardLine}>
                            <div className={styles.cardField}>
                                <label>Серия</label>
                                <p>{patient.documentSeries ?? '-'}</p>
                            </div>
                            <div className={styles.cardField}>
                                <label>Номер</label>
                                <p>{patient.documentNumber ?? '-'}</p>
                            </div>
                        </div>

                        <div className={styles.cardLine}>
                            <div className={styles.cardField}>
                                <label>Дата выдачи</label>
                                <p>{patient.issueDate ? dayjs(patient.issueDate).format("DD.MM.YYYY") : '-'}</p>
                            </div>
                        </div>

                        <div className={styles.cardLine}>
                            <div className={styles.cardField}>
                                <label>Кем выдан</label>
                                <p>{patient.issuedBy ?? '-'}</p>
                            </div>
                        </div>

                    </div>

                </article>

                <article className={styles.representativeCard}>

                    <header className={styles.cardHeader}>
                        <h2>Представитель</h2>
                    </header>

                    <Divider />

                    <div className={styles.subcategory}>

                        <div className={styles.cardLine}>
                            <div className={styles.cardField}>
                                <label>Фамилия</label>
                                <p>{patient.representativeSurname ?? '-'}</p>
                            </div>
                        </div>

                        <div className={styles.cardLine}>
                            <div className={styles.cardField}>
                                <label>Имя</label>
                                <p>{patient.representativeName ?? '-'}</p>
                            </div>
                            <div className={styles.cardField}>
                                <label>Отчество</label>
                                <p>{patient.representativePatronymic ?? '-'}</p>
                            </div>
                        </div>

                        <div className={styles.cardLine}>
                            <div className={styles.cardField}>
                                <label>Пол</label>
                                <p>{patient.representativeSex ?? '-'}</p>
                            </div>
                            <div className={styles.cardField}>
                                <label>Дата рождения</label>
                                <p>{patient.representativeBirthday ? dayjs(patient.representativeBirthday).format("DD.MM.YYYY") : '-'}</p>
                            </div>
                        </div>

                    </div>

                </article>

                <article className={styles.smoCard}>

                    <header className={styles.cardHeader}>
                        <h2>СМО</h2>
                    </header>

                    <Divider />

                    <div className={styles.subcategory}>

                        <div className={styles.cardLine}>
                            <div className={styles.cardField}>
                                <label>Код СМО</label>
                                <p>{smo.smoCode ?? '-'}</p>
                            </div>

                        </div>

                        <div className={styles.cardLine}>
                            <div className={styles.cardField}>
                                <label>ОГРН СМО</label>
                                <p>{smo.smoOGRN ?? '-'}</p>
                            </div>
                            <div className={styles.cardField}>
                                <label>ОКАТО СМО</label>
                                <p>{smo.smoOKATO ?? '-'}</p>
                            </div>

                        </div>

                        <div className={styles.cardLine}>
                            <div className={styles.cardField}>
                                <label>Наименование СМО</label>
                                <p>{smo.smoName}</p>
                            </div>
                        </div>

                        <div className={styles.cardLine}>
                            <div className={styles.cardField}>
                                <label>Серия полиса</label>
                                <p>{smo.polisSeries ?? '-'}</p>
                            </div>
                            <div className={styles.cardField}>
                                <label>Номер полиса</label>
                                <p>{smo.polisNumber}</p>
                            </div>
                            <div className={styles.cardField}>
                                <label>Тип</label>
                                <p>{smo.polisType}</p>
                            </div>
                        </div>

                        <div className={styles.cardLine}>
                            <div className={styles.cardField}>
                                <label>ЕНП</label>
                                <p>{smo.enp ?? '-'}</p>
                            </div>
                        </div>

                    </div>

                </article>

            </div>


        </section>
    )
}

export default PatientSmo;