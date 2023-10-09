import React from 'react'
import Banner from '../Images/Banner.png'


const btn1 = {
    position: 'relative',
    display: 'inline-block',
   ' font-size': '20px',
   ' vertical-align': 'top',
   ' text-align': 'center',
    'line-height': '24px',
    color: '#7f479a',
    'font-weight': '400',
    'font-family': "Berkshire Swash",
    padding: '12px',
    'border-radius': '35px',
    width: '155px',
    height: '48px',
    '-webkit-transition': 'ease all .5s',
    '-moz-transition': 'ease all .5s',
    '-o-transition': 'ease all .5s',
    transition: 'ease all .5s',
    background: '#f7ea66',
}



export default function Home() {
  return (
<div style={{backgroundColor:'#2C0047', height:'100vh'}}>
      <div className="container">
        <div className="row">
          {/* Left column for the image */}
          <div className="col-md-6">
            <img src={Banner} alt="Halloween" className="img-fluid" />
          </div>
          {/* Right column for the text */}
          <div className="col-md-6 text-center text-white my-5 p-5">
            <div>
              <h1 >31st October 2018</h1>
              <h2 className='my-5' style={{color: '#f7ea66'}}>Halloween Party</h2>
              <p className='h3 mb-5'>
                Halloween or Hallowe'en (a contraction of All Hallows' Evening) also known as Allhalloween, All Hallows' Eve or All Saints' Eve is a celebration observed in a number of countries on 31 October.
              </p>
              <button className='btn' style={btn1}>Explore more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
