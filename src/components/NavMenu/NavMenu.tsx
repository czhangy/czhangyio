// Stylesheet
import styles from "./NavMenu.module.scss";
// Next
import Link from "next/link";
import Image from "next/image";

type Props = {
    open: boolean;
};

const NavMenu: React.FC<Props> = ({ open }: Props) => {
    return (
        <ul
            className={`${styles["nav-menu"]} ${
                open ? styles.open : styles.closed
            }`}
        >
            <li>
                <Link href="/about">
                    <a>
                        <div className={styles["link-icon"]}>
                            <Image
                                src="/assets/icons/about.svg"
                                alt=""
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <p>About</p>
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/experience">
                    <a>
                        <div className={styles["link-icon"]}>
                            <Image
                                src="/assets/icons/experience.svg"
                                alt=""
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <p>Experience</p>
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/projects">
                    <a>
                        <div className={styles["link-icon"]}>
                            <Image
                                src="/assets/icons/projects.svg"
                                alt=""
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <p>Projects</p>
                    </a>
                </Link>
            </li>
            {/* <li>
                <Link href="/skills">
                    <a>
                        <div className={styles["link-icon"]}>
                            <Image
                                src="/assets/icons/skills.svg"
                                alt=""
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <p>Skills</p>
                    </a>
                </Link>
            </li> */}
        </ul>
    );
};

export default NavMenu;
