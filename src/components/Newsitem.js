import React, { Component } from "react";
//import PropTypes from 'prop-types'
export default class Newsitem extends Component {
  render() {
    let { title, description, imageurl, newsurl } = this.props;
    return (
      <div className="my-3">
        <div className="card" >
          <img src={!imageurl?"https://img.etimg.com/thumb/msid-96185160,width-1070,height-580,imgsize-134558,overlay-economictimes/photo.jpg":imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a
              href={newsurl}
              target="_blank"
              
              className="btn btn-sm btn-primary"
            >
              Read More..
            </a>
          </div>
        </div>
      </div>
    );
  }
}
