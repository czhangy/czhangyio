// Component
import LandingPage from "./LandingPage";
// Libraries
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("<LandingPage />", () => {
    beforeEach(() => render(<LandingPage />));
    it("Renders headshot", () => {
        const headshot = screen.queryByAltText("Headshot");
        expect(headshot).toBeInTheDocument();
    });
    it("Renders landing page text", () => {
        const text = screen.queryByText("Hi, I'm Charles.");
        expect(text).toBeInTheDocument();
    });
});
