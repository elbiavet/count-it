
import { Doughnut } from "react-chartjs-2";

export const DoughnutChart = ({ chartData, text }) => {

  const listData ={
    labels: chartData?.map(data => data.category),
    datasets: [{
        label: text,
        data: chartData?.map(data => data.amount),
        backgroundColor: ["#66c2a5", "#fc8c62", "#ffd930", "#a6d953", "#e78ac0", "#8ea0cc", "#4caf50", "#c9405a" ],
        borderColor: "grey",
        borderWidth: 1
      }]
  }

  return (
    <div className="dought">
      <Doughnut
        data={ listData }
        options={{ plugins: {title: { display: true, text: `${ text } del mes`}}}}
      />
    </div>
  );
}

