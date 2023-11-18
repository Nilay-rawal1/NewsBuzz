import React, { Component } from "react";

//import PropTypes from 'prop-types'
export default class Newsitem extends Component {
  render() {
    let { title, description, imageurl, newsurl, author, date,source } = this.props;
    return (
      <>
     
      <div className="my-4 " >
       
        <div className="card  project-card-view" style={{border:" 1px solid purple"}}>
        <span className="position-absolute   translate-middle badge rounded-pill bg-danger" style={{left:'83%',zIndex:"1",top:"3%"}}>
              {source}
            </span> 
          <img
            src={
              !imageurl
                ? "https://img.etimg.com/thumb/msid-96185160,width-1070,height-580,imgsize-134558,overlay-economictimes/photo.jpg"
                : imageurl
            }
            className="card-img-top"
            style={{height:"15em"}}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title" style={{fontWeight:"700", color:"whitesmoke" ,fontSize:"1.6rem"}}>{title}...  </h5>
            <p className="card-text" style={{fontSize:"1.1rem" ,fontWeight:"500"}}>{description}... </p>
            <p className="card-text">
              <small className="text-light" style={{fontWeight:"300"}}>
                by {!author ? "unknown" : author} <br/>
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsurl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
              style={{background:"black"}}
            >
              Read More..
            </a>
          </div>
        </div>
      </div>
      </>
    );
  }
}
