import React from "react";
import companyCultureImage from "../../../src/Image/career/company-culture.webp";
import careerGrowthImage from "../../../src/Image/career/career-growth.webp";
import workLifeBalanceImage from "../../../src/Image/career/work-life.webp";
import supportImage from "../../../src/Image/career/support.webp";

const Career2 = () => {
  // Array of job openings
  const jobOpenings = [
    // {
    //   id: 1,
    //   position: "App Developer Intern (Java/Flutter)",
    //   description:
    //     "We're hiring a Java/Flutter app developer intern. Gain hands-on experience in mobile development with exciting projects.",
    // },

    // {
    //   id: 2,
    //   position: "SEO Optimization Intern",
    //   description:
    //     "Join as an SEO optimization intern. Gain valuable experience optimizing websites for search engines. Exciting opportunity awaits!",
    // },
    // Add more job openings as needed
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="container mx-auto py-12 px-4">
        <h1 className="text-xl lg:text-2xl font-bold text-center mb-8">
          Current opening
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobOpenings.map((job) => (
            <div
              key={job.id}
              className="bg-white p-6 rounded-lg shadow mb-4 md:flex md:items-center"
            >
              <div className="md:w-1/2 md:pr-8">
                <h3 className="text-lg font-bold mb-2">{job.position}</h3>
                <p className="text-gray-600">{job.description}</p>
              </div>
              <div className="md:w-1/2 md:pl-8">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfq1uSvUeMjnYrA8Sh19Zur3tPpoCXrTmYYvjSZ8VnqKhsGjw/viewform?usp=pp_url"
                  className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-200 py-12 px-4">
        <div className="container mx-auto shadow-md rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-2 shadow-md">
              <h2 className="text-2xl font-bold mb-4">Why Join Us</h2>
              <p className="text-gray-600 mb-4">
                Join Hi-Tech Junction for an exciting career journey. We foster
                innovation, teamwork, and growth. Enjoy a supportive environment
                with opportunities for personal development. Be part of a
                dynamic team shaping the future of technology.
              </p>
            </div>
            <div className="p-2 shadow-md">
              <h2 className="text-2xl font-bold mb-4">Benefits</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>Competitive salary and benefits package</li>
                <li>Flexible working hours</li>
                <li>Professional development opportunities</li>
                <li>Dynamic and collaborative work environment</li>
                {/* Add more benefits */}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12 px-4">
        <div className="container mx-auto flex flex-wrap justify-center items-center">
          <div className="w-full md:w-1/2 p-4">
            <img
              src={companyCultureImage}
              alt="Company Culture"
              className="w-full h-auto rounded-lg mb-6"
            />
            <h2 className="text-2xl font-bold mb-4">Company Culture</h2>
            <p className="text-gray-600">
              Our company fosters a culture of innovation, teamwork, and
              inclusivity. We celebrate diversity and empower our employees to
              reach their full potential.
            </p>
          </div>

          <div className="w-full md:w-1/2 p-4">
            <img
              src={careerGrowthImage}
              alt="Career Growth"
              className="w-full h-auto rounded-lg mb-6"
            />
            <h2 className="text-2xl font-bold mb-4">Career Growth</h2>
            <p className="text-gray-600">
              We are committed to helping our employees grow both personally and
              professionally. We provide ongoing training, mentorship programs,
              and opportunities for advancement.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto flex flex-wrap justify-center items-center">
          <div className="w-full md:w-1/2 p-4">
            <img
              src={workLifeBalanceImage}
              alt="Work-Life Balance"
              className="w-full h-auto rounded-lg mb-6"
            />
            <h2 className="text-2xl font-bold mb-4">Work-Life Balance</h2>
            <p className="text-gray-600">
              Maintaining a healthy work-life balance is important to us. We
              offer flexible working hours, remote work options, and support
              programs to help our employees thrive both in and out of the
              workplace.
            </p>
          </div>

          <div className="w-full md:w-1/2 p-4">
            <img
              src={supportImage}
              alt="How We Support You"
              className="w-full h-auto rounded-lg mb-6"
            />
            <h2 className="text-2xl font-bold mb-4">How We Support You</h2>
            <p className="text-gray-600">
              We prioritize the well-being of our employees and offer
              comprehensive support programs, including health insurance,
              employee assistance programs, and wellness initiatives.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career2;
