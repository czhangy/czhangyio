// Stylesheet
import styles from "./MyExperience.module.scss";
// React
import { useEffect, useState } from "react";
// Helper function
import { showElements, toSlug } from "@/utils/helpers";
// Home component
import SeeMore from "@/components/Home/SeeMore";
// TS
import Experience from "@/models/Experience";
// Next
import Image from "next/image";

type Props = {
    experience: Experience;
};

const MyExperience: React.FC<Props> = ({ experience }: Props) => {
    // Component state
    const [show, setShow] = useState<boolean>(false);

    // Init scroll listener to watch scroll into view
    useEffect(() => {
        window.addEventListener("scroll", () =>
            showElements("experience-header", setShow)
        );
        return function cleanup() {
            window.removeEventListener("scroll", () =>
                showElements("experience-header", setShow)
            );
        };
    }, []);

    return (
        <div className={styles["my-experience"]}>
            <h2
                id="experience-header"
                className={`${styles["experience-header"]} ${
                    show ? "show" : "hide"
                }`}
            >
                My Experience
            </h2>
            {experience ? (
                <div
                    className={`${styles["experience-card"]} ${
                        show ? "show" : "hide"
                    }`}
                >
                    <div className={styles["card-header"]}>
                        <div className={styles.job}>
                            <div className={styles.logo}>
                                <Image
                                    src={`/assets/experience/${toSlug(
                                        experience.name
                                    )}.webp`}
                                    alt=""
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                            <div className={styles["job-info"]}>
                                <h4 className={styles.name}>
                                    {experience.name}
                                </h4>
                                <h6 className={styles.title}>
                                    {experience.jobTitle}
                                </h6>
                            </div>
                        </div>
                        <p className={styles.dates}>
                            {experience.startDate} - {experience.endDate}
                        </p>
                    </div>
                    <ul className={styles.points}>
                        {experience.points.map((point: string, i: number) => {
                            return (
                                <li className={styles.point} key={i}>
                                    {point}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ) : (
                ""
            )}
            <SeeMore show={show} url="experience" />
        </div>
    );
};

export default MyExperience;
