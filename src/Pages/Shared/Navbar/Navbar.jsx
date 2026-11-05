import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaBars,
  FaBookOpen,
  FaCrown,
  FaHeart,
  FaMoon,
  FaSun,
  FaXmark,
} from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useRole from "../../../Hooks/useRole";
import { useTheme } from "../../../Hooks/useTheme";
import useWishlist from "../../../Hooks/useWishlist";
import Navs from "./Navs";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const { role, isAdmin } = useRole();
  const { changeTheme, mode } = useTheme();
  const { count } = useWishlist();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSignOut = () => {
    logOut().catch(() => {});
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "glass shadow-soft"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-3 md:h-[72px]">
        {/* brand */}
        <Link to="/" className="flex items-center gap-2">
          <motion.span
            whileHover={{ rotate: -10, scale: 1.08 }}
            className="grid size-8 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-900 text-sm text-white shadow-soft md:size-9 md:text-base"
          >
            <FaBookOpen />
          </motion.span>
          <p className="font-display text-xl font-bold md:text-2xl">
            <span className="text-brand-700 dark:text-brand-300">Book</span>
            <span className="text-sage-500 dark:text-sage-400">Beacon</span>
          </p>
        </Link>

        {/* desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          <Navs />
        </nav>

        {/* right side */}
        <div className="flex items-center gap-2 md:gap-3">
          <Link
            to="/wishlist"
            aria-label="Wishlist"
            className="relative grid size-10 place-items-center rounded-xl text-rose-500 transition hover:bg-rose-500/10"
          >
            <FaHeart className="text-lg" />
            {count > 0 && (
              <motion.span
                key={count}
                initial={{ scale: 0.4 }}
                animate={{ scale: 1 }}
                className="absolute -right-0.5 -top-0.5 grid size-5 place-items-center rounded-full bg-rose-500 text-[10px] font-bold text-white"
              >
                {count}
              </motion.span>
            )}
          </Link>

          <button
            onClick={changeTheme}
            aria-label="Toggle theme"
            className="grid size-10 place-items-center rounded-xl text-base-content/70 transition hover:bg-brand-700/10 hover:text-brand-700 dark:hover:text-brand-300"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mode}
                initial={{ rotate: -120, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 120, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-lg"
              >
                {mode === "dark" ? <FaSun /> : <FaMoon />}
              </motion.span>
            </AnimatePresence>
          </button>

          {user?.email ? (
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-circle btn-ghost avatar ring-2 ring-brand-500/40 ring-offset-2 ring-offset-base-100 transition hover:ring-brand-500"
              >
                <div className="w-9 rounded-full">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt={user.displayName || "profile"}
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <span className="grid h-full w-full place-items-center bg-brand-700 font-bold text-white">
                      {(user.displayName || user.email || "R")[0].toUpperCase()}
                    </span>
                  )}
                </div>
              </label>
              <div
                tabIndex={0}
                className="dropdown-content z-50 mt-3 w-60 rounded-2xl border border-base-300/60 bg-base-100 p-4 shadow-lift"
              >
                <p className="font-bold">{user.displayName || "Reader"}</p>
                <p className="truncate text-xs text-base-content/60">{user.email}</p>
                <span
                  className={`mt-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${
                    isAdmin
                      ? "bg-gold-500/20 text-gold-600 dark:text-gold-400"
                      : "bg-brand-700/10 text-brand-700 dark:bg-brand-300/10 dark:text-brand-300"
                  }`}
                >
                  {isAdmin && <FaCrown />} {role}
                </span>
                <div className="my-3 h-px bg-base-300" />
                <Link
                  to="/borrowedBooks"
                  className="block rounded-lg px-2 py-1.5 text-sm font-medium transition hover:bg-brand-700/10"
                >
                  My borrowed books
                </Link>
                <Link
                  to="/wishlist"
                  className="block rounded-lg px-2 py-1.5 text-sm font-medium transition hover:bg-brand-700/10"
                >
                  My wishlist
                </Link>
                <button
                  onClick={handleSignOut}
                  className="mt-1 flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-sm font-semibold text-rose-500 transition hover:bg-rose-500/10"
                >
                  <FiLogOut /> Log out
                </button>
              </div>
            </div>
          ) : (
            <NavLink to="/login" className="btn-brand btn-sm hidden rounded-xl px-5 sm:inline-flex">
              Log in
            </NavLink>
          )}

          {/* mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="grid size-10 place-items-center rounded-xl text-xl transition hover:bg-brand-700/10 lg:hidden"
          >
            {open ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="glass overflow-hidden border-t border-base-300/60 lg:hidden"
          >
            <div
              className="container mx-auto flex flex-col gap-1 px-4 py-4"
              onClick={() => setOpen(false)}
            >
              <Navs mobile />
              {!user?.email && (
                <NavLink to="/login" className="btn-brand btn-sm mt-2 w-full rounded-xl">
                  Log in
                </NavLink>
              )}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
