import React from 'react'

const Blog = (props) => {
  return (
    <>
        <div className="card" style={{ width: props.size,height:props.size }}>
        <img src={props.imgsrc} className="card-img-top" alt="..." />
        <h6 className='text-center'>{props.htxt}</h6>
        <p className='text-center'>{props.txt}</p>
      </div>
    </>
  )
}

export default Blog