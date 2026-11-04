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
      .catch(() => toast.error("Google sign-in was cancelled"));
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
