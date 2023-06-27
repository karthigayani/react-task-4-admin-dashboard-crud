/*line chart*/
import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
} from "chart.js";
import { Line } from "react-chartjs-2";


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top"
        },
        title: {
            display: false,
            text: "Chart.js Line Chart"
        }
    }
};

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const data = {
    labels,
    datasets: [
        {
            fill: true,
            label: "Dataset 2",
            data: [
                0,
                10000,
                5000,
                15000,
                10000,
                20000,
                15000,
                25000,
                20000,
                30000,
                25000,
                35000,
                30000,
                40000,
                35000,
                45000
            ],
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235, 0.2)",
            lineTension: .2,
            width: 504,
            height: 160
        }
    ]
};

export function Chart() {
    return <Line options={options} data={data} />;
}