import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import optimalData from './optimal'
import foodData from "./food";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Aminoacids in food',
        },
    },
};

const labels = Object.keys(optimalData[0]);
const optimalDataset = Object.values(optimalData[0]);
const allData = foodData.map((value, index) => {
    const {Food, ...nutrition} = value

    const elementBorderColor = `rgba(${Math.floor(Math.random() * 256)}, ${150}, 
    ${Math.floor(Math.random() * 256)})`

    return ({
        label: Food,
        data: Object.values(nutrition),
        borderColor: elementBorderColor,
        backgroundColor: elementBorderColor,
        tension: 0.3,
        borderWidth: 1,

    })
})

allData.push(
    {
        label: 'Optimal ratio',
        data: optimalDataset,
        borderColor: 'rgba(0, 0, 0, 1)',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        tension: 0.3,
        borderWidth: 5,
    }
)

export const data = {
    labels,
    datasets: allData,
};

export default function BarChart() {
    return <Line options={options} data={data} />;
}

