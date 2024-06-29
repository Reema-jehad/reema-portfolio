import React from 'react';
import { Col } from "react-bootstrap"

export const ProjectCard=({title,languages,imageURL})=>{
  return(
    <Col className='box' sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imageURL}/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{languages}</span>
        </div>
      </div>
    </Col>
  )
}