//export home

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[url('/path/to/bg.jpg')] bg-cover bg-center h-[300px] flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-4xl font-bold">Find your favorite place here!</h1>
        <p className="text-lg mt-2">The best prices for over 2 million properties worldwide.</p>
      </div>
    </div>
  );
}
