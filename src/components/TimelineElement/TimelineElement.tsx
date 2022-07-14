// Stylesheet
import styles from "./TimelineElement.module.scss";
// TS
import Experience from "@/models/Experience";
// Next
import Image from "next/image";
// Helper function
import { showElements, toSlug } from "@/utils/helpers";
// React
import { useEffect, useState } from "react";

type Props = {
    experience: Experience;
    index: number;
};

const TimelineElement: React.FC<Props> = (props: Props) => {
    // Constant
    const direction: string = props.index % 2 === 0 ? "left" : "right";

    // Component state
    const [show, setShow] = useState<boolean>(false);

    // Update show state on scroll
    useEffect(() => {
        // Handle elements already in viewport
        showElements(`timeline-el-${props.index}`, setShow);
        // Scroll listener
        document.addEventListener("scroll", () => {
            showElements(`timeline-el-${props.index}`, setShow);
        });
        return function cleanup() {
            document.removeEventListener("scroll", () => {
                showElements(`timeline-el-${props.index}`, setShow);
            });
        };
    }, []);

    return (
        <div
            id={`timeline-el-${props.index}`}
            className={`${styles["timeline-element"]} ${styles[direction]}`}
        >
            <p className={styles.mark}>
                {props.experience.startDate} -
                <br />
                {props.experience.endDate}
            </p>
            <div className={show ? "show" : `from-${direction}`}>
                <div className={styles.header}>
                    <div className={styles.logo}>
                        <Image
                            src={`/assets/experience/${toSlug(
                                props.experience.name
                            )}.webp`}
                            alt={`${props.experience.name} logo`}
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <div className={styles["header-text"]}>
                        <h2>{props.experience.name}</h2>
                        <p>{props.experience.jobTitle}</p>
                        <p className={styles.timeframe}>
                            {props.experience.startDate} -{" "}
                            {props.experience.endDate}
                        </p>
                    </div>
                </div>
                <ul>
                    {props.experience.points.map((point: string, i: number) => {
                        return <li key={i}>{point}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
};

export default TimelineElement;
