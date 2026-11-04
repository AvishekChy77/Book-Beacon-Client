import {
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaLocationDot,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const explore = [
  { to: "/allBooks", label: "All Books" },
  { to: "/AddBook", label: "Add a Book" },
  { to: "/borrowedBooks", label: "Borrowed Books" },
  { to: "/wishlist", label: "My Wishlist" },
];

const support = [
  { to: "/request", label: "Request a Book" },
  { to: "/login", label: "Log in" },
  { to: "/register", label: "Create account" },
];

const socials = [
  { icon: <FaFacebookF />, label: "Facebook" },
  { icon: <FaXTwitter />, label: "Twitter / X" },
  { icon: <FaYoutube />, label: "YouTube" },
  { icon: <FaGithub />, label: "GitHub" },
];

const Footer = () => {
  return (
    <footer className="relative mt-24 overflow-hidden bg-brand-950 text-white">
      <div className="bg-grid absolute inset-0 opacity-20" />
      <div className="absolute -left-24 top-0 size-72 rounded-full bg-brand-500/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 size-72 rounded-full bg-sage-400/10 blur-3xl" />

      <div className="container relative mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* brand */}
          <div>
            <div className="flex items-center gap-2">
              <img
                className="w-8"
                src="https://i.ibb.co/64HpLpj/bb-logo-png.png"
                alt="BookBeacon logo"
              />
              <h2 className="font-display text-2xl font-bold">
                <span className="text-brand-300">Book</span>
                <span className="text-sage-400">Beacon</span>
              </h2>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Your guiding light in the world of books. Browse, borrow and read
              from a growing collection across every genre — free for every
              reader.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-xl bg-white/5 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-500 hover:text-white"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* explore */}
          <div>
            <h4 className="font-display text-lg font-bold text-sage-300">Explore</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {explore.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-white/60 transition-all duration-300 hover:pl-1.5 hover:text-brand-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* support */}
          <div>
            <h4 className="font-display text-lg font-bold text-sage-300">Account</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {support.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-white/60 transition-all duration-300 hover:pl-1.5 hover:text-brand-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h4 className="font-display text-lg font-bold text-sage-300">Contact</h4>
            <ul className="mt-5 space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <FaLocationDot className="mt-0.5 shrink-0 text-brand-300" />
                Chattogram, Bangladesh
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="mt-0.5 shrink-0 text-brand-300" />
                hello@bookbeacon.app
              </li>
            </ul>
            <p className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs leading-relaxed text-white/50">
              Open every day — your library never closes. Borrow up to 3 books
              at a time and return them on your schedule.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} BookBeacon — Guiding Your Literary Journey</p>
          <p>Built with React, Express & MongoDB</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
