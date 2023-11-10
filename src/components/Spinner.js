import React, { Component } from 'react'
import loading from './pre.svg'
export default class Spinner extends Component {
  render() {
    return (
     <div className='text-center mb-9'>
        <img  className="no-repeat" src={loading} alt='loading'/>
     </div>
    )
  }
}
