<template>
    <div id="footer">
        <div class="container">
            <div class="flex-container">
                <div v-for="(page_catalog,index) in catalog_pages" :key="index">
                    <div v-for="(value, index) in page_catalog.pages" :key="index">
                        <router-link  :to="value.link">{{value.page}}</router-link>
                    </div>
                    <br>
                </div>
                <div>
                    <ul>
                        <li><a :href="'mailto:'+ mail" >{{mail}}</a></li>
                        <li><a>{{opening_hours}}</a></li>
                        <li><a :href="'tel:'+telephone">{{telephone}}</a></li>
                        <li><a>{{company_address}}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import company_address from './../../public/documents/address/company_address.json';
    import metro from './../../public/documents/address/metro.json';
    import opening_hours from './../../public/documents/address/opening_hours.json';
    import telephone from './../../public/documents/address/telephone.json';
    import mail from './../../public/documents/address/mail.json';
    export default {
        name: "myfooter",
        data(){
            return{
                company_address:company_address,
                metro:metro,
                opening_hours:opening_hours,
                telephone:telephone,
                mail:mail,
                catalog_pages:[
                    {
                        pages:[
                            {
                                link: "/company",
                                page: "О компании",
                            },
                            {
                                link: "/laboratory",
                               page: "Лаборатория",
                            },
                            {
                                link: "/laboratory",
                                page: "Услуги лаборатории",
                            },
                            {
                                link: "/vhodnoi_control",
                                page: "Входной контроль",
                            },
                            {
                                link: "/dop_trials",
                                page: "Дополнительные испытания",
                            },
                            {
                                link: "/certification_trials",
                                page: "Сертификационные испытания",
                            },
                            {
                                link: "/climatic_trials",
                                page: "Климатические испытания",
                            },
                            {
                                link: "/mehanic_trials",
                                page: "Механические испытания",
                            },
                        ],
                    },
                    {
                        pages:[
                            {
                                link: "/supply",
                                page: "Поставка ЭКБ и КИ",
                            },
                            {
                                link: "/supply",
                                page: "Комплексные поставки",
                            },
                            {
                                link: "/pcb_materials",
                                page: "Материалы для печатных плат",
                            },
                            {
                                link: "/manufacturers",
                                page: "Производители",
                            },
                            {
                                link: "/program",
                                page: "Программа поставок ЭКБ и КИ",
                            },
                        ],
                    },
                    {
                        pages:[
                            {
                                link: "/selection_and_supply_it",
                                page: "ИТ-Решения",
                            },
                            {
                                link: "/selection_and_supply_it",
                                page: "Подбор и поставка IT-оборудования",
                            },
                            {
                                link: "/package_services",
                                page: "Комплекс услуг",
                            },
                            {
                                link: "/equipment",
                                page: "Поставляемое оборудование",
                            },
                            {
                                link: "/guarantee",
                                page: "Гарантии",
                            },
                        ],
                    },
                    {
                        pages:[
                            {
                                link: "/smk",
                                page: "СМК",
                            },
                            {
                                link: "/smk",
                                page: "Основные принципы СМК",
                            },
                            {
                                link: "/use_smk",
                                page: "Применение СМК",
                            },
                            {
                                link: "/events_smk",
                                page: "Мероприятия по улучшению СМК",
                            },
                            {
                                link: "/news",
                                page: "Новости",
                            },
                            {
                                link: "/contacts",
                                page: "Контакты",
                            },
                        ],
                    },
                    ]
            }
        }
    }
</script>

<style scoped lang="scss">
    #footer{
        background: black;
        max-height: 100%;
        height: auto;
        padding: 1.5% 2% 1.5% 2%;
    }
    li{
        line-height: 1.45rem !important;
        cursor: default;
    }
    .flex-container {
        display: flex;
        flex-wrap: wrap;
    }
    .flex-container > div {
        width: 18.7%;
        margin: 0 0.5% 5% 0.55% !important;
    }
    .flex-container > div:first-child{
        div:nth-child(2) a{
            color: white !important;
        }
    }
    .flex-container > div{
        div:first-child a{
            color: white !important;
        }
    }
    .flex-container > div:nth-child(4) {
        div:nth-child(5) a,  div:nth-child(6) a{
            color: white !important;
        }
    }

    #footer ul{
        text-align: left;
        padding-left: 0 !important;
        li{
            list-style-type: none;
        }
        li,a{
            color: white !important;
        }
    }

    #footer {
        a{
            color: rgba(255, 255, 255, 0.63);
            font-weight: 700 !important;
        }
    }

    @media screen and (max-width: 500px) {
        .flex-container > div {
            width: 100%;
        }
    }
    @media screen and (min-width: 500px)and (max-width: 768px) {
        .flex-container > div {
            width: 48%;
        }
    }
    @media screen and (min-width: 768px)and (max-width: 992px) {
        .flex-container > div {
            width: 31%;
            margin: 0 1.15% 5% 1.15% !important;
        }
    }
    @media screen and (min-width: 992px)and (max-width: 1200px) {
        .flex-container > div {
            width: 17%;
            margin: 0 1.15% 5% 1.15% !important;
        }
    }


</style>