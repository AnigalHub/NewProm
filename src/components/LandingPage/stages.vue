<template>
    <div id="stages">
        <div class="container">
            <h2>Этапы работы с клиентами</h2>
            <div class="block_step">
                <div class="row">
                    <div v-for="(stage, index) in Stages" :key="index" class="animated col item active" id="stepo" onclick="changeMessage(this)">
                        <div class="item-content">
                            <component :is="stage.svg"/>
                        </div>
                        <div class="item-header">{{stage.name_stage}}</div>
                    </div>
                </div>
            </div>
            <div class=" place_for_message">
                <div class=" magic-text" >
                    <p class="step_header text"  id="currentStep"> 1 этап </p>
                    <p class="text" data-magic-text id="mess">
                        Вы связываетесь с нами любым удобным для Вас способом. Заявка может быть направлена по факсу, на электронную почту.</p>
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
                        svg:ArrowStepSVG,
                        name_stage:""
                    },
                    {
                        svg:AnalysisSVG,
                        name_stage:"Анализ и обработка заказа"
                    },
                    {
                        svg:ArrowStepSVG,
                        name_stage:""
                    },
                    {
                        svg:RegistrationSVG,
                        name_stage:"Оформление заказа"
                    },
                    {
                        svg:ArrowStepSVG,
                        name_stage:""
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
        font-weight: 600 !important;
        text-align: center;
        text-shadow: 1.2px 1.2px #7c7c7c;
        font-family: "Open Sans",Arial,sans-serif;
        color: #102110;
        font-size: 1.2rem;
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
        line-height: 45px;
        width: 100%;
        padding: 20px;
    }

</style>