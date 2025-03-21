import React, { useState } from "react"

// Komponen untuk item Portfolio
const PortfolioItem = ({ imgSrc, title, description, link }) => {
  return (
    <div className="w-full">
      {/* Membuat seluruh div card menjadi clickable */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-white flex w-full justify-center h-full items-center rounded-lg overflow-hidden p-5 relative group"
      >
        <img src={imgSrc} alt={`Portfolio ${title}`} />
        <div className="absolute p-5 bg-primary w-full h-full flex items-center opacity-0 group-hover:opacity-100 transition">
          <div className="text-center text-white mt-[-60px] group-hover:mt-0 transition-all">
            <div className="bg-white rounded-full px-5 inline-block mb-2">
              <h4 className="text-gradient">{title}</h4>
            </div>
            <p>{description}</p>
          </div>
        </div>
      </a>
    </div>
  )
}

export default function Portfolio() {
  // State untuk menyimpan daftar portfolio
  const [portfolioItems] = useState([
    {
      imgSrc: "/images/port1.png",
      title: "Yt Clone",
      description: "Simple yt clone with react + express",
      link: "https://youtube-clone-lovat-theta.vercel.app/",
    },
    {
      imgSrc: "/images/port2.png",
      title: "Web Coffe",
      description: "Coffee business web landing page",
      link: "https://bunn-coffe.vercel.app/",
    },
    {
      imgSrc: "/images/port3.png",
      title: "Clone Mcdonald",
      description: "Simple mcdonald clone with react + bootstrap",
      link: "https://mcdonald-clone-three.vercel.app/",
    },
    {
      imgSrc: "/images/port4.png",
      title: "Portfolio Website Template",
      description: "Free portfolio template, with simple HTML, CSS, and JS",
      link: "https://portofolio-template-web.vercel.app/",
    },
  ])

  return (
    <div id="portfolio" className="section">
      <div className="container mx-auto max-w-[1200px] px-3 pt-3 pb-20">
        <div
          className="flex flex-col lg:flex-row justify-between mb-[50px]"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <div className="order-2 lg:order-1 mt-5">
            <h4 className="text-secondary font-secondary text-[24px]">
              Recent Work
            </h4>
            <div className="text-gradient font-primary max-w-[700px] mx-auto text-[24px]">
              This simple project
            </div>
          </div>
          <div className="order-1 lg:order-2 text-center">
            <h2 className="text-gradient font-primary max-w-[700px] mx-auto text-[50px]">
              04
            </h2>
            <div>Completed Projects</div>
          </div>
        </div>
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          {portfolioItems.map((item, index) => (
            <PortfolioItem
              key={index}
              imgSrc={item.imgSrc}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
