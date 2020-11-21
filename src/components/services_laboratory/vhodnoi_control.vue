<template>
    <div id="vhodnoi_control">
        <b-container>
            <h2>Входной контроль</h2>
            <trials_video  v-for="trial in  Trials" :trials_video="trial.trials_video" :trials_description="trial.trials_description"></trials_video>
            <h3>Входной контроль ЭКБ и КИ включает следующие этапы:</h3>
            <b-row class="row_step">
                <b-col>
                    <div class="accordion" role="tablist">
                      <b-card no-body>
                          <trials_stages  v-for="(stage,index) in  Stages_trials" :index="index" :stage_name="stage.stage_name"
                                            :stage_descr="stage.stage_descr">
                          </trials_stages>
                      </b-card>
                    </div>
                </b-col>
                <b-col cols="5">
                    <b-carousel id="carousel-no-animation" style="text-shadow: 0px 0px 2px #000" animation indicators>
                        <b-carousel-slide img-src="./images/vhodnoi_control/1.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="./images/vhodnoi_control/2.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="./images/vhodnoi_control/3.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="./images/vhodnoi_control/4.jpg"></b-carousel-slide>
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
        name: "vhodnoi_control",
        components: {Trials_stages, Trials_video},
        data() {
            return {
                Trials:[
                    {
                        trials_video: "./video/vhod.mp4",
                        trials_description: '<b>Входной контроль</b> — это ряд работ, проводимых в испытательной лаборатории ООО «Компании Промэлектронсервис» с целью выявления некачественной продукции или ее несоответствие заявленным требованиям.',
                    }
                ],
                Stages_trials:[
                    {
                        stage_name:"Идентификация",
                        stage_descr:"Процедура состоит в проверке соответствия конкретного изделия требованиям, которые предъявляются к продукции данного типа или модели, указанным в нормативно-технической документации. В качестве источника информации в части требований используются документы производителя, ГОСТ, ОСТ, ТУ и т.д.",
                    },
                    {
                        stage_name:"Проверка маркировки",
                        stage_descr:"Проводится на начальном этапе работ. Маркировка сверяется с требованиями производителя и если необходимо подвергается воздействию растворителей и очищающих средств для выявления признаков контрафакта и перемаркировки (ГОСТ 5962-004.3, ГОСТ РВ 20.57.406, ГОСТ РВ 20.57.416).",
                    },
                    {
                        stage_name:"Визуальный контроль",
                        stage_descr:"Включает в себя проверку внешнего вида и массо-габаритных параметров изделия с применением высокоточных средств измерения производителей Vision Engineering и CAS (ГОСТ 5962-004.3, ГОСТ 20.57.406, ГОСТ РВ 20.57.416, ГОСТ 26246.0, ГОСТ РВ 5962-004.4).",
                    },
                    {
                        stage_name:"Параметрический и функциональный контроль",
                        stage_descr:"Позволяет подтверждать функциональность изделия и его соответствие требованиям технической документации. Основные параметры-критерии годности указаны в «Программе и методике проведения сертификационных испытаний». На данном этапе не только выявляют потенциально контрафактную продукцию, но и устанавливают годность оригинальных изделий, которые могли храниться или транспортироваться с нарушением установленных правил.",
                    },
                ]
            }
        }
    }
</script>
<style scoped lang="scss">

</style>