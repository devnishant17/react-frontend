import { FaHeart, FaComment, FaShare, FaBookmark, FaEllipsisH } from "react-icons/fa";

export default function Icons() {
  return (
    <div className=" bottom-4 right-4 flex flex-col space-y-4">
      <button className="p-2 bg-gray-200 rounded-full shadow-lg"><FaHeart className="text-gray-600" /></button>
      <button className="p-2 bg-gray-200 rounded-full shadow-lg"><FaComment className="text-gray-600" /></button>
      <button className="p-2 bg-gray-200 rounded-full shadow-lg"><FaShare className="text-gray-600" /></button>
      <button className="p-2 bg-gray-200 rounded-full shadow-lg"><FaBookmark className="text-gray-600" /></button>
      <button className="p-2 bg-gray-200 rounded-full shadow-lg"><FaEllipsisH className="text-gray-600" /></button>
    </div>
  );
}
