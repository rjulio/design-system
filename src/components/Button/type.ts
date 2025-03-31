import { variants } from "../../types/variants"

export type ButtonProps = {
   variant?: variants,
   children: React.ReactNode
   classes?: string
   disabled?: boolean
   size?: string
   ariaLabel?: string;
   onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
} & React.ButtonHTMLAttributes<HTMLButtonElement>