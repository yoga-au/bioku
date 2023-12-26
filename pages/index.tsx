import { useRouter } from "next/navigation";
import { signInWithPopup, type AuthError } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase/auth";
import { useAuthState } from "@/lib/firebase/hooks";

export default function Home() {
  const router = useRouter();
  useAuthState(auth, (user) => {
    if (user) {
      router.push("/dashboard");
    } else {
      return;
    }
  });

  const onSignInGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
    } catch (error) {
      const err = error as AuthError;
      console.error({ code: err.code, message: err.message });
    }
  };

  return (
    <main className="grid min-h-svh">
      <div className="m-auto">
        <button className="bg-slate-200 w-64" onClick={onSignInGoogle}>
          Sign In with Google
        </button>
      </div>
    </main>
  );
}
