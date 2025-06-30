import suresh3 from "./assets/Suresh3.png";
import linkedin from "./assets/linkedin.png"

export const Home = () => {
  return (
    <div id="home" className="bg-[#161513] w-full pt-[100px] pb-[50px] px-[30px] sm:px-[50px] lg:px-[100px] flex flex-col sm:flex-row-reverse items-center sm:justify-between gap-8 ">
      
      <img
        src={suresh3}
        alt="Suresh profile"
        className="w-[250px] md:w-[325px] home4"
      />
      
      <div className=" lg:w-[600px] flex flex-col items-center sm:items-start gap-4">
        <h1 className="text-[35px] md:text-[60px] font-outfit text-white text-center sm:text-start home1">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B415FF] to-[#DF8908] inline-block">
            I'm Suresh,
          </span>
          frontend developer.
        </h1>

        <p className="text-[16px] md:text-[20px] text-white text-center sm:text-start home2">
          I'm an aspiring web developer who enjoys turning ideas into functional,
          responsive interfaces using HTML, CSS, JavaScript, React, and Tailwind CSS.
        </p>

        <div className="flex items-center flex-wrap justify-center sm:justify-start gap-5">
        <a className="text-[16px] lg:text-[20px] text-white px-[30px] py-[10px] rounded-4xl border-solid border hover:bg-gradient-to-r from-[#B415FF] to-[#DF8908] font-bold cursor-pointer home3"
          href="/Suresh (CV).pdf" download
        >
          Download CV
        </a>

        <a className="text-[16px] md:text-[20px] text-white px-[30px] py-[8px] rounded-4xl font-bold cursor-pointer flex items-center border-solid border hover:bg-white hover:text-black  active:bg-white active:text-black home5"
        href="https://www.linkedin.com/in/suresh-skr-83a7b2258" target="blank" rel="noopener noreferrer"
        >
        <img src={linkedin} className="w-[30px]"/> | Let's connect!
        </a>

        </div>

      </div>
    </div>
  );
};
