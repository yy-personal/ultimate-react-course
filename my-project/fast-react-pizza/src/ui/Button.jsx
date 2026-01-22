import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const className =
  "inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 active:bg-slate-50 disabled:cursor-not-allowed disabled:bg-slate-600";

  if (to) return <Link className={className} to={to}>{children}</Link>;

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
}

export default Button;
