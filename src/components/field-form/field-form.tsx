import {forwardRef, MutableRefObject} from 'react';

type FieldFormProps = {
  placeholder: string;
  nameField: string;
  className: string;
  innerRef: MutableRefObject<HTMLInputElement | null>;
}
const FieldForm = forwardRef(function FieldForm({placeholder, nameField, className, innerRef}: FieldFormProps) {
    return (
        <div className={className}>
            <input className="sign-in__input" type={nameField} placeholder={placeholder} name={`user-${nameField}`} id={`user-${nameField}`} ref={innerRef}/>
            <label className="sign-in__label visually-hidden" htmlFor={`user-${nameField}`}>{placeholder}</label>
        </div>
    );
});

export default FieldForm;
