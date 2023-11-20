import { updateProfile } from "firebase/auth";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const { createUser, Auth } = useAuth();
  const location = useLocation();
  const goTo = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setErrorMsg("");
    const form = new FormData(e.currentTarget);
    console.log(form);
    const displayName = form.get("name");
    const photoURL = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    if (password.length < 6) {
      setErrorMsg("Password must be atleast 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setErrorMsg("Password must have a capital letter");
      return;
    } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
      setErrorMsg("Password must have a special character");
      return;
    }

    // create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        // User successfully created and logged in
        // setUser(result.user);
        // console.log(user);

        updateProfile(Auth.currentUser, {
          displayName: displayName,
          photoURL: photoURL,
        })
          .then((res) => {
            // Profile information updated successfully
            console.log(res);
          })
          .catch((error) => {
            // Handle profile update errors
            console.log(error.message);
          });

        toast("Account created succesfully!");
        goTo(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className="flex gap-10 flex-col-reverse my-10  items-center justify-between lg:flex-row">
        <div className="lg:w-1/3">
          <div className=" shadow-xl p-5 bg-blue-50  rounded-md">
            <form onSubmit={handleRegister}>
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
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  type="text"
                  placeholder="Your photoURL"
                  name="photo"
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
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <ToastContainer />
            {errorMsg && <p>{errorMsg}</p>}
            <p className=" text-center mt-2 mb-5 font-semibold">
              Already have an account ?{" "}
              <Link to="/login" className="text-[#F75B5F]">
                LogIn
              </Link>
            </p>
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

export default Register;
