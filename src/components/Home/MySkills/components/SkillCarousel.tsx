// Stylesheet
import styles from "../MySkills.module.scss";
// React
import { useEffect, useState } from "react";
// Local component
import SkillButton from "./SkillButton";
// Next
import Image from "next/image";

type Props = {
    groupName: string;
    skills: string[];
    viewport: number;
};

const SkillCarousel: React.FC<Props> = (props: Props) => {
    // Component state
    const [index, setIndex] = useState<number>(0);
    const [positions, setPositions] = useState<number[]>([]);
    const [displacement, setDisplacement] = useState<number>(0);

    // Page state modifiers
    const nextPage = () => setIndex((index + 1) % props.skills.length);
    const prevPage = () => {
        setIndex(index === 0 ? props.skills.length - 1 : index - 1);
    };

    // Calculate hidden indices
    const isHidden = (i: number) => {
        return (
            Math.abs(positions[i] - 250) > Math.floor(props.viewport / 2) * 120
        );
    };

    // Calculate new carousel element positions on nav + render
    useEffect(() => {
        let newArr: any[] = [];
        const half: number = Math.floor(props.skills.length / 2);
        for (let i = 0; i < props.skills.length; i++) {
            const di = i - half;
            newArr[i] = di * 120 + 250;
        }
        newArr = newArr
            .slice(half - index)
            .concat(newArr.slice(0, half - index));
        setPositions(newArr);
    }, [index, props.skills]);

    // Calculate carousel nav displacement based on viewport size
    useEffect(() => {
        setDisplacement(-120 * (Math.floor(props.viewport / 2) - 1) + 50);
    }, [props.viewport]);

    return (
        <div className={styles["skill-carousel"]}>
            <h4 className={styles["carousel-name"]}>{props.groupName}</h4>
            <div className={styles["carousel-container"]}>
                <button
                    className={`${styles["carousel-nav"]} ${styles.left}`}
                    style={{
                        left: `${displacement}px`,
                    }}
                    onClick={prevPage}
                >
                    <Image
                        src="/assets/icons/arrow.svg"
                        alt="Previous skill"
                        layout="fill"
                        objectFit="contain"
                    />
                </button>
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
                <button
                    className={`${styles["carousel-nav"]}`}
                    style={{ right: `${displacement}px` }}
                    onClick={nextPage}
                >
                    <Image
                        src="/assets/icons/arrow.svg"
                        alt="Next skill"
                        layout="fill"
                        objectFit="contain"
                    />
                </button>
            </div>
        </div>
    );
};

export default SkillCarousel;
