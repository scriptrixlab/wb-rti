import React from 'react'
import {Pie} from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
  
  
ChartJS.register(ArcElement, Tooltip, Legend);

const InsdustryTypeChart = () => {
    const data = {
        labels: ['Air', 'Sound', 'Water', 'Waste', 'Others'],
        datasets: [
          {
            label: 'Type of RTI',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
              '#ef5350',
              '#ab47bc',
              '#303f9f',
              '#558b2f',
              '#8d6e63',

            ],
            borderColor: [
              '#ffffff',
              '#ffffff',
              '#ffffff',
              '#ffffff',
              '#ffffff',
              
            ],
            borderWidth: 1,
          },
        ],
      };
  return (
  


<Pie  data={data}/>


  )
}

export default InsdustryTypeChart