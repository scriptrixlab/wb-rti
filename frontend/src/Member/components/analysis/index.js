import React from 'react'
import ApplicationChart from './ApplicationChart'
import InsdustryTypeChart from './InsdustryTypeChart'
import './_analysis.css'
const MemberAnalysis = () => {
  return (
   <div className="container-fluid">
     <div className="row">
        <div className="col-lg-6 col-sm-12">
            <div class="card mb-3" >
            <div class="card-body">
            <h5 class="card-title text-center">Card title</h5>
            <ApplicationChart/>
            </div>
                
            </div>
           

        </div>
        <div className="col-lg-6 col-sm-12">
        <div className="card mb-3" >
        <div className="card-body mx-auto" >
            <h5 className="card-title text-center">Card title</h5>
            <div className='pie-chart-query'>
            <InsdustryTypeChart/>
            </div>
            </div>
            </div>


        </div>
    </div>
   </div>
  )
}

export default MemberAnalysis