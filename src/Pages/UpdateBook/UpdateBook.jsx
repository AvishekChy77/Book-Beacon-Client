import { motion } from "framer-motion";
import { useState } from "react";
import { FaFloppyDisk } from "react-icons/fa6";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { PageTransition } from "../../Components/Motion";
import PageBanner from "../../Components/PageBanner";

const CATEGORIES = [
  "Fiction",
  "Mystery & Thriller",
  "Non-Fiction",
  "Science Fiction & Fantasy",
];

const UpdateBook = () => {
  const book = useLoaderData();
  const { _id, name, authorName, category, image, rating } = book;
  const [preview, setPreview] = useState(image);
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedBook = {
      name: form.name.value,
      authorName: form.authorName.value,
      category: form.category.value,
      image: form.image.value,
      rating: Number(form.rating.value),
    };

    fetch(`https://book-beacon-server.vercel.app/book/${_id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedBook),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Saved!",
            text: `"${updatedBook.name}" has been updated.`,
            icon: "success",
            confirmButtonText: "Done",
            confirmButtonColor: "#016A70",
          }).then(() => navigate("/allBooks"));
        } else {
          Swal.fire({
            title: "No changes",
            text: "Nothing was different from the saved version.",
            icon: "info",
            confirmButtonColor: "#016A70",
          });
        }
      });
  };

  return (
    <PageTransition className="container mx-auto px-4 pb-20">
      <PageBanner
        eyebrow="Librarian tools"
        title="Update Book"
        subtitle={`Editing “${name}” — tweak the details and save.`}
        crumbs={["All Books", "Update"]}
      />

      <div className="mx-auto mt-10 grid max-w-5xl gap-8 lg:grid-cols-[320px_1fr]">
        {/* preview */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="surface h-fit p-6 text-center lg:sticky lg:top-28"
        >
          <h3 className="font-display font-bold">Cover preview</h3>
          <div className="mt-4 aspect-[3/4] overflow-hidden rounded-2xl bg-base-200">
            <img src={preview} alt={name} className="h-full w-full object-cover" />
          </div>
        </motion.div>

        {/* form */}
        <motion.form
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          onSubmit={handleUpdate}
          className="surface p-8"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="label-modern">Book name</label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                className="input-modern"
                required
              />
            </div>
            <div>
              <label className="label-modern">Author</label>
              <input
                type="text"
                name="authorName"
                defaultValue={authorName}
                className="input-modern"
                required
              />
            </div>
            <div>
              <label className="label-modern">Category</label>
              <select
                name="category"
                defaultValue={category}
                className="select select-bordered w-full rounded-xl bg-base-200/60 focus:border-brand-500 focus:outline-none"
              >
                {CATEGORIES.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="label-modern">Rating (1–5)</label>
              <input
                type="number"
                name="rating"
                min="1"
                max="5"
                step="0.1"
                defaultValue={rating}
                className="input-modern"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="label-modern">Cover image URL</label>
              <input
                type="url"
                name="image"
                defaultValue={image}
                onChange={(e) => setPreview(e.target.value)}
                className="input-modern"
                required
              />
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="btn-brand mt-6 w-full rounded-xl"
          >
            <FaFloppyDisk /> Save changes
          </motion.button>
        </motion.form>
      </div>
    </PageTransition>
  );
};

export default UpdateBook;
