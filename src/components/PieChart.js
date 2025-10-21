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


export default function PieChart({ inputData }) {
    //     var inputDataExample = {
    //     "labels" : ["label1", "label2", "label3"],
    //     "dataSetLabel" : "label",
    //     "data" : [20,30,40],
    //     "title" : "title"
    // }

    const pieChartColors = [
        'rgb(255, 99, 132)',   // Bright Pink
        'rgb(54, 162, 235)',   // Sky Blue
        'rgb(255, 206, 86)',   // Golden Yellow
        'rgb(75, 192, 192)',   // Teal
        'rgb(153, 102, 255)',  // Purple
        'rgb(255, 159, 64)',   // Orange
        'rgb(231, 76, 60)',    // Red
        'rgb(46, 204, 113)',   // Emerald Green
        'rgb(52, 152, 219)',   // Blue
        'rgb(155, 89, 182)',   // Amethyst
        'rgb(241, 196, 15)',   // Sun Yellow
        'rgb(26, 188, 156)',   // Turquoise
        'rgb(230, 126, 34)',   // Carrot Orange
        'rgb(231, 76, 60)',    // Alizarin Red
        'rgb(236, 240, 241)',  // Clouds Gray
        'rgb(149, 165, 166)',  // Concrete Gray
        'rgb(243, 156, 18)',   // Bright Orange
        'rgb(211, 84, 0)',     // Pumpkin
        'rgb(142, 68, 173)',   // Wisteria Purple
        'rgb(44, 62, 80)',     // Midnight Blue
        'rgb(127, 140, 141)',  // Asbestos Gray
        'rgb(192, 57, 43)',    // Pomegranate
        'rgb(41, 128, 185)',   // Belize Blue
        'rgb(39, 174, 96)',    // Nephritis Green
        'rgb(22, 160, 133)',   // Green Sea
        'rgb(245, 176, 65)',   // Warm Orange
        'rgb(189, 195, 199)',  // Silver
        'rgb(108, 92, 231)',   // Periwinkle
        'rgb(255, 107, 107)',  // Coral Pink
        'rgb(72, 219, 251)',   // Cyan
        'rgb(253, 203, 110)',  // Peach
        'rgb(129, 236, 236)',  // Light Cyan
        'rgb(162, 155, 254)',  // Lavender
        'rgb(255, 159, 243)',  // Light Pink
        'rgb(181, 131, 141)',  // Dusty Rose
        'rgb(109, 213, 237)',  // Baby Blue
        'rgb(253, 167, 223)',  // Bubblegum Pink
        'rgb(197, 108, 240)',  // Violet
        'rgb(255, 218, 121)',  // Light Gold
        'rgb(131, 149, 167)',  // Blue Gray
        'rgb(87, 101, 116)',   // Dark Blue Gray
        'rgb(165, 94, 234)',   // Purple Heart
        'rgb(255, 121, 63)',   // Burnt Orange
        'rgb(30, 144, 255)',   // Dodger Blue
        'rgb(255, 182, 193)',  // Light Pink
        'rgb(32, 191, 107)',   // Mint Green
        'rgb(255, 99, 71)',    // Tomato Red
        'rgb(138, 43, 226)',   // Blue Violet
        'rgb(255, 215, 0)',    // Gold
        'rgb(64, 224, 208)'    // Turquoise Blue
    ];

    function randomBackgroundColorGenerator(data) {
        const backGroundColorList = [];
        for (let i = 0; i < data.length; i++) {
            let colour 
            do {
                colour = Math.ceil((Math.random() * 50))
            } while (colour.includes(backGroundColorList));

            backGroundColorList.push(colour)
        }

        return backGroundColorList;
    }

    return (
        <div className="chart-container">
            <Pie data={{
                labels: inputData.labels,
                datasets: [{
                    label: inputData.dataSetLabel,
                    data: inputData.data,
                    backgroundColor: randomBackgroundColorGenerator(inputData.data),
                    hoverOffset: 4
                }]
            }}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: inputData.title
                        }
                    }
                }}
            />
        </div>
    );
}
