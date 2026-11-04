import { PDFDownloadLink } from "@react-pdf/renderer";
import { motion } from "framer-motion";
import { FaDownload, FaLayerGroup, FaUserPen } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router-dom";
import { PageTransition } from "../../Components/Motion";
import BookRating from "../CategoryCollection/BookRating";
import { MyDocument } from "./PDFMaker";

const ReadBook = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const book = books?.find((b) => b._id === id);
  const { authorName, image, name, category, rating, summary } = book || {};

  return (
    <PageTransition className="container mx-auto px-4 pb-20">
      <div className="mx-auto mt-10 max-w-4xl">
        {/* header card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="surface flex flex-col items-center gap-8 overflow-hidden p-8 sm:flex-row"
        >
          <motion.img
            whileHover={{ scale: 1.04, rotate: -1 }}
            src={image}
            alt={name}
            className="w-44 rounded-2xl shadow-lift"
          />
          <div className="text-center sm:text-left">
            <span className="chip">
              <FaLayerGroup /> {category}
            </span>
            <h1 className="font-display mt-3 text-3xl font-bold">{name}</h1>
            <p className="mt-2 flex items-center justify-center gap-2 text-base-content/60 sm:justify-start">
              <FaUserPen className="text-brand-700 dark:text-brand-300" /> {authorName}
            </p>
            <div className="mt-3 text-gold-500">
              <BookRating rating={rating} />
            </div>
            <PDFDownloadLink
              document={<MyDocument image={image} name={name} summary={summary} />}
              fileName={name}
            >
              {({ loading }) => (
                <button className="btn-brand btn-sm mt-5 rounded-xl px-6">
                  <FaDownload />
                  {loading ? "Preparing PDF…" : "Download as PDF"}
                </button>
              )}
            </PDFDownloadLink>
          </div>
        </motion.div>

        {/* reading body */}
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="surface relative mt-8 p-8 md:p-12"
        >
          <span className="font-display absolute -top-5 left-8 rounded-full bg-gradient-to-r from-brand-700 to-brand-500 px-5 py-2 text-sm font-bold text-white shadow-soft">
            Summary
          </span>
          <p className="font-display text-base leading-loose text-base-content/80 md:text-lg">
            {summary || "No summary has been added for this book yet."}
          </p>
        </motion.article>
      </div>
    </PageTransition>
  );
};

export default ReadBook;
