import { render } from "@testing-library/react";
import { Text } from ".";

function makeComponent() {
   const comp = render(<Text>text content</Text>)

   return {
      comp,
   };
}

describe("Text", () => {
   it("should render", () => {
      const { comp } = makeComponent();

      expect(comp).toBeTruthy();
   });

   it("should render text content", () => {
      const { comp } = makeComponent();

      expect(comp.getByText("text content")).toBeTruthy();
   });

   it("should have default className", () => {
      const { comp } = makeComponent();

      expect(comp.container.firstChild).toHaveClass("text");
   });
});