export default function Error404Page() {
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-2xl w-full">
        <h1 className="text-4xl text-gray-800 font-semibold">404 - Page Not Found</h1>
        <p className="text-gray-600 mt-2">
          The page you are looking for might have been removed or is temporarily unavailable.
        </p>
        <a href="/" className="text-[#28cd41] hover:underline mt-4 inline-block">
          Go back to the homepage
        </a>
      </div>
    </div>
  );
}
