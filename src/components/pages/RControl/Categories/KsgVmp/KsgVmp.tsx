import { Divider } from '@mui/material';
import { CategoryLineHeader } from '../../../../ui/CategoryLineHeader/CategoryLineHeader';
import { useKsgVmpCategory } from '../../../../../modules/r-control/hooks/categories/useKsgVmpCategory';
import { useKsgVmpCategoryStore } from '../../../../../modules/r-control/stores/categories/useKsgVmpCategoryStore';
import styles from './styles.module.scss';
import { EmptyDataField } from '../../../../ui/EmptyDataField/EmptyDataField';
import dayjs from 'dayjs';

const KsgVmp = () => {

    useKsgVmpCategory();

    const { ksgKpg, vmp, crits, slKoefs } = useKsgVmpCategoryStore();

    return (
        <section className={styles.ksgVmpRoot}>

            <article className={styles.lineContainer}>

                <header className={styles.lineContainerHeader}>
                    <CategoryLineHeader
                        number={1}
                        title='КСГ'
                        description='Основная информация по КСГ' />
                </header>

                <section className={styles.categoryLine}>

                    <article className={styles.ksgCard}>

                        <header className={styles.cardHeader}>
                            <h2>КСГ</h2>
                        </header>

                        <Divider />

                        <div className={styles.subcategory}>

                            {ksgKpg ? (
                                <>
                                    <div className={styles.cardLineThreeRow}>
                                        <div className={styles.cardField}>
                                            <label>КСГ ТФОМС</label>
                                            <p>{ksgKpg.ksg ?? '-'}</p>
                                        </div>
                                        <div className={styles.cardField}>
                                            <label>КСГ</label>
                                            <p>{ksgKpg.nKpg ?? '-'}</p>
                                        </div>
                                        <div className={styles.cardField}>
                                            <label>КПГ</label>
                                            <p>{ksgKpg.nKpg ?? '-'}</p>
                                        </div>
                                    </div>

                                    <div className={styles.cardLineThreeRow}>
                                        <div className={styles.cardField}>
                                            <label>Модель определeния КСГ</label>
                                            <p>{ksgKpg.verKsg}</p>
                                        </div>
                                        <div className={styles.cardField}>
                                            <label>Признак использования подгруппы КСГ</label>
                                            <p>{ksgKpg.ksgPg}</p>
                                        </div>
                                    </div>

                                    <div className={styles.cardLineThreeRow}>

                                        <div className={styles.cardField}>
                                            <label>Признак использования КСЛП</label>
                                            <p>{ksgKpg.slK}</p>
                                        </div>
                                        <div className={styles.cardField}>
                                            <label>Примененный КСЛП</label>
                                            <p>{ksgKpg.itSl ?? '-'}</p>
                                        </div>
                                    </div>

                                    <div className={styles.cardLineThreeRow}>
                                        <div className={styles.cardField}>
                                            <label>Коэффициент затратоемскости</label>
                                            <p>{ksgKpg.koefZ}</p>
                                        </div>
                                        <div className={styles.cardField}>
                                            <label>Управленческий коэффициент</label>
                                            <p>{ksgKpg.koefUp}</p>
                                        </div>
                                        <div className={styles.cardField}>
                                            <label>Коэффициент уровня / подуровня</label>
                                            <p>{ksgKpg.koefU}</p>
                                        </div>
                                    </div>

                                    <div className={styles.cardLineOneRow}>
                                        <div className={styles.cardField}>
                                            <label>Коэффициент дифференциации</label>
                                            <p>{ksgKpg.koefD}</p>
                                        </div>
                                    </div>

                                    <div className={styles.cardLineOneRow}>
                                        <div className={styles.cardField}>
                                            <label>Базовая ставка</label>
                                            <p>{ksgKpg.bztsz}</p>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <EmptyDataField />
                            )}


                        </div>

                    </article>

                    <div className={styles.ksgTablesContainer}>

                        <article className={styles.classCritTableRoot}>
                            <header className={styles.classCritTableRootHeader}>
                                <h1>Классификационный критерий</h1>
                            </header>

                            <div className='tableContainer'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Критерий</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {crits.length > 0 ? (
                                            crits.map((crit) => (
                                                <tr className='noneHover'>
                                                    <th>{crit.crit}</th>
                                                </tr>
                                            ))

                                        ) : (
                                            <tr>
                                                <td colSpan={1}>
                                                    <EmptyDataField />
                                                </td>
                                            </tr>
                                        )}

                                    </tbody>
                                </table>
                            </div>

                        </article>

                        <article className={styles.classCritTableRoot}>
                            <header className={styles.classCritTableRootHeader}>
                                <h1>КСЛП</h1>
                            </header>

                            <div className='tableContainer'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>№</th>
                                            <th>КСЛП</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {slKoefs.length > 0 ? (

                                            slKoefs.map((koef) => (
                                                <tr className='noneHover'>
                                                    <td>{koef.idSl}</td>
                                                    <td>{koef.zSl}</td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan={2}>
                                                    <EmptyDataField />
                                                </td>
                                            </tr>
                                        )}

                                    </tbody>
                                </table>
                            </div>

                        </article>

                    </div>

                </section>

            </article>

            <Divider />

            <article className={styles.lineContainer}>

                <header className={styles.lineContainerHeader}>
                    <CategoryLineHeader
                        number={2}
                        title='ВМП'
                        description='Основная информация по ВМП' />
                </header>

                <section className={styles.categoryLine}>

                    <article className={styles.vmpCard}>

                        <header className={styles.cardHeader}>
                            <h2>ВМП</h2>
                        </header>

                        <Divider />

                        <div className={styles.subcategory}>

                            {vmp ? (
                                <>
                                    <div className={styles.cardLineOneRow}>

                                        <div className={styles.cardField}>
                                            <label>Вид ВМП</label>
                                            <p>{vmp.vidHmp ?? '-'}</p>
                                        </div>

                                    </div>

                                    <div className={styles.cardLineOneRow}>

                                        <div className={styles.cardField}>
                                            <label>Метод ВМП</label>
                                            <p>{vmp.metodHmp ?? '-'}</p>
                                        </div>

                                    </div>

                                    <div className={styles.cardLineThreeRow}>

                                        <div className={styles.cardField}>
                                            <label>Дата выдачи талона</label>
                                            <p>{vmp.talD ? dayjs(vmp.talD).format('DD.MM.YYYY') : '-'}</p>
                                        </div>

                                        <div className={styles.cardField}>
                                            <label>№ талона</label>
                                            <p>{vmp.talNum ?? '-'}</p>
                                        </div>

                                        <div className={styles.cardField}>
                                            <label>Дата планируемой госпитализации</label>
                                            <p>{vmp.talP ?? '-'}</p>
                                        </div>

                                    </div>
                                </>
                            ) : (
                                <EmptyDataField />
                            )}

                        </div>
                    </article>
                </section>
            </article>

        </section>
    )
};

export default KsgVmp;