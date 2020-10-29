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
            <b-row>
                <b-col class=" row_list text">
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
                        src: "./images/vhod.jpg",
                        alt: "Входной_контроль",
                        name: "Входной контроль",
                    },
                    {
                        link: "../dop_trials",
                        src: "./images/dop.jpg",
                        alt: "Дополнительные_испытания",
                        name: "Дополнительные испытания",
                    },
                    {
                        link: "../dop_trials",
                        src: "./images/sertific.jpg",
                        alt: "Сертификационные_испытания",
                        name: "Сертификационные испытания",
                    },
                    {
                        link: "../climatic_trials",
                        src: "./images/klimat.jpg",
                        alt: "Климатические_испытания",
                        name: "Климатические испытания",
                    },
                    {
                        link: "../mehanic_trials",
                        src: "./images/mehanic_2.jpg",
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
<style>
    ul{
        margin-block-start: 0 !important;
        padding-inline-start: 5px !important;
    }
</style>
<style scoped lang="scss">
    #laboratory{
        background: url("../../public/фон.jpg");
        background-size: 100% 100%;
        padding: 1% 0 2.5% 0;
    }
    h6 {
        height: 40px;
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

</style>