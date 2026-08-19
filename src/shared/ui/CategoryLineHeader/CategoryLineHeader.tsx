import styles from './styles.module.scss';

interface CategoryLineHeaderProps {
    title: string,
    description: string,
    number: number
}

export const CategoryLineHeader = ({
    title,
    description,
    number
}: CategoryLineHeaderProps) => {
    return (
        <article className={styles.categoryLineHeaderRoot}>

            <div className={styles.number}>
                {number}
            </div>

            <div className={styles.descriptionContainer}>
                <header className={styles.descriptionContainerTitle}>{title}</header>
                <div className={styles.description}>{description}</div>
            </div>

        </article>
    )
};

