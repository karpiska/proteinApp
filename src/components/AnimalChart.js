import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import clone from 'lodash.clonedeep'
import comboData from "./combinations";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const allOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'All food diet',
        },
    },
};

export const animalOptions = clone(allOptions)
animalOptions.plugins.title.text= 'Meat and animal products diet'

export const meatOptions = clone(allOptions)
meatOptions.plugins.title.text= 'Meat diet'

export const chickenOptions = clone(allOptions)
chickenOptions.plugins.title.text= 'Only chicken diet'

export const meatLegumesOptions = clone(allOptions)
meatLegumesOptions.plugins.title.text= 'Meat and legumes diet'

export const legumesOptions = clone(allOptions)
legumesOptions.plugins.title.text= 'Legumes diet'

export const legumesGrainsNutsOptions = clone(allOptions)
legumesGrainsNutsOptions.plugins.title.text= 'Legumes, grains and nuts diet'

export const nutsFruitsVeggiesOptions = clone(allOptions)
nutsFruitsVeggiesOptions.plugins.title.text= 'Nuts, fruits and veggies diet'

export const fruitsVeggiesOptions = clone(allOptions)
fruitsVeggiesOptions.plugins.title.text= 'Fruits and veggies diet'

const allLabels = Object.keys(comboData[0]);
allLabels.shift()
const allDataset = Object.values(comboData[0])
allDataset.shift()
const animalLabels = Object.keys(comboData[1]);
animalLabels.shift()
const animalDataSet = Object.values(comboData[1])
animalDataSet.shift()
const meatLabels = Object.keys(comboData[2])
meatLabels.shift()
const meatDataset = Object.values(comboData[2])
meatDataset.shift()
const chickenLabels = Object.keys(comboData[3])
chickenLabels.shift()
const chickenDataset = Object.values(comboData[3])
chickenDataset.shift()
const meatLegumesLabels = Object.keys(comboData[4]);
meatLegumesLabels.shift()
const meatLegumesDataset = Object.values(comboData[4])
meatLegumesDataset.shift()
const legumesLabels = Object.keys(comboData[5]);
legumesLabels.shift()
const legumesDataset = Object.values(comboData[5])
legumesDataset.shift()
const legumesGrainsNutsLabels = Object.keys(comboData[6]);
legumesGrainsNutsLabels.shift()
const legumesGrainsNutsDataset = Object.values(comboData[6])
legumesGrainsNutsDataset.shift()
const nutsFruitsVeggiesLabels = Object.keys(comboData[7]);
nutsFruitsVeggiesLabels.shift()
const nutsFruitsVeggiesDataset = Object.values(comboData[7])
nutsFruitsVeggiesDataset.shift()
const fruitsVeggiesLabels = Object.keys(comboData[8]);
fruitsVeggiesLabels.shift()
const fruitsVeggiesDataset = Object.values(comboData[8])
fruitsVeggiesDataset.shift()

export const allData = {
    labels: allLabels,
    datasets: [
        {
            label: 'grams per day',
            data: allDataset,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }]
}

export const animalData = clone(allData)
animalData.labels = animalLabels.slice(0, 5)
animalData.datasets.data = animalDataSet.slice(0, 5)


export const meatData = clone(allData)
animalData.labels = meatLabels.slice(0, 5)
animalData.datasets.data = meatDataset.slice(0, 5)


export const chickenData = clone(allData)
chickenData.labels = chickenLabels.slice(0, 5)
chickenData.datasets.data = chickenDataset.slice(0, 5)

export const meatLegumesData = {
    labels: meatLegumesLabels.slice(0, 11),
    datasets: [
        {
            label: 'grams per day',
            data: meatLegumesDataset.slice(0, 11),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }]
}


export function AllChart() {
    return <Bar options={allOptions} data={allData} />;
}


export function AnimalChart() {
    return <Bar options={animalOptions} data={animalData} />;
}
//
// export function MeatChart() {
//     return <Bar options={meatOptions} data={meatData} />;
// }
//
// export function MeatChart() {
//     return <Bar options={meatOptions} data={meatData} />;
// }

export function MeatLegumesChart() {
    return <Bar options={meatLegumesOptions} data={meatLegumesData} />;
}

// export function Legumeshart() {
//     return <Bar options={meatOptions} data={meatData} />;
// }

