import React from 'react'
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaRegWindowMaximize,
  } from "react-icons/fa";

import Image from "next/image";
import { server } from "../config/index";
  
export default function PortfolioItemDetails({portfolio}) {
  return (
    <div className="portfolio-details mt-50 mb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="portfolio-details-left ">
                <div className="portfolio-details-lft-img">
                  <a href={portfolio?.twLink} target='_blank' rel="noreferrer">
                  <Image
                    src={`${server}/${portfolio?.thambnail_image}`}
                    alt={portfolio?.portfolio_title}
                    width={570}
                    height={495}
                    priority
                  />  
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="portfolio-details-right-wrap">
                <h3 className="ptf-details-title">{portfolio?.portfolio_title}</h3>

                <ul className="portfolio-details-info">
                  <li>
                    <h4>PROJECT NAME :</h4>
                    <p>{portfolio?.project_name}</p>
                  </li>
                  <li>
                    <h4>Client :</h4>
                    <p>{portfolio?.project_client}</p>
                  </li>
                  <li>
                    <h4>Category :</h4>
                    <p>{portfolio?.project_name}</p>
                  </li>
                  <li>
                    <h4>Delivery Mode :</h4>
                    <p>{portfolio?.project_mode}</p>
                  </li>

                  <li>
                    <h4>Location :</h4>
                    <p>{portfolio?.location}</p>
                  </li>
                  <li>
                    <h4>Share :</h4>
                    <ul className="share text-center text-md-end">
                    {portfolio?.fbLink &&  <li>
                      <a className="share-item" href={portfolio?.fbLink}>
                        {" "}
                        <FaFacebookF />{" "}
                      </a>
                    </li>} 
                    {/* site link */}
                    {portfolio?.twLink && <li>
                        <a className="share-item" target='_blank' rel="noreferrer" href={portfolio?.twLink}>
                          {" "}
                          <FaRegWindowMaximize />{" "}
                        </a>
                      </li>}
                      {portfolio?.inLink && <li>
                        <a className="share-item" href={portfolio?.inLink}>
                          {" "}
                          <FaLinkedinIn />{" "}
                        </a>
                      </li>}
                      {portfolio?.insLink &&  <li>
                        <a className="share-item" href={portfolio?.insLink}>
                          {" "}
                          <FaInstagram />{" "}
                        </a>
                      </li>}
                     
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="portfolio-details-info">
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${portfolio?.portfolio_desc}`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
