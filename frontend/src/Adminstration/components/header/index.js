import React from "react";
// import { useState } from "react";
import MemberMenu from "../menubar"

const AdministrationHeader = () => {


  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ background: 'rgb(99,100,215)',
        background: 'linear-gradient(90deg, rgba(99,100,215,1) 4%, rgba(216,214,245,1) 100%, rgba(134,129,223,0.08727240896358546) 100%, rgba(11,186,64,1) 100%, rgba(3,227,69,1) 100%, rgba(89,74,230,1) 100%)'}}>
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
              style={{ height: "50px", width: "50px",margin:'0 15px 0 0'}}
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
        
      
        <button type="button" class="btn btn-warning" style={{  }}>
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
        style={{background: 'rgb(227,239,241)',maxWidth:'250px',
      background: '  linear-gradient(90deg, rgba(227,239,241,0.08727240896358546) 0%, rgba(80,219,249,1) 4%, rgba(54,238,199,1) 64%, rgba(36,193,226,1) 100%, rgba(11,186,64,1) 100%, rgba(3,227,69,1) 100%)'}}
      >
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
          <input className="form-control rounder-5" type='text' placeholder="Name" value='Administration'/>
        </div>
        <div class="offcanvas-body" >
          <MemberMenu />
        </div>
      </div>
    </>
  );
};

export default AdministrationHeader;
