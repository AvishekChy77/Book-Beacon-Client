const Reviews = () => {
  return (
    <div className="my-10">
      <h2 className=" font-YSerif mb-5 text-2xl md:text-4xl font-bold text-blue-800">
        Reviews
      </h2>
      <div className="flex gap-5 flex-col md:flex-row">
        <div className=" rounded shadow-lg bg-slate-50 p-3 flex flex-col">
          <div className="rating rating-sm">
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
          </div>
          <h2 className=" text-lg font-bold text-blue-800">
            A Reader's Paradise!
          </h2>
          <p className=" flex-grow text-black">
            {`"BookBeacon has made my reading journey so enjoyable. The wide range of book categories and easy navigation have made it a reader's paradise. I've found countless gems that I wouldn't have discovered elsewhere."`}
          </p>
          <p className="text-blue-800">THAD J.</p>
        </div>
        <div className=" rounded shadow-lg bg-slate-50 p-3 flex flex-col">
          <div className="rating rating-sm">
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
          </div>
          <h2 className=" text-lg font-bold text-blue-800">
            A Must-Visit for Book Lovers
          </h2>
          <p className=" flex-grow text-black">
            {`"If you're a book enthusiast, BookBeacon is a must-visit. The extensive collection of books, user-friendly interface, and personalized recommendations have elevated my reading experience. I can't recommend it enough!"`}
          </p>
          <p className="text-blue-800">Rena A.</p>
        </div>
        <div className=" rounded shadow-lg bg-slate-50 p-3 flex flex-col">
          <div className="rating rating-sm">
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
          </div>
          <h2 className=" text-lg font-bold text-blue-800">
            Discover, Borrow, Enjoy
          </h2>
          <p className=" flex-grow text-black">
            {`"BookBeacon simplifies library management and makes it easy to discover, borrow, and enjoy books across various genres. It's a game-changer for book lovers. Say goodbye to endless searching and hello to a world of literary delight."`}
          </p>
          <p className="text-blue-800">M. Jordan</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
