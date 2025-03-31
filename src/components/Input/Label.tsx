import { InputLabelProps } from "./type";

export function Label({ id, label }: Readonly<InputLabelProps>) {
   return (
      <label
         htmlFor={id}
         className="input-group__label">{label}</label>
   );
}