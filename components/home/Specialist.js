import Image from "next/image";
import {
  FaRegLightbulb,
  FaHeadphonesAlt,
} from "react-icons/fa";

// Import Swiper styles
import "swiper/css";

export default function Specialist() {
  return (
    <div className="specialist-team-area bg-brand text-center text-md-start">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 wow fadeInLeft">
            <div className="section-title">
                <span className="mini">Our Support</span>
              <h2>IT professionals at your service</h2>
              <p className="pera pe-md-5">
                Every project is handled by a team of industry experts. The
                proper knowledge, research, analysis, and implementation help us
                develop your business.
              </p>
            </div>

            <ul className="specialist-items">
              <li className="sp-item ">
                <span>
                  <FaHeadphonesAlt />
                </span>
                <div className="sp-item-info">
                  <h4>Robust Support</h4>
                  <p className="pera  ">
                    Professional support within global horizon regardless time
                    zone and regional borders.
                  </p>
                </div>
              </li>
              <li className="sp-item">
                <span className="agailimage">
                  <FaRegLightbulb />
                </span>
                <div className="sp-item-info mb-5 mb-md-0">
                  <h4>Agile Solution</h4>
                  <p className="pera">
                    Equipped with high-end technological supports and experts, a
                    combination of global service provider.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <div className="sp-r-section-wrap">
              <div className="sp-feature-img">
                <Image
                  className="sp-feature  wow pulse"
                  src="/specialist/pic-1.jpg"
                  alt="Support"
                  width={380}
                  height={550}
                />

                <img
                  src="./specialist/pic-3.jpg"
                  alt="Robust Support"
                  className="sp-child  d-none d-lg-block"
                />
              </div>
              <div className="sp-img-r-child d-none d-md-block wow bounceIn">
                <Image
                  src="/specialist/pic-2.jpg"
                  alt="Solution"
                  width={194}
                  height={250}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
