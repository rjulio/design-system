export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export type TooltipProps = {
   readonly children: React.ReactNode;
   readonly text: string;
   readonly position?: TooltipPosition;
} & React.HTMLAttributes<HTMLDivElement>;