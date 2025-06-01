const Header = () => {
  return (
    <header className="p-4 bg-white shadow-md flex justify-between items-center">
      <div className="text-xl font-bold">🏡 StayFinder</div>
      <input
        type="text"
        placeholder="Search..."
        className="border rounded p-2 w-1/2"
      />
      <div>
        <button className="mr-4">Sign In</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
