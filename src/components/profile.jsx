import React, { useState } from "react"

export default function Profile() {
  const [profileName] = useState("Chairul")
  const skills = [
    {
      image: "/images/4.png",
      title: "HTML5",
      description: "markup language",
    },
    {
      image: "/images/3.png",
      title: "CSS Vanilla",
      description: "Vanilla css",
    },
    {
      image: "/images/2.png",
      title: "Bootstrap",
      description: "CSS framework ",
    },
    {
      image: "/images/5.png",
      title: "React",
      description: "javascript framework",
    },
    {
      image: "/images/6.png",
      title: "Next.js",
      description: "React framework",
    },
  ]

  return (
    <div id="profile" className="section">
      <div className="container mx-auto max-w-[1200px] p-3 overflow-hidden">
        <div
          className="font-secondary text-center font-bold mb-12"
          data-aos="zoom-in-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <h4 className="text-secondary mb-3">My Skills</h4>
          <h2 className="text-gradient font-primary max-w-[700px] mx-auto text-[24px]">
            The Technology I Use
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
          <div
            className="text-center w-full lg:w-auto flex-shrink-0 mb-8 lg:mb-0"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <div className="w-[200px] sm:w-[250px] aspect-square bg-gradient rounded-full overflow-hidden mx-auto">
              <img
                src="/images/chairul.jpg"
                alt="Profile"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <h2 className="text-gradient text-[36px] sm:text-[50px] mt-[20px]">
              {profileName}
            </h2>
          </div>

          <div
            className="w-full lg:flex-1 lg:max-w-none"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <div className="lg:pt-[50px] lg:ml-[50px]">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-4 text-center">
                {skills.map((skill, index) => (
                  <div key={index} className="w-full">
                    <div className="bg-white h-[120px] sm:h-[140px] lg:h-[120px] xl:h-[140px] justify-center items-center flex rounded-lg overflow-hidden relative p-3 sm:p-4 lg:p-3 xl:p-5 group">
                      <img
                        src={skill.image}
                        alt={skill.title}
                        className="max-w-full max-h-full object-contain"
                      />
                      <div className="absolute p-3 sm:p-4 lg:p-3 xl:p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear duration-300">
                        <div className="text-center w-full text-white">
                          <div className="bg-white rounded-full px-3 py-1 sm:px-4 sm:py-2 inline-block mb-2">
                            <h4 className="text-gradient text-sm sm:text-base font-semibold">
                              {skill.title}
                            </h4>
                          </div>
                          <p className="text-xs sm:text-sm">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
