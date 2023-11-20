
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'


export class navbar extends Component {
  

 

  render() {
    return (
          <>  
         
          <div aria-hidden="true "></div>
        <nav   className="navbar navbg fixed-top navbar-expand-lg  text-dark bg-dark navbar-dark" id=''>
        <div className="container-fluid  my-2">
          <Link className="navbar-brand" to="/">NewsBuzz</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-dark">
              <li className="nav-item">
                <Link className="nav-link tex-dark" aria-current="page" to="/register">Home</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">Entertainment</Link>
              </li>
             
              <li className="nav-item">
                <Link className="nav-link" to="/health">Health</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/sports">Sports</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/technology">Technology</Link>
              </li>

              <li className='nav-item'>
                <Link className="nav-link" to="/dashboard">Dashboard</Link>
              </li>
              
            </ul>
            
            <button className='login login-right '>
                <Link to='/register'>Register</Link>
              </button>
              <button className='login '>
                <Link to='/login'>Login</Link>
              </button>

            
          </div>
        </div>
      </nav>
      </>
    )
  }
}

export default navbar