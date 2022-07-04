// Stylesheet
import styles from "@/styles/Nav/Navbar.module.scss";
// Next
import Link from "next/link";
// Local components
import MenuButton from "@/components/Nav/MenuButton";
// React
import { useState } from "react";
// TS
import { SyntheticEvent } from "react";

const Navbar: React.FC = () => {
    // Component state
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    // Menu state modifiers
    const toggleMenu = (e: SyntheticEvent) => {
        if (menuOpen) (e.target as HTMLButtonElement).blur();
        else (e.target as HTMLButtonElement).focus();
        setMenuOpen(!menuOpen);
    };
    const closeMenu = () => setTimeout(() => setMenuOpen(false), 150);

    return (
        <nav id={styles.navbar}>
            <Link href="/">
                <a id={styles["title-link"]}>Charles Zhang</a>
            </Link>
            <MenuButton onClick={toggleMenu} onClose={closeMenu} />
        </nav>
    );
};

export default Navbar;
