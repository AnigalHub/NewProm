<template>
    <div id="mehanic_trials">
        <b-container>
            <h2>Механические испытания</h2>
            <b-row >
                <b-col cols="3">
                    <video autoplay muted loop playsinline webkit-playingline width="100%" poster="video/video.png">
                        <source src="video/mehanic.mp4" type="video/mp4" >
                    </video>
                </b-col>
                <b-col>
                    <p class="text descr">
                       <b> Механические испытания ЭКБ и КИ </b> проводят для проверки работоспособности или сохранения внешнего вида изделий в пределах, установленных в документации производителя, в условиях или после воздействия указанных факторов.                    </p>
                </b-col>
            </b-row>
            <h3>Входной контроль ЭКБ и КИ включает следующие этапы:</h3>
            <b-row class="row_step">
                <b-col>
                    <div class="accordion" role="tablist">
                        <b-card no-body>
                            <b-card-header header-tag="header" class="p-1"role="tab" v-b-toggle.accordion-1>
                                Испытание на определение критических частот в диапазоне 5-1000 Гц
                            </b-card-header>
                            <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text>{{ text1 }}</b-card-text>
                                </b-card-body>
                            </b-collapse>
                        </b-card>

                        <b-card no-body>
                            <b-card-header header-tag="header" class="p-1" role="tab" v-b-toggle.accordion-2 variant="info">
                                Испытание на вибропрочность и виброустойчивость
                            </b-card-header>
                            <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text>{{ text2 }}</b-card-text>
                                </b-card-body>
                            </b-collapse>
                        </b-card>

                        <b-card no-body>
                            <b-card-header header-tag="header" class="p-1"role="tab"  v-b-toggle.accordion-3 variant="info">
                                Воздействие частотами, не вызывающими механическое разрушение оборудования
                            </b-card-header>
                            <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text>{{ text3 }}</b-card-text>
                                </b-card-body>
                            </b-collapse>
                        </b-card>
                        <b-card no-body>
                            <b-card-header header-tag="header" class="p-1"role="tab"  v-b-toggle.accordion-4 variant="info">
                                Испытание на ударную прочность
                            </b-card-header>
                            <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text>{{ text4 }}</b-card-text>
                                </b-card-body>
                            </b-collapse>
                        </b-card>
                        <b-card no-body>
                            <b-card-header header-tag="header" class="p-1"role="tab"  v-b-toggle.accordion-5 variant="info">
                                Испытания на ударную устойчивость при многократном воздействии с ускорением до 100g
                            </b-card-header>
                            <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text>{{ text5 }}</b-card-text>
                                </b-card-body>
                            </b-collapse>
                        </b-card>
                        <b-card no-body>
                            <b-card-header header-tag="header" class="p-1"role="tab"  v-b-toggle.accordion-6 variant="info">
                                Испытание на влияние одиночных ударов со значительным ускорением до 5000 g
                            </b-card-header>
                            <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text>{{ text6 }}</b-card-text>
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
                                img-src="./images/mehanic_trials/1.jpg"
                        ></b-carousel-slide>
                        <b-carousel-slide
                                img-src="./images/mehanic_trials/2.jpg"
                        ></b-carousel-slide>
                        <b-carousel-slide
                                img-src="./images/mehanic_trials/3.jpg"
                        ></b-carousel-slide>
                        <b-carousel-slide
                                img-src="./images/mehanic_trials/4.jpg"
                        ></b-carousel-slide>
                    </b-carousel>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "mehanic_trials",
        data() {
            return {
                text1: `Необходимо для определения резонансов изделия или конструкции в целом. Негативное влияние частот проявляется в виде нарушения движения механизмов, полном отказе изделия. Значительно повышается риск усталостных разрушений, трещин, трансформирования внутренней структуры материалов и поверхностных слоев (ГОСТ 5962-004.1, ГОСТ 20.57.406, ГОСТ РВ 20.57.416).`,
                text2: `Способность конструкции противостоять разрушительному воздействию вибраций и сохранять работоспособность в диапазоне 5-10000 Гц при ускорении до 40g. При испытании проверяют воздействие на ЭКБ и КИ максимальных амплитуд ускорения и длительной вибрационной нагрузки (ГОСТ 5962-004.1, ГОСТ 20.57.406, ГОСТ РВ 20.57.416).`,
                text3: `Испытания выполняются для проверки работоспособности ЭКБ и КИ под влиянием неинтенсивных длительных вибраций (ГОСТ 5962-004.1, ГОСТ 20.57.406, ГОСТ РВ 20.57.416).`,
                text4: `Целью испытания является установление способность ЭКБ и КИ противостоять механическим ударам при ускорении до 100g. В процессе испытания выявляют такие изменения: деформацию корпуса и крепежей, разрушение частей конструкции и отдельных элементов (ГОСТ 5962-004.1, ГОСТ 20.57.406, ГОСТ РВ 20.57.416).`,
                text5: `Испытания осуществляется под электрической нагрузкой, с целью установления возможности изделия сохранять свою работоспособность при воздействии ударных нагрузок (ГОСТ 5962-004.1, ГОСТ 20.57.406, ГОСТ РВ 20.57.416).`,
                text6: `В процессе испытания выявляют способность изделия сохранить целостность корпуса, узлов и креплений (ГОСТ 5962-004.1, ГОСТ 20.57.406, ГОСТ РВ 20.57.416).`,
            }
        }
    }
</script>
<style>

</style>
<style scoped lang="scss">
    #mehanic_trials{
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