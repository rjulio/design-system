import '@styles/components/Input/input.css';
import { InputProps } from './type';
import { ErrorMessage } from './ErrorMessage';
import { Label } from './Label';

export function Input({
   id,
   label,
   type = 'text',
   placeholder,
   value,
   onChange,
   errorMessage = '',
   isDisabled = false,
   isRequired = false,
   isInvalid = false,
   isReadOnly = false,
   isLoading = false,
}: Readonly<InputProps>) {
   const inputAttributes = {
      type,
      id,
      value,
      onChange,
      placeholder,
      className: 'input-group__input',
      disabled: isDisabled,
      required: isRequired,
      readOnly: isReadOnly,
   };

   return (
      <div
         className="input-group"
         data-disabled={isDisabled}
         data-required={isRequired}
         data-invalid={isInvalid}
         data-readonly={isReadOnly}
         data-loading={isLoading}
      >
         <Label id={id} label={label} />
         <input {...inputAttributes} />
         {isInvalid && errorMessage && <ErrorMessage message={errorMessage} />}
      </div>
   );
}