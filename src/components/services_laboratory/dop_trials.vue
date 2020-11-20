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
                        <b-card no-body>
                            <trials_stages  v-for="(stage,index) in  Stages_trials" :index="index" :stage_name="stage.stage_name" :stage_descr="stage.stage_descr">
                            </trials_stages>
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
                Trials:[
                    {
                        trials_video: "./video/dop.mp4",
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