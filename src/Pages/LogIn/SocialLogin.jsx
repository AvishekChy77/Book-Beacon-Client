import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";

const SocialLogin = () => {
  const { googleLogIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSocialSignIn = (social) => {
    social()
      .then(() => {
        navigate(location?.state ? location.state : "/");
        toast.success("Successfully logged in!");
      })
      .catch((error) => {
        const messages = {
          "auth/popup-closed-by-user": "Sign-in popup was closed before finishing.",
          "auth/cancelled-popup-request": "Sign-in popup was closed before finishing.",
          "auth/popup-blocked": "Your browser blocked the popup — allow popups and try again.",
          "auth/unauthorized-domain": "This domain isn't authorized for sign-in.",
          "auth/network-request-failed": "Network error — check your connection and try again.",
          "auth/invalid-api-key": "App configuration error — Firebase keys are missing.",
        };
        toast.error(
          messages[error.code] || `Google sign-in failed (${error.code || "unknown error"})`
        );
      });
  };

  return (
    <button
      onClick={() => handleSocialSignIn(googleLogIn)}
      className="btn w-full rounded-xl border-base-300 bg-base-200/60 font-semibold hover:border-brand-500 hover:bg-base-200"
    >
      <FcGoogle className="text-xl" /> Continue with Google
    </button>
  );
};

export default SocialLogin;
