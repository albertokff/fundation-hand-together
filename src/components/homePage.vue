<template>
    <v-row>
    <v-col cols="7">
      <v-img
        :aspect-ratio="1"
        class="bg-white"
        :src="image5"                         
      ></v-img>
      <v-img
        :aspect-ratio="1"
        class="bg-white"
        :src="logo"                         
      ></v-img>  
      <v-img
        :aspect-ratio="1"
        class="bg-white"
        :src="image3"                         
      ></v-img>  
      <v-img
        :aspect-ratio="1"
        class="bg-white"
        :src="image2"                         
      ></v-img>  
      <v-img
        :aspect-ratio="1"
        class="bg-white"
        :src="image4"                         
      ></v-img>         
    </v-col>
    <v-col
      cols="5"      
      height="100%">

      <v-col
        class="cordefundo"  
      >          
        <v-card-title class="text-white pt-10 d-flex justify-center text-h6 text-md-h5 text-lg-h4">Emergência no Rio <br> Grande do Sul</v-card-title>
        <v-card-text class="text-white d-flex justify-center">
          O maior desastre climático da história do estado <br> afetou mais de 2 milhões de pessoas.
        </v-card-text>

        <v-card-text
          v-if="showMore"
          class="text-white text-center d-flex justify-center">
          A Fundação Mãos Unidas, está oferecendo auxílio financeiro<br>
          suporte psicossocial e distribuição de itens essenciais em<br>
          colaboração de organizações parceiras e do Governo Estadual<br>
          do Rio Grande do Sul. <br><br>

          Os principais itens de assistência humanitária incluem água<br>
          potável, colchões, cobertores, kits de higiene, materiais de<br>
          limpeza, itens de cozinha e unidades habitacionais.<br><br>

          Além da distribuição de ajuda emergencial, os esforços da<br>
          Fundação englobam o apoio no estabelecimento de abrigos<br>
          de emergência e a disseminação de informações para dar<br>
          suporte às comunidades afetadas.<br><br>

          Doe agora para a Fundação Mãos Unidas e ajude a população<br>
          afetada pelas chuvas no Rio Grande do Sul.
        </v-card-text>
        <v-row class="pt-5 d-flex justify-center">
          <v-btn
            @click="showMore = !showMore"           
            color="yellow">
            Leia mais
          </v-btn>        
        </v-row>
        <v-row class="pt-5 d-flex justify-center">
          <v-btn
            @click="donationUnique = false"                     
            class="doacaomensal mr-7">
            Doação Mensal
          </v-btn>        
          <v-btn 
            @click="donationUnique = true"
            color="white">
            Doação Única
          </v-btn>        
        </v-row>

        <v-row 
          v-if="donationUnique"
          class="pt-3 d-flex justify-center"
        >
          <span>Clique acima e torne-se um doador mensal.</span>
          <span><strong>Garantir a sobrevivência dessas famílias é um <br> trabalho constante.</strong></span>
        </v-row>
        
        <v-row v-if="!donationUnique">
          <doation-card
            :value-month="valueMonth"
            :value-day="valueDay"
            :description="description"
          />
        </v-row>

        <v-row v-if="!donationUnique">
          <doation-card
            :value-month="valueMonth2"
            :value-day="valueDay2"
            :description="description2"
          />
        </v-row>

        <v-row v-if="!donationUnique" class="pl-15 d-flex justify-center">
          <v-col md="12">
              <v-img
              class="bg-white"
              :src="logoCircle"
              style="border-radius:100px;margin-left:200px;"
              :width="100"                       
            ></v-img>
          </v-col>

          <v-col class="pt-10 d-flex justify-center">
            <p>Compartilhe!</p>
            <i class="pl-2 fa-brands fa-instagram"></i>
            <i class="pl-2 fa-brands fa-facebook"></i>
            <i class="pl-2 fa-brands fa-whatsapp"></i>
          </v-col>
      </v-row>  

        <v-row v-if="!donationUnique">
          <doation-card
            :value-month="valueMonth3"
            :value-day="valueDay3"
            :description="description3"
          />
        </v-row>

        <v-row v-if="!donationUnique">
          <doation-card
            :value-month="valueMonth4"
            :value-day="valueDay4"
            :description="description4"
          />
        </v-row>

        <v-row v-if="!donationUnique">
          <text-input 
            :value-day="''"
            :description="description5"
          />
        </v-row>

        <v-row v-if="donationUnique">
          <doation-card
            :value-month="valueMonth6"
            :value-day="''"
            :description="description6"
          />
        </v-row>

        <v-row v-if="donationUnique">
          <doation-card
            :value-month="valueMonth7"
            :value-day="''"
            :description="description7"
          />
        </v-row>

        <v-row v-if="donationUnique" class="pa-15 d-flex text-center">
          <v-col cols="3">
              <v-img
              class="bg-white"
              :src="logoCircle"
              style="border-radius:100px;"
              :width="100"                       
            ></v-img>
          </v-col>

          <v-col class="pt-10 d-flex">
            <p>Compartilhe!</p>
            <i class="pl-2 fa-brands fa-instagram"></i>
            <i class="pl-2 fa-brands fa-facebook"></i>
            <i class="pl-2 fa-brands fa-whatsapp"></i>
          </v-col>
      </v-row>

        <v-row v-if="donationUnique">
          <doation-card
            :value-month="valueMonth8"
            :value-day="''"
            :description="description8"
          />
        </v-row>

        <v-row v-if="donationUnique">
          <doation-card
            :value-month="valueMonth9"
            :value-day="''"
            :description="description9"
          />
        </v-row>
        
        <v-row v-if="donationUnique">
          <doation-card
            :value-month="valueMonth10"
            :value-day="''"
            :description="description10"
          />
        </v-row>
        <v-row v-if="donationUnique">
          <text-input 
            :value-day="''"
            :description="description11"
          />
        </v-row>
      </v-col>  
      <v-col>
        <person-data
          :name="name"
          :label="label"
          :lastname="lastname"
          :email="email"
          :celular="celular" 
        />
      </v-col>    
      <v-col>
        <location-data
          :label="label2"
          :cep="cep"
          :street="street"
          :number="number"
          :complement="complement" 
          :bairro="bairro" 
          :city="city" 
          :state="state" 

        />
      </v-col>
      <v-col>
        <payment-data          
          :label="label3"
          :nrcartao="nrcartao"
          :nmtitular="nmtitular"
          :cpf="cpf" 
          :validade="validade" 
          :cvv="cvv" 
        />
      </v-col> 
      
      <v-row class="d-flex justify-center pl-10 pr-10">
        <v-select
          clearable
          chips
          label="Como você conheceu a Fundação Mãos Unidas? "
          :items="['TV', 'Outros', 'Anúncios em Sites', 'Google', 'Facebook', 'Instagram', 'TikTok', 'Carta', 'Notícias', 'Não sei/Não lembro']"
          multiple
        ></v-select>
      </v-row>

      <v-row class="pl-10 pr-10">
        <v-radio-group>
          <v-radio label="Quero receber as comunicações da Fundação Mãos Unidas" value="one"></v-radio>
        </v-radio-group>
        <v-radio-group>
          <v-radio label="Declaro que li e aceito a Política de Doações e a Política de Privacidade" value="two"></v-radio>
        </v-radio-group>        
      </v-row>

      <v-row class="pt-5 d-flex justify-center">
        <v-col md="10">
          <v-btn
            style="width:500px;height:60px"       
            color="yellow">
            <strong>Doe Agora</strong>
          </v-btn>    
        </v-col>

        <v-col md="5">
          <span class="pt-10" style="text-align: center;">&copy; Desenvolvido por Viviane Sousa. </span>    
        </v-col>
      </v-row>            
    </v-col>    
 </v-row>     
