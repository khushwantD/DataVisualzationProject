import {
  Chart as ChartJS,
  CategoryScale,
  Colors,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  Colors,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
import { Pie } from "react-chartjs-2";

const PieChart = ({ serverData }) => {
  let uniquePestle = [];

  serverData.forEach((i) => {
    if (!uniquePestle.includes(i.pestle) && i.pestle !== "") {
      uniquePestle.push(i.pestle);
    }
  });

  const pestleCount = uniquePestle.map((item) => {
    return {
      pestle: item,
      count: serverData.filter((i) => i.pestle === item).length,
    };
  });

  return (
    <div style={{ height: "50vh", width: "45vw" }}>
      <Pie
        data={{
          labels: uniquePestle,
          datasets: [
            {
              label: "Projects ",
              data: pestleCount.map((i) => i.count),
              borderWidth: 1,
              hoverOffset: 5,
            },
          ],
        }}
        options={{
          plugins: {
            colors: {
              forceOverride: true
            }
          },
          maintainAspectRatio: false,
          scales: {
            y: {
              type: "linear",
              beginAtZero: true,
            },
          },
        }}
        height={300}
      />
    </div>
  );
};

export default PieChart;
