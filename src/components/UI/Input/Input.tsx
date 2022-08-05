import cn from 'classnames';
import { FieldError, UseFormRegister } from "react-hook-form";
import s from './input.module.css';
export type InputProps = {
  placeholder: string;
  type: string;
  name: string;
  label?: string;
  isDisabled?: boolean;
  classNames?: string;
  error?: FieldError;
  register: UseFormRegister<any>;
  isDirty?: boolean;
};

export const Input = (props: InputProps) => {
  const { isDisabled, name, label, isDirty, classNames, error, register } = props;

  return (
    <div className="flex flex-col my-2">
      <label className="font-medium text-sm" htmlFor={name}>{label}</label>
      <input
        className={cn(s.root, error?.message ? s.error : isDirty ? s.done : null )}
        disabled={isDisabled}
        id={name}
        {...register(name)}
        {...props}
      />
      <span className="text-red-500 font-semibold text-xs">{error?.message}</span>
    </div>
  );
};
