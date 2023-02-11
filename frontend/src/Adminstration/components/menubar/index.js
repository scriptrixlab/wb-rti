import React from "react";
import { useHistory } from 'react-router-dom';


const AdministrationMenu = () => {
  let history = useHistory(); 
  function handleEndorsment() {
    history.push("/administration/endorsmentlist");
  } 
  function handleDashboard() {
    history.push("/administration/dashboard");
  } 

  return (
    <div className="container-fluid" >
   
      <ul className="nav  justify-content-center d-grid gap-4">
      <li className="nav-item">
          <button
            className="btn btn-outline-warning  rounded-pill"
            type="button"
            aria-current="page"
            href="#"
            style={{ width: "12rem",color:"#000"}}
            onClick={handleDashboard}
          >
            <i
              className="bi bi-backspace"
              style={{ fontSize: "20px", fontFamily: "sans-serif" }}
            >
              Back
            </i>
          </button>
        </li>
        <li className="nav-item">
          <button
            className="btn btn-outline-warning  rounded-pill"
            type="button"
            aria-current="page"
            href="#"
            style={{ width: "12rem",color:"#000" }}
            onClick={handleDashboard}
          >
            <i
              className="bi bi-speedometer"
              style={{ fontSize: "20px", fontFamily: "sans-serif" }}
            >
              Dashboard
            </i>
          </button>
        </li>
        <li className="nav-item">
          <button
            className="btn btn-outline-warning  rounded-pill"
            type="button"
            aria-current="page"
            href="#"
            style={{ width: "12rem",color:"#000" }}
            onClick={handleEndorsment}
          >
            <i
              className="bi bi-building-fill-check"
              style={{ fontSize: "20px", fontFamily: "sans-serif" }}
            >
              Endorsment List
            </i>
          </button>
        </li>

        <li className="nav-item">
          <button
            className="btn btn-outline-warning  rounded-pill"
            type="button"
            aria-current="page"
            href="#"
            style={{ width: "12rem",color:"#000" }}
          >
            <i
              class="bi bi-telephone-inbound"
              style={{ fontSize: "20px", fontFamily: "sans-serif" }}
            >
              Contact Us
            </i>
          </button>
        </li>
        
        <li className="nav-item">
          <button
            className="btn btn-outline-warning  rounded-pill"
            type="button"
            aria-current="page"
            href="#"
            style={{ width: "12rem" }}
          >
            <i
              class="bi bi-question-circle"
              style={{ fontSize: "20px", fontFamily: "sans-serif",color:"#000"}}
            >
              FAQ
            </i>
          </button>
        </li>
        <li className="nav-item">
          <button
            className="btn btn-outline-warning  rounded-pill"
            type="button"
            aria-current="page"
            href="#"
            style={{ width: "12rem" }}
          >
            <i
              class="bi bi-gear"
              style={{ fontSize: "20px", fontFamily: "sans-serif",color:"#000" }}
            >
              Setting
            </i>
          </button>
        </li>
      </ul>
      <hr></hr>
      <div className="d-grid mx-auto" >
      <button className="btn  btn-outline-danger  rounded-pill" type="button" style={{color:"white"}}>
      <i class="bi bi-box-arrow-right" style={{color:"#000"}}></i>Logout</button>
      </div>
    </div>
  );
};

export default AdministrationMenu;
