import React from "react";

import Card from '../../Operator/components/Cards'
import Analysis from '../../Operator/components/Analysis'

const AdminDashboard = (props) => {
  return (
    <>
      {/* <Header /> */}
      
      <div className="container" style={{ background: "linear-gradient(90deg, rgba(129,167,172,1) 0%, rgba(255,255,255,1) 100%, rgba(223,223,223,1) 100%)"}}>
      <Card />
      <Analysis />
      </div>
    </>
  );
};

export default AdminDashboard;
