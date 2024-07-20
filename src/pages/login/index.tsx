import { auth, useUser } from "shared";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

export function LoginPage() {
  const { UserIn } = useUser();
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    await signInWithPopup(auth, provider).then((auth) => {
      const { displayName, email, photoURL, uid } = auth.user;
      UserIn(displayName, email, photoURL, uid);
    });
  };

  return (
    <div className="flex  h-dvh w-dvw items-center justify-center flex-col gap-4">
      <div className="text-xl ">RApp 로그인</div>
      <button onClick={signInWithGoogle} className="flex ">
        <FcGoogle />
        로그인
      </button>
    </div>
  );
}
