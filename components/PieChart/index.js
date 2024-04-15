import { Pie } from 'react-chartjs-2'
import styles from './PieChart.module.css'
import {
    Chart as ChartJS,
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'
import { useEffect, useState } from 'react'


ChartJS.register(
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
)

export default function PieChart() {
    const [chartData, setChartData] = useState({
        datasets:[]
    })
    const[chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
                {
                    label: '# of votes',
                    data: [12, 19, 3, 5, 2, 3],
                    borderColor: [
                        'rgba(225, 162, 235, 0.4)',
                        'rgba(53, 225, 235, 0.4)',
                        'rgba(122, 162, 235, 0.4)',
                        'rgba(124, 162, 235, 0.4)',
                        'rgba(23, 162, 235, 0.4)',
                        'rgba(65, 162, 235, 0.4)'
                    ],
                    backgroundColor: [
                        'rgba(225, 162, 235, 0.4)',
                        'rgba(53, 225, 235, 0.4)',
                        'rgba(122, 162, 235, 0.4)',
                        'rgba(124, 162, 235, 0.4)',
                        'rgba(23, 162, 235, 0.4)',
                        'rgba(65, 162, 235, 0.4)'
                    ],
                    
                }
            ]
        })

        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: "Daily Revenue"
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
    },[])

    return (
        <Pie data={chartData} option={chartOptions} style={{width:"500px", height: "300px"}}/>
    )
}