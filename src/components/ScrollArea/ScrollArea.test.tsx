import { render } from "@testing-library/react";
import { ScrollArea } from ".";

function makeComponent() {
   const comp = render(
      <ScrollArea maxHeight="200px">
         <div style={{ height: "400px" }}>
            <p>Scroll Area Content</p>
         </div>
      </ScrollArea>
   );

   return { comp };
}

describe('ScrollArea', () => {
   test('should be rendered', () => {
      const { comp } = makeComponent();

      expect(comp.container).toBeInTheDocument();
   });

   test('should have the correct max height', () => {
      const { comp } = makeComponent();

      const scrollArea = comp.container.querySelector('.scroll-area');

      expect(scrollArea).toHaveStyle({ maxHeight: '200px' });
   });

   test('should have the correct content', () => {
      const { comp } = makeComponent();

      const content = comp.getByText('Scroll Area Content');

      expect(content).toBeInTheDocument();
   });
});