import React from 'react'
import aritstImg from '../Images/artist-image.png'

export default function Artist() {
  return (
    <div className="container-fluid text-center" style={{ backgroundColor: '#2C0047', height: '100vh' }}>
    <h2 className="p-5" style={{ color: '#f7ea66' }}>Our Halloween's Artist</h2>
    <div className="container d-flex justify-content-center">
      <div className="text-white">
        <img src={aritstImg} alt="" />
        <div>
          <h2>DJ Remerson Huke</h2>
          <h3>Lead DJ On Deadpoll</h3>
          <p>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore.
          </p>
        </div>
      </div>
      <div className="text-white">
        <img src={aritstImg} alt="" />
        <div>
          <h2>DJ Remerson Huke</h2>
          <h3>Lead DJ On Deadpoll</h3>
          <p>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore.
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}
