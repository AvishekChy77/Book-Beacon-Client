const Bookcard = ({ book, handleDelete }) => {
  const { _id, purchasedDate, returnDate, image, name, category } = book || {};

  return (
    <div className=" relative rounded-lg bg-emerald-100 shadow-xl">
      <div className="flex h-72">
        <figure>
          <img
            src={image}
            alt=""
            className="rounded-l-lg h-full w-40  object-cover"
          />
        </figure>
        <div className="card-body p-4  items-center text-center">
          <h2 className="card-title grow">{name}</h2>
          <p>Category: {category}</p>
          <p>Return date: {returnDate}</p>
          <p>Purchased date: {purchasedDate}</p>
          <button
            onClick={() => handleDelete(_id, name)}
            className="btn btn-outline btn-sm rounded"
          >
            Return
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bookcard;
