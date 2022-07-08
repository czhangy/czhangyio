// Stylesheet
import styles from "../MyProjects.module.scss";

type Props = {
    hex: string;
    tag: string;
};

const ProjectTag: React.FC<Props> = (props: Props) => {
    return (
        <div
            className={styles["project-tag"]}
            style={{
                background: `${props.hex}`,
            }}
        >
            <p className={styles["tag-name"]}>{props.tag}</p>
        </div>
    );
};

export default ProjectTag;
