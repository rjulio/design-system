import '@styles/components/Modal/modal.css';
import { useEffect, useRef } from 'react';
import { Button } from '../Button';
import { ModalProps } from './type';

export function Modal({
   children,
   isOpen,
   onClose,
   hideCloseButton = false,
}: Readonly<ModalProps>) {
   const dialogRef = useRef<HTMLDialogElement>(null);

   useEffect(() => {
      const dialog = dialogRef.current;

      if (dialog) {
         if (isOpen && !dialog.open) {
            dialog.showModal();
         } else if (!isOpen && dialog.open) {
            dialog.close();
         }
      }

      return () => {
         if (dialog?.open) dialog.close(); // Ensure dialog is closed on unmount
      };
   }, [isOpen]);

   useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
         if (event.key === 'Escape' && isOpen) {
            onClose();
         }
      };

      document.addEventListener('keydown', handleKeyDown);

      return () => {
         document.removeEventListener('keydown', handleKeyDown);
      };
   }, [isOpen, onClose]);

   return (
      <dialog
         ref={dialogRef}
         className="modal__dialog"
         onClose={onClose}
         aria-labelledby="modal-dialog"
         aria-describedby="modal-description"
      >
         <div className="modal__content">
            {hideCloseButton && (
               <Button aria-label="modal close button" classes="close-button" variant="text" onClick={onClose}>
                  X
               </Button>
            )}
            {children}
         </div>
      </dialog>
   );
}