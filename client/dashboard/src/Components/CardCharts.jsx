import { useContext, useEffect } from "react"
import ContextPage from "../ContextPage"

import BarChart from '../charts/BarChart'
import PolarChart from '../charts/PolarChart'
import LineChart from '../charts/LineChart'
import RadarChart from '../charts/RadarChart'
import DoughnutChart from '../charts/DoughnutChart'
import PieChart from '../charts/PieChart'

function CardCharts() {

    const { chartData, getAllChartsData } = useContext(ContextPage)

    useEffect(() => {
        getAllChartsData()
    }, [])

  return (
    <div className="charts">
      <div className="charts-container">
        <h1>
          Polar Area and Doughnut Charts - represents number of countries,
          sectors, topics, pestles, sources, etc are involved.
        </h1>
        <div className="chart-div">
          <PolarChart serverData={chartData} />
          <DoughnutChart serverData={chartData} />
        </div>
      </div>
      <div className="charts-container">
        <h1>Bar Chart- represents number of projects in each sector</h1>
        <div className="chart-div">
          <BarChart serverData={chartData} />
        </div>
      </div>
      <div className="charts-container">
        <h1>Line Chart- represents number of projects as per pestle</h1>
        <div className="chart-div">
          <LineChart serverData={chartData} />
        </div>
      </div>
      <div className="charts-container">
        <h1>
          Radar and Pie Charts- represents number of projects as per pestle
        </h1>
        <div className="chart-div">
          <RadarChart serverData={chartData} />
          <PieChart serverData={chartData} />
        </div>
      </div>
    </div>
  );
}

export default CardCharts