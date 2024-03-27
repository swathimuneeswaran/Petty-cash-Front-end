import React from 'react'
import {Chart as ChartJS,ArcElement,Legend,Tooltip} from "chart.js"
import {Pie} from "react-chartjs-2"


ChartJS.register(ArcElement,Legend,Tooltip)



const Chart = ({data}) => {
  return (
    <div>
    <Pie data={data} />
    </div>
  )
}

export default Chart