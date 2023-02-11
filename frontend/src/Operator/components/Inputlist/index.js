import React from 'react'
import Table from 'react-bootstrap/Table'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function OperatorInputlist() {
  return (
    <div >
    {/* <Header/> */}
    <div className='container'>
    <Table striped bordered hover>
    <thead style={{background: 'rgb(142,242,196)',
          background:' linear-gradient(90deg, rgba(142,242,196,1) 32%, rgba(86,236,47,1) 90%, rgba(11,186,64,1) 100%, rgba(3,227,69,1) 100%, rgba(17,175,0,1) 100%, rgba(20,109,171,0.08727240896358546) 100%)',textAlign:"center"}}>
    <tr>
      <th>#</th>
      <th>Case No.</th>
      <th>Applicant Name</th>
      <th>Received Date</th>
     
    </tr>
  </thead>
  <tbody  style={{textAlign:"center"}}>
    <tr>
      <td>1</td>
      <td>qw1234r</td>
      <td>Otto</td>
      <td>12/1/12</td>
    </tr>
  </tbody>
</Table>
    </div>
</div>
  )
}

export default OperatorInputlist;