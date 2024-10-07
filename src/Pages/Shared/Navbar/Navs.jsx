import { NavLink } from "react-router-dom";

const Navs = () => {
    return (
        <>
      <NavLink className="nav text-sm 2xl:text-base" to="/">
        Home
      </NavLink>
      <NavLink className="nav text-sm 2xl:text-base" to="/AddBook">
        Add Book
      </NavLink>
      <NavLink className="nav text-sm 2xl:text-base" to="/allBooks">
        All Books
      </NavLink>
      <NavLink className="nav text-sm 2xl:text-base" to="/borrowedBooks">
        Borrowed Books
      </NavLink>
      <NavLink className="nav text-sm 2xl:text-base" to="/request">
        Request
      </NavLink>
    </>
    );
};

export default Navs;