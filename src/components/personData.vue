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
          hint="Digite o seu nome"
          :label="props.name"            
          variant="outlined"
          ></v-text-field>
        <v-text-field
          hint="Digite o seu sobrenome"
          :label="props.lastname"            
          variant="outlined"
        ></v-text-field>
        <v-text-field
          hint="Insira seu email"
          :label="props.email"            
          variant="outlined"
        ></v-text-field>
        <v-text-field
          hint="Digite seu celular"
          :label="props.celular"            
          variant="outlined"
        ></v-text-field>                
        <v-select          
          label="Gênero"
          :items="['Masculino', 'Feminino']"
        ></v-select>
        <v-date-input
          locale="pr-br"        
          clearable label="Data de Nascimento"></v-date-input>
      </v-card-item>          
    </v-card>
  </template>
  
  <script setup lang="ts">
  import { VDateInput } from 'vuetify/labs/VDateInput'
  
  interface Props {
    label: string
    name: string
    lastname: string
    email: string
    celular: string
  }
  
  const props = defineProps<Props>()
    
  </script>
  
  <style scoped>
  .doacaomensal {
    color: #2d9ae3;  
  }
  </style>