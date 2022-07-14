// Stylesheet
import styles from "./ExperiencePage.module.scss";
// Components
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import TimelineElement from "@/components/TimelineElement/TimelineElement";
// TS
import Experience from "@/models/Experience";

type Props = {
    experience: Experience[];
};

const ExperiencePage: React.FC<Props> = ({ experience }: Props) => {
    return (
        <PageWrapper>
            <div className={styles.container}>
                <div className={styles.arrow} />
            </div>
            <div className={styles.timeline}>
                {experience.map((exp: Experience, i: number) => {
                    return (
                        <TimelineElement experience={exp} index={i} key={i} />
                    );
                })}
            </div>
            <div
                className={`${styles.container} ${
                    experience.length % 2 === 0 ? styles.right : styles.left
                }`}
                data-testid="start-point"
            >
                <hr className={styles["start-point"]} />
            </div>
        </PageWrapper>
    );
};

export default ExperiencePage;
