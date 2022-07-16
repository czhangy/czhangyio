// Stylesheet
import styles from "./ProjectHeader.module.scss";
// Next
import Image from "next/image";
// TS
import Project from "@/models/Project";

type Props = {
    project: Project;
};

const ProjectHeader: React.FC<Props> = ({ project }: Props) => {
    return (
        <div className={styles["project-header"]}>
            <h2>{project.name}</h2>
            <div className={styles.links}>
                {project.gitLink ? (
                    <a
                        href={project.gitLink}
                        target="_blank"
                        className={styles.link}
                    >
                        <Image
                            src="/assets/icons/github.svg"
                            alt="GitHub link"
                            layout="fill"
                            objectFit="contain"
                        />
                    </a>
                ) : (
                    ""
                )}
                <a href={project.link} target="_blank" className={styles.link}>
                    <Image
                        src="/assets/icons/link.svg"
                        alt="Site link"
                        layout="fill"
                        objectFit="contain"
                    />
                </a>
            </div>
        </div>
    );
};

export default ProjectHeader;
