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
        <v-row class="d-flex justify-center">
            <v-col class="pl-4" cols="8">
                <span style="font-size:10px;">
                    Sua generosa doação à Fundação Mãos Unidas é 
                    processada pela parceira PagBrasil e será identificada
                    como Pb*OnuMaosUnidas na fatura de seu cartão. 
                    Caso faça a doação com um cartão virtual, verifique 
                    se está habilitado a fazer pagamentos recorrentes.
                </span>
            </v-col>
            <v-col class="pt-12" cols="4">
                <v-img
                    height="20"                
                    class="bg-white"
                    :src="logo"                         
                ></v-img>
            </v-col>
        </v-row>

        <v-col class="pt-10">
            <v-text-field
                v-model="nrcartao"
                hint="Digite o número do seu cartão"
                :label="props.nrcartao"            
                variant="outlined"
            ></v-text-field>
            <v-text-field
                v-model="nmtitular"
                hint="Nome do Titular"
                :label="props.nmtitular"            
                variant="outlined"
            ></v-text-field>
            <v-text-field
                hint="CPF"
                :label="props.cpf"            
                variant="outlined"
            ></v-text-field>
            <v-text-field
                v-model="dtvalidade"
                hint="Validade"
                :label="props.validade"            
                variant="outlined"
            ></v-text-field>
            <v-text-field
                hint="CVV"
                :label="props.cvv"            
                variant="outlined"
            ></v-text-field>
        </v-col>

        <v-row class="d-flex justify-center">
            <span
                class="doacaomensal"
                style="font-size:20px;">
                <strong>Doação Segura</strong>
            </span>  
        </v-row>

        <v-row class="pt-3   justify-center">
          <v-col>
            <div
              class="cordefundo"
              style="height:200px"
            >
              <v-col class="pl-8 pt-5">
                <i
                  class="fa-solid fa-sim-card fa-2xl" />
              </v-col>

              <v-row>
                <v-col class="pl-10 pt-8">
                  <span style="font-size:13px">Número do Cartão</span>
                </v-col>

                <v-col class="pl-10 pt-8">
                  <span style="font-size:13px">Validade</span>
                </v-col>
              </v-row>

              <v-row>
                <v-col class="pl-10 pt-1">
                  <span style="font-size:13px;color:yellow;">{{ nrcartao }}</span>
                </v-col>
                <v-col class="pl-10 pt-1">
                  <span style="font-size:13px;color:yellow;">{{ dtvalidade }}</span>
                </v-col>
              </v-row>

              <v-row>
                <v-col class="pl-10 pt-2">
                  <span style="font-size:13px;">Nome do Titular</span>
                </v-col>
              </v-row>

              <v-row>
                <v-col class="pl-10 pt-1">
                  <span style="font-size:13px;color:yellow;">{{ nmtitular }}</span>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </v-card-item>          
    </v-card>
  </template>
  
  <script setup lang="ts"> 
  import logo from '../assets/images/logo_pagbrasil.png' 
  import { ref } from 'vue'
  
  interface Props {
    label: string
    nrcartao: string
    nmtitular: string
    cpf: string
    validade: string
    cvv: string
  }
  
  const props = defineProps<Props>()

  const nrcartao = ref('')
  const nmtitular = ref('')
  const dtvalidade = ref('')
    
  </script>
  
  <style scoped>
  .doacaomensal {
    color: #2d9ae3;  
  }

.cordefundo {
  background-color: #0072bc;
  color: white;
}
  </style>