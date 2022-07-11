// Component
import Home from "@/pages/index";
// Libraries
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("<Home />", () => {
    beforeEach(() => render(<Home />));
    it("Renders headshot", () => {
        const headshot = screen.queryByAltText("Headshot");
        expect(headshot).toBeInTheDocument();
    });
    it("Renders landing page text", () => {
        const text = screen.queryByText("Hi, I'm Charles.");
        expect(text).toBeInTheDocument();
    });
});
