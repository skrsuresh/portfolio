import logo from "./assets/logo.png";
import { useState } from "react";

export const Nav = () => {
  const [side, setSide] = useState(false);

  function Sidebar() {
    setSide(!side);
  }

  return (
    <>
    <div>
      <div className="flex flex-row justify-between items-center p-[30px] sm:px-[50px] lg:px-[100px] bg-[#161513] w-full fixed top-0 left-0 z-40 ">
        <img src={logo} className="w-[100px] md:w-[150px] animaelist1" alt="Logo" />
        <div className="md:hidden">
      <i class="fa fa-bars text-[white] text-[25px] animaelist2" aria-hidden="true" onClick={Sidebar}></i>
      </div>
        <ul className="navul hidden md:flex items-center md:gap-[40px] lg:gap-[70px] text-[20px] font-outfit text-white animaehome">
          <li className="animaelist3"><a href="#home">Home</a></li>
          <li className="animaelist4"><a href="#aboutme">About Me</a></li>
          <li className="animaelist5"><a href="#skills">Skills</a></li>
          <li className="animaelist6"><a href="#project">Project</a></li>
          <li className="animaelist7"><a href="#contactme">Contact</a></li>
        </ul>
        </div>

      {side && (
        <div className="bg-[#1f0016] w-[80%] h-dvh m-0 transition-all duration-500 ease-in-out fixed right-0 top-0 z-50 animaelist1">
          <i
            className="fa fa-times text-[35px] text-white relative left-7 p-5 animaelist2"
            aria-hidden="true"
            onClick={Sidebar}
          ></i>
          <ul className="navsideul flex flex-col items-start gap-y-[30px] text-[20px] font-outfit text-white p-[50px] animaehome">
         <li className="animaelist3"><a href="#home">Home</a></li>
          <li className="animaelist4"><a href="#aboutme">About Me</a></li>
          <li className="animaelist5"><a href="#skills">Skills</a></li>
          <li className="animaelist6"><a href="#project">Project</a></li>
          <li className="animaelist7"><a href="#contactme">Contact</a></li>
          </ul>
        </div>
      )}
      </div>
    </>
  );
};
