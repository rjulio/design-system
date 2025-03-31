import { render } from "@testing-library/react";
import { Button } from "../Button";
import { Heading } from "../Headings";
import { vi } from "vitest";
import { Modal, ModalBody, ModalFooter, ModalHeader } from ".";

global.HTMLDialogElement.prototype.showModal = vi.fn();

function makeComponent() {
   const comp = render(
      <Modal
         title="Modal title"
         isOpen={true}
         onClose={() => { }}
         aria-label="modal">
         <ModalHeader>
            <Heading level={3}>Modal Title</Heading>
         </ModalHeader>
         <ModalBody>
            <p>Modal Content</p>
         </ModalBody>
         <ModalFooter>
            <Button
               onClick={() => { }}
               ariaLabel="close-modal"
            >Close</Button>
         </ModalFooter>
      </Modal>
   );

   return { comp };
}

describe('Modal', () => {
   test('should be rendered', () => {
      const { comp } = makeComponent();

      expect(comp.container).toBeInTheDocument();
   });

   test('should have the correct title', () => {
      const { comp } = makeComponent();

      const modal = comp.getByText('Modal Title');

      expect(modal).toBeInTheDocument();
   });

   test('should have the correct content', () => {
      const { comp } = makeComponent();

      const content = comp.getByText('Modal Content');

      expect(content).toBeInTheDocument();
   });
});