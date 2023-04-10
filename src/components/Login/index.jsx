import LoginCard from "./LoginCard";

export default function Index() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 align-middle">
      <div className=" flex w-[600px] items-center justify-center rounded-3xl bg-slate-500 py-5 text-2xl font-bold">
        HOME CREDIT LOG BOOK
      </div>
      <LoginCard />
    </div>
  );
}
