export function ModalFooter({
   children,
   classes = '',
}: {
   readonly children: React.ReactNode;
   readonly classes?: string;
}) {
   return (
      <div className={`modal__footer ${classes}`}>
         {children}
      </div>
   );
}