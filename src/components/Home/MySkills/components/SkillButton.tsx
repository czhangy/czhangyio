// Stylesheet
import styles from "../MySkills.module.scss";
// Next
import Image from "next/image";
// Helper function
import { toSlug } from "@/utils/helpers";

type Props = {
    hidden: boolean;
    onClick: () => void;
    position: number;
    selected: boolean;
    skillName: string;
};

const SkillButton: React.FC<Props> = (props: Props) => {
    return (
        <button
            className={`${styles["skill-button"]} ${
                props.selected ? styles.selected : styles.faded
            } ${props.hidden ? styles.hidden : ""}`}
            style={{ left: `${props.position}px` }}
            onClick={props.onClick}
        >
            <div className={styles["skill-icon"]}>
                <Image
                    src={`/assets/images/${toSlug(props.skillName)}.webp`}
                    alt={props.skillName}
                    layout="fill"
                    objectFit="contain"
                />
            </div>
            <p className={styles["skill-name"]}>{props.skillName}</p>
        </button>
    );
};

export default SkillButton;
