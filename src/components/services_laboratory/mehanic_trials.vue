<template>
    <div id="mehanic_trials">
        <b-container>
            <h2>Механические испытания</h2>
            <trials_video  v-for="trial in  Trials" :trials_video="trial.trials_video" :trials_description="trial.trials_description">
            </trials_video>
            <h3>Входной контроль ЭКБ и КИ включает следующие этапы:</h3>
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
                        <b-carousel-slide img-src="./images/mehanic_trials/1.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="./images/mehanic_trials/2.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="./images/mehanic_trials/3.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="./images/mehanic_trials/4.jpg"></b-carousel-slide>
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
        name: "mehanic_trials",
        components: {Trials_video,Trials_stages},
        data() {
            return {
                Trials:[
                    {
                        trials_video: "./video/mehanic.mp4",
                        trials_description: "Механические испытания ЭКБ и КИ  проводят для проверки работоспособности или сохранения внешнего вида изделий в пределах, установленных в документации производителя, в условиях или после воздействия указанных факторов.",
                    }
                ],
                Stages_trials:[
                    {
                        stage_name:"Испытание на определение критических частот в диапазоне 5-1000 Гц",
                        stage_descr:"Необходимо для определения резонансов изделия или конструкции в целом. Негативное влияние частот проявляется в виде нарушения движения механизмов, полном отказе изделия. Значительно повышается риск усталостных разрушений, трещин, трансформирования внутренней структуры материалов и поверхностных слоев (ГОСТ 5962-004.1, ГОСТ 20.57.406, ГОСТ РВ 20.57.416).",
                    },
                    {
                        stage_name:"Испытание на вибропрочность и виброустойчивость",
                        stage_descr:"Способность конструкции противостоять разрушительному воздействию вибраций и сохранять работоспособность в диапазоне 5-10000 Гц при ускорении до 40g. При испытании проверяют воздействие на ЭКБ и КИ максимальных амплитуд ускорения и длительной вибрационной нагрузки (ГОСТ 5962-004.1, ГОСТ 20.57.406, ГОСТ РВ 20.57.416).",
                    },
                    {
                        stage_name:"Воздействие частотами, не вызывающими механическое разрушение оборудования",
                        stage_descr:"Испытания выполняются для проверки работоспособности ЭКБ и КИ под влиянием неинтенсивных длительных вибраций (ГОСТ 5962-004.1, ГОСТ 20.57.406, ГОСТ РВ 20.57.416).",
                    },
                    {
                        stage_name:"Испытание на ударную прочность",
                        stage_descr:"Целью испытания является установление способность ЭКБ и КИ противостоять механическим ударам при ускорении до 100g. В процессе испытания выявляют такие изменения: деформацию корпуса и крепежей, разрушение частей конструкции и отдельных элементов (ГОСТ 5962-004.1, ГОСТ 20.57.406, ГОСТ РВ 20.57.416).",
                    },
                    {
                        stage_name:"Испытания на ударную устойчивость при многократном воздействии с ускорением до 100g",
                        stage_descr:"Испытания осуществляется под электрической нагрузкой, с целью установления возможности изделия сохранять свою работоспособность при воздействии ударных нагрузок (ГОСТ 5962-004.1, ГОСТ 20.57.406, ГОСТ РВ 20.57.416).",
                    },
                    {
                        stage_name:"Испытание на влияние одиночных ударов со значительным ускорением до 5000 g",
                        stage_descr:"В процессе испытания выявляют способность изделия сохранить целостность корпуса, узлов и креплений (ГОСТ 5962-004.1, ГОСТ 20.57.406, ГОСТ РВ 20.57.416).",
                    },
                ]
            }
        }
    }
</script>
<style>

</style>
<style scoped lang="scss">

</style>