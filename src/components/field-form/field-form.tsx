import {MutableRefObject} from 'react';

type FieldFormProps = {
  placeholder: string;
  nameField: string;
  className: string;
  ref: MutableRefObject<HTMLInputElement | null>;
}

function FieldForm({placeholder, nameField, className, ref}: FieldFormProps) {
  return (
    <div className={className}>
      <input className="sign-in__input" type={nameField} placeholder={placeholder} name={`user-${nameField}`} id={`user-${nameField}`} ref={ref}/>
      <label className="sign-in__label visually-hidden" htmlFor={`user-${nameField}`}>{placeholder}</label>
    </div>
  );
}

export default FieldForm;
