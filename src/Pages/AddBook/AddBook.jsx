import { motion } from "framer-motion";
import { useState } from "react";
import { FaBookMedical, FaImage } from "react-icons/fa6";
import Swal from "sweetalert2";
import { PageTransition } from "../../Components/Motion";
import PageBanner from "../../Components/PageBanner";

const CATEGORIES = [
  "Fiction",
  "Mystery & Thriller",
  "Non-Fiction",
  "Science Fiction & Fantasy",
];

const AddBook = () => {
  const [preview, setPreview] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const newBook = {
      name: form.name.value,
      authorName: form.authorName.value,
      category: form.category.value,
      quantity: Number(form.quantity.value),
      image: form.image.value,
      rating: Number(form.rating.value),
      summary: form.summary.value,
    };

    setSubmitting(true);
    fetch("https://book-beacon-server.vercel.app/books", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newBook),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "On the shelf!",
            text: `"${newBook.name}" was added to the library.`,
            icon: "success",
            confirmButtonText: "Nice",
            confirmButtonColor: "#016A70",
          });
          form.reset();
          setPreview("");
        }
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <PageTransition className="container mx-auto px-4 pb-20">
      <PageBanner
        eyebrow="Librarian tools"
        title="Add a New Book"
        subtitle="Stock the shelves — add a title with its cover, rating and summary."
        crumbs={["Add Book"]}
      />

      <div className="mx-auto mt-10 grid max-w-5xl gap-8 lg:grid-cols-[1fr_320px]">
        {/* form */}
        <motion.form
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleAdd}
          className="surface p-8"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="label-modern">Book name</label>
              <input
                type="text"
                name="name"
                placeholder="e.g. The Silent Patient"
                className="input-modern"
                required
              />
            </div>
            <div>
              <label className="label-modern">Author</label>
              <input
                type="text"
                name="authorName"
                placeholder="e.g. Alex Michaelides"
                className="input-modern"
                required
              />
            </div>
            <div>
              <label className="label-modern">Category</label>
              <select
                name="category"
                className="select select-bordered w-full rounded-xl bg-base-200/60 focus:border-brand-500 focus:outline-none"
              >
                {CATEGORIES.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="label-modern">Quantity</label>
              <input
                type="number"
                min="0"
                name="quantity"
                placeholder="How many copies?"
                className="input-modern"
                required
              />
            </div>
            <div>
              <label className="label-modern">Cover image URL</label>
              <input
                type="url"
                name="image"
                placeholder="https://…"
                className="input-modern"
                onChange={(e) => setPreview(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="label-modern">Rating (1–5)</label>
              <input
                type="number"
                name="rating"
                min="1"
                max="5"
                step="0.1"
                placeholder="e.g. 4.5"
                className="input-modern"
                required
              />
            </div>
          </div>
          <div className="mt-5">
            <label className="label-modern">Summary</label>
            <textarea
              rows="5"
              name="summary"
              placeholder="A short, spoiler-free description of the book…"
              className="textarea textarea-bordered w-full rounded-xl bg-base-200/60 focus:border-brand-500 focus:outline-none"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            disabled={submitting}
            className="btn-brand mt-6 w-full rounded-xl"
          >
            <FaBookMedical />
            {submitting ? "Adding…" : "Add Book to Library"}
          </motion.button>
        </motion.form>

        {/* live preview */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="surface h-fit p-6 text-center lg:sticky lg:top-28"
        >
          <h3 className="font-display font-bold">Cover preview</h3>
          <div className="mt-4 grid aspect-[3/4] place-items-center overflow-hidden rounded-2xl bg-base-200">
            {preview ? (
              <img
                src={preview}
                alt="Cover preview"
                className="h-full w-full object-cover"
                onError={(e) => (e.target.style.display = "none")}
                onLoad={(e) => (e.target.style.display = "block")}
              />
            ) : (
              <div className="text-base-content/40">
                <FaImage className="mx-auto text-4xl" />
                <p className="mt-2 text-xs">Paste an image URL to preview</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default AddBook;
