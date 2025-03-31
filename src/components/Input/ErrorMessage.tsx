import { InputErrorMessageProps } from "./type";

export function ErrorMessage({ message }: Readonly<InputErrorMessageProps>) {
   return (
      <span className="input-group-error">{message}</span>
   );
}