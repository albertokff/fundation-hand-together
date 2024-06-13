<script setup lang="ts">
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const data = {
  labels: [
    'Abrigos',
    'Alimentação',
    'Construção',
    'Roupas',
    'Saúde',    
  ],
  datasets: [
    {
      label: 'Distribuição dos Recursos (mil)',
      backgroundColor: '#f0dc56',
      data: [40, 20, 12, 39, 10]
    }
  ]
}

const options = {
  responsive: true,
  maintainAspectRatio: false
}
</script>

<template>
      <Bar :data="data" :options="options" />
</template>