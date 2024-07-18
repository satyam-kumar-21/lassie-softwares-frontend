import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import ceo from "../../../src/Image/about/satyam1.png";

const MyTeams = () => {
  const teamData = [
    {
      name: "Satyam Kumar",
      role: "CEO & Full Stack Developer",
      bio: "Leading our brand's vision and product development as CEO & Full Stack Developer, shaping engaging experiences for meaningful connections.",
      image: ceo, // Assuming "sandip" is the variable or source of the image path
      social: {
        linkedin: "https://www.linkedin.com/",
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
        twitter: "https://www.twitter.com/",
      },
    },
    {
      name: "Satyam Kumar",
      role: "CEO & Full Stack Developer",
      bio: "Leading our brand's vision and product development as CEO & Full Stack Developer, shaping engaging experiences for meaningful connections.",
      image: ceo, // Assuming "sandip" is the variable or source of the image path
      social: {
        linkedin: "https://www.linkedin.com/",
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
        twitter: "https://www.twitter.com/",
      },
    },
    {
      name: "Satyam Kumar",
      role: "CEO & Full Stack Developer",
      bio: "Leading our brand's vision and product development as CEO & Full Stack Developer, shaping engaging experiences for meaningful connections.",
      image: ceo, // Assuming "sandip" is the variable or source of the image path
      social: {
        linkedin: "https://www.linkedin.com/",
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
        twitter: "https://www.twitter.com/",
      },
    },
    {
      name: "Satyam Kumar",
      role: "CEO & Full Stack Developer",
      bio: "Leading our brand's vision and product development as CEO & Full Stack Developer, shaping engaging experiences for meaningful connections.",
      image: ceo, // Assuming "sandip" is the variable or source of the image path
      social: {
        linkedin: "https://www.linkedin.com/",
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
        twitter: "https://www.twitter.com/",
      },
    },

   
  ];

  return (
    <section className="text-gray-900 bg-gray-100 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-800">
            OUR TEAM
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700">
            Our diverse team combines expertise in design, development, and
            strategy, collaborating seamlessly to realize your vision.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {teamData.map((member, index) => (
            <div key={index} className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center justify-between text-center bg-white rounded-lg shadow-md p-6">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={member.image}
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-800">
                    {member.name}
                  </h2>
                  <h3 className="text-gray-500 mb-3">{member.role}</h3>
                  <p className="mb-4 text-gray-700">{member.bio}</p>
                  <div className="inline-flex">
                    <a
                      href={member.social.linkedin}
                      className="text-gray-700 mx-2"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href={member.social.facebook}
                      className="text-gray-700 mx-2"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a
                      href={member.social.instagram}
                      className="text-gray-700 mx-2"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      href={member.social.twitter}
                      className="text-gray-700 mx-2"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyTeams;
