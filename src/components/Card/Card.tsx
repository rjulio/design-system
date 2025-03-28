import '@styles/components/Cards/card.css'
import { CardProps } from './type'

export function Card({
   children,
   classes = '',
   ...props
}: Readonly<CardProps>) {
   return (
      <div
         { ...props }
         className={`
            card
            ${classes}
         `}
      >
         {children}
      </div>
   )
}