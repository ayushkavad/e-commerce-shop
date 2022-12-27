import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";

const SiginIn = () => {
  const signInGooglePopup = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Authentication</h1>
      <button onClick={signInGooglePopup}>Sign in with google</button>
    </div>
  );
};

export default SiginIn;
