import React from 'react'
import Record from "../Record.json";
import { Link } from "react-router-dom";
import Item from './Item';

const Features = () => {
  document.title="Features";
  return (
    <>
    <div className="container my-5">
        <h4 className="text-center">NEW FEATURES</h4>
        <p className="text-center">
          Shop our new Features from established brands
        </p>
        <div className="row">
        
        {
            Record && Record.map((record) => {

            return (
                <div className="col-md-3 my-2 d-flex justify-content-center">
              <Link key={record.id}
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
    </>

  )
}

export default Features