import React from 'react'



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

export default function About() {
  return (
    <div className="container-fluid text-center" style={{backgroundColor:'#2C0047',height:'100vh'}}>
      <h2 className='p-5' style={{color: '#f7ea66'}}>About The Party</h2>
      <p className='text-white'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
      </p>
      <p className='text-white'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
      </p>
      <button className='btn' style={btn1}>Know More</button>
    </div>
  )
}
