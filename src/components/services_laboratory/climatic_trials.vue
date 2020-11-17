<template>
    <div id="climatic_trials">
        <b-container>
            <h2>Климатические испытания</h2>
            <trials_video  v-for="trial in  Trials" :trials_video="trial.trials_video" :trials_description="trial.trials_description">
            </trials_video>
            <h3>Испытания на климатические воздействия включают:</h3>
            <b-row class="row_step">
                <b-col>
                    <div class="accordion" role="tablist">
                        <b-card no-body>
                   <trials_stages  v-for="stage in  Stages_trials" :index="stage.index" :stage_name="stage.stage_name" :stage_descr="stage.stage_descr">
                   </trials_stages>
                 </b-card>
                    </div>
                </b-col>
                <b-col cols="5">
                    <b-carousel id="carousel-no-animation" style="text-shadow: 0px 0px 2px #000" animation indicators>
                        <b-carousel-slide img-src="./images/climatic_trials/1.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="./images/climatic_trials/2.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="./images/climatic_trials/3.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="./images/climatic_trials/4.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="./images/climatic_trials/5.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="./images/climatic_trials/6.jpg"></b-carousel-slide>
                    </b-carousel>
                </b-col>
            </b-row>
            <div class="accordion" role="tablist">
               <b-card no-body>
                   <trials_stages  v-for="stage in  Stages_trials_double" :index="stage.index" :stage_name="stage.stage_name" :stage_descr="stage.stage_descr">
                   </trials_stages>
               </b-card>
                <!--
                <b-card no-body>
                    <b-card-header header-tag="header" class="p-1" role="tab"  v-b-toggle.accordion-6 >
                        Испытание на воздействие пониженного давления (до 5 мм.рт. ст)
                    </b-card-header>
                    <b-collapse id="accordion-6"  accordion1="my-accordion" role="tabpanel">
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
                -->
            </div>
        </b-container>
    </div>
</template>

