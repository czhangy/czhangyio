// Component
import Navbar from "@/components/Navbar/Navbar";
// Stylesheet
// Libraries
import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";

describe("<MenuButton />", () => {
    beforeEach(() => render(<Navbar />));
    it("Toggles the nav menu on button click", () => {
        const menuButton = screen.getAllByRole("button")[1];
        act(() => fireEvent.click(menuButton));
        expect(screen.queryByRole("list")).toHaveClass("open");
        act(() => fireEvent.click(menuButton));
        expect(screen.queryByRole("list")).toHaveClass("closed");
    });
    it("Nav menu closes on blur", async () => {
        const menuButton = screen.getAllByRole("button")[1];
        act(() => fireEvent.click(menuButton));
        act(() => fireEvent.blur(menuButton));
        await act(async () => await new Promise((r) => setTimeout(r, 150)));
        expect(screen.queryByRole("list")).toHaveClass("closed");
    });
});
