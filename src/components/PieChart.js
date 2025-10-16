// src/components/PieChart.js
import React from "react";
import { Pie } from "react-chartjs-2";

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Title
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);


export default function PieChart({InputData}) {
//     var InputDataExample = {
//     "labels" : ["label1", "label2", "label3"],
//     "dataSetLabel" : "label",
//     "data" : [20,30,40],
//     "title" : "title"
// }

    return (
        <div className="chart-container">
            <Pie data={{
                labels: InputData.labels,
                datasets: [{
                    label: InputData.dataSetLabel,
                    data: [30, 50, 20],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }]
            }}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: InputData.title
                        }
                    }
                }}
            />
        </div>
    );
}
