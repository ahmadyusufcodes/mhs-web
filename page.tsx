

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Landing Page In Progress</h1>
        <p className="text-gray-600 text-lg mb-6">We are working hard to bring you an amazing experience. Stay tuned!</p>
        <div className="flex justify-center mb-6">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
        <a href="/contact" className="text-blue-600 underline hover:text-blue-800">Contact Us</a>
    </div>
    </div>
  );
}
