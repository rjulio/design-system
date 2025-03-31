import '@styles/components/Tooltip/tooltip.css';
import { TooltipProps } from './type';

export function Tooltip({
   children,
   text,
   position,
}: Readonly<TooltipProps>) {
   return (
      <div
         aria-label={text}
         role="tooltip"
         data-tooltip-position={position}
         className="tooltip--wrapper">
         <span className="tooltip">{ text }</span>
         { children }
      </div>
   );
}