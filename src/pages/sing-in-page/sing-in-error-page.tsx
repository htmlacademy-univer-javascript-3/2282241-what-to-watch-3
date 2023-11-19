import {SignIn} from '../../components/sign-in/sign-in.tsx';

function SingInErrorPage() {
  return (
    <SignIn classNameEmail={'sign-in__field sign-in__field--error'}>
      <div className="sign-in__message">
        <p>Please enter a valid email address</p>
      </div>
    </SignIn>
  );
}

export default SingInErrorPage;
