<template>
    <v-row class="d-flex justify-center">
      <v-col md="7">
        <h3 class="pt-10 pl-10" style="color:blue;text-align: center;">Para onde estão indo os recursos arrecadados? </h3>
        <GraphicWhereDonation class="pa-10" />
      </v-col>

      <v-col md="4">
        <h3 class="pt-10 pl-10" style="color:blue;text-align: center;">Valores totais repassados até o momento (mil) </h3>
        <CircleTotalDonation class="pa-10" />
      </v-col>
    </v-row>  

    <v-row class="d-flex justify-center">
      <v-col md="7">
        <h3 class="pt-10 pl-10" style="color:blue;text-align: center;">Balanço de Arrecadações ao longo dos meses (mil) </h3>
        <LineFutureDonation class="pa-10" />
      </v-col>

      <v-col md="4">        
        <PolarTotalDonation class="pa-10" />
      </v-col>      
    </v-row>
</template>

<script setup>
import GraphicWhereDonation from '../components/graphic-where-donation.vue'
import CircleTotalDonation from '../components/circle-total-donation.vue'
import LineFutureDonation from '../components/line-future-donation.vue'
import PolarTotalDonation from '../components/polar-total-donation.vue'

</script>