import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBook = () => {
  const product = useLoaderData();
  const { _id, name, authorName, category, image, rating } = product;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const authorName = form.authorName.value;
    const category = form.category.value;
    const image = form.image.value;
    const rating = form.rating.value;
    const UpdatedBook = {
      name,
      authorName,
      category,
      image,
      rating,
    };
    console.log(UpdatedBook);

    // sending data to the server
    fetch(`https://book-beacon-server.vercel.app/book/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdatedBook),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success!",
            text: "Book updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <h2 className=" text-3xl mt-10 text-center mb-5 font-semibold">
        Update selected Book: {name}
      </h2>
      <div className=" max-w-2xl mx-auto p-5 flex justify-center mb-10 bg-emerald-50 rounded-md shadow-xl">
        <form onSubmit={handleUpdate}>
          <div className="flex flex-col md:flex-row gap-5 my-3 items-center">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Book Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                defaultValue={name}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Author Name</span>
              </label>
              <input
                type="text"
                placeholder="Author Name"
                name="authorName"
                defaultValue={authorName}
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 my-3 items-center">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select id="category" name="category">
                <option value="Fiction">Fiction</option>
                <option value="Mystery & Thriller">Mystery & Thriller</option>
                <option value="Non-Fiction">Non-Fiction</option>
                <option value="Science Fiction & Fantasy">
                  Science Fiction & Fantasy
                </option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="text"
                placeholder="Image"
                defaultValue={image}
                name="image"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 my-3 items-center">
            <div className="form-control">
              <label className="label">
                <span className="label-text">rating</span>
              </label>
              <input
                type="text"
                placeholder="rating"
                name="rating"
                defaultValue={rating}
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className=" text-center">
            <button className="btn btn-wide bg-blue-700 text-white font-semibold my-3">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBook;
