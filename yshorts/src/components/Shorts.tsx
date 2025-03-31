import { FaMusic, FaMapMarkerAlt } from "react-icons/fa";
import Icons from "./Icons";

export default function Shorts() {
  return (
<section className="flex h-[600px]">
    <div className="flex relative w-80 bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Video Placeholder */}
      <div className="relative w-full h-full bg-gray-300 flex justify-center items-center">
        <span className="text-gray-500">Video Placeholder</span>
        
        {/* Overlay Content */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
          {/* User Info */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
            <div className="ml-3">
              <p className="font-semibold">User name 1</p>
            </div>
            <button className="ml-auto px-3 py-1 bg-white text-black border rounded-full font-medium">Follow</button>
          </div>

          {/* Description */}
          <p className="mt-2 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
            <span className="font-bold"> #hashtag #lorem #nice</span>
          </p>

          {/* Labels */}
          <div className="mt-3 flex items-center text-sm">
            <FaMusic className="mr-1" /> Background sound
            <FaMapMarkerAlt className="ml-4 mr-1" /> Location
          </div>
        </div>
      </div>
      
</div>
<div >
<Icons />
</div>
</section>
  )
}
