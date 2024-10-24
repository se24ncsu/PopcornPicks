import React from 'react'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark topNavBar fixed-top" id="landingTopNav">
    <div className="container-fluid">
      <a className="navbar-brand" href='/'> PopcornPicks🍿</a> <button type="button" id="signOut" onclick="signOut()" >Sign Out</button>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
  )
}

export default Navbar