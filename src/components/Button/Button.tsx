import '@styles/components/Button/default.css'
import { handleMouseOut } from '../../utils/handleMouseOut'
import { handleBlur } from '../../utils/handleOnBlur'
import type { ButtonProps } from './type'

export function Button({
   children,
   classes = '',
   variant = 'primary',
   size = 'md',
   onClick,
   ariaLabel,
   ...props
}: Readonly<ButtonProps>) {

   if(!ariaLabel) {
      console.warn('ariaLabel is required for accessibility. Please provide a value for ariaLabel.')
   }

   return (
      <button
         { ...props }
         className={`
            button button--${variant}
            ${size}
            ${classes}
         `}
         onMouseOut={handleMouseOut}
         onBlur={handleBlur}
         onClick={onClick}
         aria-label={ariaLabel ?? 'button'}
      >
         {children}
      </button>
   )
}