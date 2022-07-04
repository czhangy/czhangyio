// Stylesheet
import styles from "@/styles/Nav/Footer.module.scss";
// Next
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div id={styles.footer}>
            <p id={styles["footer-text"]}>Connect with me!</p>
            <div id={styles["footer-icons"]}>
                <Link href="https://github.com/czhangy">
                    <a className={styles["footer-icon"]}>
                        <Image
                            src="/assets/icons/github.svg"
                            alt="Twitter"
                            layout="fill"
                            objectFit="contain"
                        />
                    </a>
                </Link>
                <Link href="https://www.linkedin.com/in/czhangy/">
                    <a className={styles["footer-icon"]}>
                        <Image
                            src="/assets/icons/linkedin.svg"
                            alt="Twitter"
                            layout="fill"
                            objectFit="contain"
                        />
                    </a>
                </Link>
                <Link href="https://www.instagram.com/c.zhangg/">
                    <a className={styles["footer-icon"]}>
                        <Image
                            src="/assets/icons/instagram.svg"
                            alt="Twitter"
                            layout="fill"
                            objectFit="contain"
                        />
                    </a>
                </Link>
                <Link href="https://twitter.com/czhangy_">
                    <a className={styles["footer-icon"]}>
                        <Image
                            src="/assets/icons/twitter.svg"
                            alt="Twitter"
                            layout="fill"
                            objectFit="contain"
                        />
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default Footer;