<script>
    import Trials_video from "../trials_video";
    import Trials_stages from "../trials_stages";
    export default {
        name: "climatic_trials",
        components: {Trials_video,Trials_stages},
        data() {
            return {
                Trials:[
                    {
                        trials_video: './video/klimat.mp4',
                        trials_description: 'При оценке качества любого изделия имеет смысл оценивать не только его функциональные и эксплуатационные показатели, но и степень воздействия факторов окружающей среды, при которой изделие продолжает соответствовать заявленным характеристикам.',
                    }
                ],
                Stages_trials:[
                    {
                        index: 1,
                        stage_name:'Испытания на воздействие пониженной температуры (до -70°C)',
                        stage_descr:'Наиболее распространенными нарушениями в работе ЭКБ и КИ  являются потеря прочности, хрупкость, ломкость, появление скрытых повреждений материала. А также замерзании воды в порах материала, объем увеличивается, это вызывает внутренние напряжения, которые могут привести к скрытым повреждениям изделия (ГОСТ 5962-004.2, ГОСТ 20.57.406, ГОСТ РВ 20.57.416).',
                    },
                    {
                        index: 2,
                        stage_name:'Испытания на воздействие повышенной температуры (до +150°C)',
                        stage_descr:'Результатом такого тестирования может стать появление трещин в изоляции, изменение показателей сопротивления проводников и изоляционных материалов, полное разрушение изолирующих покрытий и, как следствие, возникновение электрических пробоев (ГОСТ 5962-004.2, ГОСТ 20.57.406, ГОСТ РВ 20.57.416).',
                    },
                    {
                        index: 3,
                        stage_name:'Испытание воздействием повышенной (до 100%) относительной влажности воздуха',
                        stage_descr:'Такое воздействие в основном распространяется на металлы и полимеры, приводя к необратимым коррозиям или электролизу. В условиях высокой влажности или после ее воздействия полимеры могут подвергнуться старению и разрушению, а также пройти через обратимые изменения (диффузию). Влага может накапливаться под корпусом ЭКБ и КИ, что в будущем может привести к внутренним повреждениям в процессе пайки (ГОСТ 5962-004.2, ГОСТ 20.57.406, ГОСТ РВ 20.57.416).',
                    },
                    {
                        index: 4,
                        stage_name:'Испытание на воздействие изменения температуры (от – 70°С до +150°С)',
                        stage_descr:'При испытании на быстрое изменение температуры изделие переносится из предельной пониженной температуры в предельную повышенную температуру за малый промежуток времени и обратно. Постепенное изменение температуры главным образом характеризуется тем, что температура в камере меняется постепенно с определенной скоростью. Данное испытание позволяет проявить скрытые дефекты, которые могут проявиться при резком охлаждении или нагреве испытываемых образцов (ГОСТ 5962-004.2, ГОСТ 20.57.406, ГОСТ РВ 20.57.416).',
                    },
                    {
                        index: 5,
                        stage_name:'Испытание на воздействие атмосферных конденсированных осадков (инея и росы)',
                        stage_descr:'Проводятся для проверки способности изделий выдерживать приложение номинального электрического напряжения при конденсации на них инея и росы (ГОСТ 5962-004.2, ГОСТ 20.57.406, ГОСТ РВ 20.57.416).',
                    },
                ],
                Stages_trials_double:[
                    {
                        index: 6,
                        stage_name:'Испытание на воздействие пониженного давления (до 5 мм.рт. ст)',
                        stage_descr:'В процессе проведения испытаний зачастую фиксируется снижение теплоотдачи и, как следствие, перегрев изделия (ГОСТ 5962-004.2, ГОСТ 20.57.406, ГОСТ РВ 20.57.416).',
                    },
                    {
                        index: 7,
                        stage_name:'Испытание на воздействие повышенного давления (до 2400 мм. рт. ст.)',
                        stage_descr:'Критичными могут быть следующие выявленные изменения: повреждение оболочки, изменение параметров или полный выход из строя (ГОСТ 5962-004.2, ГОСТ 20.57.406, ГОСТ РВ 20.57.416).',
                    },
                    {
                        index: 8,
                        stage_name:'Испытание на воздействие изменения давления воздуха от 5 мм.рт.ст. до 2400 мм.рт.ст. воздуха.',
                        stage_descr:'Резкое изменение давления может привести к перегреву изделия или же к повреждению конструкции изделия (ГОСТ РВ 20.57.416).',
                    },
                    {
                        index: 9,
                        stage_name:'Испытания по подтверждению требований надежности(сохраняемость и безотказность)',
                        stage_descr:'Ускоренные испытания на сохраняемость проводят путем экспериментального определения зависимости ресурса изделия от значений основных воздействующих факторов внешней среды. Сохраняемость проводят для выявления скрытых дефектов изделия, путем ускоренного старения изделия, при воздействии повышенной температуры. Безотказность также проводится для выявления скрытых дефектов изделия, но помимо воздействия повышенной температуры, также подвергается электрическому нагружению (ГОСТ РВ 5962-004.8, ГОСТ В 18348, ГОСТ РВ 20.57.414, ГОСТ РВ 20.57.415).',
                    },
                    {
                        index: 10,
                        stage_name:'Испытание на воздействие статической и динамической пыли',
                        stage_descr:'Данное воздействие требуется для определения стойкости изделий при воздействии пыли (песка), а именно способности сохранять свою работоспособность в процессе и после действия пыли (песка). Также данное испытание позволяет определить стойкость к абразивному действию пыли при большой скорости воздушного потока в камере (ГОСТ 5962-004.2, ГОСТ 20.57.406, ГОСТ РВ 20.57.416).',
                    },
                    {
                        index: 11,
                        stage_name:'Испытание на воздействие соляного (морского) тумана',
                        stage_descr:'Изделия тестируют в условиях высокой влажности с присутствием значительного содержания соли в воздухе. В данном случае возможно ускорение коррозионных процессов, разрушение металлов, керамики, полимеров (ГОСТ 5962-004.2, ГОСТ 20.57.406, ГОСТ РВ 20.57.416).',
                    },
                ],
            }
        }
    }
</script>

<style scoped lang="scss">

</style>