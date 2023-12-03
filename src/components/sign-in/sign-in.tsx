import Logo from '../logo/logo.tsx';
//import FieldForm from '../field-form/field-form.tsx';
import Copyright from '../copyright/copyright.tsx';
import {FormEvent, ReactNode, useRef} from 'react';
import {useAppDispatch} from '../../hooks/hooks-index.ts';
import {loginAction} from '../../store/api-actions.ts';
import {useNavigate} from 'react-router-dom';

type SingInProps = {
  children?: ReactNode;
}

export function SignIn({ children}: SingInProps) {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const patternLogin = '/^[\\w-]+(\\.[\\w-]+)*@[\\w-]+(\\.[\\w-]+)+$/';
  // const patternPassword = '/(?=.*[a-zA-Z])(?=.*\d)/'; не могу залогиниться

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value
      }));
      navigate('/'); // после того, как я добавила валидацию, мы будем переходить на главную страницу только после успешно введенных данных
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
          {children}
          <div className="sign-in__fields">
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input ref={loginRef} className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" pattern={patternLogin}/>
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input ref={passwordRef} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" />
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            {/*<FieldForm placeholder={'Email address'} nameField={'email'} className={"sign-in__field"} ref={loginRef}/>*/}
            {/*<FieldForm placeholder={'Password'} nameField={'password'} className={'sign-in__field'} ref={passwordRef} />*/}
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
