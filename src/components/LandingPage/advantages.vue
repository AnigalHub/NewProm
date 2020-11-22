<template>
    <div id="advantages">
        <b-container>
            <h2>Наши преимущества</h2>
            <div class="flex-container adv">
                <div class="text" v-for="(advantage, index) in advantages" :key="index">
                    <router-link :to="advantage.link">
                        <img :src="advantage.src" :alt="advantage.alt"/>
                        <div> {{advantage.descr}}</div>
                    </router-link>
                </div>
            </div>
            <b-row class="number_row">
                <b-col v-for="(important_number, index) in important_numbers" :key="index">
                    <div class="number">{{important_number.number}}</div>
                    <p class="text">{{important_number. descr_number}}</p>
                </b-col>
            </b-row>
            <h2>Основные принципы организации</h2>
            <b-row class="principales">
                <b-col v-for="(principle,index) in catalog_principales" :key="index">
                    <b-row v-for="(value, index) in  principle.principales" :key="index">
                        <b-col cols="2">
                            <component :is="value.svg"/>
                        </b-col>
                        <b-col cols="9" class="text">{{value.text_svg}}</b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>


<script>
    import LeaderSVG from '../LandingPage/advantages_svg/leader_svg';
    import PeopleSVG from '../LandingPage/advantages_svg/people_svg';
    import StabilitySVG from '../LandingPage/advantages_svg/stability_svg';
    import GrowthSVG from '../LandingPage/advantages_svg/growth_svg';
    export default {
        components: {LeaderSVG,PeopleSVG,StabilitySVG,GrowthSVG},
        name: "advantages",
        data(){
            return{
                advantages:[
                    {
                        link: "../laboratory",
                        src: "./images/advantages/laboratory.jpg",
                        descr: "Собственная аккредитованная лаборатория по сертификации ЭКБ и КИ",
                        alt: "Собственная_аккредитованная_лаборатория_по_сертификации_ЭКБ_и_КИ",
                    },
                    {
                        link: "../supply",
                        src: "./images/advantages/delivery.jpg",
                        alt: "Квалифицированная_поставка_ЭКБ_и_КИ_в_любую_точку_России",
                        descr: "Квалифицированная поставка ЭКБ и КИ в любую точку России",
                    },
                    {
                        link: "../smk",
                        src: "./images/advantages/smk.jpg",
                        descr: "Сертифицированная система менеджмента качества и гарантия на ЭКБ и КИ",
                        alt: "Сертифицированная_система_менеджмента_качества_и_гарантия_на_ЭКБ_и_КИ",
                    },
                    {
                        link: "../selection_and_supply_it",
                        src: "./images/advantages/it-resheniy.jpg",
                        descr: "Реализация современной IT-инфраструктуры",
                        alt: "Реализация_современной_IT-инфраструктуры",
                    },
                ],
                important_numbers:[
                    {
                        number:9,
                        descr_number: "Лет на рынке",
                    },
                    {
                        number:436,
                        descr_number: "Клиентов",
                    },
                    {
                        number:3165,
                        descr_number: "ЭКБ и КИ",
                    },
                    {
                        number:65,
                        descr_number: "Поставщиков",
                    },
                    {
                        number:47,
                        descr_number: "Сотрудников",
                    },
                ],
                catalog_principales:[
                    {
                        principales:[
                            {
                                svg:PeopleSVG,
                                text_svg:"   Ориентация каждого сотрудника на удовлетворение требований Потребителя;",
                            },
                            {
                                svg:LeaderSVG,
                                text_svg:"Личное участие Высшего руководства компании в повышении эффективности системы менеджмента качества;",
                            }
                        ],
                    },
                    {
                        principales:[
                            {
                                svg:StabilitySVG,
                                text_svg:"Обеспечение стабильности качества выполняемых работ и производимых услуг;",
                            },
                            {
                                svg:GrowthSVG,
                                text_svg:"Устойчивое развитие, под которым понимается динамический экономический рост за счет правильной стратегии маркетинга и объемов поставок.",
                            }
                        ],
                    }
                ],
            }
        }
    }
