// Stylesheet
import styles from "./SkillCard.module.scss";
// TS
import Skill from "@/models/Skill";
// Next
import Image from "next/image";
// Helper function
import { toSlug } from "@/utils/helpers";

type Props = {
    skill: Skill;
};

const SkillCard: React.FC<Props> = ({ skill }: Props) => {
    return (
        <div className={styles["skill-card"]}>
            <div className={styles.logo}>
                <Image
                    src={`/assets/skills/${toSlug(skill.name)}.webp`}
                    alt={`${skill.name} logo`}
                    layout="fill"
                    objectFit="contain"
                />
            </div>
            <h2>{skill.name}</h2>
        </div>
    );
};

export default SkillCard;
