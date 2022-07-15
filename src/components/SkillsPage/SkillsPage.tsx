// Stylesheet
import styles from "./SkillsPage.module.scss";
// Components
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import SkillCard from "@/components/SkillCard/SkillCard";
// TS
import Skill from "@/models/Skill";

type Props = {
    skills: Skill[];
};

const SkillsPage: React.FC<Props> = ({ skills }: Props) => {
    return (
        <PageWrapper>
            <div className={styles.container}>
                {skills.map((skill: Skill, i: number) => {
                    return <SkillCard skill={skill} key={i} />;
                })}
            </div>
        </PageWrapper>
    );
};

export default SkillsPage;
