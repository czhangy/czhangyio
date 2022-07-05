// Stylesheet
import styles from "./Navbar.module.scss";
// Next
import Link from "next/link";
// Local components
import MenuButton from "./components/MenuButton";
import NavMenu from "./components/NavMenu";
import ThemeToggle from "./components/ThemeToggle";
// React
import { useState, useEffect } from "react";
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

    // Close menu when user scrolls
    useEffect(() => {
        window.addEventListener("scroll", closeMenu);
        return function cleanup() {
            window.removeEventListener("scroll", closeMenu);
        };
    }, []);

    return (
        <nav id={styles.navbar}>
            <Link href="/">
                <a>
                    <h1 id={styles["title-link"]}>Charles Zhang</h1>
                </a>
            </Link>
            <div id={styles["site-options"]}>
                <ThemeToggle />
                <MenuButton onClick={toggleMenu} onClose={closeMenu} />
            </div>
            <NavMenu open={menuOpen} />
        </nav>
    );
};

export default Navbar;
