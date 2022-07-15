// Component
import HomePage from "./HomePage";
// Libraries
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("<HomePage />", () => {
    beforeEach(() => render(<HomePage />));
    it("Renders headshot", () => {
        expect(screen.queryByAltText("Headshot")).toBeInTheDocument();
    });
    it("Renders landing page text", () => {
        expect(screen.queryByText("Hi, I'm Charles.")).toBeInTheDocument();
    });
    it("Renders nav links", () => {
        expect(screen.queryByText("About")).toHaveAttribute("href", "/about");
        expect(screen.queryByText("Experience")).toHaveAttribute(
            "href",
            "/experience"
        );
        expect(screen.queryByText("Projects")).toHaveAttribute(
            "href",
            "/projects"
        );
        expect(screen.queryByText("Skills")).toHaveAttribute("href", "/skills");
    });
});
