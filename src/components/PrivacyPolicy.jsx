import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top on component mount
  }, []);
  return (
    <div className="bg-[#0D0D0D] text-white min-h-screen p-6 md:p-12 ">
      <div data-aos="fade-up" className="max-w-5xl mx-auto  leading-relaxed  ">
        <h1 className=" font-bold text-[4rem] mb-8 border-b-2 border-gray-300 pb-2">
          Privacy Policy
        </h1>
        <p className="text-base text-gray-500 mb-8 text-[1.2rem]">
          Effective Date: 22/07/2024
        </p>
        <section data-aos="fade-up" className="mb-8">
          <h2 className="text-3xl font-bold mb-4">1. Introduction</h2>
          <p className="mb-4 text-[1.5rem]">
            Welcome to <strong>1 Day to Day 1</strong>. We are dedicated to
            protecting your personal information and your right to privacy. This
            Privacy Policy explains what information we collect, how we use it,
            and the measures we take to ensure it is protected.
          </p>
        </section>
        <section data-aos="fade-up" className="mb-8">
          <h2 className="text-3xl font-bold mb-4">2. Information We Collect</h2>
          <ul className="list-disc ml-5 space-y-2 text-[1.6rem]">
            <li>
              Personal Identification Information: Name, email address, phone
              number, and other contact details.
            </li>
            <li>
              Professional Information: Job title, company name, and
              work-related information.
            </li>
            <li>
              Content Contributions: Stories, articles, interviews, and other
              content you provide.
            </li>
          </ul>
        </section>
        <section data-aos="fade-up" className="mb-8">
          <h2 className="text-3xl font-bold mb-4">
            3. How We Use Your Information
          </h2>
          <ul className="list-disc ml-5 space-y-2 text-[1.6rem]">
            <li>
              To provide and maintain our services, including magazines,
              interviews, and books.
            </li>
            <li>To personalize your experience on our website.</li>
            <li>
              To communicate with you about updates, promotions, and news
              related to our services.
            </li>
            <li>
              To process your contributions and publish them in our magazines
              and other media.
            </li>
          </ul>
        </section>
        <section data-aos="fade-up" className="mb-8">
          <h2 className="text-3xl font-bold mb-4">
            4. Sharing Your Information
          </h2>
          <ul className="list-disc ml-5 space-y-2 text-[1.6rem]">
            <li>
              Service Providers: Third-party vendors and service providers who
              assist us in delivering our services.
            </li>
            <li>
              Legal Requirements: When required by law or to protect our rights
              and safety.
            </li>
          </ul>
        </section>
        <section data-aos="fade-up" className="mb-8">
          <h2 className="text-3xl font-bold mb-4">5. Data Security</h2>
          <p className="mb-4 text-[1.5rem]">
            We implement a variety of security measures to protect your personal
            information. These measures include encryption, access controls, and
            secure data storage.
          </p>
        </section>
        <section data-aos="fade-up" className="mb-8">
          <h2 className="text-3xl font-bold mb-4">6. Your Rights</h2>
          <ul className="list-disc ml-5 space-y-2 text-[1.6rem]">
            <li>Access the personal information we hold about you.</li>
            <li>
              Request corrections to inaccurate or incomplete information.
            </li>
            <li>Opt-out of receiving communications from us.</li>
          </ul>
        </section>
        <section data-aos="fade-up" className="mb-8">
          <h2 className="text-3xl font-bold mb-4">
            7. Changes to This Privacy Policy
          </h2>
          <p className="mb-4 text-[1.5rem]">
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on our website.
          </p>
        </section>
        <section data-aos="fade-up" className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 ">8. Contact Us</h2>
          <p className="text-[1.5rem]">
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <address className="not-italic mt-4">
            <p className="mb-2 font-semibold text-[1.2rem]">
              1 Day to Day 1, Venture of{" "}
              <Link
                className="  text-[white] hover:text-blue-300"
                to="https://www.dfreenovelish.com/"
              >
                DFREENOVELISH
              </Link>{" "}
              company
            </p>
            <p className="mb-2 font-semibold text-[gray] text-[1.2rem]">
              M-2 Bhavan3 Kisangarh
            </p>
            <p className="mb-2 font-semibold text-[gray] text-[1.2rem]">
              Amroha, U.P, 244221
            </p>
            <a
              className="mb-5 font-semibold text-[gray] hover:text-[white] text-[1.2rem]"
              href="mailto:info@1daytoday1.com"
            >
              info@1daytoday1.com
            </a>
            <p className="mb-2 mt-2 text-[gray] font-semibold  hover:text-[white] text-[1.2rem]">
              +91-7302344754, +91-7618162404
            </p>
          </address>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
