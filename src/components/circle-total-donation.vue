<template>
    <Doughnut
       id="my-chart-id"
       type="pie"  
       :data="data"
     />
</template>

<script setup>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)


const data = {
  labels: [
    'Caxias do Sul',
    'São Leopoldo',
    'Muçum',
    'São Leopoldo',    
    'Porto Alegre'
  ],
  datasets: [{
    label: 'Total repassado',
    data: [120, 300, 279, 112, 400],
    backgroundColor: [
    'rgb(3, 29, 132)',
    'rgb(54, 162, 235)',
    'rgb(255, 205, 86)',
    'rgb(200, 5, 8)',
    'rgb(255, 210, 255)',
    ],
    hoverOffset: 4
  }]
}
</script>