export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-text p-6">
      <h1 className="text-4xl font-serif mb-4 text-primary animate-fadeIn">Welcome to Mama Mindfully</h1>
      <p className="text-lg text-center max-w-md mb-6">
        A mindful space for planning, tracking, and nurturing your wellness journey.
      </p>
      <a href="/habits">
        <button className="bg-primary text-white px-6 py-3 rounded-4xl shadow-soft hover:bg-secondary hover:-translate-y-1 transition">
          Start Your Journey
        </button>
      </a>
    </div>
  )
}
