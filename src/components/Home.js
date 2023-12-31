import React from "react";
import img1 from "../images/img1.webp";
import img2 from "../images/img2.webp";
import img3 from "../images/img2.jpg";
import img4 from "../images/womens-top.webp";
import img5 from "../images/accesories.webp";
import img6 from "../images/men-clothing.webp";
import img7 from "../images/denim.webp";
import img8 from "../images/best-collections.webp";
import img9 from "../images/awesome-tops.webp";
import blog1 from "../images/blogimg/blog1.webp";
import blog2 from "../images/blogimg/blog2.webp";
import blog3 from "../images/blogimg/blog3.webp";
import Offer from "./Offer";
import Item from "./Item";
import Blog from "./Blog";
import Record from "../Record.json";
import { Link } from "react-router-dom";

const Home = () => {
  document.title = "E-Cart";
  return (
    <>
      {/* Carousel start */}

      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Carousel end */}

      {/* offer start */}
      <div className="container my-5 d-md-block d-none">
        <div className="row">
          <div className="col-md-6">
            <Offer
              size="100%"
              boxsize="50%"
              imgsrc={img4}
              htxt="WOMEN TOPS"
              txt="From world's top designer"
              btn="SHOP NOW"
            />
            <Offer
              size="100%"
              boxsize="50%"
              imgsrc={img5}
              htxt="MEN SHIRTS"
              txt="Up to 70% off on selected item"
              btn="SHOP NOW"
            />
          </div>

          <div className="col-md-6">
            <Offer
              size="100%"
              boxsize="50%"
              imgsrc={img6}
              htxt="ACCESSORIES"
              txt="Add finishing touch to your outfit"
              btn="SHOP NOW"
            />
            <Offer
              size="100%"
              boxsize="50%"
              imgsrc={img7}
              htxt="DENIM"
              txt="Find your perfect outfit"
              btn="SHOP NOW"
            />
          </div>
        </div>
      </div>
      {/* offer end */}

      {/* item start */}

      <div className="container my-5">
        <h4 className="text-center">NEW ARRIVALS</h4>
        <p className="text-center">
          Shop our new arrivals from established brands
        </p>
        <div className="row">
      
        {
            Record && Record.map((record) => {

            return (
                <div className="col-md-3 my-2 d-flex justify-content-center" key={record.id}>
              <Link
                to="/products"
                state={{
                  img1: record.img1,
                  img2: record.img2,
                  img3: record.img3,
                  img4: record.img4,
                  img5: record.img5,
                  proname: record.proname,
                  price: record.price,
                }}
              >
                  <Item
                    imgsrc={record.img1}
                    imgurl2={record.img2}
                    itemname={record.proname}
                    itemprice={record.price}
                  />
              </Link>
                </div>

            );
          })}
         
        </div>
      </div>


      {/* item end */}

      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <Offer
              size="100%"
              boxsize="80%"
              imgsrc={img8}
              htxt="FIND THE BEST COLLECTION AROUND THE WORLD"
              txt="&nbsp;"
              btn="SHOP NOW"
            />
          </div>
          <div className="col-md-6">
            <Offer
              size="100%"
              boxsize="80%"
              imgsrc={img9}
              htxt="AWESOME T-SHIRTS, CROP TOPS AND MORE..."
              txt="&nbsp;"
              btn="VIEW COLLECTION"
            />
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h4 className="text-center">FRESH FROM OUR BLOG</h4>
        <p className="text-center">
          You are going to love this amazing E-Cart.
        </p>
        <div className="row">
          <div className="col-md-4">
        
            <Blog size="100%" imgsrc={blog1} htxt="7 Easy Rules to Write Product Descriptions That Sell" txt="July 16, 2022"/>
          </div>
          <div className="col-md-4">
         
          <Blog size="100%" imgsrc={blog2} htxt=" Women Wear that’ll have you Daydreaming Your Holiday" txt="June 26, 2022"/>

          </div>
          <div className="col-md-4">

          <Blog size="100%" imgsrc={blog3} htxt="Our development is your success &nbsp;" txt="March 6, 2019"/>

          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
