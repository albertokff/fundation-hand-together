<script setup>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend )

const data = {
  labels: ['Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro'],
  datasets: [
    {
      label: 'Balanço',
      backgroundColor: '#f87979',
      data: [50, 125, 152, 171, 192, 204, 210, 217]
    }
  ]
}

const options = {
  responsive: true,
  maintainAspectRadio: false
}
</script>

<template>
   <Line :data="data" :options="options" />
</template>