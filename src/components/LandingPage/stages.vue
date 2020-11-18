<template>
    <div id="stages">
        <div class="container">
            <h2>Этапы работы с клиентами</h2>
            <div class="block_step">
                <b-row>
                    <b-col v-for="(stage, index) in Stages" :key="index" class="animated item active" :id="index" onclick="changeMessage(this)">
                       <b-row class="stage">
                           <b-col>
                               <div class="item-content">
                                   <component :is="stage.svg"/>
                               </div>
                               <div class="item-header">{{stage.name_stage}}</div>
                           </b-col>
                           <b-col v-if="index != (Stages.length-1)">
                               <arrow-step-s-v-g></arrow-step-s-v-g>
                           </b-col>

                       </b-row>
                    </b-col>
                </b-row>
            </div>
            <div class=" place_for_message">
                <div class=" magic-text" >
                    <p class="step_header text"  id="currentStep"> 1 этап </p>
                    <p class="text" data-magic-text id="mess">
                        Наличие на складе компании постоянно возобновляемый запас наиболее часто применяемых типов ЭКБ позволит сократить сроки поставки. Доставка продукции осуществляется логистическими компаниями. Весь доставляемый груз застрахован в страховой компании.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ArrowStepSVG from '../LandingPage/stages_svg/arrow_step_svg';
    import TelephoneSVG from '../LandingPage/stages_svg/telephone_svg';
    import AnalysisSVG from '../LandingPage/stages_svg/analysis_svg';
    import RegistrationSVG from '../LandingPage/stages_svg/registration_svg';
    import ProductSupplySVG from '../LandingPage/stages_svg/product_supply_svg';
    export default {
        components: {TelephoneSVG,ArrowStepSVG,AnalysisSVG,RegistrationSVG,ProductSupplySVG},
        name: "stages",
        data() {
            return{
                Stages:[
                    {
                        index:0,
                        svg:TelephoneSVG,
                        name_stage:"Получение заявки"
                    },
                    {
                        index:1,
                        svg:AnalysisSVG,
                        name_stage:"Анализ и обработка заказа"
                    },
                    {
                        index:2,
                        svg:RegistrationSVG,
                        name_stage:"Оформление заказа"
                    },
                    {
                        index:3,
                        svg:ProductSupplySVG,
                        name_stage:"Поставка продукции"
                    },
                ]
            }
        },
        computed:{

        }
    }
</script>

<style scoped lang="scss">
    h2 {
        color: #183018;
        text-align: center !important;
    }
    .block_step{
        margin-bottom: 2%;
        padding: 0 10% 0 10%;
    }
    svg  {
        width: 95px !important;
        height: 90px !important;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }
    .item-header {
        padding: 2px;
        width: 100%;
        margin-top: 1.5%;
        //margin-left: -25%;
        font-weight: 600 !important;
        text-align: center;
        text-shadow: 1.2px 1.2px #7c7c7c;
        font-family: "Open Sans",Arial,sans-serif;
        color: #102110;
        font-size: 1.2rem;
    }
    .stage{
        margin-right: -15px !important;
        margin-left: -15px !important;
        .col:last-child{
            padding: 0 !important;
        }
    }

    .step_header {
        text-align: center;
        font-family: "Open Sans",Arial,sans-serif;
        display: block;
        font-size: 1.25rem !important;
    }
    #mess {
        height: 140px;
        box-shadow: 0 0 8px hsl(120, 33%, 14%);
        background: rgba(249, 249, 249, 0.78);
        font-family: "Open Sans",Arial,sans-serif;
        color: #121224;
        width: 100%;
        padding: 20px;
    }

</style>