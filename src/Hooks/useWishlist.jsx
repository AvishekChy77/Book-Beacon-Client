import { useCallback, useEffect, useState } from "react";

const KEY = "bb-wishlist";

const read = () => {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || [];
  } catch {
    return [];
  }
};

/** Wishlist stored in localStorage, synced across components via a window event */
const useWishlist = () => {
  const [wishlist, setWishlist] = useState(read);

  useEffect(() => {
    const sync = () => setWishlist(read());
    window.addEventListener("bb-wishlist-change", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("bb-wishlist-change", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const toggle = useCallback((id) => {
    const current = read();
    const next = current.includes(id)
      ? current.filter((x) => x !== id)
      : [...current, id];
    try {
      localStorage.setItem(KEY, JSON.stringify(next));
    } catch {
      /* storage unavailable */
    }
    window.dispatchEvent(new Event("bb-wishlist-change"));
    return next.includes(id);
  }, []);

  const has = useCallback((id) => wishlist.includes(id), [wishlist]);

  return { wishlist, toggle, has, count: wishlist.length };
};

export default useWishlist;
