// Function
import { toSlug } from "@/utils/helpers";

describe("utils/helpers", () => {
    it("toSlug works", () => {
        expect(toSlug("C++")).toEqual("cpp");
        expect(toSlug("Testing Library")).toEqual("testinglibrary");
        expect(toSlug("HTML/CSS")).toEqual("htmlcss");
    });
});
