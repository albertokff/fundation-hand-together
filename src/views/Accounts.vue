<template>
    <v-row>
        <v-col
          md="12"
          class="pt-10 pl-10"
        >
          <h4 style="color:blue;">Como aplicamos os recursos arrecadados?</h4>
        </v-col>

        <v-col md="6">
          <v-img              
            class="bg-white"
            :src="logoDonation"
            style="width:100%;margin-left:10px;"                         
          />
        </v-col>

        <v-col md="6" class="pa-10">
          <span>
            A Fundação Mãos Unidas é extremamente preocupada com a aplicação correta de cada doação recebida.
            Nosso propósito é ajudar o povo gaúcho nesse momento tão delicado!
          </span><br><br>

          <span>
            Com esse propósito, 100% das doações são destinadas às famílias gaúchas e não há terceiros envolvidos nos recebimentos.
            A Fundação Mãos Unidas está de mãos dadas com o Rio Grande do Sul!
          </span><br><br>
                    
          <v-img              
            class="bg-white"
            :src="rs"
            style="width:60%;margin-left:10px;"                         
          />          
        </v-col>
    </v-row>

    <v-row>
      <Faqs />
    </v-row>    
</template>

<script setup>
import logoDonation from '../assets/images/doacao-image-1.jpg'
import rs from '../assets/images/rio-grande-do-sul.jpg'
import Faqs from '../components/faqs.vue';

</script>