export type CardProps = {
   children: React.ReactNode,
   classes?: string,
   variant?: 'primary' | 'secondary',
   size?: 'sm' | 'md' | 'lg',
   ariaLabel?: string,
   disabled?: boolean,
   onClick?: () => void,
   [key: string]: any
}