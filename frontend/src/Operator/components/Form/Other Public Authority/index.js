import React ,{useState}from 'react'
import { createOthers } from './ApiOthers';

const OtherPublicAuthority = ({saveData, caseno}) => {

    const [values, setValues] = useState({
        
        authorityname:'',
        officername:'',
        designation:'',
        address:'',
        postoffice: '',
        policestation: '',
        district: '',
        pincode: '',
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
        const others_data =  await createOthers({...values, caseno })
        if (!others_data || !others_data?.caseno ) {
            //err
        }else {
            saveData(others_data)
        }

    }
  return (
    <div className="container-fluid">
        <div className="card-body">
        <h5 className="card-title text-center">Other Public Authority </h5>
            <form className='d-grid gap-3' onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Case No</label>
                    <input readOnly type="text" className="form-control" value={caseno} />
                </div>
                <div className="form-group">
                    <label>Name of The Public Authority</label>
                    <input type="text"  name=' authorityname' onChange={handledChange} className="form-control" placeholder='Name of The Public Authority' />
                </div>
                <div className="form-group">
                    <label>Officer Name</label>
                    <input type="text"  name='officername' onChange={handledChange} className="form-control" placeholder='Officer Name' />
                </div>
                <div className="form-group">
                    <label>Designation</label>
                    <input type="text"  name='designation' onChange={handledChange}  className="form-control" placeholder='Designation' />
                </div>
                <div className="form-group">
                    <lable>Address</lable>
                    <textarea class="form-control"  name='address' onChange={handledChange}  id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="row">
                    <div className="col">
                        <input type='text'  name='postoffice' onChange={handledChange}  placeholder='Post Office'  className='form-control'/>
                    </div>
                    <div className="col">
                        <input type='text'  name='policestation' onChange={handledChange}  placeholder='Police Station'  className='form-control'/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input type='text'  name='district' onChange={handledChange}  placeholder='District' className='form-control'/>
                    </div>
                    <div className="col">
                        <input type='text'  name='pincode' onChange={handledChange}  placeholder='PinCode'  className='form-control'/>
                    </div>
                </div>
                
                <div className="form-group mx-auto">
                    <input type='submit' className="btn  btn-outline-success"  value="Submit"/>
                </div>
            </form>
        </div>
    </div>
  )
}

export default OtherPublicAuthority