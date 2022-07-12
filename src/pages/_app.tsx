// Stylesheet
import "@/styles/globals.scss";
// TS
import type { AppProps } from "next/app";
// Nav components
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
// React
import { useEffect } from "react";

function App({ Component, pageProps }: AppProps) {
    // Sync window blur with element blur
    useEffect(() => {
        window.addEventListener("blur", () => {
            (document.activeElement as HTMLElement | null)?.blur();
        });
        return function cleanup() {
            window.removeEventListener("blur", () => {
                (document.activeElement as HTMLElement | null)?.blur();
            });
        };
    }, []);

    return (
        <>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default App;
