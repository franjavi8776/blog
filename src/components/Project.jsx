import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { videos, images } from "./videoGroups";

const Project = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-[100vh] bg-primary relative text-neutral">
      <h1 className="text-lg md:text-[35px] text-neutral font-title text-center pt-20">
        <span className="text-shadow">PROJECTS</span>
      </h1>
      <div className="w-[80%] m-auto mt-20 flex flex-col gap-10">
        <div className="flex justify-center flex-wrap gap-20 ">
          {videos.map((video, i) => (
            <div
              key={i}
              className={`${video.divClass} flex flex-col gap-8 justify-center items-center cursor-pointer group `}
              onMouseEnter={(e) => {
                const video = e.currentTarget.querySelector("video");
                if (video) video.play();
              }}
              onMouseLeave={(e) => {
                const video = e.currentTarget.querySelector("video");
                const border =
                  e.currentTarget.querySelector(".border-animated");
                if (video) {
                  video.pause();
                  video.currentTime = 0;
                }
                if (border) {
                  border.style.transform = "translate(-50%, -50%)";
                }
              }}
              onMouseMove={(e) => {
                const currentElement = e.currentTarget;
                if (currentElement) {
                  const border =
                    currentElement.querySelector(".border-animated");
                  const rect = currentElement.getBoundingClientRect();
                  const x = e.clientX - rect.left - rect.width / 2;
                  const y = e.clientY - rect.top - rect.height / 2;
                  const limitedX = Math.max(-30, Math.min(30, x));
                  const limitedY = Math.max(-30, Math.min(30, y));

                  if (border) {
                    border.style.transform = `translate(calc(-50% + ${limitedX}px), calc(-50% + ${limitedY}px))`;
                  }
                }
              }}
            >
              <div className="relative">
                <video
                  src={video.src}
                  className={`${video.videoClass} border-t border-neutral shadow-sm shadow-neutral`}
                />
                <div className="absolute w-[85%] h-[100%] top-[180px] left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-neutral pointer-events-none border-animated"></div>
              </div>
              <p
                className={`${video.textClass} text-justify text-shadow-sm pl-5 relative`}
              >
                <span className="absolute top-1/2 left-0 -translate-y-1/2 w-[1px] h-[70%] bg-neutral"></span>
                <span className="absolute top-[15%] left-0 w-[1px] h-0 bg-secondary transition-all duration-1000 ease-in-out group-hover:h-[70%]"></span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate eius tempora in ea omnis accusantium a nam porro eos
                officia, minima earum. Error rerum suscipit aperiam voluptatem
                dolore quaerat! Animi!
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center flex-wrap gap-20 mt-10">
          {images.map((image, i) => (
            <div
              key={i}
              className={`${image.divClass} flex gap-8 justify-center items-center cursor-pointer group `}
            >
              <div>
                <img
                  src={image.src}
                  className={`${image.imageClass} border-t border-secondary shadow-sm shadow-secondary`}
                />
              </div>
              <p
                className={`${image.textClass} text-justify text-shadow-sm pr-5 relative`}
              >
                <span className="absolute top-1/2 right-0 -translate-y-1/2 w-[1px] h-[70%] bg-neutral"></span>
                <span className="absolute top-[15%] right-0 w-[1px] h-0 bg-secondary transition-all duration-1000 ease-in-out group-hover:h-[70%]"></span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate eius tempora in ea omnis accusantium a nam porro eos
                officia, minima earum. Error rerum suscipit aperiam voluptatem
                dolore quaerat! Animi!
              </p>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => navigate("/")}
        className="absolute bottom-10 left-10 text-sm md:text-lg font-body hover:text-secondary flex items-center gap-2"
      >
        <FaArrowLeft className="text-secondary" />
        <span className="pt-1">BACK</span>
      </button>
      <button
        onClick={() => navigate("/")}
        className="absolute top-10 left-10 text-sm md:text-lg font-body hover:text-secondary flex items-center gap-2"
      >
        <FaArrowLeft className="text-secondary" />
        <span className="pt-1">BACK</span>
      </button>
    </div>
  );
};

export default Project;
