<template>
    <div id="laboratory">
        <b-container>
            <h2>Услуги лаборатории</h2>
            <p class="text">
                <b>Испытательная лаборатория ООО «Компания Промэлектронсервис»</b> осуществляет разработку и согласование программ
                и методик испытаний.
                Имея в штате высококвалифицированных специалистов и новейшее оборудование, лаборатория
                выполняет сертификационные испытания ЭКБ ИП, дополнительные испытания ЭКБ ОП и КИ, испытания ЭКБ и КИ на надежность и
                безотказность работы, а также организует проведение работ по сертификации ФСС КТ и испытания РЭА.
            </p>
            <p class="text">
                Область аккредитации испытательной лаборатории описывает весь объем работ, который может проводить испытательная
                лаборатория с целью установления соответствия испытываемой продукции требованиям качества и надежности,
                а также с соблюдением правил защиты конфиденциальной информации.
            </p>
            <div class="flex-container">
                <div class="adv" v-for="(test, index) in tests_laboratory" :key="index">
                    <router-link :to="test.link">
                        <img :src="test.src" :alt="test.alt"/>
                        <h6><b> {{test.name}}</b></h6>
                    </router-link>
                </div>
            </div>
            <b-row class="row_list">
                <b-col class="text">
                    <ul>
                            <li v-for="( test, index) in  list_tests" :key="index">{{test}}</li>
                    </ul>
                </b-col>
                <b-col class="text">
                        <u><b>Испытательная лаборатория также осуществляет следующие услуги:</b></u>
                        <ul class="text list">
                            <li v-for="( test, index) in  dop_list_tests" :key="index">{{test}}</li>
                        </ul>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "laboratory",
        data(){
            return{
                tests_laboratory:[
                    {
                        link: "../vhodnoi_control",
                        src: "./images/laboratory/vhod.jpg",
                        alt: "Входной_контроль",
                        name: "Входной контроль",
                    },
                    {
                        link: "../dop_trials",
                        src: "./images/laboratory/dop.jpg",
                        alt: "Дополнительные_испытания",
                        name: "Дополнительные испытания",
                    },
                    {
                        link: "../certification_trials",
                        src: "./images/laboratory/sertific.jpg",
                        alt: "Сертификационные_испытания",
                        name: "Сертификационные испытания",
                    },
                    {
                        link: "../climatic_trials",
                        src: "./images/laboratory/klimat.jpg",
                        alt: "Климатические_испытания",
                        name: "Климатические испытания",
                    },
                    {
                        link: "../mehanic_trials",
                        src: "./images/laboratory/mehanic_2.jpg",
                        alt: "Механические_испытания",
                        name: "Механические испытания",
                    },
                ],
                list_tests:[
                    'Входной контроль ЭКБ и КИ.',
                    'Дополнительные испытания ЭКБ и КИ.',
                    'Сертификационные испытания ЭКБ ИП.',
                    'Испытания ЭКБ и КИ на безотказность и сохраняемость.',
                    'Климатические испытания ЭКБ, КИ и РЭА.',
                    'Механические испытания ЭКБ, КИ и РЭА.',
                    'Проведение выборочного разрушающего физического анализа.',
                ],
                dop_list_tests:[
                    'Разработку и изготовление технической оснастки.',
                    'Метрологическое обеспечение применяемых методов контроля и испытаний.',
                    'Разработку информационно-технических материалов на электронные компоненты иностранного\n' +
                    ' производства.',
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    h6 {
        height: 32px;
        text-align: center;
    }

    .flex-container {
        display: flex;
        flex-wrap: wrap;
    }
    .flex-container > div {
        background: rgba(255, 255, 255, 0.69);
        width: 19%;
        margin: 0 0.5% 2% 0.5% !important;
        box-shadow: 5px 5px 5px #696969;
    }
    .row_list{
        padding-bottom: 1%;
        .col{
            padding: 0 !important;
        }
    }
    .col-5{
        padding-left: 5px !important;
        padding-right: 5px !important;
    }
    li {
        cursor: default;
        list-style-type: none;
        padding-top: 1%;
    }
    .col li{
        padding-bottom: 0.5%;
    }
    li:before {
        content: " — ";
    }
    .part_photo{
        padding-bottom: 1%;
        .col{
            padding: 0 !important;
        }
    }
    .photo{
        background: rgba(255, 255, 255, 0.56);
        box-shadow: 5px 5px 5px #828282;
        margin: 5px;
        img{
            padding: 10px;
        }
    }
    .photo:hover{
        box-shadow: 6px 0 .6em #919191, -6px 0 .6em #919191;
    }
    .column_1{
        flex:0 0 auto !important;
        .photo{
            margin-left: 1%;
        }
    }
    .column_2 {
        flex: 0 0 auto !important;
        .photo {
            margin-left: 1.5%;
        }
    }
    @media screen and (max-width: 500px) {
        .flex-container > div {
            width: 44%;
            margin: 0 2.5% 3% 2.5% !important;
        }
        h6 {
            height: 1rem;
            letter-spacing: -0.5px;
        }
        .row_list{
            flex-direction: column;
        }
        .col li{
            padding-bottom: 0.2%;
        }
    }
    @media screen and (min-width: 500px)and (max-width: 768px) {
        .flex-container > div {
            width: 30%;
            margin: 0 0.8% 2% 0.8% !important;
        }
        h6 {
            height: 1.5rem;
        }
        .row_list{
            flex-direction: column;
        }
        .col li{
            padding-bottom: 0.2%;
        }
    }

    @media screen and (min-width: 768px)and (max-width: 992px) {
        .flex-container > div {
            width: 30%;
            margin: 0 1% 2% 1% !important;
        }
        h6 {
            height: 1.7rem;
        }

    }

</style>