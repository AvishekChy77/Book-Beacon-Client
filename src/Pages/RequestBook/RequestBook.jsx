import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa6";
import { PageTransition } from "../../Components/Motion";
import PageBanner from "../../Components/PageBanner";

const RequestBook = () => {
  return (
    <PageTransition className="container mx-auto px-4 pb-20">
      <PageBanner
        eyebrow="Can't find a title?"
        title="Request a Book"
        subtitle="Tell us what's missing from our shelves — our librarians review every request."
        crumbs={["Request"]}
      />

      <div className="mx-auto mt-10 grid max-w-5xl gap-8 lg:grid-cols-[300px_1fr]">
        {/* side note */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 lg:sticky lg:top-28 lg:h-fit"
        >
          {[
            {
              emoji: "⚡",
              title: "Fast turnaround",
              text: "Popular requests usually land on the shelves within a week.",
            },
            {
              emoji: "📬",
              title: "We'll email you",
              text: "You'll get a message the moment your book is available.",
            },
            {
              emoji: "🤝",
              title: "Every request counts",
              text: "Reader requests decide what our library buys next.",
            },
          ].map(({ emoji, title, text }) => (
            <div key={title} className="surface flex gap-4 p-5">
              <span className="text-2xl">{emoji}</span>
              <div>
                <h3 className="font-display text-sm font-bold">{title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-base-content/60">{text}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="surface p-8"
        >
          <form
            action="https://getform.io/f/8908e86b-d34d-4727-a557-591b833dc4c7"
            method="POST"
            encType="multipart/form-data"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="label-modern">Name</label>
                <input type="text" name="name" placeholder="Your name" className="input-modern" required />
              </div>
              <div>
                <label className="label-modern">Phone</label>
                <input type="text" name="phone" placeholder="Optional" className="input-modern" />
              </div>
            </div>
            <div className="mt-5">
              <label className="label-modern">Email</label>
              <input type="email" name="email" placeholder="you@example.com" className="input-modern" required />
            </div>
            <div className="mt-5">
              <label className="label-modern">Book title / subject</label>
              <input
                type="text"
                name="subject"
                placeholder="e.g. Project Hail Mary by Andy Weir"
                className="input-modern"
              />
            </div>
            <div className="mt-5">
              <label className="label-modern">Message</label>
              <textarea
                rows={7}
                name="message"
                placeholder="Tell us about the book — author, edition, why you'd love to read it…"
                className="textarea textarea-bordered w-full rounded-xl bg-base-200/60 focus:border-brand-500 focus:outline-none"
                required
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="btn-brand mt-6 w-full rounded-xl"
            >
              <FaPaperPlane /> Send request
            </motion.button>
          </form>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default RequestBook;