</script>
<style scoped lang="scss">
    a{
        color: white !important;
        text-decoration: none !important;
    }
    #advantages{
        margin-top: -0.5%;
    }

    h2 {
        color: #121224;
        text-align: center !important;
    }
    .flex-container {
        display: flex;
        flex-wrap: wrap;
    }
    .flex-container > div {
        width: 22%;
        margin: 0 15px 20px 15px !important;
        background: #171131;
        padding: 10px !important;
        box-shadow: 5px 5px 5px #3e3e3e;

        .text{
            color: white;
        }
        img{
            display: block;
            margin-right: auto;
            margin-left: auto;
            padding-bottom: 15px;
        }
    }
    .flex-container > div:hover{
        box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.78);
    }

    .text{
        font-family: "Open Sans",Arial,sans-serif;
    }

    .adv{
        padding-bottom: 1%;
    }
    .number_row{
        margin-left: 15% !important;
        margin-right: 15% !important;
    }
    .number{
        font-size:4rem;
        font-weight: 700;
        text-align: center;
        text-shadow: 2px 2px 2px white;
        font-family: "Open Sans",Arial,sans-serif;
    }
    .principales{
        margin-left: 7% !important;
        margin-right: 7% !important;
    }
    .text{
        color: #171131;
    }
    p{
        text-align: center;
        margin-top: -8%;
    }
    svg{
        width:100px;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }
    .col-2{
        margin-right: 5%;
        margin-bottom: 5%;
    }
    .col-9{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    @media screen and  (max-width: 350px) {
        svg{
            width:45px !important;
            margin-left: -85%;
        }
        .principales{
            .col-9{
                padding-right: 0 !important;
            }
            .row{
                padding-bottom: 5% !important;
            }
        }
    }
    @media screen and (min-width: 350px) and  (max-width: 450px) {
        .col:nth-child(4){
            margin-left: 10% !important;
        }
        .col:last-child{
            margin-right: 10% !important;
        }
    }
    @media screen  and (max-width: 450px) {
        .flex-container > div {
            width: 85%;
            display: block;
            margin: 0 auto 20px auto !important;
        }
        .number_row {
            margin: 0% !important;

            .col {
                padding-right:10px !important;
                padding-left:10px  !important;

                .number {
                    font-size: 2.5rem !important;
                    letter-spacing: -3px;
                }
            }
        }
        svg{
            width:50px;
        }
        .principales{
            margin: 0 !important;
            flex-direction: column;
            .col{
                padding: 0 !important;
            }
            .col-9{
                padding-left: 0 !important;
            }
        }
    }
    @media screen and (min-width: 450px) and (max-width: 768px) {
        .flex-container > div {
            width: 45%;
            margin: 0 10px 20px 10px !important;
        }
        .number_row {
            margin: 0% !important;

            .col {
                padding-right: 2px !important;
                padding-left: 2px !important;

                .number {
                    font-size: 2.4rem !important;
                    letter-spacing: -4px;
                }
            }
        }
        svg{
            width:70px;
        }
        .principales{
            margin: 0 !important;
            flex-direction: column;
            .col{
                padding: 0 !important;
            }
            .col-9{
                padding-left: 0 !important;
            }
        }
    }
    @media screen and (min-width: 768px)and (max-width: 992px) {
        .flex-container > div {
            width: 45%;
            margin: 0 15px 20px 15px !important;
        }
        .number_row{
            margin: 0% !important;

            .number {
                font-size: 3.2rem !important;
            }
        }
        svg{
            width:70px;
        }
        .principales{
            margin: 0 !important;
            .row{
                padding-bottom: 3%;
            }
            .col{
                padding: 0  !important;
            }

        }
    }
    @media screen and (min-width: 992px)and (max-width: 1200px) {
        .flex-container > div {
            width: 22.5%;
            margin: 0 10px 20px 10px !important;
        }
        .number_row{
            margin-left: 10% !important;
            margin-right: 10% !important;
        }
        svg{
            width:85px;
        }
        .principales{
            margin: 0 !important;
        }
    }
</style>