import React,{useState} from 'react'

const Item = (props) => {
    const [imgurl,setimgurl]=useState(props.imgsrc);

    let imgchange = ()=>{
            setimgurl(props.imgurl2);
        }
        
        let imgchange1 = () =>{
            
            setimgurl(props.imgsrc);
    }

  return (
    <>
        <div className="card" id='item' style={{width:'17rem',height:'25rem'}}>

        <div className="card"  style={{width:'20rem',height:'25rem'}} onMouseOver={imgchange} onMouseOut={imgchange1}>
            <img src={imgurl} alt="" style={{width:'20rem',height:'cover'}}/>
            <div className="items">
            <i className="bi bi-heart"></i>
            <i className="bi bi-cart3"></i>
            </div>
        </div>
        <h6>{props.itemname}</h6>
        <p>{props.itemprice}</p>
        </div>
    </>
  )
}

export default Item