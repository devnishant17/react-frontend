import { FaHome, FaUsers, FaBell, FaEnvelope, FaCircle, FaUser, FaYoutube } from "react-icons/fa";

export default function Nav() {
  return (
    <nav className=" bg-gray-300 px-4 py-2 flex items-center justify-between shadow-md w-full">

      {/* Logo & Home */}
      <div className="flex items-center text-2xl text-red-700 font-bold">
        <FaYoutube className="mr-2" /> Shorts
      </div>

      {/* Right - Icons */}
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover: bg-gray-100">
          <FaHome />
        </button>
        <button className="p-2 text-white rounded-full hover: bg-gray-100">
          <FaCircle />
        </button>
        <button className="p-2 rounded-full hover: bg-gray-100">
          <FaUsers />
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="flex gap-4">
        <button className="p-2 rounded-full  bg-gray-100">
          <FaEnvelope />
        </button>
        <button className="p-2 rounded-full  bg-gray-100">
          <FaBell />
        </button>
        <button className="p-2 rounded-full  bg-gray-100">
          <FaUser />
        </button>

      </div>
    </nav>
  );
}
