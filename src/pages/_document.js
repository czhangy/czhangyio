import Document, { Html, Head, Main, NextScript } from "next/document";

class CustomDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,400;0,700;1,400;1,700&family=Staatliches&display=swap"
                        rel="stylesheet"
                        type="text/css"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default CustomDocument;
