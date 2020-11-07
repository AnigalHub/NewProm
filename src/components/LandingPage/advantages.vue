<template>
    <div id="advantages">
        <b-container>
            <h2>Наши преимущества</h2>
            <b-row class="adv_row">
                <b-col class="adv text" v-for="(advantage, index) in advantages" :key="index">
                    <router-link :to="advantage.link">
                        <img :src="advantage.src" :alt="advantage.alt"/>
                        <div> {{advantage.descr}}</div>
                    </router-link>
                </b-col>
            </b-row>
            <b-row class="number_row">
                <b-col v-for="(important_number, index) in important_numbers" :key="index">
                    <div class="number">{{important_number.number}}</div>
                    <p class="text">{{important_number. descr_number}}</p>
                </b-col>
            </b-row>
            <h2>Основные принципы организации</h2>
            <b-row class="principales">
                <b-col>
                    <b-row v-for="( principales_1, index) in  principales_part_1" :key="index">
                        <b-col cols="2">
                            <component :is="principales_1.svg"/>
                        </b-col>
                        <b-col cols="9" class="text">{{principales_1. text_svg}}</b-col>
                    </b-row>
                </b-col>
                <b-col>
                    <b-row v-for="( principales_2, index) in  principales_part_2" :key="index">
                        <b-col cols="2">
                            <component :is="principales_2.svg"/>
                        </b-col>
                        <b-col cols="9" class="text">{{principales_2. text_svg}}</b-col>
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
                        src: "./images/3.jpg",
                        descr: "Собственная аккредитованная лаборатория по сертификации ЭКБ и КИ",
                        alt: "Собственная_аккредитованная_лаборатория_по_сертификации_ЭКБ_и_КИ",
                    },
                    {
                        link: "../supply",
                        src: "./images/56.jpg",
                        alt: "Квалифицированная_поставка_ЭКБ_и_КИ_в_любую_точку_России",
                        descr: "Квалифицированная поставка ЭКБ и КИ в любую точку России",
                    },
                    {
                        link: "../smk",
                        src: "./images/images.jpg",
                        descr: "Сертифицированная система менеджмента качества и гарантия на ЭКБ и КИ",
                        alt: "Сертифицированная_система_менеджмента_качества_и_гарантия_на_ЭКБ_и_КИ",
                    },
                    {
                        link: "../selection_and_supply_it",
                        src: "./images/55.jpg",
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
                principales_part_1:[
                    {
                        svg:LeaderSVG,
                        text_svg:"Личное участие Высшего руководства компании в повышении эффективности системы менеджмента качества;",
                    },
                    {
                        svg:PeopleSVG,
                        text_svg:"   Ориентация каждого сотрудника на удовлетворение требований Потребителя;",
                    }
                ],
                principales_part_2:[
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

    .adv{
        background: #171131;
        margin: 0 15px 20px 15px !important;
        padding: 10px !important;
        box-shadow: 7px 7px 7px #3e3e3e;
        
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
    .text{
        font-size: 1.125rem;
        line-height: 1.8rem;
        font-family: "Open Sans",Arial,sans-serif;
    }

    .adv_row{
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
        margin-left: 3% !important;
        margin-right: 3% !important;
        padding-bottom: 2%;
    }
    .text{
        color: #171131;
    }
    p{
        text-align: center;
        margin-top: -10%;
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

</style>