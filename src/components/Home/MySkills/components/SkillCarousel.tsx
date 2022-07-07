// Stylesheet
import styles from "../MySkills.module.scss";
// React
import { useEffect, useState } from "react";
// Local component
import SkillButton from "./SkillButton";

type Props = {
    groupName: string;
    skills: string[];
    viewport: number;
};

const SkillCarousel: React.FC<Props> = (props: Props) => {
    // Component state
    const [index, setIndex] = useState<number>(0);
    const [positions, setPositions] = useState<number[]>([]);

    // Calculate hidden indices
    const isHidden = (i: number) => {
        return (
            Math.abs(positions[i] - 250) > Math.floor(props.viewport / 2) * 140
        );
    };

    // Calculate new carousel element positions
    useEffect(() => {
        let newArr: any[] = [];
        const half: number = Math.floor(props.skills.length / 2);
        for (let i = 0; i < props.skills.length; i++) {
            const di = i - half;
            newArr[i] = di * 140 + 250;
        }
        newArr = newArr
            .slice(half - index)
            .concat(newArr.slice(0, half - index));
        setPositions(newArr);
    }, [index]);

    return (
        <div className={styles["skill-carousel"]}>
            <h4 className={styles["carousel-name"]}>{props.groupName}</h4>
            <div className={styles["carousel-container"]}>
                {props.skills.map((skill: string, i: number) => {
                    return (
                        <SkillButton
                            hidden={isHidden(i)}
                            onClick={() => setIndex(i)}
                            position={positions[i]}
                            selected={i === index}
                            skillName={skill}
                            key={i}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default SkillCarousel;
