import { MutableRefObject} from 'react';

type FieldFormProps = {
  placeholder: string;
  nameField: string;
  className: string;
  ref: MutableRefObject<HTMLInputElement | null>;
  //pattern: string;
}
export const FieldForm = (({placeholder, nameField, className, ref}: FieldFormProps) => (
  <div className={className}>
    <input ref={ref} className="sign-in__input" type={nameField} placeholder={placeholder} name={`user-${nameField}`} id={`user-${nameField}`}/>
    <label className="sign-in__label visually-hidden" htmlFor={`user-${nameField}`}>{placeholder}</label>
  </div>
));

