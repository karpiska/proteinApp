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

const compactData = comboData.map((value, index) => {
    const {Category, ...food} = value

    return ({
        labels: Object.keys(food),
        data: Object.values(food).map(function (each_element){
            return Number(Math.ceil(each_element));
        }),
    })
})

export const allData = {
    labels: compactData[0].labels,
    datasets: [
        {
            label: 'grams per day',
            data: compactData[0].data,
            borderColor: 'rgba(49, 212, 188)',
            backgroundColor: 'rgba(49, 212, 188)',
        }]
}

export const animalData = clone(allData)
animalData.labels = compactData[1].labels.slice(0, 6)
animalData.datasets[0].data = compactData[1].data.slice(0, 6)

export const meatData = clone(allData)
meatData.labels = compactData[2].labels.slice(0, 6)
meatData.datasets[0].data = compactData[2].data.slice(0, 6)

export const chickenData = clone(allData)
chickenData.labels = compactData[3].labels.slice(3, 4)
chickenData.datasets[0].data = compactData[3].data.slice(3, 4)

export const meatLegumesData = clone(allData)
meatLegumesData.labels = compactData[4].labels.slice(0, 11)
meatLegumesData.datasets[0].data = compactData[4].data.slice(0, 11)

export const legumesData = clone(allData)
legumesData.labels = compactData[5].labels.slice(6, 11)
legumesData.datasets[0].data = compactData[5].data.slice(6, 11)

export const legumesGrainsNutsData = clone(allData)
legumesGrainsNutsData.labels = compactData[6].labels.slice(6, 20)
legumesGrainsNutsData.datasets[0].data = compactData[6].data.slice(6, 20)

export const nutsFruitsVeggiesData = clone(allData)
nutsFruitsVeggiesData.labels = compactData[7].labels.slice(16, 35)
nutsFruitsVeggiesData.datasets[0].data = compactData[7].data.slice(16, 35)

export const fruitsVeggiesData = clone(allData)
fruitsVeggiesData.labels = compactData[8].labels.slice(20, 35)
fruitsVeggiesData.datasets[0].data = compactData[8].data.slice(20, 35)

export function AllChart() {
    return <Bar options={allOptions} data={allData} />;
}

export function AnimalChart() {
    return <Bar options={animalOptions} data={animalData} />;
}

export function MeatChart() {
    return <Bar options={meatOptions} data={meatData} />;
}

export function ChickenChart() {
    return <Bar options={chickenOptions} data={chickenData} />;
}

export function MeatLegumesChart() {
    return <Bar options={meatLegumesOptions} data={meatLegumesData} />;
}

export function LegumesChart() {
    return <Bar options={legumesOptions} data={legumesData} />;
}

export function LegumesGrainsNutsChart() {
    return <Bar options={legumesGrainsNutsOptions} data={legumesGrainsNutsData} />;
}

export function NutsFruitsVeggiesChart() {
    return <Bar options={nutsFruitsVeggiesOptions} data={nutsFruitsVeggiesData} />;
}

export function FruitsVeggiesChart() {
    return <Bar options={fruitsVeggiesOptions} data={fruitsVeggiesData} />;
}


