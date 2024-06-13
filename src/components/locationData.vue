<template>
    <v-card
      class="mx-auto my-8"
      elevation="16"
      max-width="344"
    >
      <v-card-item>
        <div class="pb-5 d-flex justify-space-between">
          <span
            class="doacaomensal"
            style="font-size:20px;">
            <strong>{{ props.label }}</strong>
          </span>            
        </div>        
        <v-text-field
          hint="Digite o seu CEP"
          :label="props.cep"            
          variant="outlined"
          ></v-text-field>
        <v-text-field
          hint="Digite o nome da sua rua"
          :label="props.street"            
          variant="outlined"
        ></v-text-field>
        <v-text-field
          style="width:50%"
          hint="Número"
          :label="props.number"            
          variant="outlined"
        ></v-text-field>
        <v-text-field
          style="width:50%"
          hint="Complemento"
          :label="props.complement"            
          variant="outlined"
        ></v-text-field>  
        <v-text-field
          hint="Bairro"
          :label="props.bairro"            
          variant="outlined"
        ></v-text-field>              
        <v-text-field
          style="width: 50%"
          hint="Cidade"
          :label="props.city"            
          variant="outlined"
        ></v-text-field>
        <v-text-field
          style="width: 50%"
          hint="Estado"
          :label="props.state"            
          variant="outlined"
        ></v-text-field>
      </v-card-item>          
    </v-card>
  </template>
  
  <script setup lang="ts">
    
  interface Props {
    label: string
    cep: string
    street: string
    number: string
    complement: string
    bairro: string
    city: string
    state: string
  }
  
  const props = defineProps<Props>()
    
  </script>
  
  <style scoped>
  .doacaomensal {
    color: #2d9ae3;  
  }
  </style>