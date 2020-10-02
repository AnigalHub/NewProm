<template>
    <div id="climatic_trials">
        <b-container>
            <h2>Климатические испытания</h2>
            <b-row >
                <b-col cols="3">
                    <video autoplay muted loop playsinline webkit-playingline width="100%" poster="video/video.png">
                        <source src="video/klimat.mp4" type="video/mp4" >
                    </video>
                </b-col>
                <b-col>
                    <p class="text descr">
                        При оценке качества любого изделия имеет смысл оценивать не только его функциональные и эксплуатационные показатели, но и степень воздействия факторов окружающей среды, при которой изделие продолжает соответствовать заявленным характеристикам.
                    </p>
                </b-col>
            </b-row>
            <h3>Испытания на климатические воздействия включают:</h3>
            <b-row class="row_step">
                <b-col>
                    <div class="accordion" role="tablist">
                        <b-card no-body>
                            <b-card-header header-tag="header" class="p-1"role="tab" v-b-toggle.accordion-1>
                                Испытания на воздействие пониженной температуры (до -70°C)
                            </b-card-header>
                            <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text>{{ text1 }}</b-card-text>
                                </b-card-body>
                            </b-collapse>
                        </b-card>

                        <b-card no-body>
                            <b-card-header header-tag="header" class="p-1" role="tab" v-b-toggle.accordion-2 variant="info">
                                Испытания на воздействие повышенной температуры (до +150°C)
                            </b-card-header>
                            <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text>{{ text2 }}</b-card-text>
                                </b-card-body>
                            </b-collapse>
                        </b-card>

                        <b-card no-body>
                            <b-card-header header-tag="header" class="p-1"role="tab"  v-b-toggle.accordion-3 variant="info">
                                Испытание воздействием повышенной (до 100%) относительной влажности воздуха
                            </b-card-header>
                            <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text>{{ text3 }}</b-card-text>
                                </b-card-body>
                            </b-collapse>
                        </b-card>
                        <b-card no-body>
                            <b-card-header header-tag="header" class="p-1"role="tab"  v-b-toggle.accordion-4 variant="info">
                                Испытание на воздействие изменения температуры (от – 70°С до +150°С)
                            </b-card-header>
                            <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text>{{ text4 }}</b-card-text>
                                </b-card-body>
                            </b-collapse>
                        </b-card>
                        <b-card no-body>
                            <b-card-header header-tag="header" class="p-1" role="tab"  v-b-toggle.accordion-5 variant="info">
                                Испытание на воздействие атмосферных конденсированных осадков (инея и росы)
                            </b-card-header>
                            <b-collapse id="accordion-5"  accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text>{{ text5 }}</b-card-text>
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
                                img-src="./images/climatic_trials/1.jpg"
                        ></b-carousel-slide>
                        <b-carousel-slide
                                img-src="./images/climatic_trials/2.jpg"
                        ></b-carousel-slide>
                        <b-carousel-slide
                                img-src="./images/climatic_trials/3.jpg"
                        ></b-carousel-slide>
                        <b-carousel-slide
                                img-src="./images/climatic_trials/4.jpg"
                        ></b-carousel-slide>
                        <b-carousel-slide
                                img-src="./images/climatic_trials/5.jpg"
                        ></b-carousel-slide>
                        <b-carousel-slide
                                img-src="./images/climatic_trials/6.jpg"
                        ></b-carousel-slide>
                    </b-carousel>
                </b-col>
            </b-row>
            <div class="accordion" role="tablist">
                <b-card no-body>
                    <b-card-header header-tag="header" class="p-1" role="tab"  v-b-toggle.accordion-6 >
                        Испытание на воздействие пониженного давления (до 5 мм.рт. ст)
                    </b-card-header>
                    <b-collapse id="accordion-6" visible accordion1="my-accordion" role="tabpanel">
                        <b-card-body>
                            <b-card-text>{{ text6 }}</b-card-text>
                        </b-card-body>
                    </b-collapse>
                </b-card>
                <b-card no-body>
                    <b-card-header header-tag="header" class="p-1"role="tab"  v-b-toggle.accordion-7 variant="info">
                        Испытание на воздействие повышенного давления (до 2400 мм. рт. ст.)
                    </b-card-header>
                    <b-collapse id="accordion-7" accordion1="my-accordion" role="tabpanel">
                        <b-card-body>
                            <b-card-text>{{ text7 }}</b-card-text>
                        </b-card-body>
                    </b-collapse>
                </b-card>
                <b-card no-body>
                    <b-card-header header-tag="header" class="p-1"role="tab"  v-b-toggle.accordion-8 variant="info">
                        Испытание на воздействие изменения давления воздуха от 5 мм.рт.ст. до 2400 мм.рт.ст. воздуха.
                    </b-card-header>
                    <b-collapse id="accordion-8" accordion1="my-accordion" role="tabpanel">
                        <b-card-body>
                            <b-card-text>{{ text8 }}</b-card-text>
                        </b-card-body>
                    </b-collapse>
                </b-card>
                <b-card no-body>
                    <b-card-header header-tag="header" class="p-1"role="tab"  v-b-toggle.accordion-9 variant="info">
                        Испытания по подтверждению требований надежности(сохраняемость и безотказность)
                    </b-card-header>
                    <b-collapse id="accordion-9" accordion1="my-accordion" role="tabpanel">
                        <b-card-body>
                            <b-card-text>{{ text9 }}</b-card-text>
                        </b-card-body>
                    </b-collapse>
                </b-card>
                <b-card no-body>
                    <b-card-header header-tag="header" class="p-1"role="tab"  v-b-toggle.accordion-10 variant="info">
                        Испытание на воздействие статической и динамической пыли
                    </b-card-header>
                    <b-collapse id="accordion-10" accordion1="my-accordion" role="tabpanel">
                        <b-card-body>
                            <b-card-text>{{ text10 }}</b-card-text>
                        </b-card-body>
                    </b-collapse>
                </b-card>
                <b-card no-body>
                    <b-card-header header-tag="header" class="p-1"role="tab"  v-b-toggle.accordion-11 variant="info">
                        Испытание на воздействие соляного (морского) тумана
                    </b-card-header>
                    <b-collapse id="accordion-11" accordion1="my-accordion1" role="tabpanel">
                        <b-card-body>
                            <b-card-text>{{ text11 }}</b-card-text>
                        </b-card-body>
                    </b-collapse>
                </b-card>
            </div>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "climatic_trials",
        data() {
            return {
                text1: `Наиболее распространенными нарушениями в работе ЭКБ и КИ в данных условиях являются потеря прочности, хрупкость, ломкость, появление скрытых повреждений материала. А также замерзании воды в порах материала ее объем увеличивается, это вызывает внутренние напряжения, которые могут привести к скрытым повреждениям изделия (ГОСТ 5962-004.2, ГОСТ 20.57.406, ГОСТ РВ 20.57.416).`,
                text2: `Результатом такого тестирования может стать появление трещин в изоляции, изменение показателей сопротивления проводников и изоляционных материалов, полное разрушение изолирующих покрытий и, как следствие, возникновение электрических пробоев (ГОСТ 5962-004.2, ГОСТ 20.57.406, ГОСТ РВ 20.57.416).`,
                text3: `Такое воздействие в основном распространяется на металлы и полимеры, приводя к необратимым коррозиям или электролизу. В условиях высокой влажности или после ее воздействия полимеры могут подвергнуться старению и разрушению, а также пройти через обратимые изменения (диффузию). Влага может накапливаться под корпусом ЭКБ и КИ, что в будущем может привести к внутренним повреждениям в процессе пайки (ГОСТ 5962-004.2, ГОСТ 20.57.406, ГОСТ РВ 20.57.416).`,
                text4: `При испытании на быстрое изменение температуры изделие переносится из предельной пониженной температуры в предельную повышенную температуру за малый промежуток времени и обратно. Постепенное изменение температуры главным образом характеризуется тем, что температура в камере меняется постепенно с определенной скоростью. Данное испытание позволяет проявить скрытые дефекты, которые могут проявиться при резком охлаждении или нагреве испытываемых образцов (ГОСТ 5962-004.2, ГОСТ 20.57.406, ГОСТ РВ 20.57.416).`,
                text5: `Проводятся для проверки способности изделий выдерживать приложение номинального электрического напряжения при конденсации на них инея и росы (ГОСТ 5962-004.2, ГОСТ 20.57.406, ГОСТ РВ 20.57.416).`,
                text6: `В процессе проведения испытаний зачастую фиксируется снижение теплоотдачи и, как следствие, перегрев изделия (ГОСТ 5962-004.2, ГОСТ 20.57.406, ГОСТ РВ 20.57.416).`,
                text7: `Критичными могут быть следующие выявленные изменения: повреждение оболочки, изменение параметров или полный выход из строя (ГОСТ 5962-004.2, ГОСТ 20.57.406, ГОСТ РВ 20.57.416).`,
                text8: `Резкое изменение давления может привести к перегреву изделия или же к повреждению конструкции изделия (ГОСТ РВ 20.57.416).`,
                text9: `Ускоренные испытания на сохраняемость проводят путем экспериментального определения зависимости ресурса изделия от значений основных воздействующих факторов внешней среды. Сохраняемость проводят для выявления скрытых дефектов изделия, путем ускоренного старения изделия, при воздействии повышенной температуры. Безотказность также проводится для выявления скрытых дефектов изделия, но помимо воздействия повышенной температуры, также подвергается электрическому нагружению (ГОСТ РВ 5962-004.8, ГОСТ В 18348, ГОСТ РВ 20.57.414, ГОСТ РВ 20.57.415).`,
                text10: `Данное воздействие требуется для определения стойкости изделий при воздействии пыли (песка), а именно способности сохранять свою работоспособность в процессе и после действия пыли (песка). Также данное испытание позволяет определить стойкость к абразивному действию пыли при большой скорости воздушного потока в камере (ГОСТ 5962-004.2, ГОСТ 20.57.406, ГОСТ РВ 20.57.416).`,
                text11: `Изделия тестируют в условиях высокой влажности с присутствием значительного содержания соли в воздухе. В данном случае возможно ускорение коррозионных процессов, разрушение металлов, керамики, полимеров (ГОСТ 5962-004.2, ГОСТ 20.57.406, ГОСТ РВ 20.57.416).`,
            }
        }
    }
</script>

<style scoped lang="scss">
    #climatic_trials{
        background: url("../../../public/фон.jpg");
        background-size: 100% 100%;
        padding: 1% 0 2.5% 0;
    }
   .card-body,.card-header{
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
    .row_step{
        padding-bottom: 2%;
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