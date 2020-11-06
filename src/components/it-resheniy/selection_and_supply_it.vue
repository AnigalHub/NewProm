<template>
    <div id="selection_and_supply_it">
        <b-container>
            <h2>Подбор и поставка IT-оборудования</h2>
            <p class="text">
                <b> ООО «Компания Промэлектронсервис» </b> занимается реализацией современной IT инфраструктуры. Наша компания предлагает свои услуги в сложных процессах: подбор конфигураций под заданные требования, организация обмена данными, обеспечение хранения информации на серверах, просчет расходов на орг. технику и расходные материалы, телефонную связь и многое другое.
            </p>
            <p class="text">
                Мы понимаем, как важно сделать правильный выбор партнёра, способного обеспечить комплексные поставки IT-оборудования с учётом запросов. Специалисты компании стремятся учесть все нюансы клиента - подбирают IT-решения под любые требования заказчика. Мы работаем как с техническими заданиями, так и без них.
            </p>
            <h3>Наши преимущества</h3>
            <div class="place_for_benefits">
                <div class="row important_row">
                    <div class="col" v-for="(advantage, index) in  Row_advantages_part_1" :key="index">
                        <b-row>
                            <b-col cols="2">
                                <component :is="advantage.svg"/>
                            </b-col>
                            <b-col cols="9" class="text">{{advantage.name_advantages}}</b-col>
                        </b-row>
                    </div>
                </div>
               <div class="row important_row">
                    <div class="col" v-for="(advantage, index) in  Row_advantages_part_2" :key="index">
                        <b-row>
                            <b-col cols="2">
                                <component :is="advantage.svg"/>
                            </b-col>
                            <b-col cols="9" class="text">{{advantage.name_advantages}}</b-col>
                        </b-row>
                    </div>
               </div>
               <div class="row important_row">
                    <div class="col" v-for="(advantage, index) in  Row_advantages_part_3" :key="index">
                        <b-row>
                            <b-col cols="2">
                                <component :is="advantage.svg"/>
                            </b-col>
                            <b-col cols="9" class="text">{{advantage.name_advantages}}</b-col>
                        </b-row>
                    </div>
               </div>
            </div>
        </b-container>
    </div>
</template>

<script>
    import PricePolicySVG from './it_svg/price_policy_svg';
    import AccreditationSVG from './it_svg/accreditation_svg';
    import WideChooseSVG from './it_svg/wide_choose_svg';
    import IntegrationSVG from './it_svg/integration_svg';
    import ElectronicPlatformSVG from './it_svg/electronic_platform_svg';
    import WarrantySupportSVG from './it_svg/warranty_support_svg';
    export default {
        name: "selection_and_supply_it",
        components: {PricePolicySVG,AccreditationSVG,WideChooseSVG,IntegrationSVG,ElectronicPlatformSVG,WarrantySupportSVG},
        data(){
            return{
                Row_advantages_part_1:[
                    {
                     svg:PricePolicySVG,
                     name_advantages:" Гибкая ценовая политика. Сотрудничаем с коммерческими и государственными предприятиями. Выделяем НДС.",
                    },
                    {
                        svg:AccreditationSVG,
                        name_advantages:"У нас есть необходимые аккредитации и возможность вести торги по ФЗ № 44 и № 223.",
                    },
                ],
                Row_advantages_part_2:[
                    {
                        svg:WideChooseSVG,
                        name_advantages:"Широкий выбор. Часть позиций хранится на нашем складе в оперативном доступе.",
                    },
                    {
                        svg:IntegrationSVG,
                        name_advantages:"Возможна интеграция поставляемого оборудования в уже имеющуюся IT-систему.",
                    },
                ],
                Row_advantages_part_3:[
                    {
                        svg:ElectronicPlatformSVG,
                        name_advantages:"Работаем на Электронной площадке АСТ ГОЗ.",
                    },
                    {
                        svg:WarrantySupportSVG,
                        name_advantages:" Гарантийное и постгарантийное сопровождение.",
                    },
                ],
            }
        }
    }
</script>

<style scoped lang="scss">
    h3{
        text-align: center;
    }
    .place_for_benefits .row{
        padding-bottom: 2%;
    }
    svg{
        width:95px;
        height:90px;
        padding: 5%;
    }
    .col{
        padding: 0 !important;
    }
    @media screen and (max-width: 500px) {
        svg{
            width:75px;
            height:60px;
            padding: 5%;
        }
        .col-9{
          padding-left: 10% !important;
        }
        .important_row{
            flex-direction: column;
        }
        .place_for_benefits .row{
            padding-bottom: 2.5%;
        }
    }
    @media screen and (min-width: 500px)and (max-width: 768px) {
        svg{
            width:75px;
            height:60px;
            padding: 5%;
        }
        .col-9{
            padding-left: 18% !important;
        }
    }
    @media screen and (min-width: 768px)and (max-width: 992px) {
        svg{
            width:75px;
            height:60px;
            padding: 5%;
            margin-left: -100%;
        }
    }
    @media screen and (min-width: 992px)and (max-width: 1200px) {
        svg{
            width:80px;
            height:75px;
            padding: 5%;
            margin-left: -40%;
        }
        .place_for_benefits .row{
            padding-bottom: 1.5%;
        }

    }
</style>