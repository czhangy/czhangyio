// Component
import Navbar from "@/components/Nav/Navbar";
// Libraries
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Navbar", () => {
    it("Renders the site title", () => {
        render(<Navbar />);
        expect(screen.getByText("Charles Zhang")).toBeInTheDocument();
        expect(screen.getByText("Charles Zhang")).toHaveAttribute("href", "/");
    });
    it("Renders menu components", () => {
        render(<Navbar />);
        expect(screen.getByTestId("menu-button")).toBeInTheDocument();
        expect(screen.getByTestId("nav-menu")).toBeInTheDocument();
    });
});
