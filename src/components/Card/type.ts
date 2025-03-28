export type CardProps = {
   children: React.ReactNode,
   classes?: string,
   variant?: 'primary' | 'secondary',
   size?: 'sm' | 'md' | 'lg',
   onClick?: () => void,
   [key: string]: any
}