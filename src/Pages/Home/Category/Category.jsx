import { Link } from "react-router-dom";

const Category = ({ Scategory }) => {
  const { _id, image, category } = Scategory;
  return (
    <div>
      <div className=" relative rounded-lg shadow-xl">
        <figure>
          <img
            src={image}
            alt=""
            className="rounded-t-lg h-52 w-full object-cover"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{category}</h2>
        </div>
        <div
          style={{ background: "rgba(11, 11, 11, 0.50)" }}
          className="rounded-lg absolute top-0 left-0 flex items-center justify-center w-full h-full opacity-0 hover:opacity-90"
        >
          <Link to={`/category/${_id}`}>
            <button className="btn btn-primary rounded">See Collections</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
