import {SignIn} from '../../components/sign-in/sign-in.tsx';

function SignInMessagePage() {
  return (
    <SignIn classNameEmail={'sign-in__field'}>
      <div className="sign-in__message">
        <p>We can’t recognize this email <br/> and password combination. Please try again.</p>
      </div>
    </SignIn>
  );
}
export default SignInMessagePage;
