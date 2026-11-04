import { FaBookOpen, FaQuoteLeft } from "react-icons/fa6";
import { Section } from "../../Components/Motion";
import SectionHeading from "../../Components/SectionHeading";

const ROW_ONE = [
  {
    quote: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    book: "Pride and Prejudice",
    author: "Jane Austen",
  },
  {
    quote: "It was the best of times, it was the worst of times.",
    book: "A Tale of Two Cities",
    author: "Charles Dickens",
  },
  {
    quote: "Call me Ishmael.",
    book: "Moby-Dick",
    author: "Herman Melville",
  },
  {
    quote: "So we beat on, boats against the current, borne back ceaselessly into the past.",
    book: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
  },
  {
    quote: "All happy families are alike; each unhappy family is unhappy in its own way.",
    book: "Anna Karenina",
    author: "Leo Tolstoy",
  },
  {
    quote: "It was a bright cold day in April, and the clocks were striking thirteen.",
    book: "1984",
    author: "George Orwell",
  },
];

const ROW_TWO = [
  {
    quote: "Not all those who wander are lost.",
    book: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
  },
  {
    quote: "Whatever our souls are made of, his and mine are the same.",
    book: "Wuthering Heights",
    author: "Emily Brontë",
  },
  {
    quote: "Until I feared I would lose it, I never loved to read. One does not love breathing.",
    book: "To Kill a Mockingbird",
    author: "Harper Lee",
  },
  {
    quote: "Beware; for I am fearless, and therefore powerful.",
    book: "Frankenstein",
    author: "Mary Shelley",
  },
  {
    quote: "Tomorrow is always fresh, with no mistakes in it yet.",
    book: "Anne of Green Gables",
    author: "L.M. Montgomery",
  },
  {
    quote: "The mystery of life isn't a problem to solve, but a reality to experience.",
    book: "Dune",
    author: "Frank Herbert",
  },
];

const QuoteCard = ({ quote, book, author }) => (
  <figure className="surface relative w-80 shrink-0 p-6 sm:w-96">
    <FaQuoteLeft className="absolute right-5 top-5 text-3xl text-brand-700/10 dark:text-brand-300/10" />
    <blockquote className="font-display text-base font-semibold leading-relaxed md:text-lg">
      “{quote}”
    </blockquote>
    <figcaption className="mt-4 flex items-center gap-2.5 border-t border-base-300/60 pt-4">
      <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-700/10 text-brand-700 dark:bg-brand-300/10 dark:text-brand-300">
        <FaBookOpen className="text-sm" />
      </span>
      <div className="text-xs">
        <p className="font-bold">{book}</p>
        <p className="text-base-content/50">{author}</p>
      </div>
    </figcaption>
  </figure>
);

/** Two infinite marquee rows of classic lines — pause on hover */
const MarqueeRow = ({ items, reverse = false }) => (
  <div className="group mask-fade-x overflow-hidden">
    <div
      className={`flex w-max items-stretch gap-6 py-3 animate-marquee group-hover:[animation-play-state:paused] ${
        reverse ? "[animation-direction:reverse]" : ""
      }`}
    >
      {[...items, ...items].map((q, i) => (
        <QuoteCard key={`${q.book}-${i}`} {...q} />
      ))}
    </div>
  </div>
);

const Quotes = () => {
  return (
    <Section className="relative overflow-hidden py-20">
      <div className="absolute left-1/2 top-0 -z-10 size-96 -translate-x-1/2 rounded-full bg-gold-400/10 blur-3xl" />
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="From the classics"
          title={
            <>
              Lines That <span className="text-gradient">Never Fade</span>
            </>
          }
          subtitle="A few of the most-loved sentences ever printed — every one of them began as a page in a library like this."
        />
      </div>
      <div className="space-y-2">
        <MarqueeRow items={ROW_ONE} />
        <MarqueeRow items={ROW_TWO} reverse />
      </div>
    </Section>
  );
};

export default Quotes;
