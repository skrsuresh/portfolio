import location from "./assets/locationicon.svg";
import phone from "./assets/phoneicon.svg";
import email from "./assets/emailicon.svg";
export const Contact = () => {
  return (
    <div className="bg-[#161513] w-full  p-[30px] py-[50px] sm:px-[50px] lg:px-[100px] gap-5" id="contactme">
      <div className="flex flex-col justify-center">
        <h1 className="text-[35px] font-outfit md:text-[60px] text-white text-center contact">
          Contact Me
        </h1>
        <h2 className="contacth2 text-center font-bold text-[25px] font-outfit md:text-[35px] text-transparent bg-clip-text bg-gradient-to-r from-[#B415FF] to-[#DF8908] inline
        contact">
          Let's Talk
        </h2>
        <p className="text-[16px] font-outfit md:text-[20px] text-white text-center contact">
          I’m ready to be hired! So feel free to reach out if you have wish.<br></br> You can contact me anytime — I’d love to work.
        </p>
      </div>
      
      <div></div>
      <div className="flex flex-wrap sm:flex-nowrap justify-between items-start gap-7 mt-10">
  <div className="flex sm:flex-col items-center gap-4 text-center contact">
    <img
      src={location}
      className="w-[60px] sm:w-[80px] p-3 bg-gradient-to-r from-[#B415FF] to-[#DF8908] rounded-full"
    />
    <p className="text-[16px] font-outfit md:text-[20px] text-white text-start">
      Ottaiyalvilai,<br />
      Kanyakumari,<br />
      Tamil Nadu.
    </p>
  </div>

  <div className="flex sm:flex-col items-center gap-4 text-center contact">
    <img
      src={phone}
      className="w-[60px] sm:w-[80px] p-3 bg-gradient-to-r from-[#B415FF] to-[#DF8908] rounded-full"
    />
    <p className="text-[16px] font-outfit md:text-[20px] text-white">
      +91 9486265442
    </p>
  </div>

  <div className="flex sm:flex-col items-center gap-4 text-center contact">
    <img
      src={email}
      className="w-[60px] sm:w-[80px] p-3 bg-gradient-to-r from-[#B415FF] to-[#DF8908] rounded-full"
    />
    <p className="text-[16px] font-outfit md:text-[20px] text-white">
      kmsuresh237@gmail.com
    </p>
  </div>
</div>
      <p className="text-[16px] font-outfit md:text-[20px] text-white text-center mt-16">© 2025. All rights reserved.</p>
    </div>
  );
};
