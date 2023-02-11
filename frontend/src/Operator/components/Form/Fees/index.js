import React, { useEffect } from "react";
import { useState } from 'react';
import { createFees } from './ApiFees';

const Fees = ({ saveData, caseno }) => {
  const [values, setValues] = useState({
        type:'',
        apply:'',
        numbers: '',
        nos:'',
        payemtdate: '',
        totalamount:''
 });
 const handledChange=(e)=>{
  // setError('')
  setValues({
      ...values,
     [e.target.name]:e.target.value
  }
 
  )
}
const handleSubmit = async (e)=> {
  e.preventDefault()
  //console.log(values);
  const fees_data =  await createFees({...values, caseno })
  if (!fees_data || !fees_data?.caseno ) {
      return fees_data
  }else {
      saveData(fees_data)
  }

}
// useEffect(() => {
//   console.log(values);

 
// }, [values])



  return (
    <div className="container-fluid">
      <div className="card-body">
        <h5 className="card-title text-center">Application Fees Details</h5>
        <form className="d-grid gap-3" onSubmit={handleSubmit}>
          <div className="form-group  mx-auto">
          <div className="form-group">
                    <label>Case No</label>
                    <input type="text" className="form-control" readOnly  value={caseno}/>
                </div>
                <br/>
            <label>Apply for Fees</label>
            <div className="row ">
              <div className="form-check justify-content-between">
                <input type="radio" name="apply" onChange={handledChange} value='yes' />
                <label>Yes</label>
                <input type="radio" name="apply" onChange={handledChange} value='no'/>
                <label>No</label>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label for="disabledSelect" class="form-label">
              Payment Type
            </label>
            <select id="disabledSelect" name="type" value={values.type} onChange={handledChange} class="form-select">
              <option   value='ipo'>IPO</option>
              <option   value='dd'>DD</option>
              <option  value='co'>Court Fees Stamp</option>
              <option  value='ju'>Judicial Stamp Paper</option>
              <option  value='oth'>Others</option>
            </select>
          </div>
          <div className="row">
            <div className="col">
              <input
                type="text"
                placeholder="Enter IPO/DD Number"
                className="form-control"
                name="numbers" onChange={handledChange}
              />
            </div>
            <div className="col">
              <input type="date" className="form-control" name="payemtdate" onChange={handledChange} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input type="number" placeholder="No" className="form-control"  name="nos" onChange={handledChange} />
            </div>
            <div className="col">
              <input
                type="number"
                placeholder="Total Amount"
                className="form-control"
                name="totalamount" onChange={handledChange}
              />
            </div>
          </div>

          <div className="form-group mx-auto">
            <input
              type="submit"
              className="btn  btn-outline-success"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Fees;
