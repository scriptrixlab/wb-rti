import React from 'react'
import {Line} from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    Filler
  } from 'chart.js';
  
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    Filler
  );

const ApplicationChart = () => {
    const data = {
    
        labels: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
        datasets: [{

                label: 'Total',
  
                data: [105, 200, 156, 264, 276, 376, 254, 164, 146, 154, 276, 343],

                fill:true,
  
  
                borderColor: [
                    'rgba(59, 197, 154, 1)',
  
                ],
                borderWidth: 1
            },
            {
                label: 'Disposed',
  
                data: [97, 156, 138, 256, 267, 366, 234, 163, 146, 152, 272, 333],
  
  
                borderColor: [
  
                    'rgba(153, 102, 255, 1)'
  
                ],
                borderWidth: 1
            },
            {
                label: 'Pending',
  
                data: [90, 150, 113, 256, 267, 366, 234, 163, 146, 152, 272, 333],
  
  
                borderColor: [
  
                    'rgba(186, 192, 255, 1)'
  
                ],
                borderWidth: 1
            }
        ]
    }
  
    const   options= {
      responsive: true,
  
      plugins: {
        filler: {
            propagate: true
        }
    }
  
  
    
  }
  return (

  <Line data={data} options={options}/>
 
      



  )
}

export default ApplicationChart
