import '@styles/components/ScrollArea/scroll-area.css';
import { ScrollAreaProps } from './type';

export function ScrollArea({ children, maxHeight }: Readonly<ScrollAreaProps>) {
   return (
      <div className="scroll-area" style={{ maxHeight }}>
         {children}
      </div>
   )
}