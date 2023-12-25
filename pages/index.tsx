import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
};

export default function Home() {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <main className="grid min-h-svh">
      <form
        className="m-auto flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="email" className="font-bold text-2xl">
          Email
        </label>
        <input className="w-64 border border-gray-500" {...register("email")} />
        <button type="submit" className="bg-slate-200 w-64">
          Sign In
        </button>
      </form>
    </main>
  );
}
