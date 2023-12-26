import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase/auth";
import { useAuthState } from "@/lib/firebase/hooks";

export default function Dashboard() {
  const router = useRouter();
  useAuthState(auth, (user) => {
    if (!user) {
      router.push("/");
    } else {
      return;
    }
  });

  const onSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="grid min-h-svh">
      <div className="m-auto">
        <h1>Dashboard Page</h1>
        <button className="bg-slate-200 w-64" onClick={onSignOut}>
          Sign Out
        </button>
      </div>
    </main>
  );
}
