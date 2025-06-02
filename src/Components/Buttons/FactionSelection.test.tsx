import { describe, expect, it } from "vitest";
import { FactionSelection } from "./FactionSelection";
import { render, screen } from "@testing-library/react";

describe("FactionSelection component", () => {
    it("should display the faction passed in as a prop", () => {
        render(<FactionSelection factionName="faction1" classNames={[]} />);
        const component = screen.getByText("faction1");

        expect(component).toBeInTheDocument();
        expect(component).toHaveTextContent("faction1");
    });

    it.skip("should load the correct faction button", () => {});

    // do we want this test?
    it.skip("should render with the correct classes", () => {
        const testClassNames = ["class1", "class2"];
        const expectedClassNames = "class1 class2";

        const { container } = render(
            <FactionSelection factionName="_" classNames={testClassNames} />
        );

        screen.debug()

        expect(container.className).toEqual(expectedClassNames);
        expect(container).toHaveClass("class1");
    });
});

// TODO: class selection tests:
// should only display the relevant class if they are available in that expansion
