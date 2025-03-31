export type inputType = 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'

export type InputProps = {
   id: string;
   label: string;
   type?: inputType;
   placeholder?: string;
   value: string;
   isDisabled?: boolean;
   isRequired?: boolean;
   isInvalid?: boolean;
   isReadOnly?: boolean;
   isLoading?: boolean;
   errorMessage?: string;
   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type InputLabelProps = {
   id: string;
   label: string;
};

export type InputErrorMessageProps = {
   message: string;
};