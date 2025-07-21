import React, { useState } from "react"
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs"

export default function Header({
  name = "Chairul",
  description = "Web-Portofolio",
}) {
  // Menggunakan state untuk nama dan deskripsi
  const [headerName] = useState(name)
  const [headerDescription] = useState(description)

  return (
    <div className="container mx-auto max-w-[1200px] px-16 relative lg:absolute left-0 right-0">
      <div className="flex justify-between py-5 items-center">
        <div
          className="text-gradient font-secondary"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          data-aos-delay="0"
        >
          <a href="/">
            <h1 className="text-[30px] leading-none font-bold">{headerName}</h1>
            <h4 className="font-normal leading-none">{headerDescription}</h4>
          </a>
        </div>
        <div
          className="flex items-center space-x-3"
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          data-aos-delay="0"
        >
          <a href="https://www.github.com/ChairulNew">
            <BsGithub />
          </a>
          <a href="https://www.linkedin.com/in/chairul-arul-360075356/">
            <BsLinkedin />
          </a>
          <a href="https://www.instagram.com/chairulll.__/">
            <BsInstagram />
          </a>
        </div>
      </div>
    </div>
  )
}
