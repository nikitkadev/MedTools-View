import styles from './styles.module.scss';
import FolderOffOutlinedIcon from '@mui/icons-material/FolderOffOutlined';

export const EmptyDataTableRow = () => {
    return (
        <div className={styles.emptyDataTableRowRoot}>
            <FolderOffOutlinedIcon
                sx={{
                    color: 'var(--text-secondary)',
                    fontSize: 25,
                }} />

            <p className={styles.messsage}>Данных не обнаружено</p>
        </div>
    )
}