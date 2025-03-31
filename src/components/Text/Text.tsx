import '@styles/components/Text/text.css';
import { TextProps } from './type';

export function Text({ children, ...props }: Readonly<TextProps>) {
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