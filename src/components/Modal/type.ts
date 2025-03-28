export type ModalProps = {
   readonly children: React.ReactNode,
   readonly isOpen: boolean,
   readonly onClose: () => void
}