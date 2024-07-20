import { signOut } from "firebase/auth";
import { useUser } from "./useUser";
import { auth } from "shared";

export function useLogout() {
  // useUser 삭제
  const clearUseRunningStart = useUser.persist.clearStorage;

  const onLogOutClick = async () => {
    await signOut(auth);
    clearUseRunningStart();
  };
  return onLogOutClick();
}
