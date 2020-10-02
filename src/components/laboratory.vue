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
                <div>
                    <a href="ispytatelnaya-laboratoriay.html#control_tests">
                        <img src="../../public/images/vhod.jpg" alt="входной контроль">
                        <h6><b>Входной контроль</b></h6>
                    </a>
                </div>
                <div>
                    <a href="ispytatelnaya-laboratoriay.html#additional_tests">
                        <img src="../../public/images/dop.jpg" alt="входной контроль">
                        <h6><b>Дополнительные испытания</b></h6>
                    </a>
                </div>
                <div>
                    <a href="ispytatelnaya-laboratoriay.html#certification_tests">
                        <img src="../../public/images/sertific.jpg" alt="входной контроль">
                        <h6><b>Сертификационные испытания</b></h6>
                    </a>
                </div>
                <div>
                    <a href="ispytatelnaya-laboratoriay.html#climate_tests">
                        <img src="../../public/images/klimat.jpg" alt="входной контроль">
                        <h6><b>Климатические испытания</b></h6>
                    </a>
                </div>
                <div>
                    <a href="ispytatelnaya-laboratoriay.html#mechanical_tests">
                        <img src="../../public/images/mehanic_2.jpg" alt="входной контроль">
                        <h6><b>Механические испытания</b></h6>
                    </a>
                </div>
            </div>
            <b-row>
                <b-col cols="6">
                    <div class="row row_list text">
                        <div class="col">
                            <ul>
                                <li>Входной контроль ЭКБ и КИ.</li>
                                <li>Дополнительные испытания ЭКБ и КИ.</li>
                                <li>Сертификационные испытания ЭКБ ИП.</li>
                                <li>Испытания ЭКБ и КИ на безотказность и сохраняемость.</li>
                                <li>Климатические испытания ЭКБ, КИ и РЭА.</li>
                                <li>Механические испытания ЭКБ, КИ и РЭА.</li>
                                <li>Проведение выборочного разрушающего физического анализа.</li>
                            </ul>
                        </div>
                    </div>

                </b-col>
                <b-col>
                    <div class="text">
                        <u><b>Испытательная лаборатория также осуществляет следующие услуги:</b></u>
                        <div class="text list">
                            <ul>
                                <li>Разработку и изготовление технической оснастки.</li>
                                <li>Метрологическое обеспечение применяемых методов контроля и испытаний.</li>
                                <li>Разработку информационно-технических материалов на электронные компоненты иностранного
                                    производства.</li>
                            </ul>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "laboratory"
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