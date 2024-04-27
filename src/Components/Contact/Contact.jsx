import React from "react";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import location_icon from "../../assets/location-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import Button from "../btn";
const Contact = () => {
  //   const accessKey = "38d5a904-7bef-4159-a6e3-81eba3e18ea1"; // this was using extra space as per the error and not working so use directly
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "38d5a904-7bef-4159-a6e3-81eba3e18ea1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <div className="flex flex-col text-center">
        <p className="text-[#212ea0] text-[20px] font-sans font-semibold uppercase">
          contact us
        </p>
        <h2 className="text-[#000f38] text-[32px] font-sans font-bold">
          Get in Touch
        </h2>
      </div>
      <div
        id="contact"
        className="contact my-[80px] mx-auto max-w-[90%] flex items-center justify-between"
      >
        <div className="contact-col basis-[48%] text-[#676767]">
          <h3 className="text-[#000f38] font-medium text-[25px] flex items-center mb-[20px]">
            Send us a message{" "}
            <img src={msg_icon} alt="" className="w-[35px] ml-3" />
          </h3>
          <p className="max-w-[450px] leading-[1.3]">
            Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service to our
            university community.
          </p>
          <ul>
            <li className="flex items-center my-[20px] mx-0">
              <img src={mail_icon} alt="" className="w-[25px] mr-3" />
              Contact@GreatStack.dev
            </li>
            <li className="flex items-center my-[20px] mx-0">
              <img src={phone_icon} alt="" className="w-[25px] mr-3" />
              +1 123-456-7890
            </li>
            <li className="flex items-center my-[20px] mx-0">
              <img src={location_icon} alt="" className="w-[25px] mr-3" />
              77 Massachusetts Ave, Cambridge MA 02139, United States
            </li>
          </ul>
        </div>
        <div className="contact-col  basis-[48%] text-[#676767]">
          <form onSubmit={onSubmit}>
            <label> Your name </label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              required
              className="block w-full bg-[#EBECFE] p-[15px] mb-[15px] mt-[5px] resize-none"
            />
            <label> Phone Number </label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your mobile number"
              required
              className="block w-full bg-[#EBECFE] p-[15px] mb-[15px] mt-[5px] resize-none"
            />
            <label> Write your message here </label>
            <textarea
              name="message"
              rows="6"
              placeholder="Enter your message"
              required
              className="block w-full bg-[#EBECFE] p-[15px] mb-[15px] mt-[5px] resize-none"
            ></textarea>
            <Button type="submit" color="#212ea0" text="white" flagImg={true}>
              Submit now
            </Button>
          </form>
          <span className="block my-5 mx-0">{result}</span>
        </div>
      </div>
    </>
  );
};

export default Contact;
