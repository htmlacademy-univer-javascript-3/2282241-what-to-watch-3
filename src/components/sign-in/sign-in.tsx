import Logo from '../logo/logo.tsx';
import FieldForm from '../field-form/field-form.tsx';
import Copyright from '../copyright/copyright.tsx';
import {FormEvent, ReactNode, useRef} from 'react';
import {useAppDispatch} from '../../hooks/hooks-index.ts';
import {loginAction} from '../../store/api-actions.ts';
import {useNavigate} from 'react-router-dom';

type SingInProps = {
  classNameEmail: string;
  children?: ReactNode;
}

export function SignIn(props: SingInProps) {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value
      }));
    }
  };
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo className={'logo__link'}/>
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
          {props.children}
          <div className="sign-in__fields">
            <FieldForm placeholder={'Email address'} nameField={'email'} className={props.classNameEmail} innerRef={loginRef}/>
            <FieldForm placeholder={'Password'} nameField={'password'} className={'sign-in__field'} innerRef={passwordRef}/>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit" onClick={() => navigate('/')}>Sign in</button>
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
