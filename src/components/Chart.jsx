import React from 'react'
import {Chart as ChartJS,ArcElement,Legend,Tooltip} from "chart.js"
import {Pie} from "react-chartjs-2"


ChartJS.register(ArcElement,Legend,Tooltip)



const Chart = ({data,options}) => {
  return (
    <div>
    <Pie data={data} options={options} />
    </div>
  )
}

export default Chart