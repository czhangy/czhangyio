// Stylesheet
import styles from "../Navbar.module.scss";
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
            id={styles["theme-toggle"]}
            className={styles[currentTheme]}
            onClick={toggleTheme}
        >
            <div id={styles["toggle-icon"]}>
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
            <div id={styles["toggle-thumb"]} />
        </button>
    );
};

export default ThemeToggle;
