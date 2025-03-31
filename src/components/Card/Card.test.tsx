import { render } from "@testing-library/react";
import { Card } from "./Card";

function createComponent() {
   const comp = render(
      <Card
         title="Card Title"
         data-testid="card-test">
         <p>Card Content</p>
      </Card>
   )

   return { comp }
}

describe('Card', () => {
   test('card should be rendered', () => {
      const { comp } = createComponent();

      expect(comp.container).toBeInTheDocument();
   });

   test('card should have the correct title', () => {
      const { comp } = createComponent();

      const card = comp.getByTestId('card-test');

      expect(card.getAttribute('title')).toBe('Card Title');
   });

   test('card should have the correct content', () => {
      const { comp } = createComponent();

      const content = comp.getByText('Card Content');

      expect(content).toBeInTheDocument();
   });
})