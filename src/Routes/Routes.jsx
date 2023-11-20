import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import AddBook from "../Pages/AddBook/AddBook";
import AllBooks from "../Pages/AllBooks/AllBooks";
import BookDetails from "../Pages/BookDetails/BookDetails";
import BorrowedBooks from "../Pages/BorrowedBooks/BorrowedBooks";
import CategoryCollection from "../Pages/CategoryCollection/CategoryCollection";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/Login/Login";
import ReadBook from "../Pages/ReadBook/ReadBook";
import Register from "../Pages/Register/Register";
import UpdateBook from "../Pages/UpdateBook/UpdateBook";
import PrivateRoutes from "./PrivateRoutes";

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
            <ReadBook></ReadBook>
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
    ],
  },
]);

export default router;
