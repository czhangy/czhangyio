// Component
import Footer from "@/components/Nav/Footer/Footer";
// Libraries
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("<Footer />", () => {
    beforeEach(() => render(<Footer />));
    it("Renders text", () => {
        const siteTitle = screen.queryByText("Connect with me!");
        expect(siteTitle).toBeInTheDocument();
    });
    it("Contains links to all socials", () => {
        const links = screen.queryAllByRole("link");
        expect(links.length).toEqual(4);
        expect(links[0]).toHaveAttribute("href", "https://github.com/czhangy");
        expect(links[1]).toHaveAttribute(
            "href",
            "https://www.linkedin.com/in/czhangy/"
        );
        expect(links[2]).toHaveAttribute(
            "href",
            "https://www.instagram.com/c.zhangg/"
        );
        expect(links[3]).toHaveAttribute(
            "href",
            "https://twitter.com/czhangy_"
        );
    });
});
