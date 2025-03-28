import { variants } from "../../types/variants"

export type ButtonProps = {
   variant?: variants,
   children: React.ReactNode
   classes?: string
   disabled?: boolean
   size?: string
   onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}