import { app } from "./setup";
import { getAuth } from "firebase/auth";
import type { ActionCodeSettings } from "firebase/auth";

const auth = getAuth(app);
const actionCodeSettings: ActionCodeSettings = {
  url: "http://localhost:3000/sign-in",
  handleCodeInApp: true,
};

export { auth, actionCodeSettings };
