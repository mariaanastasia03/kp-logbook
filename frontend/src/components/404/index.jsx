import logo from '../../assets/logo.svg';

export default function Section404() {
  return (
    <div className="flex min-h-screen flex-grow flex-col items-center justify-center gap-6 p-8 text-black">
      <div className="text-2xl font-bold">HCID - Home Credit Indonesia</div>
      <img src={logo} alt="Logo" className="w-72" />
      <div className="text-2xl font-bold">Error 404: Page not found!</div>
      <button
        className=" w-96 rounded-2xl bg-slate-400 py-4 text-xl font-bold"
        onClick={() => {
          window.location = '/';
        }}
      >
        Back to home
      </button>
    </div>
  );
}
