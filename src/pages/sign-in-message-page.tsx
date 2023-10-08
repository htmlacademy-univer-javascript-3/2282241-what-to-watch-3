import Copyright from '../components/copyright';
import Logo from '../components/logo';
import FieldForm from '../components/field-form';

function SignInMessagePage() {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form">
          <div className="sign-in__message">
            <p>We can’t recognize this email <br/> and password combination. Please try again.</p>
          </div>
          <div className="sign-in__fields">
            <FieldForm placeholder={'Email address'} nameField={'email'}/>
            <FieldForm placeholder={'Password'} nameField={'password'}/>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <Logo/>
        <Copyright/>
      </footer>
    </div>
  );
}

export default SignInMessagePage;
