import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [center, setCenter] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const navigate = useNavigate();

  const categories = useMemo(
    () => [
      {
        image: "/images/cable_home.png",
        offsetX: -220,
        offsetY: -210,
        size: { mobile: 150, tablet: 300, desktop: 400 },
      },
      {
        image: "/images/mouse.png",
        offsetX: 330,
        offsetY: 20,
        size: { mobile: 70, tablet: 150, desktop: 230 },
      },
      {
        image: "/images/pc2.png",
        offsetX: -400,
        offsetY: -300,
        size: { mobile: 150, tablet: 350, desktop: 550 },
      },
      {
        image: "/images/teclado.png",
        offsetX: 0,
        offsetY: 250,
        size: { mobile: 320, tablet: 600, desktop: 900 },
      },
    ],
    []
  );

  useEffect(() => {
    const handleResize = () => {
      setCenter({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const categoryStyles = (offsetX, offsetY, size, image) => {
    const isMobile = window.innerWidth < 768;
    const mobileOffsetMultiplier = 0.28;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
    const tabletOffsetMultiplier = 0.65;

    const rotation =
      image === "/images/mouse.png" || image === "/images/teclado.png"
        ? "rotate(-12deg)"
        : "";

    return {
      position: "absolute",
      left: `${
        center.x +
        (isMobile
          ? offsetX * mobileOffsetMultiplier
          : isTablet
          ? offsetX * tabletOffsetMultiplier
          : offsetX)
      }px`,
      top: `${
        center.y +
        (isMobile
          ? offsetY * mobileOffsetMultiplier
          : isTablet
          ? offsetY * tabletOffsetMultiplier
          : offsetY)
      }px`,
      transform: `translate(-65%, -50%) ${rotation}`,
      width: `${
        isMobile ? size.mobile : isTablet ? size.tablet : size.desktop
      }px`,
      height: "auto",
    };
  };

  return (
    <div
      id="home"
      className="w-full h-[100vh] flex justify-center items-center relative"
    >
      {categories.map((category, index) => (
        <div
          key={index}
          style={categoryStyles(
            category.offsetX,
            category.offsetY,
            category.size,
            category.image
          )}
        >
          <img src={category.image} className="z-10" />
        </div>
      ))}

      <div
        style={categoryStyles(0, 0, { mobile: 150, tablet: 350, desktop: 550 })}
        className="flex flex-col items-center"
      >
        <img
          src="/images/studio.png"
          alt="logo"
          className=" mb-5 md:mb-10 z-10"
        />
        <button
          onClick={() => navigate("/project")}
          className="min-w-[100px] text-sm  md:text-lg lg:text-[30px] px-6 py-3 rounded-md shadow-sm shadow-secondary border-t border-secondary cursor-pointer font-body z-10"
        >
          <span className="text-white text-shadow-sm md:text-shadow-md  ">
            PROJECTS
          </span>
        </button>
      </div>
    </div>
  );
};

export default Home;
