<template>
    <v-card
      class="mx-auto my-8"
      elevation="16"
      max-width="344"
    >
      <v-row class="pt-10 pl-5 pr-5">
        <v-text-field label="Ex: R$2.000,00" />
      </v-row>
  
      <v-card-text
        style="font-size:12px;"
        class="text-center">
        {{ props.description }}
      </v-card-text>
  
      <v-row class="pb-7 pt-2 d-flex justify-center">
        <v-btn
          color="yellow"
          class="justify-center">
          <i class="fa-regular fa-hand-spock"></i>
          Doar
        </v-btn>
      </v-row>    
    </v-card>
  </template>
  
  <script setup lang="ts">
  
  interface Props {
    valueMonth: string
    valueDay: string
    description: string
  }
  
  const props = defineProps<Props>()
  
  </script>
  
  <style scoped>
  .doacaomensal {
    color: #2d9ae3;  
  }
  </style>