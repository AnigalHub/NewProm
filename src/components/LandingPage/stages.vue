<template>
    <div id="stages">
        <div class="container">
            <h2>Этапы работы с клиентами</h2>
            <div class="block_step">
                <div class="flex-container">
                    <div v-for="(stage, index) in Stages" :key="index" class="animated item active" :id="index" onclick="changeMessage(this)">
                       <b-row class="stage">
                           <b-col>
                               <div class="item-content">
                                   <component :is="stage.svg"/>
                               </div>
                               <div class="item-header text">{{stage.name_stage}}</div>
                           </b-col>
                           <b-col v-if="index != (Stages.length-1)">
                               <arrow-step-s-v-g></arrow-step-s-v-g>
                           </b-col>

                       </b-row>
                    </div>
                </div>
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
                        svg:TelephoneSVG,
                        name_stage:"Получение заявки"
                    },
                    {
                        svg:AnalysisSVG,
                        name_stage:"Анализ и обработка заказа"
                    },
                    {
                        svg:RegistrationSVG,
                        name_stage:"Оформление заказа"
                    },
                    {
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
    .flex-container {
        display: flex;
        flex-wrap: wrap;
    }
    .flex-container > div {
        width: 25%;
    }
    svg{
        width: 95px;
        height: 90px;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }
    .item-header {
        padding: 2px;
        width: 100%;
        margin-top: 1.5%;
        text-align: center;
        text-shadow: 1.2px 1.2px #7c7c7c !important;
        color: #102110 !important;
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
    @media screen  and (max-width: 300px) {
        .block_step{
            padding: 0;
        }
        .flex-container > div {
            width: 50%;
            .col{
                padding: 0 5px !important;
            }
        }
        svg{
            width: 40px ;
            height: 40px ;
        }
        #arrow_step{
            width: 35px !important;
            margin-left: -2%;
        }
    }
    @media screen   and (min-width: 300px) and (max-width: 450px) {
        .block_step{
            padding: 0;
        }
        .flex-container > div {
            width: 50%;
        }
        svg{
            width: 60px ;
            height: 60px ;
        }
        #arrow_step{
            width: 40px !important;
            margin-left: -2%;
        }
    }
    @media screen and (min-width: 450px) and (max-width: 768px) {
        .block_step{
            padding: 0;
        }
        .flex-container > div {
            width: 40%;
            margin-left: 5%;
        }
        svg{
            width: 70px ;
            height: 70px ;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 992px) {
        .block_step{
            padding: 0;
            .col{
                padding: 0 5px !important;
            }
        }
        svg{
            width: 70px;
            height: 70px;
        }
        #arrow_step{
            margin-left: -1%;
        }
    }
    @media screen and (min-width: 992px) and (max-width: 1200px) {
        .block_step{
            padding: 0;
        }
        svg{
            width: 85px;
            height: 80px;
        }
        #arrow_step{
            margin-left: -1%;
        }
    }
    @media screen and (min-width: 1200px) and (max-width: 1300px) {
        .block_step{
            padding: 0 7% 0 7%;
        }
    }
</style>