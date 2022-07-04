// Stylesheet
import styles from "@/styles/Nav/Navbar.module.scss";
// Next
import Link from "next/link";
import Image from "next/image";

type Props = {
    open: boolean;
};

const NavMenu: React.FC<Props> = ({ open }: Props) => {
    return (
        <ul
            id={styles["nav-menu"]}
            className={open ? styles.open : styles.closed}
        >
            <li>
                <Link href="/skills">
                    <a className={styles["nav-link"]}>
                        <div className={styles["link-icon"]}>
                            <Image
                                src="/assets/icons/skills.svg"
                                alt=""
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <p className={styles["link-text"]}>Skills</p>
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/projects">
                    <a className={styles["nav-link"]}>
                        <div className={styles["link-icon"]}>
                            <Image
                                src="/assets/icons/projects.svg"
                                alt=""
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <p className={styles["link-text"]}>Projects</p>
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a className={styles["nav-link"]}>
                        <div className={styles["link-icon"]}>
                            <Image
                                src="/assets/icons/about.svg"
                                alt=""
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <p className={styles["link-text"]}>About</p>
                    </a>
                </Link>
            </li>
        </ul>
    );
};

export default NavMenu;
