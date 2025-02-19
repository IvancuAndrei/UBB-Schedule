import logo from "../assets/Untitled.png";

const Header = () => {
  return (
    <header
      className="w-full py-20 bg-gradient-to-r from-gray-200 via-blue-400 to-blue-600
 shadow-lg text-white text-center relative"
    >
      {/* Stema în stânga */}
      <img
        src={logo}
        alt="Logo UBB"
        className="w-20 absolute left-10 top-1/2 transform -translate-y-1/2" // Poziționare la stânga, pe verticală centrat
      />
      {/* Titlul și descrierea */}
      <div>
        <h1 className="text-4xl font-bold tracking-wide">UBB - Schedule</h1>
        <p className="text-lg mt-2 opacity-90">Orarul favorit al studentilor</p>
      </div>
    </header>
  );
};

export default Header;
