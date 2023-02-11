import React from 'react'
import Caseno from './CaseNO'
import StepTwo from './StepTwo'
import Multistep from 'react-multistep'

const StepOne = () => { const steps = [
  { component: <Caseno/> },
  { component: <StepTwo /> },
  
]
const prevStyle = { background: '#33c3f0',marginLeft:'20px'}
const nextStyle = { background: '#33c3f0' }
return (
<div className="container-fluid">
  <div className="row justify-content-center">
      <div className="col-lg-4 col-md-6 col-sm-1">
          <Multistep activeStep={0} steps={steps} prevStyle={prevStyle} nextStyle={nextStyle} />
      </div>
  </div>
</div>
)
}

export default StepOne