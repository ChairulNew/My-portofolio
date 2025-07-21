import React from "react"
import { TypeAnimation } from "react-type-animation"

export default function Banner() {
  return (
    <div
      id="home"
      className="section container mx-auto max-w-[1200px] px-3 items-center justify-center text-center"
    >
      <div className="w-full" data-aos="zoom-in">
        <div className="block text-center font-secondary font-black text-[30px]">
          Hello I am
          <div>
            <TypeAnimation
              sequence={[
                "CHAIRUL 😁",
                3000,
                "Information Technology Students 👨‍💻",
                3000,
                "I'm Software Enginerr 🚀",
                3000,
                "Lets Sharing 🌍",
                3000,
              ]}
              wrapper="span"
              speed={50}
              className="ml-3 text-secondary"
              repeat={Infinity}
            />
          </div>
        </div>
        <div className="max-w-[550px] mx-auto mt-5">
          I am a passionate web and mobile developer dedicated to building
          innovative and impactful digital solutions. With a strong focus on
          full-stack web development using React.js & Express.js, as well as
          exploring mobile development with Flutter, I am always eager to dive
          into new technologies and enhance my skills.😁
        </div>
      </div>
    </div>
  )
}
