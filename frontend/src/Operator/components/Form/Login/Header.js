import React from 'react'

function Header() {
  return (
    <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor:'#0abb87' }}
      >
        <div className=" navbar-nav mx-auto " style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <div className="nav-item">
            <img
              className="img-fluid rounded-circle"
              src="/images/logo.png"
              alt="Responsive image"
              style={{ height: "50px", width: "50px" }}
            />
          </div>
          <div className="nav-item" style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <div style={{ fontSize: "18px", color: "white" }}>
              West Bengal Pollution Control Board
            </div>
            <div style={{ fontSize: "15px", color: "white" }}> RTI Application Monitoring System </div>
          </div>
        </div>
        
        


      </nav>
  )
}

export default Header