import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Donut = () => {
  const data = {
    labels: ["Business", "Self Help", "Fiction"],
    datasets: [
      {
        label: "# of books",
        data: [26, 20, 54],
        backgroundColor: [
          "rgb(82, 201, 63)",
          
          "rgb(255, 39, 39)",
          "rgb(0, 106, 255)",
          // "rgba(75, 192, 192, 0.2)",
          // "rgba(153, 102, 255, 0.2)",
          // "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          // "rgba(75, 192, 192, 1)",
          // "rgba(153, 102, 255, 1)",
          // "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
    <div className="mt-5 flex flex-row justify-between mb-6">
      <h1 className="text-black font-semibold">Available Books</h1>
      <div className=" bg-slate-300 text-black p-1">This Month</div>
    </div>
      <Doughnut data={data} className="w-52 h-52"/>
    </>
  );
};

export default Donut;
