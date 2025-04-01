import { useState } from "react";
import { FaMusic, FaMapMarkerAlt } from "react-icons/fa";
import Icons from "./Icons";

export default function Shorts() {
  interface Video {
    id: number;
    videoLink: string;
    userName: string;
    description: string;
    hashTag: string;
    bgMusic: string;
    location: string;
  }

  const Videos: Video[] = [
    {
      id: 1,
      videoLink: "video.mp4",
      userName: "dev",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero",
      hashTag: "#hashtag #lorem #nice",
      bgMusic: "sound.mp3",
      location: "new york",
    },
    {
      id: 2,
      videoLink: "video2.mp4",
      userName: "dev2",
      description: "22Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero",
      hashTag: "#22hashtag #lorem #nice",
      bgMusic: "22sound.mp3",
      location: "22new york",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle scroll event
  const handleScroll = (event: React.WheelEvent) => {
    if (event.deltaY > 0) {
      // Scroll Down
      setCurrentIndex((prev) => (prev < Videos.length - 1 ? prev + 1 : prev));
    } else {
      // Scroll Up
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
    }
  };

  return (
    <section className="flex h-[600px] overflow-hidden" onWheel={handleScroll}>
      <div className="flex-col relative w-80 bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Video Placeholder */}
        <div className="relative w-full h-full  bg-gray-100 flex justify-center items-center">
          <span className="text-gray-500">{Videos[currentIndex].videoLink}</span>

          {/* Overlay Content */}
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
            {/* User Info */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
              <div className="ml-3">
                <p className="font-semibold">{Videos[currentIndex].userName}</p>
              </div>
              <button className="ml-auto px-3 py-1 bg-white text-black border rounded-full font-medium">
                Follow
              </button>
            </div>

            {/* Description */}
            <p className="mt-2 text-sm">
              {Videos[currentIndex].description}
              <span className="font-bold"> {Videos[currentIndex].hashTag}</span>
            </p>

            {/* Labels */}
            <div className="mt-3 flex items-center text-sm">
              <FaMusic className="mr-1" /> {Videos[currentIndex].bgMusic}
              <FaMapMarkerAlt className="ml-4 mr-1" /> {Videos[currentIndex].location}
            </div>
          </div>
        </div>
      </div>

      {/* Icons */}
      <div>
        <Icons />
      </div>
    </section>
  );
}
