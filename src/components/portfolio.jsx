import React, { useState } from "react"

const PortfolioItem = ({ imgSrc, title, description, link }) => {
  return (
    <div className="w-full">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block  flex w-full justify-center h-48 sm:h-52 md:h-56 lg:h-48 xl:h-52 items-center rounded-lg overflow-hidden p-3 sm:p-4 md:p-5 relative group"
      >
        <img
          src={imgSrc}
          alt={`Portfolio ${title}`}
          className="max-w-full max-h-full object-contain"
        />
        <div className="absolute p-3 sm:p-4 md:p-5 bg-gradient-to-br from-blue-600 to-purple-600 w-full h-full flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <div className="bg-white rounded-full px-3 sm:px-4 md:px-5 inline-block mb-2">
              <h4 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold text-sm sm:text-base">
                {title}
              </h4>
            </div>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed px-2">
              {description}
            </p>
          </div>
        </div>
      </a>
      {/* Project title below the image */}
      <div className="mt-3 text-center">
        <h5 className="font-semibold text-gradient text-sm sm:text-base md:text-lg">
          {title}
        </h5>
      </div>
    </div>
  )
}

// list project
export default function Portfolio() {
  const [portfolioItems] = useState([
    {
      imgSrc: "/images/port1.png",
      title: "Yt Clone",
      description: "Simple yt clone with react + express",
      link: "https://youtube-clone-lovat-theta.vercel.app/",
    },
    {
      imgSrc: "/images/port2.png",
      title: "Web Coffee",
      description: "Coffee business web landing page",
      link: "https://bunn-coffe.vercel.app/",
    },
    {
      imgSrc: "/images/port3.png",
      title: "Clone McDonald",
      description: "Simple mcdonald clone with react + bootstrap",
      link: "https://mcdonald-clone-three.vercel.app/",
    },
    {
      imgSrc: "/images/port4.png",
      title: "Web Template Portfolio",
      description: "Free portfolio template",
      link: "https://portofolio-template-web.vercel.app/",
    },
    {
      imgSrc: "/images/port5.png",
      title: "Landing Page Concrete Website",
      description: "Project to create a concrete website with CMS",
      link: "https://radianaspalbeton.com/",
    },
    {
      imgSrc: "/images/port6.png",
      title: "Instagram Clone",
      description: "Tech stack with flutter + firebase",
      link: "https://github.com/ChairulCode/",
    },
  ])

  return (
    <div id="portfolio" className="section">
      <div className="container mx-auto max-w-[1200px] px-3 sm:px-4 md:px-6 lg:px-3 pt-3 pb-10 sm:pb-16 md:pb-20">
        <div
          className="flex flex-col lg:flex-row justify-between items-center mb-8 sm:mb-12 md:mb-[50px]"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <div className="order-2 lg:order-1 mt-5 lg:mt-0 text-center lg:text-left">
            <h4 className="text-secondary font-secondary text-lg sm:text-xl md:text-[24px] mb-2">
              Recent Work
            </h4>
            <div className="text-gradient font-primary max-w-[700px] mx-auto lg:mx-0 text-xl sm:text-2xl md:text-[24px] font-bold">
              These Are My Projects
            </div>
          </div>
          <div className="order-1 lg:order-2 text-center">
            <h2 className="text-gradient font-primary text-4xl sm:text-5xl md:text-[50px] font-bold mb-2">
              06
            </h2>
            <div className="text-sm sm:text-base">Completed Projects</div>
          </div>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 text-center"
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
