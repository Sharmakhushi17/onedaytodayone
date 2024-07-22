import React, { useEffect } from "react";

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top on component mount
  }, []);
  return (
    <div className="bg-[#0D0D0D] text-white min-h-screen p-6 md:p-12 Read">
      <div data-aos="fade-up" className="max-w-5xl mx-auto  leading-relaxed">
        <h1 className="text-[4rem] font-bold mb-8 border-b-2 border-gray-300 pb-2">
          Terms & Conditions
        </h1>
        <p className="text-base text-gray-500 mb-8 ">
          Effective Date: 22/07/2024
        </p>
        <section data-aos="fade-up" className="mb-8 ">
          <h2 className="text-3xl font-bold mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4 text-[1.2rem]">
            By accessing and using the services provided by One Day to Day One,
            you agree to comply with and be bound by these Terms & Conditions.
            If you do not agree with these terms, please do not use our
            services.
          </p>
        </section>
        <section data-aos="fade-up" className="mb-8">
          <h2 className="text-3xl font-bold mb-4">2. Services Provided</h2>
          <ul className="list-disc ml-5 space-y-2 text-[1.6rem]">
            <li>
              One Day to Day One provides a variety of services, including but
              not limited to:
              <ul className="list-disc ml-5 space-y-2 text-[1.6rem] ">
                <li>Conducting interviews and creating success stories.</li>
                <li>
                  Publishing magazines and books based on these success stories.
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <section data-aos="fade-up" className="mb-8">
          <h2 className="text-3xl font-bold mb-4">3. User Obligations</h2>
          <ul className="list-disc ml-5 space-y-2 text-[1.6rem]">
            <li>Provide accurate and current information when requested.</li>
            <li>
              Respect the intellectual property rights of One Day to Day One and
              other users.
            </li>
            <li>Use our services for lawful purposes only.</li>
          </ul>
        </section>
        <section data-aos="fade-up" className="mb-8">
          <h2 className="text-3xl font-bold mb-4 ">4. Content Submission</h2>
          <p className="mb-4 text-[1.2rem]">
            By submitting content (such as stories, articles, or interviews) to
            One Day to Day One, you agree to:
          </p>
          <ul className="list-disc ml-5 space-y-2 text-[1.6rem]">
            <li>
              Grant One Day to Day One a non-exclusive, worldwide, royalty-free
              license to use, distribute, and publish the content.
            </li>
            <li>
              Ensure that your content does not violate any third-party rights
              or contain any unlawful material.
            </li>
          </ul>
        </section>
        <section data-aos="fade-up" className="mb-8">
          <h2 className="text-3xl font-bold mb-4">5. Intellectual Property</h2>
          <p className="mb-4 text-[1.2rem]">
            All content and materials on our website, including text, graphics,
            logos, and images, are the property of One Day to Day One and are
            protected by intellectual property laws. Unauthorized use of any
            materials on our website is prohibited.
          </p>
        </section>
        <section data-aos="fade-up" className="mb-8">
          <h2 className="text-3xl font-bold mb-4">6. Privacy Policy</h2>
          <p className="mb-4 text-[1.2rem]">
            Your use of our services is also governed by our Privacy Policy,
            which can be found{" "}
            <a
              href="/privacy-policy"
              className="text-[gray] hover:text-blue-300 text-[1.2rem]"
            >
              here
            </a>
            .
          </p>
        </section>
        <section data-aos="fade-up" className="mb-8">
          <h2 className="text-3xl font-bold mb-4">
            7. Disclaimers and Limitation of Liability
          </h2>
          <p className="mb-4 text-[1.2rem]">
            Our services are provided "as is" without warranties of any kind.
            One Day to Day One does not guarantee the accuracy or completeness
            of any content provided. To the fullest extent permitted by law, One
            Day to Day One shall not be liable for any damages arising out of
            your use of our services.
          </p>
        </section>
        <section data-aos="fade-up" className="mb-8">
          <h2 className="text-3xl font-bold mb-4">8. Indemnification</h2>
          <p className="mb-4 text-[1.2rem]">
            You agree to indemnify and hold One Day to Day One, its affiliates,
            and employees harmless from any claims, damages, or expenses arising
            from your use of our services or your violation of these Terms &
            Conditions.
          </p>
        </section>
        <section data-aos="fade-up" className="mb-8">
          <h2 className="text-3xl font-bold mb-4">9. Termination</h2>
          <p className="mb-4 text-[1.2rem]">
            One Day to Day One reserves the right to terminate your access to
            our services at any time, without notice, for conduct that we
            believe violates these Terms & Conditions or is harmful to other
            users of our services.
          </p>
        </section>
        <section data-aos="fade-up" className="mb-8">
          <h2 className="text-3xl font-bold mb-4">10. Governing Law</h2>
          <p className="mb-4 text-[1.2rem]">
            These Terms & Conditions are governed by and construed in accordance
            with the laws of Amroha, without regard to its conflict of law
            principles.
          </p>
        </section>
        <section data-aos="fade-up" className="mb-8">
          <h2 className="text-3xl font-bold mb-4">
            11. Changes to Terms & Conditions
          </h2>
          <p className="mb-4 text-[1.2rem]">
            We may update these Terms & Conditions from time to time. We will
            notify you of any changes by posting the new Terms & Conditions on
            our website. Your continued use of our services after any changes
            indicates your acceptance of the new terms.
          </p>
        </section>
        <section data-aos="fade-up" className="mb-8">
          <h2 className="text-3xl font-bold mb-4">12. Contact Us</h2>
          <p className="mb-4 text-[1.2rem]">
            If you have any questions about these Terms & Conditions, please
            contact us at:
          </p>
          <address className="not-italic mt-4 text-[1.2rem]">
            <p className="mb-2 font-semibold ">
              1 Day to Day 1, Venture of{" "}
              <a
                className="text-[white] hover:text-blue-300 "
                href="https://www.dfreenovelish.com/"
              >
                DFREENOVELISH
              </a>{" "}
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

export default TermsConditions;
