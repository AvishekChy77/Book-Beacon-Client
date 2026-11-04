import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../Components/Loading";
import Root from "../Layouts/Root";
import AddBook from "../Pages/AddBook/AddBook";
import AllBooks from "../Pages/AllBooks/AllBooks";
import BookDetails from "../Pages/BookDetails/BookDetails";
import BorrowedBooks from "../Pages/BorrowedBooks/BorrowedBooks";
import CategoryCollection from "../Pages/CategoryCollection/CategoryCollection";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import RequestBook from "../Pages/RequestBook/RequestBook";
import UpdateBook from "../Pages/UpdateBook/UpdateBook";
import Wishlist from "../Pages/Wishlist/Wishlist";
import PrivateRoutes from "./PrivateRoutes";

// @react-pdf/renderer is heavy — load the reading page on demand
const ReadBook = lazy(() => import("../Pages/ReadBook/ReadBook"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/category/:id",
        element: <CategoryCollection></CategoryCollection>,
      },
      {
        path: "/allBooks",
        element: (
          <PrivateRoutes>
            <AllBooks></AllBooks>
          </PrivateRoutes>
        ),
      },
      {
        path: "/AddBook",
        element: (
          <PrivateRoutes>
            <AddBook></AddBook>
          </PrivateRoutes>
        ),
      },
      {
        path: "/UpdateBook/:id",
        element: (
          <PrivateRoutes>
            <UpdateBook></UpdateBook>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://book-beacon-server.vercel.app/books/${params.id}`),
      },
      {
        path: "/book/:id",
        element: (
          <PrivateRoutes>
            <BookDetails></BookDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "/read/:id",
        element: (
          <PrivateRoutes>
            <Suspense fallback={<Loading />}>
              <ReadBook />
            </Suspense>
          </PrivateRoutes>
        ),
        loader: () => fetch("https://book-beacon-server.vercel.app/books"),
      },
      {
        path: "/borrowedBooks",
        element: (
          <PrivateRoutes>
            <BorrowedBooks></BorrowedBooks>
          </PrivateRoutes>
        ),
      },
      {
        path: "/request",
        element: (
          <PrivateRoutes>
            <RequestBook />
          </PrivateRoutes>
        ),
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
    ],
  },
]);

export default router;
