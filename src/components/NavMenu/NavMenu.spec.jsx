// Component
import Navbar from "@/components/Navbar/Navbar";
// Libraries
import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";

describe("<NavMenu />", () => {
    beforeEach(() => render(<Navbar />));
    it("Initializes with the nav menu closed", () => {
        expect(screen.queryByRole("list")).toHaveClass("closed");
    });
    it("Nav menu contains links to all pages", () => {
        act(() => fireEvent.click(screen.getAllByRole("button")[1]));
        const aboutLink = screen.queryByText("About").closest("a");
        const experienceLink = screen.queryByText("Experience").closest("a");
        const projectsLink = screen.queryByText("Projects").closest("a");
        const skillsLink = screen.queryByText("Skills").closest("a");
        expect(aboutLink).toHaveAttribute("href", "/about");
        expect(experienceLink).toHaveAttribute("href", "/experience");
        expect(projectsLink).toHaveAttribute("href", "/projects");
        expect(skillsLink).toHaveAttribute("href", "/skills");
    });
});
