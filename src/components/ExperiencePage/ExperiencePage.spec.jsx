// Component
import ExperiencePage from "./ExperiencePage";
// Libraries
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

// Mock prop
const mockExperiences = [
    {
        endDate: "12/01",
        jobTitle: "Employee",
        name: "ABC Corp.",
        points: ["Did XYZ", "Improved things"],
        startDate: "01/01",
    },
    {
        endDate: "09/20",
        jobTitle: "Manager",
        name: "DEF Corp.",
        points: ["Did things", "Improved XYZ"],
        startDate: "03/20",
    },
];

describe("<ExperiencePage />", () => {
    it("renders all experiences", () => {
        render(<ExperiencePage experience={mockExperiences} />);
        const headers = screen.queryAllByRole("heading");
        expect(headers.length).toEqual(mockExperiences.length);
    });
});
