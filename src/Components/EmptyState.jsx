import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const EmptyState = ({ icon, title, message, actionText, actionTo, onAction }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4 }}
    className="mx-auto my-16 max-w-md rounded-3xl border border-dashed border-base-300 bg-base-200/40 px-8 py-14 text-center"
  >
    <div className="mx-auto grid size-16 animate-float place-items-center rounded-2xl bg-brand-700/10 text-3xl text-brand-700 dark:bg-brand-300/10 dark:text-brand-300">
      {icon}
    </div>
    <h3 className="font-display mt-5 text-xl font-bold">{title}</h3>
    <p className="mt-2 text-sm text-base-content/60">{message}</p>
    {actionText && onAction && (
      <button onClick={onAction} className="btn-brand btn-sm mt-6 rounded-xl px-6">
        {actionText}
      </button>
    )}
    {actionText && actionTo && !onAction && (
      <Link to={actionTo} className="btn-brand btn-sm mt-6 rounded-xl px-6">
        {actionText}
      </Link>
    )}
  </motion.div>
);

export default EmptyState;
