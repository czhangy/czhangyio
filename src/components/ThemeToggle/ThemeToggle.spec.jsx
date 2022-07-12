// Component
import Navbar from "@/components/Navbar/Navbar";
// Libraries
import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";

describe("<ThemeToggle />", () => {
    beforeEach(() => render(<Navbar />));
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
});
