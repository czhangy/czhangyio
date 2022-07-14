// Component
import TimelineElement from "./TimelineElement";
// Libraries
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

// Mock
const mockExperience = {
    endDate: "12/01",
    jobTitle: "Employee",
    name: "ABC Corp.",
    points: ["Did XYZ", "Improved things"],
    startDate: "01/01",
};

describe("<TimelineElement />", () => {
    it("renders all content", () => {
        render(<TimelineElement experience={mockExperience} index={0} />);
        expect(
            screen.getByAltText(`${mockExperience.name} logo`)
        ).toBeInTheDocument();
        expect(screen.getByText(mockExperience.name)).toBeInTheDocument();
        expect(screen.getByText(mockExperience.jobTitle)).toBeInTheDocument();
        expect(
            screen.getByText(
                `${mockExperience.startDate} - ${mockExperience.endDate}`
            )
        ).toBeInTheDocument();
        expect(screen.getByText(mockExperience.points[0])).toBeInTheDocument();
        expect(screen.getByText(mockExperience.points[1])).toBeInTheDocument();
    });
});
