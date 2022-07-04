// Component
import Navbar from "@/components/Nav/Navbar/Navbar";
// Libraries
import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";

describe("<Navbar />", () => {
    beforeEach(() => render(<Navbar />));
    it("Renders the site title", () => {
        const siteTitle = screen.queryByText("Charles Zhang");
        expect(siteTitle).toBeInTheDocument();
        expect(siteTitle).toHaveAttribute("href", "/");
    });
    it("Renders the menu button", () => {
        expect(screen.queryByRole("button")).toBeInTheDocument();
    });
    it("Initializes with the nav menu closed", () => {
        expect(screen.queryByRole("list")).not.toBeInTheDocument();
    });
    it("Toggles the nav menu on button click", () => {
        const menuButton = screen.getByRole("button");
        act(() => fireEvent.click(menuButton));
        expect(screen.queryByRole("list")).toBeInTheDocument();
        act(() => fireEvent.click(menuButton));
        expect(screen.queryByRole("list")).not.toBeInTheDocument();
    });
    it("Nav menu contains links to all pages", () => {
        act(() => fireEvent.click(screen.getByRole("button")));
        const skillsLink = screen.queryByText("Skills").closest("a");
        const projectsLink = screen.queryByText("Projects").closest("a");
        const aboutLink = screen.queryByText("About").closest("a");
        expect(skillsLink).toBeInTheDocument();
        expect(projectsLink).toBeInTheDocument();
        expect(aboutLink).toBeInTheDocument();
        expect(skillsLink).toHaveAttribute("href", "/skills");
        expect(projectsLink).toHaveAttribute("href", "/projects");
        expect(aboutLink).toHaveAttribute("href", "/about");
    });
    it("Nav menu closes on blur", async () => {
        const menuButton = screen.getByRole("button");
        act(() => fireEvent.click(menuButton));
        act(() => fireEvent.blur(menuButton));
        await act(async () => await new Promise((r) => setTimeout(r, 150)));
        expect(screen.queryByRole("list")).not.toBeInTheDocument();
    });
});
