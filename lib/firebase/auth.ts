import { app } from "./setup";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
