// Stylesheet
import styles from "./ProjectTags.module.scss";
// TS
import Skill from "@/models/Skill";

type Props = {
    tags: Skill[];
};

const ProjectTags: React.FC<Props> = ({ tags }: Props) => {
    return (
        <div className={styles["project-tags"]}>
            {tags.map((tag: Skill, i: number) => {
                return (
                    <h6
                        className={styles.tag}
                        style={{ background: tag.mainHex }}
                    >
                        {tag.name}
                    </h6>
                );
            })}
        </div>
    );
};

export default ProjectTags;
