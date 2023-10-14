import {SingIn} from '../../components/sing-in/sing-in.tsx';

function SignInMessagePage() {
  return (
    <SingIn classNameEmail={'sign-in__field'}>
      <div className="sign-in__message">
        <p>We can’t recognize this email <br/> and password combination. Please try again.</p>
      </div>
    </SingIn>
  );
}
export default SignInMessagePage;
