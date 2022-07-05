// Component
import AboutPage from "./AboutPage";
// Libraries
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("<LandingPage />", () => {
    beforeEach(() => render(<AboutPage />));
    it("Renders header", () => {
        const header = screen.queryByText("About Me");
        expect(header).toBeInTheDocument();
    });
    it("Renders content", () => {
        const image = screen.queryByRole("img");
        const text = screen.queryByTestId("about-paragraph");
        const link = screen.queryByRole("link");
        expect(image).toBeInTheDocument();
        expect(text).toBeInTheDocument();
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute("href", "/about");
    });
});
