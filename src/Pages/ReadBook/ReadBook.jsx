import { PDFDownloadLink } from "@react-pdf/renderer";
import { useLoaderData, useParams } from "react-router-dom";
import BookRating from "../CategoryCollection/BookRating";
import { MyDocument } from "./PDFMaker";

const ReadBook = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const book = books?.find((book) => book._id === id);
  const { _id, authorName, image, name, category, rating, summary } =
    book || {};
  return (
    <div className="my-10 flex flex-col gap-10">
      <div className="flex justify-center flex-col md:flex-row md:h-72  ">
        <figure>
          <img
            src={image}
            alt=""
            className="rounded-l-lg md:h-full px-5  object-cover"
          />
        </figure>
        <div className="card-body p-4  items-center ">
          <h2 className="card-title grow">{name}</h2>
          <p>Author: {authorName}</p>
          <p>Category: {category}</p>
          <p className=" ">
            Rating: <BookRating rating={rating}></BookRating>
          </p>
        </div>
      </div>
      <div>
        <h2 className=" text-lg font-bold">Summary:</h2>
        <p>{summary}</p>
        {/* pdf */}
        <PDFDownloadLink
          document={
            <MyDocument
              image={image}
              name={name}
              summary={summary}
            ></MyDocument>
          }
          fileName={name}
        >
          {({ loading }) =>
            loading ? (
              <button className="btn btn-sm text-white rounded border-none mr-2 hover:text-[#FF3811] hover:bg-none bg-[#FF3811]">
                Loading...
              </button>
            ) : (
              <button className="btn btn-sm text-white rounded border-none mr-2 hover:text-[#FF3811] hover:bg-none bg-[#FF3811]">
                Download PDF
              </button>
            )
          }
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default ReadBook;