</template>

<script setup>
import logo from '../assets/images/background-main.png'
import image2 from '../assets/images/rs-2.jpg'
import image3 from '../assets/images/rs-3.jpg'
import image4 from '../assets/images/rs-4.jpg'
import image5 from '../assets/images/rs-5.jpg'
import logoCircle from '../assets/images/logo_fundacao.jpeg'
import doationCard from './doationCard.vue'
import textInput from './textInput.vue'
import personData from './personData.vue'
import locationData from './locationData.vue'
import paymentData from './paymentData.vue'


import { ref } from 'vue'

const valueMonth = 'R$64,00/mês'
const valueDay = 'R$2,13/dia'
const description = 'Você fornece 2 Kits de Limpeza para uma família no Rio Grande do Sul.'

const valueMonth2 = 'R$84,00/mês'
const valueDay2 = 'R$2,80/dia'
const description2 = 'Você fornece 30 litros de água mineral para famílias no Rio Grande do Sul.'

const valueMonth3 = 'R$136,00/mês'
const valueDay3 = 'R$4,53/dia'
const description3 = 'Você fornece 1 Kit de Limpeza + 4 Cobertores para uma família no Rio Grande do Sul.'

const valueMonth4 = 'R$240,00/mês'
const valueDay4 = 'R$8,00/dia'
const description4 = 'Você fornece 1 Kit de Higiene e Itens de Cozinha para uma família no Rio Grande do Sul.'

const valueMonth5 = 'R$500,00/mês'
const description5 = 'Ajude uma família com o valor mensal que puder.'

const valueMonth6 = 'R$84,00'
const description6 = 'Você fornece 30 litros de água mineral para famílias no Rio Grande do Sul.'

const valueMonth7 = 'R$136,00'
const description7 = 'Você fornece 1 Kit de Limpeza + 4 Cobertores para uma família no Rio Grande do Sul.'

const valueMonth8 = 'R$240,00'
const description8 = 'Você fornece 1 Kit de Higiene e Itens de Cozinha para uma família no Rio Grande do Sul.'

const valueMonth9 = 'R$410,00'
const description9 = 'Você fornece 4 Colchões para uma família desabrigada no Rio Grande do Sul.'

const valueMonth10 = 'R$1270,00'
const description10 = 'Apoio financeiro para uma família de 5 pessoas no Rio Grande do Sul.'

const valueMonth11 = 'input'
const description11 = 'Ajude uma família com o valor que puder'

const label = 'Dados Pessoais'
const name = 'Nome'
const lastname = 'Sobrenome'
const email = 'Email'
const celular = 'Celular'

const label2 = 'Endereço'
const cep = 'CEP'
const street = 'Rua'
const number = 'Número'
const complement = 'Complemento'
const bairro = 'Bairro'
const city = 'Cidade'
const state = 'Estado'

const label3 = 'Informações de Pagamento'
const nrcartao = 'Número do Cartão'
const nmtitular = 'Nome do Titular'
const cpf = 'CPF'
const validade = 'Validade'
const cvv = 'CVV'

const showMore = ref(false)
const donationUnique = ref(false)

</script>

<style scoped>
.cordefundo {
  background-color: #0072bc;
  color: white;
}

.doacaomensal {
  background-color: #2d9ae3;
  color: white;
}
</style>