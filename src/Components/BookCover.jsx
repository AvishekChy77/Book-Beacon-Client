import { useState } from "react";

/**
 * Book cover image with a graceful fallback: if the image URL is missing or
 * fails to load, renders a styled placeholder instead of a broken image.
 */
const BookCover = ({ src, alt, className = "" }) => {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-brand-700 to-brand-950 p-4 text-center ${className}`}
      >
        <span className="text-3xl" aria-hidden="true">
          📖
        </span>
        <span className="font-display line-clamp-3 text-xs font-bold leading-snug text-white/90">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
};

export default BookCover;
