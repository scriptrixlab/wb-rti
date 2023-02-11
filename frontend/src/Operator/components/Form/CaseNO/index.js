import React from 'react'
import { useState } from 'react';
import { isAuthenticated } from '../../../auth';
import { createCaseNo } from './ApiCaseno';

const Caseno = ({saveData}) => {
    const [values, setValues] = useState({
       date_of_application:'' ,
       date_of_received:'',
       apply:'',
        
       
    });
    
    //console.log(values);
    const[error,setError]=useState(false)
    const[success,setSuccess]=useState(false)
    const { user, token } = isAuthenticated();
    const {
        //caseno,
    date_of_application,
        date_of_received,
        apply
    } = values;
    const handledChange=(e)=>{
        setError('')
        // setValues(e.target.value)
        setValues({
            ...values,
           [e.target.name]:e.target.value
        }
       
        )
        // console.log(e.target.value);
        // console.log(e.target.name);

    }
    const clickSubmit=(e)=>{
        e.preventDefault()
        console.log("submit:",e.preventDefault())
        setError()
        setSuccess(false)
        //make request for api
        createCaseNo(user.id,token,{
            date_of_application,
            date_of_received,
            apply
            
        })
        .then((data)=>{
            if(data.error)
            {
                setError(data.error)
            }
            else{
                setError("")
                setSuccess(true)
                saveData(data)
            }
            console.log(data);
        })
    }

    const createCasenoSubmit=()=>(
        <form className='d-grid gap-3' >

                <div className="form-group">
                    <label>Date-Of-Application</label>
                    <input type="date" className="form-control" name="date_of_application"  onChange={handledChange} value={date_of_application} />
                </div>
                <div className="form-group">
                    <label>Date-Of-Received</label>
                    <input type="date" className="form-control" name="date_of_received"  onChange={handledChange} value={date_of_received} />
                </div>

            
                
                <div className="form-group justify space-between"> 
                <label>Apply Through</label> 
                    <div className="row"> 
                        <div className="form-check">
                            <input class="form-check-input" type="radio" name="apply" id="flexRadioDefault1" value="direct" onClick={handledChange} checked={apply === 'direct'}/>
                            <label>Direct</label>
                        </div>
                        <div className="form-check">
                        <input class="form-check-input" type="radio" name="apply" id="flexRadioDefault2" value="other" onClick={handledChange} checked={apply === 'other'}/>
                        <label>Others Public Authority</label>
                        </div>
                       
                    </div>
                  

                </div>
                <div className="form-group mx-auto">
                    <button type='button' className="btn  btn-outline-success" onClick={clickSubmit}>Submit
                    </button>
                </div>
            </form>

    )
    // const showSuccess = () => {
    //     if (success) {
    //         return <h3 className="text-success"> is created</h3>;
    //     }
    // };

    // const showError = () => {
    //     if (error) {
    //         return <h3 className="text-danger">CaseNo should be unique</h3>;
    //     }
    // };
  return (
    <div className="container-fluid">
        <div className="card-body">
        <h5 className="card-title text-center">InputForm</h5>
            {createCasenoSubmit()}
            {/* {showSuccess()}
            {showError()} */}
        </div>
    </div>
  )
}

export default Caseno