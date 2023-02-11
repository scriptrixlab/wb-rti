import React from "react";
// import Header from "../header";
import MemberCard from "../card";
import MemberAnalysis from "../analysis";

const MemberDashboard = (props) => {
  return (
    <>
      {/* <Header /> */}
      
      <div className="container" style={{ background: "linear-gradient(90deg, rgba(129,167,172,1) 0%, rgba(255,255,255,1) 100%, rgba(223,223,223,1) 100%)"}}>
      <MemberCard />
      <MemberAnalysis />
      </div>
    </>
  );
};

export default MemberDashboard;
