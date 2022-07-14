// Stylesheet
import styles from "./Footer.module.scss";
// Next
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <p>Connect with me!</p>
            <div className={styles["footer-icons"]}>
                <Link href="https://github.com/czhangy" target="_blank">
                    <a>
                        <Image
                            src="/assets/icons/github.svg"
                            alt="GitHub"
                            layout="fill"
                            objectFit="contain"
                        />
                    </a>
                </Link>
                <Link
                    href="https://www.linkedin.com/in/czhangy/"
                    target="_blank"
                >
                    <a>
                        <Image
                            src="/assets/icons/linkedin.svg"
                            alt="LinkedIn"
                            layout="fill"
                            objectFit="contain"
                        />
                    </a>
                </Link>
                <Link
                    href="https://www.instagram.com/c.zhangg/"
                    target="_blank"
                >
                    <a>
                        <Image
                            src="/assets/icons/instagram.svg"
                            alt="Instagram"
                            layout="fill"
                            objectFit="contain"
                        />
                    </a>
                </Link>
                <Link href="https://twitter.com/czhangy_" target="_blank">
                    <a>
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