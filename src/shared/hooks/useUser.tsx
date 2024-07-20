import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserProps {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  uid: string | null;

  UserIn: (
    displayName: string | null,
    email: string | null,
    photoURL: string | null,
    uid: string | null
  ) => void;
}

export const useUser = create(
  persist<UserProps>(
    (set) => ({
      displayName: "",
      email: "",
      photoURL: "",
      uid: "",
      UserIn: (displayName, email, photoURL, uid) =>
        set(() => ({
          displayName,
          email,
          photoURL,
          uid,
        })),
    }),
    { name: "User" }
  )
);
