// Stylesheet
import styles from "../MySkills.module.scss";
// React
import { useEffect, useState } from "react";
// Local component
import SkillButton from "./SkillButton";
// Helper function
import { centerArray } from "@/utils/helpers";

type Props = {
    groupName: string;
    skills: string[];
    viewport: number;
};

const SkillCarousel: React.FC<Props> = (props: Props) => {
    // Component state
    const [index, setIndex] = useState<number>(0);
    const [positions, setPositions] = useState<number[]>([
        250, 400, 550, -50, 100,
    ]);

    // Initialize carousel element positions
    useEffect(() => {
        let initPositions: number[] = [...positions];
        // for (let i = 0; i < props.skills.length; i++)
        //     initPositions.push(
        //         (i - Math.floor(props.skills.length / 2)) * 150 + 250
        //     );
        initPositions = centerArray(initPositions, index);
        setPositions(initPositions);
    }, [index]);

    // Update carousel element positions on index change
    // useEffect(() => {
    //     if (positions.length > 0) {
    //         let curPositions: number[] = [...positions];
    //         curPositions = centerArray(curPositions, index);
    //         setPositions(curPositions);
    //     }
    // }, [index]);

    return (
        <div className={styles["skill-carousel"]}>
            <h4 className={styles["carousel-name"]}>{props.groupName}</h4>
            <div className={styles["carousel-container"]}>
                {props.skills.map((skill: string, i: number) => {
                    return (
                        <SkillButton
                            hidden={false}
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
