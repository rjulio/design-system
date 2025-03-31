import { render } from "@testing-library/react";
import { Tooltip } from ".";

function makeComponent() {
   const comp = render(
      <Tooltip text="Test text" position="bottom">
         <span>Tooltip content</span>
      </Tooltip>
   )

   return { comp }
}

describe("Tooltip", () => {
   it("should render without crashing", () => {
      const { comp } = makeComponent();
      expect(comp).toBeTruthy();
   });

   it("should render the tooltip text", () => {
      const { comp } = makeComponent();
      const tooltipText = comp.getByText("Test text");
      expect(tooltipText).toBeInTheDocument();
   });

   it("should render the tooltip content", () => {
      const { comp } = makeComponent();
      const tooltipContent = comp.getByText("Tooltip content");
      expect(tooltipContent).toBeInTheDocument();
   });

   it("should have the correct position data-tooltip-position", () => {
      const { comp } = makeComponent();
      const tooltip = comp.getByRole('tooltip')
      expect(tooltip.getAttribute('data-tooltip-position')).toBe("bottom");
   });
});