import useAuth from "./useAuth";

// Comma-separated admin emails come from the environment so the
// list isn't hardcoded in the repository.
const ADMIN_EMAILS = (import.meta.env.VITE_ADMIN_EMAILS || "")
  .split(",")
  .map((e) => e.trim().toLowerCase())
  .filter(Boolean);

/**
 * Lightweight client-side role: "admin" for configured emails,
 * "member" for any other signed-in user, null when signed out.
 */
const useRole = () => {
  const { user } = useAuth();
  const email = user?.email?.toLowerCase();
  const role = !email ? null : ADMIN_EMAILS.includes(email) ? "admin" : "member";
  return { role, isAdmin: role === "admin" };
};

export default useRole;
