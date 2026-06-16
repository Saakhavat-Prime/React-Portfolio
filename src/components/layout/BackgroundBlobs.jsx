export default function BackgroundBlobs() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-green-200/40 blur-3xl" />
      <div className="absolute -right-20 top-20 h-80 w-80 rounded-full bg-pink-200/40 blur-3xl" />
      <div className="absolute -left-20 bottom-40 h-72 w-72 rounded-full bg-yellow-200/30 blur-3xl" />
      <div className="absolute right-1/4 top-1/2 h-64 w-64 rounded-full bg-green-100/30 blur-3xl" />
    </div>
  )
}
