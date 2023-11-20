import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../Hooks/useAuth";
import SocialLogin from "./SocialLogin";

const LogIn = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const { signIn } = useAuth();
  const location = useLocation();
  const Navigate = useNavigate();
  console.log("login page", location);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    console.log(form);
    const email = form.get("email");
    const password = form.get("password");
    setErrorMsg("");

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        toast("Successfully loggedin!");
        Navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMsg("Invalid email or password");
      });
  };

  return (
    <div>
      <div className="flex gap-10 flex-col-reverse my-10  items-center justify-between lg:flex-row">
        <div className="lg:w-1/3">
          <div className=" shadow-xl p-5 bg-blue-50  rounded-md">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <ToastContainer />
            {errorMsg && <p>{errorMsg}</p>}
            <p className=" text-center mt-2 mb-5 font-semibold">
              Don’t Have An Account ?{" "}
              <Link
                state={location.state}
                to="/register"
                className="text-[#F75B5F]"
              >
                Register
              </Link>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
        <div className=" lg:w-2/3 text-center">
          <img
            className="rounded-md"
            src="https://i.ibb.co/VB6g97T/7-SCENE.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
