import React,{useState} from 'react'
import { createQuery } from './ApiQuery';

const ApplicationQuery = ({ saveData, caseno }) => {
    const [values, setValues] = useState({
       query:'',
       document:null,
     });
     const handledChange=(e)=>{
        // setError('')
        setValues({
            ...values,
           [e.target.name]:e.target.value,    
        })
    }

    const handledChangeFile=(e)=>{
        // setError('')
        setValues({
            ...values,
            document:e.target.files?.[0],
        })
    }
    const handleSubmit = async (e)=> {
        e.preventDefault()
        const formData = new FormData()
        formData.append("caseno", caseno)
        formData.append("query", values.query) 
        formData.append("document", values?.document) 

        const query_data =  await createQuery(formData)
        if (!query_data || !query_data?.caseno ) {    
            //err
        }else {
            saveData(query_data)
        }

    }
  return (
    <div className="container-fluid">
        <div className="card-body">
        <h5 className="card-title text-center">Application Query </h5>
            <form className='d-grid gap-3' onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Case No</label>
                    <input type="text" className="form-control"  value={caseno} />
                </div>
                
                <div className="form-group">
                    <lable>Query</lable>
                    <textarea class="form-control" name='query' onChange={handledChange} id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label>Upload Document</label>
                    <input type="file" className="form-control" name='query' onChange={handledChangeFile} />
                </div>
                
                
                <div className="form-group mx-auto">
                    <input type='submit' className="btn  btn-outline-success"  value="Submit"/>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ApplicationQuery