import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/allBooks", label: "All Books" },
  { to: "/AddBook", label: "Add Book" },
  { to: "/borrowedBooks", label: "Borrowed" },
  { to: "/request", label: "Request" },
];

const Navs = ({ mobile = false }) => {
  return (
    <>
      {links.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            mobile
              ? `rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                  isActive
                    ? "bg-brand-700/10 text-brand-700 dark:text-brand-300"
                    : "hover:bg-base-200"
                }`
              : `group relative px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? "text-brand-700 dark:text-brand-300"
                    : "text-base-content/70 hover:text-brand-700 dark:hover:text-brand-300"
                }`
          }
        >
          {({ isActive }) => (
            <>
              {label}
              {!mobile && (
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-gradient-to-r from-brand-700 to-sage-400 transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              )}
            </>
          )}
        </NavLink>
      ))}
    </>
  );
};

export default Navs;
