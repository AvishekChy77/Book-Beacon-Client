/** Skeleton loaders that mimic the book card grid */
export const CardSkeleton = () => (
  <div className="surface overflow-hidden p-0">
    <div className="shimmer h-56 w-full bg-base-300/60" />
    <div className="space-y-3 p-5">
      <div className="shimmer h-4 w-3/4 rounded-full bg-base-300/60" />
      <div className="shimmer h-3 w-1/2 rounded-full bg-base-300/60" />
      <div className="shimmer h-3 w-2/3 rounded-full bg-base-300/60" />
    </div>
  </div>
);

export const GridSkeleton = ({ count = 8 }) => (
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {Array.from({ length: count }).map((_, i) => (
      <CardSkeleton key={i} />
    ))}
  </div>
);

const Loading = () => (
  <div className="grid min-h-[40vh] place-items-center">
    <div className="relative">
      <div className="size-16 animate-spin rounded-full border-4 border-brand-700/20 border-t-brand-600" />
      <div className="absolute inset-0 grid place-items-center text-xl">📖</div>
    </div>
  </div>
);

export default Loading;
