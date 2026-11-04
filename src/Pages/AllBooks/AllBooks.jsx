import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { FaList, FaMagnifyingGlass, FaTableCells } from "react-icons/fa6";
import BookCard from "../../Components/BookCard";
import EmptyState from "../../Components/EmptyState";
import { GridSkeleton } from "../../Components/Loading";
import { PageTransition, stagger } from "../../Components/Motion";
import PageBanner from "../../Components/PageBanner";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const CATEGORIES = [
  "All",
  "Fiction",
  "Mystery & Thriller",
  "Non-Fiction",
  "Science Fiction & Fantasy",
];

const SORTS = [
  { value: "rating-desc", label: "Top rated" },
  { value: "name-asc", label: "Name A → Z" },
  { value: "name-desc", label: "Name Z → A" },
  { value: "quantity-desc", label: "Most copies" },
];

const AllBooks = () => {
  const axiosPublic = useAxiosPublic();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("rating-desc");
  const [availableOnly, setAvailableOnly] = useState(false);
  const [view, setView] = useState("grid");

  const { data: books, isLoading, isError, refetch } = useQuery({
    queryKey: ["all-books"],
    queryFn: async () => {
      const res = await axiosPublic.get("/books");
      return res.data;
    },
  });

  const filtered = useMemo(() => {
    let list = [...(books || [])];
    const q = search.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (b) =>
          b.name?.toLowerCase().includes(q) ||
          b.authorName?.toLowerCase().includes(q)
      );
    }
    if (category !== "All") list = list.filter((b) => b.category === category);
    if (availableOnly) list = list.filter((b) => Number(b.quantity) > 0);

    const [key, dir] = sort.split("-");
    list.sort((a, b) => {
      let cmp = 0;
      if (key === "name") cmp = (a.name || "").localeCompare(b.name || "");
      else cmp = Number(a[key] || 0) - Number(b[key] || 0);
      return dir === "desc" ? -cmp : cmp;
    });
    return list;
  }, [books, search, category, sort, availableOnly]);

  return (
    <PageTransition className="container mx-auto px-4 pb-20">
      <PageBanner
        eyebrow="The complete collection"
        title="All Books"
        subtitle="Search, filter and sort your way through every book on our shelves."
        crumbs={["All Books"]}
      />

      {/* toolbar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="glass sticky top-20 z-30 -mt-8 mx-2 rounded-2xl p-4 shadow-soft md:mx-6"
      >
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <label className="relative flex-1">
            <FaMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by title or author…"
              className="input input-bordered w-full rounded-xl bg-base-200/60 pl-11 focus:border-brand-500 focus:outline-none"
            />
          </label>
          <div className="flex flex-wrap items-center gap-3">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="select select-bordered rounded-xl bg-base-200/60 focus:outline-none"
            >
              {CATEGORIES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="select select-bordered rounded-xl bg-base-200/60 focus:outline-none"
            >
              {SORTS.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
            <label className="flex cursor-pointer items-center gap-2 text-sm font-medium">
              <input
                type="checkbox"
                checked={availableOnly}
                onChange={(e) => setAvailableOnly(e.target.checked)}
                className="toggle toggle-sm border-brand-500 [--tglbg:theme(colors.base-200)] checked:bg-brand-600"
              />
              Available only
            </label>
            <div className="join rounded-xl border border-base-300">
              <button
                onClick={() => setView("grid")}
                aria-label="Grid view"
                className={`btn join-item btn-sm border-none ${
                  view === "grid" ? "bg-brand-700 text-white hover:bg-brand-700" : "btn-ghost"
                }`}
              >
                <FaTableCells />
              </button>
              <button
                onClick={() => setView("list")}
                aria-label="List view"
                className={`btn join-item btn-sm border-none ${
                  view === "list" ? "bg-brand-700 text-white hover:bg-brand-700" : "btn-ghost"
                }`}
              >
                <FaList />
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {!isError && (
        <p className="mt-8 px-2 text-sm text-base-content/50 md:px-6">
          Showing{" "}
          <span className="font-bold text-base-content">{filtered.length}</span> of{" "}
          {books?.length || 0} books
        </p>
      )}

      {isLoading ? (
        <div className="mt-6">
          <GridSkeleton count={8} />
        </div>
      ) : isError ? (
        <EmptyState
          icon="📡"
          title="The library is unreachable"
          message="We couldn't load the books — the database may be waking up. Please try again in a moment."
          actionText="Try again"
          onAction={() => refetch()}
        />
      ) : filtered.length === 0 ? (
        <EmptyState
          icon="🔍"
          title="No books match"
          message="Try a different search term or clear your filters."
        />
      ) : (
        <AnimatePresence mode="popLayout">
          <motion.div
            key={`${view}-${category}-${sort}-${availableOnly}-${search}`}
            variants={stagger}
            initial="hidden"
            animate="show"
            className={`mt-6 grid gap-6 ${
              view === "grid"
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                : "grid-cols-1 lg:grid-cols-2"
            }`}
          >
            {filtered.map((book) => (
              <BookCard
                key={book._id}
                book={book}
                showUpdate={view === "grid"}
                variant={view === "grid" ? "grid" : "row"}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      )}
    </PageTransition>
  );
};

export default AllBooks;
