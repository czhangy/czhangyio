// Stylesheet
import styles from "./ProjectCarousel.module.scss";
// Next
import Image from "next/image";
// React
import { useEffect, useState } from "react";

type Props = {
    imageURLs: string[];
};

const ProjectCarousel: React.FC<Props> = ({ imageURLs }: Props) => {
    // Component state
    const [index, setIndex] = useState<number>(0);

    // State modifier
    const handleClick = (
        newIndex: number,
        clickDir: string,
        hideDir: string
    ) => {
        const button: HTMLButtonElement = document.getElementById(
            `${clickDir}-button`
        ) as HTMLButtonElement;
        button.disabled = true;
        const shown = document.getElementsByClassName(styles.show)[0];
        shown.classList.add(styles[hideDir]);
        shown.classList.remove(styles.show);
        setTimeout(() => {
            const next = document.getElementsByClassName(styles.img)[newIndex];
            next.classList.add(styles.show);
            next.classList.remove(styles[clickDir]);
            button.disabled = false;
        }, 150);
        setIndex(newIndex);
    };

    // Init positions
    useEffect(() => {
        const imgs = document.getElementsByClassName(styles.img);
        for (let i = 0; i < imgs.length; i++) {
            if (i === index) imgs[i].classList.add(styles.show);
            else imgs[i].classList.add(styles.right);
        }
    }, []);

    return (
        <div className={styles["project-carousel"]}>
            <div className={styles.window}>
                {index > 0 ? (
                    <button
                        id="left-button"
                        className={styles.left}
                        onClick={() => handleClick(index - 1, "left", "right")}
                    />
                ) : (
                    ""
                )}
                {imageURLs.map((url: string, i: number) => {
                    return (
                        <div className={styles.img} key={i}>
                            <Image
                                src={url}
                                alt=""
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    );
                })}
                {index < imageURLs.length - 1 ? (
                    <button
                        id="right-button"
                        className={styles.right}
                        onClick={() => handleClick(index + 1, "right", "left")}
                    />
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

export default ProjectCarousel;
