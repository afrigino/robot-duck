export default function RobotDuckLandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cyan-50 p-4 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-2">Robot Duck Landing Page</h1>
      <h2 className="text-lg text-center mb-6 text-gray-600">Welcome to post-truth. Cognitive dissonance is normal and expected. Please tread water nicely. Thank you.</h2>

      <img
        src="/assets/robot-duck.jpg"
        alt="Robot with duck float"
        className="rounded-2xl shadow-lg w-full max-w-sm mb-6"
      />

      {/* rest stays the same */}
    </div>
  );
}

