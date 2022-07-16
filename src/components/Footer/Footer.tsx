// Stylesheet
import styles from "./Footer.module.scss";
// Next
import Image from "next/image";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <p>Connect with me!</p>
            <div className={styles["footer-icons"]}>
                <a href="https://github.com/czhangy" target="_blank">
                    <Image
                        src="/assets/icons/github.svg"
                        alt="GitHub"
                        layout="fill"
                        objectFit="contain"
                    />
                </a>
                <a href="https://www.linkedin.com/in/czhangy/" target="_blank">
                    <Image
                        src="/assets/icons/linkedin.svg"
                        alt="LinkedIn"
                        layout="fill"
                        objectFit="contain"
                    />
                </a>
                <a href="https://www.instagram.com/c.zhangg/" target="_blank">
                    <Image
                        src="/assets/icons/instagram.svg"
                        alt="Instagram"
                        layout="fill"
                        objectFit="contain"
                    />
                </a>
                <a href="https://twitter.com/czhangy_" target="_blank">
                    <Image
                        src="/assets/icons/twitter.svg"
                        alt="Twitter"
                        layout="fill"
                        objectFit="contain"
                    />
                </a>
            </div>
        </div>
    );
};

export default Footer;
