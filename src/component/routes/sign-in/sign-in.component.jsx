import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";
import SignUpForm from "../../sign-up-form/sign-up-form.component";

const SiginIn = () => {
  const signInGooglePopup = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Authentication</h1>
      <button onClick={signInGooglePopup}>Sign in with google</button>
      <SignUpForm />
    </div>
  );
};

export default SiginIn;
