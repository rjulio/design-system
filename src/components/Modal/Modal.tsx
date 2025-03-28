import '@styles/components/Modal/modal.css'
import { useEffect } from 'react'
import { Button } from '../Button'

export function Modal({
   children,
   isOpen,
   onClose
}: {
   readonly children: React.ReactNode,
   readonly isOpen: boolean,
   readonly onClose: () => void
}) {

   useEffect(() => {
      document.body.style.overflow = isOpen ? 'hidden': 'auto'
   }, [isOpen])

   if(!isOpen) return null


   return (
      <div className="modalOverlay">
         <div className="modalContent">
            <Button classes="closeButton" variant="text" onClick={onClose}>X</Button>
            { children }
         </div>
      </div>
   )
}