<template>
    <div id="certification_trials">
        <b-container>
            <h2>Сертификационные испытания</h2>
            <trials_video  v-for="trial in  Trials" :trials_video="trial.trials_video" :trials_description="trial.trials_description">
            </trials_video>
            <b-row class="row_step">
                <b-col>
                  <ul>
                      <li class="text" v-for="(paragraph,index) in paragraphs_certification" :key="index">{{paragraph}}</li>
                  </ul>
                </b-col>
                <b-col cols="5">
                    <b-carousel id="carousel-no-animation" style="text-shadow: 0px 0px 2px #000" animation indicators>
                        <b-carousel-slide img-src="./images/certificate_trials/climatic_factors.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="./images/certificate_trials/inspected_parts.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="./images/certificate_trials/mechanical_factors.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="./images/certificate_trials/program_coordination.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="./images/certificate_trials/quality_definition.jpg"></b-carousel-slide>
                    </b-carousel>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import Trials_video from "../trials_video";
    export default {
        name: "certification_trials",
        components: {Trials_video},
        data() {
            return {
                Trials:[
                    {
                        trials_video: './video/certificate.mp4',
                        trials_description: 'Испытания выполняются в объеме и значениях, соответствующих конкретному изделию и условиям его дальнейшей эксплуатации, соответственно позволяют существенно сократить число отказов конечного изделия в процессе эксплуатации. Финальным этапом сертификационных испытаний, проводимых в испытательной лаборатории ООО «Компания Промэлектронсервис» является оформление и предоставление заказчику отчетной документации.',
                    }
                ],
                paragraphs_certification:[
                    'Разработка и согласование программ и методик сертификационных испытаний.',
                    'Разработка и изготовление вспомогательной технологической оснастки.',
                    'Входной контроль с целью определения качества испытываемых ЭКБ ИП.',
                    'Непосредственно проведение сертификационных испытаний, включающие испытание воздействия климатических и механических факторов.',
                ],
            }
        }
    }
</script>

<style scoped lang="scss">
    li {
        cursor: default;
        list-style-type: none;
        padding-top: 1%;
        border-bottom: 1px solid rgba(148, 175, 193, 0.7);
    }
    ul{
        padding-top: 7% !important;
    }
    .col li{
        padding-bottom: 2.5%;
    }
    li:before {
        content: "";
    }
</style>