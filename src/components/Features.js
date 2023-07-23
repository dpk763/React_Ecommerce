import React from 'react'
import item1 from "./images/items/item1.webp";
import item2 from "./images/items/item2.webp";
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
          <div className="col-md-3 my-2 d-flex justify-content-center">
            <Item
              imgsrc={item1}
              imgurl2={item2}
              itemname="Innerbloom Puffer Jacket"
              itemprice="Rs. 500.00"
            />
          </div>

          <div className="col-md-3 my-2 d-flex justify-content-center">
            <Item
              imgsrc={item1}
              imgurl2={item2}
              itemname="Innerbloom Puffer Jacket"
              itemprice="Rs. 500.00"
            />
          </div>

          <div className="col-md-3 my-2 d-flex justify-content-center">
            <Item
              imgsrc={item1}
              imgurl2={item2}
              itemname="Innerbloom Puffer Jacket"
              itemprice="Rs. 500.00"
            />
          </div>

          <div className="col-md-3 my-2 d-flex justify-content-center">
            <Item
              imgsrc={item1}
              imgurl2={item2}
              itemname="Innerbloom Puffer Jacket"
              itemprice="Rs. 500.00"
            />
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-md-3 my-2 d-flex justify-content-center">
            <Item
              imgsrc={item1}
              imgurl2={item2}
              itemname="Innerbloom Puffer Jacket"
              itemprice="Rs. 500.00"
            />
          </div>

          <div className="col-md-3 my-2 d-flex justify-content-center">
            <Item
              imgsrc={item1}
              imgurl2={item2}
              itemname="Innerbloom Puffer Jacket"
              itemprice="Rs. 500.00"
            />
          </div>

          <div className="col-md-3 my-2 d-flex justify-content-center">
            <Item
              imgsrc={item1}
              imgurl2={item2}
              itemname="Innerbloom Puffer Jacket"
              itemprice="Rs. 500.00"
            />
          </div>

          <div className="col-md-3 my-2 d-flex justify-content-center">
            <Item
              imgsrc={item1}
              imgurl2={item2}
              itemname="Innerbloom Puffer Jacket"
              itemprice="Rs. 500.00"
            />
          </div>
        </div>
      </div>
    </>

  )
}

export default Features