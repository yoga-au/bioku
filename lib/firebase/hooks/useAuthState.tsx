import { useEffect } from "react";
import {
  onAuthStateChanged,
  type Auth,
  type User,
  type NextOrObserver,
} from "firebase/auth";

export type useAuthStateHooks = (
  auth: Auth,
  observer: NextOrObserver<User>
) => void;

const useAuthState: useAuthStateHooks = (auth, observer) => {
  useEffect(() => {
    const listener = onAuthStateChanged(auth, observer);

    return () => {
      listener();
    };
  }, [auth, observer]);
};

export default useAuthState;
