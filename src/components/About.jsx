const About = () => {
  return (
    <div id="about" className="w-full h-[100vh] bg-primary  text-white ">
      <h1 className="text-lg md:text-[35px] text-white font-title text-center pt-20">
        <span className="text-shadow">ABOUT ME</span>
      </h1>
      <div className="flex flex-col md:flex-row">
        <div className="w-[80%] m-auto mt-10 md:mt-0 md:w-[40%] lg:w-[40%] md:h-[80vh] flex  items-center justify-center">
          <img
            src="./images/fotoLisa.jpeg"
            alt=""
            className="w-[300px] h-[400px] lg:w-[500px] lg:h-[600px] border-2 border-secondary shadow-md shadow-neutral"
          />
        </div>
        <div className="w-[80%] m-auto mt-10 md:mt-0  md:w-[50%] lg:w-[50%] md:h-[80vh] flex flex-col items-center justify-center text-sm md:text-xl lg:text-2xl md:space-y-2 lg:space-y-4 text-justify text-shadow-sm">
          <p>
            Hi there! My name is Alejandra Villarroel, and I’m passionate about
            graphic design. I’ve always known I wanted to do something creative
            with my life since I’ve loved expressing myself through art from a
            young age.
          </p>
          <p>
            For the past two years, I’ve been studying independently and through
            short courses, which have allowed me to work on personal projects
            for clients.
          </p>
          <p>
            For example, I’ve designed TikTok templates, pouring all my
            creativity into themes requested by others, as well as creating
            various logos.
          </p>
          <p>
            Art and design are my way of connecting with the world, and I love
            bringing ideas to life!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
