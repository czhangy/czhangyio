// Component
import Navbar from "./Navbar";
// Libraries
import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";

describe("<Navbar />", () => {
    beforeEach(() => render(<Navbar />));
    it("Renders the site title", () => {
        const siteTitle = screen.queryByText("Charles Zhang").closest("a");
        expect(siteTitle).toBeInTheDocument();
        expect(siteTitle).toHaveAttribute("href", "/");
    });
    it("Renders all buttons", () => {
        const buttons = screen.queryAllByRole("button");
        expect(buttons[0]).toBeInTheDocument();
        expect(buttons[1]).toBeInTheDocument();
    });
    it("Initializes with the nav menu closed", () => {
        expect(screen.queryByRole("list")).not.toBeVisible();
    });
    it("Initializes in dark mode", () => {
        expect(document.body.dataset.theme).toEqual("dark");
    });
    it("Toggles theme on button click", () => {
        const setItem = jest.spyOn(Storage.prototype, "setItem");
        const themeToggle = screen.getAllByRole("button")[0];
        act(() => fireEvent.click(themeToggle));
        expect(document.body.dataset.theme).toEqual("light");
        expect(setItem).toHaveBeenCalled();
        act(() => fireEvent.click(themeToggle));
        expect(document.body.dataset.theme).toEqual("dark");
    });
    it("Toggles the nav menu on button click", () => {
        const menuButton = screen.getAllByRole("button")[1];
        act(() => fireEvent.click(menuButton));
        expect(screen.queryByRole("list")).toBeVisible();
        act(() => fireEvent.click(menuButton));
        expect(screen.queryByRole("list")).not.toBeVisible();
    });
    it("Nav menu contains links to all pages", () => {
        act(() => fireEvent.click(screen.getAllByRole("button")[1]));
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
        const menuButton = screen.getAllByRole("button")[1];
        act(() => fireEvent.click(menuButton));
        act(() => fireEvent.blur(menuButton));
        await act(async () => await new Promise((r) => setTimeout(r, 150)));
        expect(screen.queryByRole("list")).not.toBeVisible();
    });
});
