<template>
    <v-row class="d-flex justify-center" style="align-items: center;">
        <v-col md="6" class="text-center pa-10">
            <h1>Perguntas Realizadas <br> Frequentemente</h1>
            <p>Confira ao lado dúvidas comuns ao fazer doações. <br> Você pode conferir nossa lista completa de perguntas no botão abaixo</p>
            <button type="button" class="btn btn-primary text-white">Ler todas as FAQ's</button>
        </v-col>

        <v-col md="6" class="pr-10 pt-10">
            <div class="accordion" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        Como posso fazer uma doação?
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                    <div class="accordion-body">
                        <strong>Você pode fazer uma doação utilizando a chave pix: fundacaomaosunidas@outlook.com, também diretamente pelo site da Fundação Mãos Unida ou entrando em contato com eles por telefone, ou e-mail: fundacaomaosunidas@outlook.com </strong>
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        Posso deduzir minha doação no Imposto de Renda?
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                    <div class="accordion-body">
                        Sim, doações para organizações sem fins lucrativos podem ser deduzidas no Imposto de Renda, desde que você siga as regras estabelecidas pela Receita Federal.
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        Como a Fundação Mãos Unida utiliza as doações recebidas?
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                    <div class="accordion-body">
                        A Fundação Mãos Unidas utiliza as doações para financiar projetos humanitários, como fornecimento de alimentos, assistência médica e educação.
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        Existe um valor mínimo para doações?
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                    <div class="accordion-body">
                        <strong>Não há um valor mínimo fixo. Qualquer quantia é bem-vinda e faz a diferença.</strong>
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingFive">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        Posso escolher a causa específica para a qual minha doação será destinada?
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                    <div class="accordion-body">
                        Sim, você pode especificar a causa (como combate à fome, assistência médica, etc.) ao fazer sua doação.
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingSix">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        Como posso acompanhar o impacto da minha doação?
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseSix" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                    <div class="accordion-body">
                        A Fundação Mãos Unidas fornece relatórios periódicos sobre o uso das doações, mostrando o impacto nas comunidades beneficiadas.
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingSeven">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="false" aria-controls="panelsStayOpen-collapseSeven">
                        Posso fazer uma doação em nome de outra pessoa?
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseSeven" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                    <div class="accordion-body">
                        Sim, você pode fazer uma doação em nome de outra pessoa, como uma homenagem ou presente.
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingEight">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEight" aria-expanded="false" aria-controls="panelsStayOpen-collapseEight">
                        A Fundação Mãos Unida aceita doações de empresas?
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseEight" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                    <div class="accordion-body">
                        Sim, a Fundação Mãos Unida aceita doações corporativas e parcerias.
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingNine">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseNine" aria-expanded="false" aria-controls="panelsStayOpen-collapseNine">
                        Como posso me voluntariar para ajudar além da doação?
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseNine" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                    <div class="accordion-body">
                        Entre em contato com a Fundação Mãos Unida através do e-mail: fundacaomaosunidas@outlook ou pelos telefones (11) 3000-0000 e (21) 2000-0000 para saber sobre oportunidades de voluntariado.                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingTen">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTen" aria-expanded="false" aria-controls="panelsStayOpen-collapseTen">
                        Como posso cancelar ou alterar minha doação recorrente?
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTen" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                    <div class="accordion-body">
                        Entre em contato com a Fundação Mãos Unida por e-mail: fundacaomaosunidas@outlook ou pelos telefones (11) 3000-0000 e (21) 2000-0000 para fazer alterações em sua doação recorrente.                    </div>
                    </div>
                </div>
            </div>
        </v-col>
    </v-row>
</template>