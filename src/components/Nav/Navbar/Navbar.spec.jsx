// Component
import Navbar from "@/components/Nav/Navbar/Navbar";
// Libraries
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("<Navbar />", () => {
    it("Renders the site title", () => {
        render(<Navbar />);
        const siteTitle = screen.getByText("Charles Zhang");
        expect(siteTitle).toBeInTheDocument();
        expect(siteTitle).toHaveAttribute("href", "/");
    });
    it("Renders menu components", () => {
        render(<Navbar />);
        const menuButton = screen.getByRole("button");
        const menu = screen.getByRole("list");
        expect(menuButton).toBeInTheDocument();
        expect(menu).toBeInTheDocument();
    });
});
