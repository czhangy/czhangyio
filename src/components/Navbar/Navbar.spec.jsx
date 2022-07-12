// Component
import Navbar from "./Navbar";
// Libraries
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

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
});
