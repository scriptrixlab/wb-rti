import React from "react";
import { useState } from "react";
import Menu from "../MenuItem";

const Header = (props) => {
  // const [isVisible,setIsVisible] = useState(false);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ background: "rgb(17,175,0)",
          background: " linear-gradient(90deg, rgba(17,175,0,1) 5%, rgba(56,208,17,1) 27%, rgba(113,223,146,1) 50%, rgba(111,208,140,1) 82%, rgba(142,242,196,1) 100%, rgba(20,109,171,0.08727240896358546) 100%)" }}
      >
      {/* <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}> */}
      <div>
        <button
          className=" btn btn-outline-light"
          data-bs-toggle="offcanvas"
          href="#offcanvasExample"
          type="button"
          aria-controls="offcanvasExample"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        </div>
        <div className=" navbar-nav mx-auto " style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <div className="nav-item">
            <img
              className="img-fluid rounded-circle"
              src="/images/logo.png"
              alt="Responsive image"
              style={{ height: "50px", width: "50px" ,margin:'0 15px 0 0'}}
            />
          </div>
          <div className="nav-item" style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <div style={{ fontSize: "18px", color: "white" }}>
              West Bengal Pollution Control Board
            </div>
            <div style={{ fontSize: "15px", color: "white" }}> RTI Application Monitoring System </div>
          </div>
        </div>
        <div className="d-flex me-2">
        
      
        <button type="button" class="btn btn-warning">
        <i class="bi bi-bell"></i>
        </button>
      
        </div>
        {/* </div> */}

        {/* <div style={{display:'flex',justifyContent:'space-between'}}>
          <div>icon</div>
          <div>title</div>
          <div>notification</div>
        </div> */}


      </nav>

      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
        style={{maxWidth:'250px',backgroundColor:'#c5e7ba'}}>
        <div class="offcanvas-header">
          <img
            src="/images/profile.png"
            className=" img-fluid rounded mx-auto d-block"
            alt="Responsive image"
            style={{ height: "100px", width: "100px" }}
          />
          
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
          
        </div>
        <div className="form-group mx-auto" style={{width:'100px'}}>
          <input className="form-control rounder-5" type='text' placeholder="Name" value='admin'/>
        </div>
        <div class="offcanvas-body">
          <Menu {...props} />
        </div>
      </div>
    </>
  );
};

export default Header;
