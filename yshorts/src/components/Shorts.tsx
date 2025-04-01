import { useState } from "react";
import { FaMusic, FaMapMarkerAlt, FaChevronUp, FaChevronDown } from "react-icons/fa";
import Icons from "./Icons";

export default function Shorts() {
  const [currentIndex, setCurrentIndex] = useState(0);


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
    {
      id: 3,
      videoLink: "video3.mp4",
      userName: "dev33",
      description: "33Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero",
      hashTag: "#33hashtag #lorem #nice",
      bgMusic: "s33ound.mp3",
      location: "33new york",
    },
  ];

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev < Videos.length - 1 ? prev + 1 : prev));
  };

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <section className="relative justify-center flex w-full h-[600px]">
      <div className="flex-col relative w-80 bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Video Placeholder */}
        <div className="relative w-full h-full  bg-gray-300 flex justify-center items-center">
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
      {/* Navigation Buttons */}
      <div className="absolute right-2 md:right-20 top-1/2 -translate-y-1/2 flex flex-col items-end gap-5">
  <button
    className="p-2 bg-gray-400 text-white rounded-full"
    onClick={prevVideo}
    disabled={currentIndex === 0}
  >
    <FaChevronUp />
  </button>

  <button
    className="p-2 bg-gray-400 text-white rounded-full"
    onClick={nextVideo}
    disabled={currentIndex === Videos.length - 1}
  >
    <FaChevronDown />
  </button>
</div>
    </section>
  );
}
