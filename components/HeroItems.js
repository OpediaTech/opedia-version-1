// import Head from "next/head";
import { FaRegLightbulb } from "react-icons/fa";
import Head from "next/head";
import Image from "next/image";

import React, { Component } from "react";
import Slider from "react-slick";
import Link from "next/link";

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }
  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    const settings = {
      infinite: true,
      speed: 500,
      autoplay: true,
      arrows: false,
      dots: true,
      fade: true,
      loop: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const settings2 = {
      dots: true,
      infinite: true,
      loop: true,
      speed: 500,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Head>
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </Head>
       <div className="totalHeroWrap">
       <Slider
          {...settings}
          asNavFor={this.state.nav2}
          ref={(slider) => (this.slider1 = slider)}
        >

          {/* hero top */}
          <div className="hero-wrap">
            <div className="row align-items-center">
              {/* left part */}
              <div className="col-md-6 wow bounceInLeft" data-wow-duration="3s">
                <div className="hero-left">
                  <h2>Web & Software</h2>
                  <div className="hero-action">
                    <Link href="/contact">
                      <a className="btn-brand"> Get A Quote</a>
                    </Link>
                    <Link href="/service/category/web-software">
                      <a className="btn-two mt-3 mt-lg-0">Learn More</a>
                    </Link>
                  </div>
                </div>
              </div>
              {/* left part */}

              <div
                className="col-md-6 wow bounceInRight"
                data-wow-duration="3s"
              >
                <div className="hero-right pt-40 ">
                  <Image src="/hero/pic-1.png" alt="Web & Software" layout="fill" priority />
                </div>
              </div>
            </div>
          </div>
          {/* hero top */}

          {/* </ReactWOW> */}
          {/* hero top */}
          <div className="hero-wrap">
            <div className="row align-items-center">
              {/* left part */}
              <div className="col-md-6">
                <div className="hero-left">
                  <h2>
                    Product <br /> Design{" "}
                  </h2>

                  <div className="hero-action">
                    <Link href="/contact">
                      <a className="btn-brand"> Get A Quote</a>
                    </Link>
                    <Link href="/service/category/product-design">
                      <a className="btn-two">Learn More</a>
                    </Link>
                  </div>
                </div>
              </div>
              {/* left part */}

              <div className="col-md-6">
                <div className="hero-right pt-40 ">
                  <Image src="/hero/pic-4.png" alt="product design" layout="fill" priority />
                </div>
              </div>
            </div>
          </div>
          {/* hero top */}
          {/* hero top */}
          <div className="hero-wrap">
            <div className="row align-items-center">
              {/* left part */}
              <div className="col-md-6">
                <div className="hero-left ">
                  <h2>
                    Digital Marketing
                    <br />
                  </h2>
                  <div className="hero-action">
                    <Link href="/contact">
                      <a className="btn-brand"> Get A Quote</a>
                    </Link>
                    <Link href="/service/category/digital-marketing">
                      <a className="btn-two">Learn More</a>
                    </Link>
                  </div>
                </div>
              </div>
              {/* left part */}

              <div className="col-md-6">
                <div className="hero-right pt-40 ">
                  <Image src="/hero/pic-3.png" alt="Digital Marketing" layout="fill" />
                </div>
              </div>
            </div>
          </div>
          {/* hero top */}
          {/* hero top */}
          <div className="hero-wrap ">
            <div className="row align-items-center ">
              {/* left part */}
              <div className="col-md-6">
                <div className="hero-left">
                  <h2>Ecommerce Solution</h2>
                  <div className="hero-action">
                    <Link href="/contact">
                      <a className="btn-brand"> Get A Quote</a>
                    </Link>
                    <Link href="/service/category/ecommerce-solution">
                      <a className="btn-two">Learn More</a>
                    </Link>
                  </div>
                </div>
              </div>
              {/* left part */}

              <div className="col-md-6">
                <div className="hero-right pt-40">
                  <Image src="/hero/pic-5.png" alt="Ecommerce Solution" layout="fill" />
                </div>
              </div>
            </div>
          </div>
          {/* hero top */}
          {/* hero top */}
          <div className="hero-wrap ">
            <div className="row align-items-center ">
              {/* left part */}
              <div className="col-md-6">
                <div className="hero-left">
                  <h2>Multimedia & Printing</h2>
                  <div className="hero-action">
                    <Link href="/contact">
                      <a className="btn-brand"> Get A Quote</a>
                    </Link>
                    <Link href="/service/category/multimedia-printing">
                      <a className="btn-two">Learn More</a>
                    </Link>
                  </div>
                </div>
              </div>
              {/* left part */}
              <div className="col-md-6">
                <div className="hero-right pt-40">
                  <Image src="/hero/pic-2.png" alt="Multimedia & printing" layout="fill" />
                </div>
              </div>
            </div>
          </div>
          {/* hero top */}
        </Slider>

        {/* Slider two */}

        <div className="hero-bottom-wrap">
          <Slider
            {...settings2}
            asNavFor={this.state.nav1}
            ref={(slider) => (this.slider2 = slider)}
            swipeToSlide={true}
            focusOnSelect={true}
          >
            {/* single item */}
            <div className="hero-bottom-section">
              <div className="hero-bottom-items d-flex align-items-center justify-content-center">
                <div className="icons">
                  <FaRegLightbulb />
                </div>
                <div className="hero-bottom-info">
                  <h4>Web & Software</h4>
                  <p className="pera">Static, Dynamic & Responsive solution</p>
                </div>
              </div>
            </div>
            {/* single item */}
            {/* single item */}
            <div className="hero-bottom-section">
              <div className="hero-bottom-items d-flex align-items-center justify-content-center">
                <div className="icons">
                  <FaRegLightbulb />
                </div>
                <div className="hero-bottom-info">
                  <h4>Product Design</h4>
                  <p>We provide attractive product design </p>
                </div>
              </div>
            </div>
            {/* single item */}
            {/* single item */}
            <div className="hero-bottom-section">
              <div className="hero-bottom-items d-flex align-items-center justify-content-center">
                <div className="icons">
                  <FaRegLightbulb />
                </div>
                <div className="hero-bottom-info">
                  <h4>Digital Marketing</h4>
                  <p>Our Best Digital Marketing Services </p>
                </div>
              </div>
            </div>
            {/* single item */}
            {/* single item */}
            <div className="hero-bottom-section">
              <div className="hero-bottom-items d-flex align-items-center justify-content-center">
                <div className="icons">
                  <FaRegLightbulb />
                </div>
                <div className="hero-bottom-info">
                  <h4>Ecommerce </h4>
                  <p> Improve your ecommerce with us! </p>
                </div>
              </div>
            </div>
            {/* single item */}
            {/* single item */}
            <div className="hero-bottom-section">
              <div className="hero-bottom-items d-flex align-items-center justify-content-center">
                <div className="icons">
                  <FaRegLightbulb />
                </div>
                <div className="hero-bottom-info">
                  <h4>Multimedia </h4>
                  <p> Improve your Multimedia with us! </p>
                </div>
              </div>
            </div>
            {/* single item */}
          </Slider>
        </div>
         </div>
      </div>
    );
  }
}
