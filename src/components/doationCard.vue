<template>
  <v-card
    class="mx-auto my-8"
    elevation="16"
    max-width="344"
  >
    <v-card-item>
      <div class="d-flex justify-space-between">
        <span
          style="color:red;font-size:20px;">
          <strong>{{ props.valueMonth }}</strong>
        </span>  
        <span
          class="doacaomensal"
          style="font-size:12px">
          {{ props.valueDay }}
        </span>
      </div>      
    </v-card-item>

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