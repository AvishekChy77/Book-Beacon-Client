import { motion } from "framer-motion";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";
import { PageTransition } from "../../Components/Motion";
import SocialLogin from "./SocialLogin";

const LogIn = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [showPass, setShowPass] = useState(false);
  const { signIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    setErrorMsg("");

    signIn(email, password)
      .then(() => {
        e.target.reset();
        toast.success("Welcome back!");
        navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        setErrorMsg("Invalid email or password");
      });
  };

  return (
    <PageTransition className="container mx-auto px-4 py-12">
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-[2rem] shadow-lift lg:grid-cols-2">
        {/* brand panel */}
        <div className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-brand-950 via-brand-800 to-brand-600 p-12 text-white lg:flex">
          <div className="bg-grid absolute inset-0 opacity-20" />
          <span className="absolute -right-8 top-16 animate-float-slow text-7xl opacity-20">📚</span>
          <span className="absolute bottom-24 left-8 animate-float text-5xl opacity-20">🔖</span>
          <div className="relative">
            <img
              className="w-10"
              src="https://i.ibb.co/64HpLpj/bb-logo-png.png"
              alt="BookBeacon logo"
            />
            <h2 className="font-display mt-6 text-3xl font-bold leading-snug">
              Welcome back,
              <br />
              <span className="text-sage-300">bookworm.</span>
            </h2>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Your borrowed books, wishlist and reading history are waiting
              right where you left them.
            </p>
          </div>
          <p className="relative text-xs text-white/50">
            “A reader lives a thousand lives before he dies.” — George R.R. Martin
          </p>
        </div>

        {/* form panel */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-base-100 p-8 md:p-12"
        >
          <h1 className="font-display text-3xl font-bold">
            Log <span className="text-gradient">in</span>
          </h1>
          <p className="mt-2 text-sm text-base-content/60">
            Pick up your reading journey where you left off.
          </p>

          <form onSubmit={handleLogin} className="mt-8 space-y-5">
            <div>
              <label className="label-modern">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                name="email"
                className="input-modern"
                required
              />
            </div>
            <div>
              <label className="label-modern">Password</label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Your password"
                  name="password"
                  className="input-modern pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  aria-label="Toggle password visibility"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-base-content/50 hover:text-brand-700"
                >
                  {showPass ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            {errorMsg && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl bg-rose-500/10 px-4 py-2 text-sm font-semibold text-rose-500"
              >
                {errorMsg}
              </motion.p>
            )}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="btn-brand w-full rounded-xl"
            >
              Log in
            </motion.button>
          </form>

          <div className="divider my-6 text-xs text-base-content/40">OR</div>
          <SocialLogin />

          <p className="mt-6 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link
              state={location.state}
              to="/register"
              className="font-bold text-brand-700 hover:underline dark:text-brand-300"
            >
              Register free
            </Link>
          </p>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default LogIn;
