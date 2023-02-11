import React from "react";
import { useHistory } from 'react-router-dom';


const MemberMenu = () => {
  let history = useHistory(); 
  function handleQuestion() {
    history.push("/member/questionlist");
  } 
  function handleDashboard() {
    history.push("/member/dashboard");
  } 

  return (
    <div className="container-fluid">
   
      <ul className="nav  justify-content-center d-grid gap-4">
      <li className="nav-item">
          <button
            className="btn btn-outline-info  rounded-pill"
            type="button"
            aria-current="page"
            href="#"
            style={{ width: "12rem",color:'black'}}
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
            className="btn btn-outline-info  rounded-pill"
            type="button"
            aria-current="page"
            href="#"
            style={{ width: "12rem",color:'black' }}
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
            className="btn btn-outline-info  rounded-pill"
            type="button"
            aria-current="page"
            href="#"
            style={{ width: "12rem",color:'black' }}
            onClick={handleQuestion}
          >
            <i
              className="bi bi-basket-fill"
              style={{ fontSize: "20px", fontFamily: "sans-serif" }}
            >
              Query List
            </i>
          </button>
        </li>

        <li className="nav-item">
          <button
            className="btn btn-outline-info  rounded-pill"
            type="button"
            aria-current="page"
            href="#"
            style={{ width: "12rem" ,color:'black'}}
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
            className="btn btn-outline-info  rounded-pill"
            type="button"
            aria-current="page"
            href="#"
            style={{ width: "12rem",color:'black' }}
          >
            <i
              class="bi bi-question-circle"
              style={{ fontSize: "20px", fontFamily: "sans-serif" }}
            >
              FAQ
            </i>
          </button>
        </li>
        <li className="nav-item">
          <button
            className="btn btn-outline-info  rounded-pill"
            type="button"
            aria-current="page"
            href="#"
            style={{ width: "12rem",color:'black' }}
          >
            <i
              class="bi bi-gear"
              style={{ fontSize: "20px", fontFamily: "sans-serif" }}
            >
              Setting
            </i>
          </button>
        </li>
      </ul>
      <hr></hr>
      <div className="d-grid mx-auto">
      <button className="btn  btn-outline-danger  rounded-pill" type="button" style={{color:'white'}} >
      <i class="bi bi-box-arrow-right" style={{color:'white'}}></i>Logout</button>
      </div>
    </div>
  );
};

export default MemberMenu;
