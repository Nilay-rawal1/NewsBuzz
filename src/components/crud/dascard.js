import React from 'react'

const Dascard = () => {
    let { title, content,} = this.props;
  return (
    <>
     
      <div className="my-4 " >
       
        <div className="card  project-card-view" style={{border:" 1px solid purple"}}>
        
          <div className="card-body">
            <h5 className="card-title" style={{fontWeight:"700", color:"whitesmoke" ,fontSize:"1.6rem"}}>{title}...  </h5>
            <p className="card-text" style={{fontSize:"1.1rem" ,fontWeight:"500"}}>{content}... </p>
           
          </div>
        </div>
      </div>
      </>
  )
}

export default Dascard