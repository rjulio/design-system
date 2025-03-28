import '@styles/components/Modal/modal.css'
import { useEffect } from 'react'
import { Button } from '../Button'
import { createPortal } from 'react-dom'
import { ModalProps } from './type'

export function Modal({
   children,
   isOpen,
   onClose
}: Readonly<ModalProps>) {

   useEffect(() => {
      document.body.style.overflow = isOpen ? 'hidden': 'auto'
   }, [isOpen])

   useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
         if (event.key === 'Escape' && isOpen) {
            onClose()
         }
      }

      document.addEventListener('keydown', handleKeyDown)

      return () => {
         document.removeEventListener('keydown', handleKeyDown)
      }
   }, [isOpen, onClose])

   if(!isOpen) return null

   return createPortal(
      <div className="modalOverlay">
         <div className="modalContent">
            <Button classes="closeButton" variant="text" onClick={onClose}>X</Button>
            { children }
         </div>
      </div>,
      document.getElementById('modal-root') as HTMLElement
   )
}