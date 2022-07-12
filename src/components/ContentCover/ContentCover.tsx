// Stylesheet
import styles from "./ContentCover.module.scss";

type Props = {
    title: string;
};

const ContentCover: React.FC<Props> = (props: Props) => {
    return (
        <div className={styles["content-cover"]}>
            <div className={styles.cover}></div>
            <div className={styles.content}></div>
        </div>
    );
};

export default ContentCover;
