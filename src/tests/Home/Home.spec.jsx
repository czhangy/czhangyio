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
    it("Renders nav links", () => {
        const aboutLink = screen.queryByText("About");
        const experienceLink = screen.queryByText("Experience");
        const projectsLink = screen.queryByText("Projects");
        const skillsLink = screen.queryByText("Skills");
        expect(aboutLink).toHaveAttribute("href", "/about");
        expect(experienceLink).toHaveAttribute("href", "/experience");
        expect(projectsLink).toHaveAttribute("href", "/projects");
        expect(skillsLink).toHaveAttribute("href", "/skills");
    });
});
