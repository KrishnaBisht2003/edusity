import React from "react";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
// import Title from "../Title/Title";
import videoPlayer from "../videoPlayer/videoPlayer";
import video from "../../assets/video.mp4";

const About = ({ toggleVideo }) => {
  return (
    <div className="about flex mx-[100px] my-auto justify-between w-[90%]">
      <div className="about-left flex items-center justify-center basis-[40%] relative px-[5%]">
        <img src={about_img} alt="" className="  rounded-[10px] w-[100%]" />
        <img
          src={play_icon}
          alt=""
          onClick={toggleVideo}
          className=" absolute  w-[60px] top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2"
        />
      </div>
      <div className="about-right basis-[56%] pr-16 w-auto ml-0 pl-0">
        <h3 className="font-bold text-base text-[#212EA0]">ABOUT UNIVERSITY</h3>
        <h2 className="font-bold text-4xl px-60 pl-0 mb-2">
          Nurturing Tomorrow's Leaders Today
        </h2>

        <p className="text-[#676767] mb-4">
          Embark on a transformative educational journey with our university's
          comprehensive education programs. Our cutting-edge curriculum is
          designed to empower students with the knowledge, skills, and
          experiences needed to excel in the dynamic field of education.
        </p>
        <p className="text-[#676767] mb-4">
          With a focus on innovation, hands-on learning, and personalized
          mentorship, our programs prepare aspiring educators to make a
          meaningful impact in classrooms, schools, and communities.
        </p>
        <p className="text-[#676767] mb-4">
          Whether you aspire to become a teacher, administrator, counselor, or
          educational leader, our diverse range of programs offers the perfect
          pathway to achieve your goals and unlock your full potential in
          shaping the future of education.
        </p>
      </div>
      {/* <videoPlayer /> */}
      {/* <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-90 z-50">
        <video className="w-full max-w-screen-lg" controls autoPlay muted loop>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
    </div>
  );
};

export default About;

// .title{
//   text-align: center;
//   color: #212EA0;
//   font-size: 15px;
//   font-weight: 600;
//   text-transform: uppercase;
//   margin: 70px 0 30px;
// }
// .title h2{
//   font-size: 32px;
//   color: #000F38;
//   margin-top: 5px;
//   text-transform: none;
// }
