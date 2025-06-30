import suresh from "./assets/Suresh.png";

export const Aboutme = () => {
  return (
    <div
      id="aboutme"
      className="bg-[#161513] w-full pt-[80px] lg:pt-[100px] pb-[50px] px-[30px] sm:px-[50px] lg:px-[100px] flex flex-col lg:grid lg:grid-cols-2 gap-[30px]"
    >
      <h1 className="text-[35px] md:text-[60px] font-outfit text-white text-center lg:col-span-2 about">
        About Me
      </h1>

      <img
        src={suresh}
        alt="Suresh"
        className="w-[200px] md:w-[270px] rounded-[50%] mx-auto mt-[10px] about"
      />

      <p className="text-[18px] md:text-[20px] text-white about">
        I'm Suresh, a diploma holder in Automobile Engineering with experience
        across the automotive, electrical, and automation sectors. I began as a
        Mechanical Helper at a Two-Wheeler Service Center, where I developed
        hands-on skills in vehicle maintenance. I later worked as a Machine
        Operator at Daimler India Commercial Vehicles' manufacturing plant,
        followed by a worked as a freelance electrician. Most recently, I have
        been coordinating automation projects at ORKA Technologies. My career
        reflects adaptability, continuous technical growth, and a passion for
        innovation.
      </p>
    </div>
  );
};
