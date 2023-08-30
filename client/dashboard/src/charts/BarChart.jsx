import {
  Chart as ChartJS,
  CategoryScale,
  Colors,
  BarElement,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  Colors,
  BarElement,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
import { Bar } from "react-chartjs-2";

const BarChart = ({ serverData }) => {
  let uniqueSectors = [];

  // adding unique sector names to an array
  serverData.forEach((i) => {
    if (!uniqueSectors.includes(i.sector) && i.sector !== "") {
      uniqueSectors.push(i.sector);
    }
  });

  // counting total number of unique sectors in the data
  const sectorCount = uniqueSectors.map((item) => {
    return {
      sector: item,
      count: serverData.filter((i) => i.sector === item).length,
    };
  });

  return (
    <div style={{ height: "50vh" }}>
      <Bar
        data={{
          labels: uniqueSectors.map((e) => e),
          datasets: [
            {
              label: "Total Sectors",
              data: sectorCount.map((e) => e.count),
              borderWidth: 1,
            },
          ],
        }}
        options={{
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

export default BarChart;
