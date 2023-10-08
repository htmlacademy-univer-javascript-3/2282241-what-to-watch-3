type FieldFormType = {
  placeholder: string;
  nameField: string;
}

function FieldForm({placeholder, nameField}: FieldFormType) {
  return (
    <div className="sign-in__field">
      <input className="sign-in__input" type={nameField} placeholder={placeholder} name={'user-'.concat(nameField)} id={'user-'.concat(nameField)}/>
      <label className="sign-in__label visually-hidden" htmlFor={'user-'.concat(nameField)}>{placeholder}</label>
    </div>
  );
}

export default FieldForm;
