// Stylesheet
import "@/styles/globals.scss";
// TS
import type { AppProps } from "next/app";
// Nav components
import Navbar from "@/components/Nav/Navbar";

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
        </>
    );
}

export default App;
