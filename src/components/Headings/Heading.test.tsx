import { render } from "@testing-library/react";
import { Heading } from ".";

function makeComponent() {
   const comp = render(
      <Heading level={3} title="heading title">Heading text</Heading>
   )

   return { comp }
}

describe('Heading', () => {
   test('should be rendered', () => {
      const { comp } = makeComponent();

      expect(comp.container).toBeInTheDocument();
   });

   test('should have the correct level', () => {
      const { comp } = makeComponent();

      const heading = comp.getByText('Heading text');

      expect(heading.tagName).toBe('H3');
   });

   test('should have the correct text', () => {
      const { comp } = makeComponent();

      const heading = comp.getByText('Heading text');

      expect(heading).toBeInTheDocument();
   });

   test('should have the correct title', () => {
      const { comp } = makeComponent();

      const heading = comp.getByText('Heading text');

      expect(heading.getAttribute('title')).toBe('heading title');
   });
})