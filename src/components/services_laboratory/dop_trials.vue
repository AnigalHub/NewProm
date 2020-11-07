<template>
    <div id="dop_trials">
        <b-container>
            <h2>Дополнительные испытания</h2>
            <trials_video  v-for="trial in  Trials" :trials_video="trial.trials_video" :trials_description="trial.trials_description">
            </trials_video>
            <h3>Дополнительные испытания включают в себя:</h3>
            <b-row class="row_step">
                <b-col>
                    <div class="accordion" role="tablist">
                        <!--
                    <b-card no-body>
                      <trials_stages  v-for="(stage,index) in  Stages_trials" :index="index" :stage_name="stage.stage_name" :stage_descr="stage.stage_descr">
                      </trials_stages>
                    </b-card>
                      -->
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
                    <b-carousel id="carousel-no-animation" style="text-shadow: 0px 0px 2px #000" animation indicators>
                        <b-carousel-slide img-src="./images/dop_trials/1.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="./images/dop_trials/2.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="./images/dop_trials/3.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="./images/dop_trials/4.jpg"></b-carousel-slide>
                    </b-carousel>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import Trials_video from "../trials_video";
    import Trials_stages from "../trials_stages";
    export default {
        name: "dop_trials",
        components: {Trials_video,Trials_stages},
        data() {
            return {
                text1: `Проверка внешнего вида, массо-габаритных характеристик, качества маркировки. Дополнительно подтверждаются основные параметры - критерии и годность.`,
                text2: `Представляет собой воздействия внешних факторов (термотренировка, электротермотренировка) с целью выявления скрытых дефектов.`,
                text3: `Представляет собой дополнительные проверки по наиболее критичному воздействующему фактору, которые при этом не ухудшают характеристики ЭКБ и КИ.`,
                text4: `Для его выполнения отбирают образцы из партии ЭКБ и КИ, и проводят оценку соответствия конструктивно-технологических параметров ЭКБ и КИ требованиям нормативно-технической документации.`,
                Trials:[
                    {
                        trials_video: './video/dop.mp4',
                        trials_description: 'В результате проведения  дополнительных испытаний подтверждается соответствие иделия требованиям нормативной документации (ГОСТ, ОСТ и тд.) При комплектовании высоконадежной аппаратуры, рекомендуется проводить проверку 100% изделий ЭКБ и КИ (а не только образцов), что гарантирует их дальнейшую работу в заданных условиях.',
                    }
                ],
                Stages_trials:[
                    {
                        stage_name:'Входной контроль',
                        stage_descr:'Проверка внешнего вида, массо-габаритных характеристик, качества маркировки. Дополнительно подтверждаются основные параметры - критерии и годность.',
                    },
                    {
                        stage_name:'Отбраковочные испытания',
                        stage_descr:'Представляет собой воздействия внешних факторов (термотренировка, электротермотренировка) с целью выявления скрытых дефектов.',
                    },
                    {
                        stage_name:'Диагностический неразрушающий контроль',
                        stage_descr:'Представляет собой дополнительные проверки по наиболее критичному воздействующему фактору, которые при этом не ухудшают характеристики ЭКБ и КИ.',
                    },
                    {
                        stage_name:'Выборочный разрушающий физический анализ',
                        stage_descr:'Для его выполнения отбирают образцы из партии ЭКБ и КИ, и проводят оценку соответствия конструктивно-технологических параметров ЭКБ и КИ требованиям нормативно-технической документации.',
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="scss">

</style>