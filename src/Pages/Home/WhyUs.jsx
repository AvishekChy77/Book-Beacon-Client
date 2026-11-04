import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaCloudArrowDown,
  FaHandHoldingHeart,
  FaShieldHalved,
} from "react-icons/fa6";
import { fadeUp, Section } from "../../Components/Motion";
import SectionHeading from "../../Components/SectionHeading";

const features = [
  {
    icon: <FaBookOpen />,
    title: "Borrow in One Click",
    text: "Pick a return date and the book is yours — no queues, no paperwork, no fees.",
    tint: "bg-brand-700/10 text-brand-700 dark:bg-brand-300/10 dark:text-brand-300",
  },
  {
    icon: <FaCloudArrowDown />,
    title: "Read Anywhere",
    text: "Open summaries online or download a PDF snapshot to keep reading offline.",
    tint: "bg-sage-400/20 text-sage-600 dark:text-sage-400",
  },
  {
    icon: <FaShieldHalved />,
    title: "Secure Account",
    text: "Firebase authentication with Google sign-in keeps your bookshelf private and safe.",
    tint: "bg-gold-400/20 text-gold-600 dark:text-gold-400",
  },
  {
    icon: <FaHandHoldingHeart />,
    title: "Community Driven",
    text: "Can't find a title? Request it and our librarians will add it to the shelves.",
    tint: "bg-rose-400/20 text-rose-500",
  },
];

const WhyUs = () => {
  return (
    <Section className="container mx-auto px-4 py-20">
      <SectionHeading
        eyebrow="Why BookBeacon"
        title={
          <>
            A Library That Works <span className="text-gradient">Around You</span>
          </>
        }
        subtitle="Unlock the world, one page at a time. Everything about BookBeacon is designed to get a great book into your hands faster."
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon, title, text, tint }) => (
          <motion.div
            key={title}
            variants={fadeUp}
            whileHover={{ y: -8 }}
            className="surface group p-7 hover:shadow-lift"
          >
            <span
              className={`grid size-14 place-items-center rounded-2xl text-2xl transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 ${tint}`}
            >
              {icon}
            </span>
            <h3 className="font-display mt-5 text-lg font-bold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-base-content/60">{text}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default WhyUs;
