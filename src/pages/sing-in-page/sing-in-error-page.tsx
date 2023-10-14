import {SingIn} from '../../components/sing-in/sing-in.tsx';

function SingInErrorPage() {
  return (
    <SingIn classNameEmail={'sign-in__field sign-in__field--error'}>
      <div className="sign-in__message">
        <p>Please enter a valid email address</p>
      </div>
    </SingIn>
  );
}

export default SingInErrorPage;
