import { useState } from "react";
import calculators from "./assets/Calculators.png";
import sresto from "./assets/Sresto.png";
import webflix from "./assets/Webflix.png";

const text = [
  {
    para: "Webflix is a responsive movie and TV series streaming platform built with React. It fetches real-time data from the TMDB (The Movie Database) API to display a dynamic list of trending, popular, and top-rated content. The application includes user authentication powered by Firebase, enabling secure login and account access.",
    image: webflix,
    link: "https://webflix-9102e.web.app"
  },

  {
    para: "Sresto is a fully responsive restaurant website built using HTML, CSS, and JavaScript. It features a modern design optimized for all devices, offering a smooth user experience with interactive elements, responsive navigation, and visually appealing layouts.",
    image: sresto,
    link: "https://sresto-restaurant.web.app/"
  },
  {
    para: "Calculators is a collection of mini web applications built using HTML, CSS, and JavaScript. It includes practical tools such as a letter counter, fixed deposit (FD) calculator, Celsius to Fahrenheit converter, and a basic arithmetic calculator. Each tool features a clean UI and responsive design",
    image: calculators,
    link: "https://calculator-by-suresh.web.app/"
  },
];

const paraStyle = {
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  display: "-webkit-box",
  overflow: "hidden",
};

export const Projects = () => {
  const [ishidden, setIshidden] = useState({});
  function Expand(index) {
    setIshidden((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  }

  return (
    <div id="project" className=" bg-[#161513] p-[30px] py-[50px] sm:px-[50px] lg:px-[100px] pt-[100px] ">
      <h1 className="text-[35px] font-outfit md:text-[60px] text-white text-center contact">
        Projects
      </h1>
      <div className="flex items-start justify-center md:justify-between flex-wrap md:flex-nowrap gap-8 bg-[#161513] w-full mt-6 ">
        {text.map((para, index) => (
            <div key={index} className=" w-[290px] sm:w-[310px]lg:w-[350px] p-2 pb-[20px] bg-[#000000] rounded-md flex flex-col justify-center gap-3 contact">
              <img
                src={para.image}
                className="w-[100%] rounded-md"
                alt="webflix project"
              />
              <p>
                <span
                  className="text-[16px] font-outfit md:text-[20px] text-white"
                  style={ishidden[index] ?{} : paraStyle}
                >
                  {para.para}
                </span>
                
                <span
                  className=" text-[#DF8908] hover:underline cursor-pointer block text-[16px] font-outfit md:text-[20px]"
                  onClick={() => Expand(index)}
                >
                  {ishidden[index] ? "Read more..."  : "Read less."}
                </span>
              </p>
              
                <a href={para.link} target="_blank" rel="noopener noreferrer" className="text-[18px] md:text-[20px]  text-white text-center w-[150px] rounded-4xl bg-gradient-to-r from-[#B415FF] to-[#DF8908] border-none self-center mt-[10px] font-bold cursor-pointer transform duration-500 hover:scale-[1.03] p-1">Explore</a>
                
            </div>
        ))}
      </div>
    </div>
    
  );
};
