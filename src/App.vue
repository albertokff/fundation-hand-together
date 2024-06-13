<template>
  <nav class="navbar sticky-top bg-body-tertiary">
      <div class="text-gray-600 text-lg">
        <RouterLink to="/" style="text-decoration: none">             
            <div class="d-flex" style="align-items:center;">
                <v-img
                    :aspect-ratio="1"
                    class="bg-white"
                    :src="logoCircle"
                    style="width:50px;border-radius:20px;margin-left:10px;"                         
                ></v-img>
                <span style="padding-left:10px;"><strong>Fundação Mãos Unidas</strong></span>
            </div>
        </RouterLink>
      </div>
        <div class="justify-end">
            <RouterLink
              to="/dashboard"
              style="text-decoration: none !important;"
            >
              <span>Dashboards</span>
            </RouterLink>
            <RouterLink 
              to="/accounts"
              style="text-decoration: none !important;margin-left: 10px;margin-right: 10px;"
            >
              <span>Prestação de Contas</span>              
            </RouterLink>           
        </div>
    </nav>  
  <router-view></router-view>
</template>

<script setup lang="ts">
import logoCircle from './assets/images/logo_fundacao.jpeg'

</script>
