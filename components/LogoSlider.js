import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const reactJS = "./webLogo/ReactJS_logo.png";
const nextJS = "./webLogo/Nextjs.png";
const nodeJS = "./webLogo/nodejs.png";
const djaongo = "./webLogo/django.png";
const expreeejs = "./webLogo/Express.png";
const mongodb = "./webLogo/MongoDB.png";
const larabel = "./webLogo/Laravel.png";
const mern = "./webLogo/MERN.png";
const dotNet = "./webLogo/dotNet.png";
const figma = "./webLogo/figma.png";
const php = "./webLogo/php.png";
const reactNative = "./webLogo/reactNative.png";
const xd = "./webLogo/xd.png";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function LogoSlider() {
  return (
    <div style={{ marginTop: "5vh" }} className="container">
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={false}
        showDots={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2500}
        transition={1500}
        loop={true}
        customTransition="1300ms ease-in-out"
      >
        {[
          reactJS,
          nextJS,
          djaongo,
          nodeJS,
          expreeejs,
          mongodb,
          larabel,
          mern,
          dotNet,
          figma,
          php,
          reactNative,
          xd,
        ].map((item, index) => (
          <div key={index} className="logoLiderDiv">
            <div
              style={{
                height: "100%",
                objectFit: "cover",
                backgroundImage: `url(${item})`,
                width: "100%",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              className="img"
            >
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default LogoSlider;
