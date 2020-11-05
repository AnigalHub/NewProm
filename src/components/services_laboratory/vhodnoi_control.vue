<template>
    <div id="vhodnoi_control">
        <b-container>
            <h2>Входной контроль</h2>
            <trials_video  v-for="trial in  Trials" :trials_video="trial.trials_video" :trials_description="trial.trials_description">
            </trials_video>
            <h3>Входной контроль ЭКБ и КИ включает следующие этапы:</h3>
            <b-row class="row_step">
                <b-col>
                    <div class="accordion" role="tablist">
                        <b-card no-body>
                            <b-card-header header-tag="header" class="p-1"role="tab" v-b-toggle.accordion-1>
                                Идентификация
                            </b-card-header>
                            <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text>{{ text1 }}</b-card-text>
                                </b-card-body>
                            </b-collapse>
                        </b-card>

                        <b-card no-body>
                            <b-card-header header-tag="header" class="p-1" role="tab" v-b-toggle.accordion-2 variant="info">
                                Проверка маркировки
                            </b-card-header>
                            <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text>{{ text2 }}</b-card-text>
                                </b-card-body>
                            </b-collapse>
                        </b-card>

                        <b-card no-body>
                            <b-card-header header-tag="header" class="p-1"role="tab"  v-b-toggle.accordion-3 variant="info">
                                Визуальный контроль
                            </b-card-header>
                            <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text>{{ text3 }}</b-card-text>
                                </b-card-body>
                            </b-collapse>
                        </b-card>
                        <b-card no-body>
                            <b-card-header header-tag="header" class="p-1"role="tab"  v-b-toggle.accordion-4 variant="info">
                                Параметрический и функциональный контроль
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
                                img-src="./images/vhodnoi_control/1.jpg"
                        ></b-carousel-slide>
                        <b-carousel-slide
                                img-src="./images/vhodnoi_control/2.jpg"
                        ></b-carousel-slide>
                        <b-carousel-slide
                                img-src="./images/vhodnoi_control/3.jpg"
                        ></b-carousel-slide>
                        <b-carousel-slide
                                img-src="./images/vhodnoi_control/4.jpg"
                        ></b-carousel-slide>
                    </b-carousel>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import Trials_video from "../trials_video";
    export default {
        name: "vhodnoi_control",
        components: {Trials_video},
        data() {
            return {
                text1: `Процедура состоит в проверке соответствия конкретного изделия требованиям, которые предъявляются к продукции данного типа или модели, указанным в нормативно-технической документации. В качестве источника информации в части требований используются документы производителя, ГОСТ, ОСТ, ТУ и т.д.`,
                text2: `Проводится на начальном этапе работ. Маркировка сверяется с требованиями производителя и если необходимо подвергается воздействию растворителей и очищающих средств для выявления признаков контрафакта и перемаркировки (ГОСТ 5962-004.3, ГОСТ РВ 20.57.406, ГОСТ РВ 20.57.416).`,
                text3: `Включает в себя проверку внешнего вида и массо-габаритных параметров изделия с применением высокоточных средств измерения производителей Vision Engineering и CAS (ГОСТ 5962-004.3, ГОСТ 20.57.406, ГОСТ РВ 20.57.416, ГОСТ 26246.0, ГОСТ РВ 5962-004.4).`,
                text4: `Позволяет подтверждать функциональность изделия и его соответствие требованиям технической документации. Основные параметры-критерии годности указаны в «Программе и методике проведения сертификационных испытаний». На данном этапе не только выявляют потенциально контрафактную продукцию, но и устанавливают годность оригинальных изделий, которые могли храниться или транспортироваться с нарушением установленных правил.`,

                Trials:[
                    {
                        trials_video: './video/vhod.mp4',
                        trials_description: 'Входной контроль — это ряд работ, проводимых в испытательной лаборатории ООО «Компании Промэлектронсервис» с целью выявления некачественной продукции или ее несоответствие заявленным требованиям.',
                    }
                ]
            }
        }
    }
</script>
<style>

</style>
<style scoped lang="scss">
    #vhodnoi_control{
        background: url("../../../public/фон.jpg");
        background-size: 100% 100%;
        padding: 1% 0 2.5% 0;
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
   }
   .row_step .col{
       padding: 0 !important;
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
        padding: 1rem !important;
    }

</style>