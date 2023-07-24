import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Products = (props) => {
    const location = useLocation();
    const data = location.state;
  const [img, setimg] = useState(data.img1);
  const [val,setval] = useState(1);


  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  let d = new Date();
  let est = new Date(d.setDate(d.getDate()+4));
  let est1 = new Date(d.setDate(d.getDate()+6));
  let day = `${days[est.getDay()]} ${est.getDate()} ${months[est.getMonth()]} - ${days[est1.getDay()]} ${est1.getDate()} ${months[est1.getMonth()]}`;



  let change = (e) => {
    setimg(e.target.src);
  };

  let changeval = (e)=>{

    if(e.target.innerHTML==='+'){

        
        setval(val+1);
    }
    else{
        if(val!==1){
            setval(val-1);
            
        }
    }

  }

  
  
  const imgzoomin = (e)=>{
   const zimg = document.querySelector("#zimg");
   const x = e.clientX - e.target.offsetLeft;
   const y = e.clientY - e.target.offsetTop;
   zimg.style.transformOrigin =`${x}px ${y}px`;
   zimg.style.transform=`scale(2.5)`;
  }
  const imgzoomout = ()=>{
    const zimg = document.querySelector("#zimg");
    zimg.style.transformOrigin =`center`;
    zimg.style.transform=`scale(1)`;
  }

  // const [itemsize,setitemsize]=useState('S');
  const sizebtn = (e) =>{

    // setitemsize(e.target.innerHTML);
    e.target.classList.toggle('bg-primary');
    e.target.classList.toggle('text-light');

  }
  


  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="row my-2">
              <div className="col-4">
                <img
                  src={data.img2}
                  className="rounded mx-auto d-block my-2"
                  onMouseOver={change}
                  style={{ width: "50%", cursor: "pointer" }}
                  alt="..."
                />
                <img
                  src={data.img3}
                  className="rounded mx-auto d-block my-2"
                  onMouseOver={change}
                  style={{ width: "50%", cursor: "pointer" }}
                  alt="..."
                />
                <img
                  src={data.img4}
                  className="rounded mx-auto d-block my-2"
                  onMouseOver={change}
                  style={{ width: "50%", cursor: "pointer" }}
                  alt="..."
                />
                <img
                  src={data.img5}
                  className="rounded mx-auto d-block my-2"
                  onMouseOver={change}
                  style={{ width: "50%", cursor: "pointer" }}
                  alt="..."
                />
              </div>
              <div className="col-8" style={{overflow:'hidden',cursor:'zoom-in'}} onMouseMove={imgzoomin} onMouseLeave={imgzoomout} >
                <img
                  src={img}
                  className="rounded d-block my-2"
                  style={{ width: "99%" }}
                  alt="..." id="zimg"
                />
              </div>
            </div>
          </div>

          <div className="col-md-6 my-3">
            <h4>{data.proname}</h4>
            <h4 className="my-3">Rs. {data.price}</h4>
            <p className="my-3">Tax included.</p>

            <div className="mt-5 mb-2">
                <div className="btn border-primary mx-2" onClick={sizebtn}>S</div>
                <div className="btn border-primary mx-2" onClick={sizebtn}>M</div>
                <div className="btn border-primary mx-2" onClick={sizebtn}>L</div>
            </div>

            <div className="row">
              <div className="col-md-12 my-3 p-2">
            <p>No of Item</p>
                <span className="btn btn-primary" onClick={changeval}>-</span>
                <input
                  type="text"
                  name=""
                  id=""
                  onChange={changeval}
                  value={val}
                  style={{
                    border: "none",
                    outline: "none",
                    width: "70px",
                    textAlign: "center",
                  }}
                />
                <span className="btn btn-primary" onClick={changeval}>+</span>
              </div>
              <div className="col-md-12 my-3 d-grid gap-2">
                <button className="btn btn-primary">ADD TO CART</button>
              </div>
              
            </div>

            <p><i className="bi bi-truck"></i>  You have got <b>FREE SHIPPING</b></p>
            <p><i className="bi bi-clock"></i>  Estimated delivery between <b>{day}.</b></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
