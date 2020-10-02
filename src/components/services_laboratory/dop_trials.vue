<template>
    <div id="dop_trials">
        <b-container>
            <h2>Дополнительные испытания</h2>
            <b-row >
                <b-col cols="3">
                    <video autoplay muted loop playsinline webkit-playingline width="100%" poster="video/video.png">
                        <source src="video/dop.mp4" type="video/mp4" >
                    </video>
                </b-col>
                <b-col>
                    <p class="text descr">В результате проведения <b> дополнительных испытаний </b> подтверждается соответствие иделия требованиям нормативной документации (ГОСТ, ОСТ и тд.) При комплектовании высоконадежной аппаратуры, рекомендуется проводить проверку 100% изделий ЭКБ и КИ (а не только образцов), что гарантирует их дальнейшую работу в заданных условиях.</p>
                </b-col>
            </b-row>
            <h3>Дополнительные испытания включают в себя:</h3>
            <b-row class="row_step">
                <b-col>
                    <div class="accordion" role="tablist">
                        <b-card no-body>
                            <b-card-header header-tag="header" class="p-1"role="tab" v-b-toggle.accordion-1>
                                Входной контроль
                            </b-card-header>
                            <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text>{{ text1 }}</b-card-text>
                                </b-card-body>
                            </b-collapse>
                        </b-card>

                        <b-card no-body>
                            <b-card-header header-tag="header" class="p-1" role="tab" v-b-toggle.accordion-2 variant="info">
                                Отбраковочные испытания
                            </b-card-header>
                            <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text>{{ text2 }}</b-card-text>
                                </b-card-body>
                            </b-collapse>
                        </b-card>

                        <b-card no-body>
                            <b-card-header header-tag="header" class="p-1"role="tab"  v-b-toggle.accordion-3 variant="info">
                                Диагностический неразрушающий контроль
                            </b-card-header>
                            <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text>{{ text3 }}</b-card-text>
                                </b-card-body>
                            </b-collapse>
                        </b-card>
                        <b-card no-body>
                            <b-card-header header-tag="header" class="p-1"role="tab"  v-b-toggle.accordion-4 variant="info">
                                Выборочный разрушающий физический анализ
                            </b-card-header>
                            <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text>{{ text4 }}</b-card-text>
                                </b-card-body>
                            </b-collapse>
                        </b-card>
                    </div>
                </b-col>
                <b-col cols="5">
                    <b-carousel
                            id="carousel-no-animation"
                            style="text-shadow: 0px 0px 2px #000"
                            animation
                            indicators
                    >
                        <b-carousel-slide
                                img-src="./images/dop_trials/1.jpg"
                        ></b-carousel-slide>
                        <b-carousel-slide
                                img-src="./images/dop_trials/2.jpg"
                        ></b-carousel-slide>
                        <b-carousel-slide
                                img-src="./images/dop_trials/3.jpg"
                        ></b-carousel-slide>
                        <b-carousel-slide
                                img-src="./images/dop_trials/4.jpg"
                        ></b-carousel-slide>
                    </b-carousel>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "dop_trials",
        data() {
            return {
                text1: `Проверка внешнего вида, массо-габаритных характеристик, качества маркировки. Дополнительно подтверждаются основные параметры - критерии и годность.`,
                text2: `Представляет собой воздействия внешних факторов (термотренировка, электротермотренировка) с целью выявления скрытых дефектов.`,
                text3: `Представляет собой дополнительные проверки по наиболее критичному воздействующему фактору, которые при этом не ухудшают характеристики ЭКБ и КИ.`,
                text4: `Для его выполнения отбирают образцы из партии ЭКБ и КИ, и проводят оценку соответствия конструктивно-технологических параметров ЭКБ и КИ требованиям нормативно-технической документации.`,
            }
        }
    }
</script>

<style scoped lang="scss">
    #dop_trials{
        background: url("../../../public/фон.jpg");
        background-size: 100% 100%;
        padding: 1% 0 2.5% 0;
    }
    h2{
        color: rgba(5, 35, 71, 0.75);
    }
    h3,.text,.card-body,.card-header{
        color: #161640 !important;
    }
    .col-3{
        padding: 0 !important;
        flex: 0 0 30% !important;
        max-width: 30% !important;
    }
    .col-5{
        flex: 0 0 40% !important;
        max-width: 40% !important;
        padding-left: 5px !important;
    }
    .row_step .col{
        padding-left: 5px !important;
        padding-right: 5px !important;
    }

    video , .carousel{
        padding: 2.5% !important;
        background: rgba(255, 255, 255, 0.26) !important;
        box-shadow: 2px 2px 5px rgba(5, 35, 71, 0.28),0 0 1.5em rgba(5, 35, 71, 0.28),0 0 0.9em rgba(5, 35, 71, 0.27) !important;
    }
    .descr{
        margin-top: 5%;
    }
    .card-header {
        padding: .25rem 0.5rem !important;
        background: rgba(42, 74, 89, 0.27) !important;
        border: 2px solid rgba(5, 35, 71, 0.49) !important;
        border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0 !important;
        color: #121224;
    }
    .card{
        background: rgba(255, 255, 255, 0.61) !important;
    }
    .card-body{
        padding: 0.8rem !important;
    }

</style>