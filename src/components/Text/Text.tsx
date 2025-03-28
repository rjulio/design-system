import '@styles/components/Text/text.css';

export function Text({ children, ...props }: { readonly children: string }) {
   return (
      <p
         {...props}
         aria-label={children}
         className={`
            text
         `}
      >
         {children}
      </p>
   )
}