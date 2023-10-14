import Logo from '../logo/logo.tsx';
import FieldForm from '../field-form/field-form.tsx';
import Copyright from '../copyright/copyright.tsx';
import {ReactNode} from 'react';

type SingInProps = {
  classNameEmail: string;
  children?: ReactNode;
}

export function SingIn(props: SingInProps) {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo className={'logo__link'}/>
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form">
          {props.children}
          <div className="sign-in__fields">
            <FieldForm placeholder={'Email address'} nameField={'email'} className={props.classNameEmail}/>
            <FieldForm placeholder={'Password'} nameField={'password'} className={'sign-in__field'}/>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <Logo className={'logo__link logo__link--light'}/>
        <Copyright/>
      </footer>
    </div>

  );
}
