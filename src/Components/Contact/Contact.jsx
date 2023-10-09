import React from 'react'

const btn1 = {
  position: 'relative',
  display: 'inline-block',
  'font-size': '20px',
  'vertical-align': 'top',
  'text-align': 'center',
  'line-height': '24px',
  color: '#7f479a',
  'font-weight': '400',
  'font-family': 'Berkshire Swash',
  padding: '12px',
  'border-radius': '35px',
  width: '155px',
  height: '48px',
  '-webkit-transition': 'ease all .5s',
  '-moz-transition': 'ease all .5s',
  '-o-transition': 'ease all .5s',
  transition: 'ease all .5s',
  background: '#f7ea66',
};



export default function Contact() {
  return (
<div style={{ backgroundColor: '#2C0047', height: '100vh', display: 'flex', alignItems: 'top', justifyContent: 'center', padding:'5rem' }}>
  <div className="container-fluid text-center">
    <h2 className="my-5" style={{ color: '#f7ea66' }}>Invite Someone Special</h2>
    <form className="text-white">
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="guestName" className="form-label">Guest Name</label>
          <input type="text" className="form-control" id="guestName" />
        </div>
        <div className="col-md-6">
          <label htmlFor="guestEmail" className="form-label">Guest Email Address</label>
          <input type="email" className="form-control" id="guestEmail" />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="guestMobile" className="form-label">Guest Mobile Number</label>
          <input type="tel" className="form-control" id="guestMobile" />
        </div>
        <div className="col-md-6">
          <label htmlFor="combineEntry" className="form-label">Combine Entry</label>
          <input type="text" className="form-control" id="combineEntry" />
        </div>
      </div>
      <button className="btn" style={btn1}>Send Invitation</button>
    </form>
  </div>
</div>

  )
}
