// Stylesheet
import styles from "@/styles/Nav/Navbar.module.scss";
// Next
import Link from "next/link";

const Navbar: React.FC = () => {
    return (
        <nav id={styles.navbar}>
            <Link href="/">
                <a className={styles["nav-link"]}>Charles Zhang</a>
            </Link>
        </nav>
    );
};

export default Navbar;
