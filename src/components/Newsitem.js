import React, { Component } from "react";
//import PropTypes from 'prop-types'
export default class Newsitem extends Component {
  render() {
    let { title, description, imageurl, newsurl, author, date,source } = this.props;
    return (
      <div className="my-3">
        <div className="card " style={{border:" 3px groove black"}}>
        <span class="position-absolute   translate-middle badge rounded-pill bg-danger" style={{left:'83%',zIndex:"1",top:"2%"}}>
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
          <div className="card-body bg-gradient">
            <h5 className="card-title">{title}...  </h5>
            <p className="card-text">{description}... </p>
            <p class="card-text">
              <small class="text-muted">
                by {!author ? "unknown" : author} <br/>
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsurl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More..
            </a>
          </div>
        </div>
      </div>
    );
  }
}
