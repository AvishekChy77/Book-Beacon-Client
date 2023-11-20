import Swal from "sweetalert2";

const AddBook = () => {
  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const authorName = form.authorName.value;
    const category = form.category.value;
    const image = form.image.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const summary = form.summary.value;
    const newBook = {
      name,
      authorName,
      category,
      quantity,
      image,
      rating,
      summary,
    };
    console.log(newBook);

    // sending data to the server
    fetch("https://book-beacon-server.vercel.app/books", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBook),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Book added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <h2 className=" text-3xl mt-10 text-center mb-5 font-semibold">
        Add New Book
      </h2>
      <div className=" max-w-2xl mx-auto p-5 flex justify-center mb-10 bg-emerald-50 rounded-md shadow-xl">
        <form onSubmit={handleAdd}>
          <div className="flex flex-col md:flex-row gap-5 my-3 items-center">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Book Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
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
                placeholder="Author's Name"
                name="authorName"
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
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="text"
                placeholder="quantity"
                name="quantity"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 my-3 items-center">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="text"
                placeholder="Image"
                name="image"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">rating</span>
              </label>
              <input
                type="text"
                placeholder="rating"
                name="rating"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control">
            <textarea
              rows="5"
              cols="33"
              defaultValue="Summary"
              name="summary"
            ></textarea>
          </div>
          <div className=" text-center">
            <button className="btn btn-wide bg-blue-700 text-white font-semibold my-3">
              Add Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
