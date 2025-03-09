import React, { useState } from "react"
import { BiHome, BiUser, BiCodeAlt } from "react-icons/bi"
import { Link } from "react-scroll"

export default function Navigation({ activePage }) {
  // Menyimpan state untuk tautan aktif
  const [activeLink, setActiveLink] = useState(activePage || "home")

  return (
    <div
      className="fixed bottom-4 left-0 right-0 text-center z-10 lg:translate-y-[-50%] lg:top-[50%] lg:left-auto lg:right-5"
      data-aos="fade-left"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <div className="flex justify-between mx-auto bg-white text-secondary p-2 rounded-full border-secondary border-solid border-[1px] max-w-[200px] lg:flex-col">
        <Link
          to="home"
          className={`flex w-[50px] h-[50px] justify-center items-center cursor-pointer ${
            activeLink === "home" ? "text-blue-500" : ""
          }`}
          activeClass="active"
          offset={-100}
          smooth={true}
          spy={true}
          onSetActive={() => setActiveLink("home")}
        >
          <BiHome />
        </Link>
        <Link
          to="profile"
          className={`flex w-[50px] h-[50px] justify-center items-center cursor-pointer ${
            activeLink === "profile" ? "text-blue-500" : ""
          }`}
          activeClass="active"
          offset={-100}
          smooth={true}
          spy={true}
          onSetActive={() => setActiveLink("profile")}
        >
          <BiUser />
        </Link>
        <Link
          to="portfolio"
          className={`flex w-[50px] h-[50px] justify-center items-center cursor-pointer ${
            activeLink === "portfolio" ? "text-blue-500" : ""
          }`}
          activeClass="active"
          offset={-100}
          smooth={true}
          spy={true}
          onSetActive={() => setActiveLink("portfolio")}
        >
          <BiCodeAlt />
        </Link>
      </div>
    </div>
  )
}
