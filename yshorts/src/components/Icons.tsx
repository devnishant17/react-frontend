import { FaHeart, FaComment, FaShare, FaBookmark, FaEllipsisH } from "react-icons/fa";
import { FaMusic } from "react-icons/fa6";

export default function Icons() {
  return (
    <div className=" h-[600px] justify-end ps-2.5 flex flex-col space-y-4">
      <button className="p-2 bg-gray-200 rounded-full shadow-lg"><FaHeart className="text-gray-600" /></button>
      <button className="p-2 bg-gray-200 rounded-full shadow-lg"><FaComment className="text-gray-600" /></button>
      <button className="p-2 bg-gray-200 rounded-full shadow-lg"><FaShare className="text-gray-600" /></button>
      <button className="p-2 bg-gray-200 rounded-full shadow-lg"><FaBookmark className="text-gray-600" /></button>
      <button className="p-2 bg-gray-200 rounded-full shadow-lg"><FaEllipsisH className="text-gray-600" /></button>
      <button className="p-2 bg-gray-200 rounded-lg shadow-lg"><FaMusic className="text-gray-600" /></button>
    </div>
  );
}
