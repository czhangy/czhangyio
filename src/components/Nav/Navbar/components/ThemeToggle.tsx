// Stylesheet
import styles from "@/styles/Nav/Navbar.module.scss";
// React
import { useEffect, useState } from "react";
// Next
import Image from "next/image";

const ThemeToggle: React.FC = () => {
    // Component state
    const [currentTheme, setCurrentTheme] = useState<string>("dark");

    // Theme state modifier
    const toggleTheme = () => {
        const newTheme: string = currentTheme === "dark" ? "light" : "dark";
        setCurrentTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    // Set theme to saved preference on app start
    useEffect(() => {
        const theme: string | null = localStorage.getItem("theme");
        if (theme) setCurrentTheme(theme);
    }, []);

    // Watch for theme changes => set body theme on change
    useEffect(() => {
        document.body.dataset.theme = currentTheme;
    }, [currentTheme]);

    return (
        <button
            className={`${styles["theme-toggle"]} ${styles[currentTheme]}`}
            onClick={toggleTheme}
        >
            <div className={styles["toggle-icon"]}>
                <Image
                    src={
                        currentTheme === "dark"
                            ? "/assets/icons/moon.svg"
                            : "/assets/icons/sun.svg"
                    }
                    alt={`${currentTheme} mode`}
                    layout="fill"
                    objectFit="contain"
                />
            </div>
            <div className={styles["toggle-thumb"]} />
        </button>
    );
};

export default ThemeToggle;
