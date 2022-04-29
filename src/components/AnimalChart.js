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

import comboData from "./combinations";

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
            text: 'Animal product diet',
        },
    },
};

const labels = Object.keys(comboData[0]);
export const data = {
    labels,
    // datasets: allData,
    datasets: [
        {
            label: 'Dataset 1',
            // data: optimalDataset,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }]
}

export default function AnimalChart() {
    return <Line options={options} data={data} />;
}

