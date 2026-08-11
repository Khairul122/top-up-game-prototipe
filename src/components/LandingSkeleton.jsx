import Skeleton from './Skeleton.jsx'

export default function LandingSkeleton() {
  return (
    <div className="min-h-screen bg-bg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <Skeleton className="h-8 w-8 rounded-xl" />
          <Skeleton className="h-4 w-24 rounded-full" />
        </div>
        <div className="hidden gap-8 sm:flex">
          <Skeleton className="h-4 w-16 rounded-full" />
          <Skeleton className="h-4 w-20 rounded-full" />
          <Skeleton className="h-4 w-14 rounded-full" />
        </div>
        <Skeleton className="h-9 w-24 rounded-full" />
      </div>

      <div className="mx-auto max-w-4xl px-6 pb-20 pt-16 text-center">
        <Skeleton className="mx-auto h-6 w-56 rounded-full" />
        <Skeleton className="mx-auto mt-6 h-11 w-full max-w-xl rounded-2xl" />
        <Skeleton className="mx-auto mt-3 h-11 w-3/4 max-w-lg rounded-2xl" />
        <Skeleton className="mx-auto mt-6 h-4 w-2/3 max-w-md rounded-full" />
        <div className="mt-9 flex items-center justify-center gap-4">
          <Skeleton className="h-12 w-40 rounded-full" />
          <Skeleton className="h-12 w-36 rounded-full" />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-20">
        <Skeleton className="h-8 w-48 rounded-full" />
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <Skeleton className="h-64 rounded-[2rem] sm:col-span-2" />
          <Skeleton className="h-64 rounded-[2rem]" />
          <Skeleton className="h-64 rounded-[2rem]" />
          <Skeleton className="h-64 rounded-[2rem] sm:col-span-2" />
        </div>
      </div>
    </div>
  )
}
