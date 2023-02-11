import React from 'react'
import { useState } from 'react';
import { isAuthenticated } from '../../../auth';
import { createApplicant,getCaseno } from './Apiapplicant';

const DirectApplicant = ({ saveData, caseno }) => {
    
    const [values, setValues] = useState({
        fullname:'',
        gender: '',
        address:'',
        postoffice: '',
        policestation: '',
        district: '',
        pincode: '',
        state: '',
        emailid: '',
        teleno: '',
        mobno:'',
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
        const applicant_data =  await createApplicant({...values, caseno })
        if (!applicant_data || !applicant_data?.caseno ) {
            //err
        }else {
            saveData(applicant_data)
        }

    }

  return (
    <div className="container-fluid">
        <div className="card-body">
        <h5 className="card-title text-center">Direct Applicant</h5>
            <form className='d-grid gap-3' onSubmit={handleSubmit} >
                <div className="form-group">
                    <label>Case No</label>
                    <input readOnly type="text" className="form-control" value={caseno} />
                </div>
                <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" className="form-control" name="fullname" onChange={handledChange} />
                </div>
                <div className="form-group justify space-between">
                <label>Gender</label>
                    <div className="row">
                        <div className="form-check">
                            <input type="radio" name="gender" onChange={handledChange}  value='male'/>
                            <label>Male</label>
                            <input type="radio" name='gender' onChange={handledChange}  value='female'/>
                            <label>Female</label>   
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <lable>Address</lable>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="address" onChange={handledChange} ></textarea>
                </div>
                <div className="row">
                    <div className="col">
                        <input type='text' placeholder='Post Office'  className='form-control' name="postoffice" onChange={handledChange} />
                    </div>
                    <div className="col">
                        <input type='text' placeholder='Police Station'  className='form-control' name="policestation" onChange={handledChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input type='text' placeholder='District' className='form-control' name="district" onChange={handledChange} />
                    </div>
                    <div className="col">
                        <input type='text' placeholder='PinCode'  className='form-control' name="pincode" onChange={handledChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input type='text' placeholder='State' className='form-control' name="state" onChange={handledChange} />
                    </div>
                    <div className="col">
                        <input type='text' placeholder='EmailId'  className='form-control' name="emailid" onChange={handledChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input type='number' placeholder='Tele No' className='form-control' name="telno" onChange={handledChange} />
                    </div>
                    <div className="col">
                        <input type='number' placeholder='Mob No'  className='form-control' name="mobno" onChange={handledChange} />
                    </div>
                </div>

                <div className="form-group mx-auto">
                    <input type='submit' className="btn  btn-outline-success"  value="Submit" />
                </div>
            </form>
        </div>
    </div>
  )
}

export default DirectApplicant