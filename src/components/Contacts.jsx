import React, { useEffect, useState } from "react";
import contactimg from "../assets/images/webph2.jpg";
import "./Component.css";
// import icon from "../assets/images/top-right.png";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import axios from "axios";

const Contacts = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [message, setMessage] = useState("");
  const [messagetype, setmessagetype] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (phone) => {
    console.log(phone);
    setFormData({ ...formData, phone });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/contacts", formData)
      .then((response) => {
        setMessage("Form submitted successfully!");
        setmessagetype("Success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        setmessagetype("error");
        setMessage("Please try again later.");
      });
  };

  return (
    <div className="bg-black">
      <div className="flex flex-wrap justify-center bg-[black]">
        <div className="bg-[black] text-[white] w-[49rem] px-[1rem] mt-[2rem] font-instrument text-[1.5rem] font-bold footer-content">
          <p data-aos="fade-up" className="text-[3rem] font-semibold">
            SAY HELLO!
          </p>
          <br />
          <p data-aos="fade-up" className="text-[1.5rem] text-[gray] font-bold">
            Welcome to 1Day to Day1, your destination for inspiring
            entrepreneurial journeys. We're passionate about sharing stories of
            resilience, innovation, and triumph that define success in the
            business world. Expect to hear from one of our dedicated team
            members soon!
          </p>
          <br />
          FILL THIS FORM OUT
          <br />
          <br />
          <form
            className="w-[100%] font-normal flex flex-col gap-[1rem] rounded-xl"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              required
              maxLength="80"
              className="bg-[#0f0f0f] pl-[1rem] h-[3rem] text-[white] rounded-xl custom-input items-center inputBox"
              placeholder="Name*"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              required
              maxLength="80"
              className="bg-[#0f0f0f] pl-[1rem] h-[6rem] rounded-xl inputBox"
              placeholder="Email*"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <PhoneInput
              defaultCountry="in"
              placeholder="Number*"
              required
              value={formData.phone}
              onChange={handlePhoneChange}
            />
            <textarea
              maxLength="80"
              className="bg-[#0f0f0f] pl-[1rem] h-[9rem] rounded-xl inputBox"
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="bg-[white] text-[black] w-[100%] h-[4rem] text-[1.2rem] rounded-xl font-semibold"
            >
              SUBMIT
            </button>
          </form>
          {message && (
            <div
              className={`bg-[#0f0f0f] mt-5 h-[4rem] rounded-xl flex items-center justify-center ${
                messagetype === "Success"
                  ? "border-[green] text-[green]"
                  : "border-[red] text-[red]"
              }`}
            >
              {message}
            </div>
          )}
        </div>
        <div className="w-[49rem] px-[1rem] mt-[2rem] footer-content">
          <img
            src={contactimg}
            className="h-[55rem] rounded-xl"
            alt="Magazine"
          />
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="flex flex-wrap justify-between bg-[black] text-[white] px-[3rem]  pt-[5rem] font-instrument contact-details"
      >
        <div className="flex flex-col  justify-between text-[1.2rem] pb-[1rem] font-semibold mt-[1rem] content">
          <h4 className="text-[gray] pb-[0.5rem] text-[1rem] content">
            SOCIAL
          </h4>
          <span>FACEBOOK</span>
          <span>INSTAGRAM</span>
          <span>TWITTER</span>
          <span>LINKEDIN</span>
          <span>PINTEREST</span>
          <span>YOUTUBE</span>
        </div>
        <div className="flex flex-col gap-[1rem] text-[1.2rem] pb-[1rem] font-semibold leading-[0.5rem] mt-[1rem] content">
          <h1 className="text-[gray] pb-[0.5rem] text-[1rem] content">
            CURRENT LOCATION
          </h1>
          <span>UTTAR PRADESH,</span>
          <span>INDIA</span>
        </div>
        <div className="flex flex-col gap-[1rem] text-[1.2rem] pb-[1rem] font-semibold leading-[0.5rem] mt-[1rem] content">
          <h1 className="text-[gray] pb-[0.5rem] text-[1rem] content">PHONE</h1>
          <span>+91-7302344754</span>
          <span>+91-7618162404</span>
        </div>
        <div className="flex flex-col gap-[1rem] text-[1.2rem] pb-[1rem] font-semibold leading-[0.5rem] mt-[1rem] content">
          <h1 className="text-[gray] pb-[0.5rem] text-[1rem] content">EMAIL</h1>
          <a href="mailto:info@1daytoday1.com" style={{ color: "white" }}>
            info@1daytoday1.com
          </a>
          <a href="mailto:support@1daytoday1.com" style={{ color: "white" }}>
            support@1daytoday1.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
