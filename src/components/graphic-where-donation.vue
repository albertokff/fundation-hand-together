<script setup lang="ts">
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = {
  labels: [ 'Caxias do Sul', 'São Leopoldo', 'Canoas', 'Porto Alegre', 'Muçum' ],
  datasets: [{
    label: 'Destino das Doações (%)',
    barPercentage: 5,
    barThickness: 30,        
    data: [30, 10, 25, 30, 15],
    backgroundColor: [
    'rgba(255, 99, 132, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(255, 205, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
    ],
    borderWidth: 1 
  }]
}
 
const chartOptions = {
  responsive: true
}
</script>

<template>
 <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>