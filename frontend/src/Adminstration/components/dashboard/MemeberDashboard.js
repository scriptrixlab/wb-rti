import React from "react";
// import Header from "../header";
import AdministrationCard from "../card";
import AdministrationAnalysis from "../analysis";

const AdminstrationDashboard = (props) => {
  return (
    <>
      {/* <Header /> */}
      
      <div className="container" style={{ background: "linear-gradient(90deg, rgba(129,167,172,1) 0%, rgba(255,255,255,1) 100%, rgba(223,223,223,1) 100%)"}}>
      <AdministrationCard />
      <AdministrationAnalysis />
      </div>
    </>
  );
};

export default AdminstrationDashboard;
