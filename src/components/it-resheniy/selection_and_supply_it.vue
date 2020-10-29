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
                <div class="row">
                    <div class="col" v-for="(advantage, index) in  Row_advantages_part_1" :key="index">
                        <b-row>
                            <b-col cols="2">
                                <component :is="advantage.svg"/>
                            </b-col>
                            <b-col cols="9" class="text">{{advantage.name_advantages}}</b-col>
                        </b-row>
                    </div>
                </div>
               <div class="row">
                    <div class="col" v-for="(advantage, index) in  Row_advantages_part_2" :key="index">
                        <b-row>
                            <b-col cols="2">
                                <component :is="advantage.svg"/>
                            </b-col>
                            <b-col cols="9" class="text">{{advantage.name_advantages}}</b-col>
                        </b-row>
                    </div>
               </div>
               <div class="row">
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
    import PricePolicySVG from './it-resheniy/supply_svg/price_policy_svg';
    import AccreditationSVG from './it-resheniy/supply_svg/accreditation_svg';
    import WideChooseSVG from './it-resheniy/supply_svg/wide_choose_svg';
    import IntegrationSVG from './it-resheniy/supply_svg/integration_svg';
    import ElectronicPlatformSVG from './it-resheniy/supply_svg/electronic_platform_svg';
    import WarrantySupportSVG from './it-resheniy/supply_svg/warranty_support_svg';
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
    #selection_and_supply_it{
        background: url("../../public/фон.jpg");
        background-size: 100% 100%;
        padding: 1% 0 2.5% 0;
    }
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
</style>