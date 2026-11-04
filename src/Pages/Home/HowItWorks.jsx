import { motion } from "framer-motion";
import { fadeUp, Section } from "../../Components/Motion";
import SectionHeading from "../../Components/SectionHeading";

const steps = [
  {
    n: "01",
    emoji: "🔍",
    title: "Browse the Shelves",
    text: "Search the full collection or wander through curated categories until something catches your eye.",
  },
  {
    n: "02",
    emoji: "📅",
    title: "Borrow with a Date",
    text: "Choose a return date that suits you. The copy is reserved for you instantly.",
  },
  {
    n: "03",
    emoji: "📖",
    title: "Read & Enjoy",
    text: "Read the summary online, download the PDF, and savour your book at your own pace.",
  },
  {
    n: "04",
    emoji: "↩️",
    title: "Return in One Tap",
    text: "Done reading? Return it from your Borrowed Books page and free it up for the next reader.",
  },
];

const HowItWorks = () => {
  return (
    <Section className="relative overflow-hidden py-20">
      <div className="absolute -left-24 top-1/3 -z-10 size-80 rounded-full bg-brand-500/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 -z-10 size-80 rounded-full bg-sage-400/20 blur-3xl" />
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              From Shelf to Sofa in <span className="text-gradient">Four Steps</span>
            </>
          }
        />
        <div className="relative grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* connector line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="absolute left-[12%] right-[12%] top-10 hidden h-0.5 origin-left bg-gradient-to-r from-brand-700 via-sage-400 to-gold-400 lg:block"
          />
          {steps.map(({ n, emoji, title, text }) => (
            <motion.div key={n} variants={fadeUp} className="relative text-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 6 }}
                className="relative z-10 mx-auto grid size-20 place-items-center rounded-3xl border border-base-300/60 bg-base-100 text-3xl shadow-soft"
              >
                {emoji}
                <span className="absolute -right-2 -top-2 grid size-7 place-items-center rounded-full bg-gradient-to-br from-brand-700 to-brand-500 text-[10px] font-bold text-white">
                  {n}
                </span>
              </motion.div>
              <h3 className="font-display mt-5 text-lg font-bold">{title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-base-content/60">
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default HowItWorks;
