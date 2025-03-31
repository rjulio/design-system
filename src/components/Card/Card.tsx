import '@styles/components/Cards/card.css'
import { CardProps } from './type'

export function Card({
   children,
   classes = '',
   ariaLabel,
   ...props
}: Readonly<CardProps>) {
   return (
      <div
         {...props}
         className={`
            custom-card
            ${classes}
         `}
         aria-label={ariaLabel ?? 'Card'}
      >
         {children}
      </div>
   )
}