import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      className=" max-w-4xl mx-auto flex flex-col gap-5 items-center text-lg mt-20"
      id="error-page"
    >
      <img className="w-2/3" src="https://i.ibb.co/GCmGYcM/Frame.png" alt="" />
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">
        <button className="btn text-white rounded border-none mr-2 hover:text-[#FF3811] hover:bg-none bg-[#FF3811]">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
