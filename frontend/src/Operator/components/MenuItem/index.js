import React from "react";
import { useHistory } from 'react-router-dom';


const Menu = (props) => {
  let history = useHistory();
  function handleInput() {
    history.push("/admin/input");
  } 
  function handleDashboard() {
    history.push("/admin");
  } 
  function handleEndorsment() {
    history.push("/admin/endorsment");
  } 
  function handleFinalEndorsment() {
    history.push("/admin/finalendorsment");
  } 
  function handleUser() {
    history.push("/admin/user");
  } 
  function handleInputlist() {
    history.push("/admin/showlist");
  } 

  function handleSearch(){
    history.push('/admin/search')
  }


  const onLogout = async () => {
    await fetch('/api/signout').then(res => res.json())
    .then(res=> {
      console.log(res);
      console.log(props);
      return props?.onReload?.()
    })
  }


  return (
    <div className="container-fluid">
   
      <ul className="nav  justify-content-center d-grid gap-4">
      <li className="nav-item">
          <button
            className="btn btn-outline-success  rounded-pill"
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
            className="btn btn-outline-success  rounded-pill"
            type="button"
            aria-current="page"
            href="#"
            style={{ width: "12rem" }}
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
            className="btn btn-outline-success rounded-pill"
            type="button"
            aria-current="page"
            href="#"
            style={{ width: "12rem" }}
            onClick={handleInput}
          >
            <i
              className="bi bi-info-circle"
              style={{ fontSize: "20px", fontFamily: "sans-serif" }}
            >
              Input
            </i>
          </button>
        </li>
        <li className="nav-item">
          <button
            className="btn btn-outline-success  rounded-pill"
            type="button"
            aria-current="page"
            href="#"
            style={{ width: "12rem" }}
            onClick={handleEndorsment}
          >
            <i
              className="bi bi-hand-thumbs-up"
              style={{ fontSize: "20px", fontFamily: "sans-serif" }}
            >
              Endrosement
            </i>
          </button>
        </li>
        <li className="nav-item">
          <button
            className="btn btn-outline-success  rounded-pill"
            type="button"
            aria-current="page"
            href="#"
            style={{ width: "12rem" }}
            onClick={handleFinalEndorsment}
          >
            <i
              className="bi bi-hand-thumbs-down"
              style={{ fontSize: "20px", fontFamily: "sans-serif" }}
            >
             Final Endrosement
            </i>
          </button>
        </li>
        <li className="nav-item">
          <button
            className="btn btn-outline-success  rounded-pill"
            type="button"
            aria-current="page"
            href="#"
            style={{ width: "12rem" }}
            onClick={handleInputlist}
          >
            <i
              className="bi bi-list"
              style={{ fontSize: "20px", fontFamily: "sans-serif" }}
            >
             Input Data
            </i>
          </button>
        </li>
        <li className="nav-item">
          <button
            className="btn btn-outline-success  rounded-pill"
            type="button"
            aria-current="page"
            href="#"
            style={{ width: "12rem" }}
            onClick={handleUser}
          >
            <i
              className="bi bi-plus"
              style={{ fontSize: "20px", fontFamily: "sans-serif" }}
            >
             Role Management
            </i>
          </button>
        </li>
        <li className="nav-item">
          <button
            className="btn btn-outline-success  rounded-pill"
            type="button"
            aria-current="page"
            href="#"
            style={{ width: "12rem" }}
            onClick={handleSearch}
          >
            <i
              class="bi bi-search"
              style={{ fontSize: "20px", fontFamily: "sans-serif" }}
            >
              Case Search
            </i>
          </button>
        </li>
        <li class="nav-item dropdown">
          <button
            class="dropdown-toggle btn btn-outline-success  rounded-pill"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
            style={{ width: "12rem" }}
          >
            <i
              class="bi bi-flag"
              style={{ fontSize: "20px", fontFamily: "sans-serif" }}
            >
              Report
            </i>
          </button>
          <ul
            class="dropdown-menu text-small shadow"
            style={{ position: "absolute", maxWidth: "100%" }}
          >
            <li>
              <a class="dropdown-item" href="#">
                <i class="bi bi-1-circle">Total RTI Report</i>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                <i class="bi bi-2-circle">Disposed RTI Report</i>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                <i class="bi bi-3-circle">Pending RTI Report</i>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                <i class="bi bi-4-circle">
                  Due date Crossed <br />
                  RTI Report
                </i>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                <i class="bi bi-5-circle">
                  RTI Under 1st <br />
                  Appeal Report
                </i>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                <i class="bi bi-6-circle">
                  RTI Appeal With
                  <br />
                  Commission Report
                </i>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <button
            className="btn btn-outline-success  rounded-pill"
            type="button"
            aria-current="page"
            href="#"
            style={{ width: "12rem" }}
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
            className="btn btn-outline-success  rounded-pill"
            type="button"
            aria-current="page"
            href="#"
            style={{ width: "12rem" }}
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
            className="btn btn-outline-success  rounded-pill"
            type="button"
            aria-current="page"
            href="#"
            style={{ width: "12rem" }}
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
      <button className="btn  btn-outline-danger  rounded-pill" type="button" onClick={onLogout} style={{ color: "black" }} >
      <i class="bi bi-box-arrow-right"></i>Logout</button>
      </div>
    </div>
  );
};

export default Menu;
