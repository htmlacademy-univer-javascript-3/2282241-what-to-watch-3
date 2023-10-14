type FieldFormProps = {
  placeholder: string;
  nameField: string;
  className: string;
}

function FieldForm(props: FieldFormProps) {
  return (
    <div className={props.className}>
      <input className="sign-in__input" type={props.nameField} placeholder={props.placeholder} name={`user-${props.nameField}`} id={`user-${props.nameField}`}/>
      <label className="sign-in__label visually-hidden" htmlFor={`user-${props.nameField}`}>{props.placeholder}</label>
    </div>
  );
}

export default FieldForm;
