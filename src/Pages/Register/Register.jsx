import { updateProfile } from "firebase/auth";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { PageTransition } from "../../Components/Motion";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Register = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [showPass, setShowPass] = useState(false);
  const { createUser, Auth } = useAuth();
  const location = useLocation();
  const goTo = useNavigate();
  const axiosPublic = useAxiosPublic();

  const handleRegister = (e) => {
    e.preventDefault();
    setErrorMsg("");
    const form = new FormData(e.currentTarget);
    const displayName = form.get("name");
    const photoURL = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    if (password.length < 6) {
      setErrorMsg("Password must be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setErrorMsg("Password must have a capital letter");
      return;
    } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
      setErrorMsg("Password must have a special character");
      return;
    }

    createUser(email, password)
      .then(() => {
        e.target.reset();
        updateProfile(Auth.currentUser, { displayName, photoURL }).catch(() => {});
        axiosPublic.post("/users", { name: displayName, email }).catch(() => {});
        toast.success("Account created successfully!");
        goTo(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setErrorMsg(
          error.code === "auth/email-already-in-use"
            ? "That email is already registered — try logging in."
            : "Could not create the account. Please try again."
        );
      });
  };

  return (
    <PageTransition className="container mx-auto px-4 py-12">
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-[2rem] shadow-lift lg:grid-cols-2">
        {/* brand panel */}
        <div className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-brand-950 via-brand-800 to-brand-600 p-12 text-white lg:flex">
          <div className="bg-grid absolute inset-0 opacity-20" />
          <span className="absolute -left-6 top-20 animate-float text-6xl opacity-20">✨</span>
          <span className="absolute bottom-28 right-8 animate-float-slow text-7xl opacity-20">📖</span>
          <div className="relative">
            <img
              className="w-10"
              src="https://i.ibb.co/64HpLpj/bb-logo-png.png"
              alt="BookBeacon logo"
            />
            <h2 className="font-display mt-6 text-3xl font-bold leading-snug">
              Start your
              <br />
              <span className="text-sage-300">reading journey.</span>
            </h2>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              One free account unlocks borrowing, wishlists and PDF downloads
              across the whole library.
            </p>
          </div>
          <ul className="relative space-y-2 text-sm text-white/60">
            <li>✓ Borrow up to 3 books at once</li>
            <li>✓ Save favourites to your wishlist</li>
            <li>✓ Request titles we don&apos;t have yet</li>
          </ul>
        </div>

        {/* form panel */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-base-100 p-8 md:p-12"
        >
          <h1 className="font-display text-3xl font-bold">
            Create <span className="text-gradient">account</span>
          </h1>
          <p className="mt-2 text-sm text-base-content/60">
            It takes less than a minute — and it&apos;s free.
          </p>

          <form onSubmit={handleRegister} className="mt-8 space-y-5">
            <div>
              <label className="label-modern">Name</label>
              <input
                type="text"
                placeholder="Your name"
                name="name"
                className="input-modern"
                required
              />
            </div>
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
              <label className="label-modern">
                Photo URL <span className="font-normal text-base-content/40">(optional)</span>
              </label>
              <input
                type="url"
                placeholder="https://… a picture of you"
                name="photo"
                className="input-modern"
              />
            </div>
            <div>
              <label className="label-modern">Password</label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="6+ chars, a capital & a symbol"
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
              Create account
            </motion.button>
          </form>

          <p className="mt-6 text-center text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-bold text-brand-700 hover:underline dark:text-brand-300"
            >
              Log in
            </Link>
          </p>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Register;
