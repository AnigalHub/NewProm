<template>
    <div id="footer">
        <div class="container">
            <div class="flex-container">
                <div>
                    <ul>
                        <li><a href="company.html">О компании</a></li>
                        <li><a href="ispytatelnaya-laboratoriay.html" id="lab">Лаборатория</a></li>
                        <li><a href="ispytatelnaya-laboratoriay.html#services_laboratory">Услуги лаборатории</a></li>
                        <li><a href="ispytatelnaya-laboratoriay.html#control_tests">Входной контроль</a></li>
                        <li><a href="ispytatelnaya-laboratoriay.html#additional_tests">Дополнительные испытания</a></li>
                        <li><a href="ispytatelnaya-laboratoriay.html#certification_tests">Сертификационные испытания</a></li>
                        <li><a href="ispytatelnaya-laboratoriay.html#climate_tests">Климатические испытания</a></li>
                        <li><a href="ispytatelnaya-laboratoriay.html#mechanical_tests">Механические испытания</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a href="postavka-ekb.html">Поставка ЭКБ и КИ</a></li>
                        <li><a href="postavka-ekb.html#PCB_materials">Комплексные поставки</a></li>
                        <li><a href="postavka-ekb.html#PCB_materials">Материалы для печатных плат</a></li>
                        <li><a href="postavka-ekb.html#domestic_ECB">ЭКБ и КИ отечественного производства</a></li>
                        <li><a href="postavka-ekb.html#foreign_ECB">ЭКБ и КИ иностранного производства</a></li>
                        <li><a href="postavka-ekb.html#ECB_supply_program">Программа поставок ЭКБ и КИ</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a href="it-resheniya.html"  id="it">ИТ-Решения</a></li>
                        <li><a href="it-resheniya.html#range_services">Подбор и поставка IT-оборудования</a></li>
                        <li><a href="it-resheniya.html#range_services">Комплекс услуг</a></li>
                        <li><a href="it-resheniya.html#equipment_supplied">Поставляемое оборудование</a></li>
                        <li><a href="it-resheniya.html#company_guarantee">Гарантии</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a href="smk.html">СМК</a></li>
                        <li><a href="smk.html#application_smk">Основные принципы СМК</a></li>
                        <li><a href="smk.html#application_smk">Применение СМК</a></li>
                        <li><a href="smk.html#events_smk">Мероприятия по улучшению СМК</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a href="news.html">Новости</a></li>
                        <li><a href="contacts.html" id="contact">Контакты</a></li>
                        <li><a href="mailto:info@promelektronservis.ru" ><i class="fa fa-envelope-o" aria-hidden="true"></i>info@promelektronservis.ru</a></li>
                        <li><a><i class="fa fa-clock-o" aria-hidden="true"></i> Пн. – Чт.: с 9:00 до 17:00,<br> Пт.: с 9:00 до 16:00</a></li>
                        <li><a href="tel:+74997695137"><i class="fa fa-phone"></i>+7 (499) 769-51-37 </a></li>
                        <li><a ><i class="fa fa-map-marker" aria-hidden="true"></i>
                            Московская область, г. Котельники,
                            Новорязанское шоссе 6, офис 1-2</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "myfooter"
    }
</script>

<style scoped lang="scss">
    #footer{
        background: black;
        max-height: 100%;
        height: auto;
        padding-top: 1%;
        padding-right: 2%;
        padding-left: 2%;
    }

    .flex-container {
        display: flex;
        flex-wrap: wrap;
    }
    .flex-container > div {
        width: 18.7%;
        margin: 0 0.5% 0 0.55% !important;
    }

    #footer ul{
        text-align: left;
        padding-left: 0 !important;

        li{
            font-size: 1rem !important;
            font-family: "Open Sans",Arial,sans-serif;
            list-style-type: none;
        }
        li:first-child{
            padding-bottom: 1%;
            font-weight: 600;
            a{
                color: white;
                font-weight: 700 !important;
            }
        }
        a{
            color: rgba(255, 255, 255, 0.53);
        }
        #lab,#it,#contact{
            color: white;
            font-weight: 700 !important;
        }
    }

    #footer {
        a{
            color: white;
            font-weight: 700 !important;
        }
    }

    @media screen and (max-width: 768px){

        #footer .col, .col-2, .col-3,.col-4{
            flex:0 0 auto !important;
        }
        #footer li{
            text-align: center;
            font-size: 13px !important;
        }
        #footer .col{
            padding-left: 0 !important;
            padding-right: 0 !important;
        }
        #footer .flex_2{
            flex-direction: column;
            .col,.col-4{
                flex: 0 0 auto !important;
            }
            .col-4{
                flex: 0 0 100%;
                max-width: 100%;
            }
        }
        #footer .flex_1{
            flex-direction: column;
            .col,.col-4{
                flex: 0 0 auto !important;
            }
            .col-4{
                flex: 0 0 100%;
                max-width: 100%;
            }
        }
        #footer ul{
            padding-inline-start: 0 !important;
            padding-bottom: 0 !important;
        }
        #footer{
            padding-right: 0 !important;
            padding-left: 0 !important;
        }
    }
    @media screen and (min-width:768px) and(max-width: 1255px){
        #footer .flex_1{
            flex-direction: column;
            .part_1{
                flex: 0 0 auto !important;
            }
        }
        #footer li{
            font-size: 15px !important;
            text-align: center;
        }
    }
    @media screen and (min-width:1255px) and(max-width: 1600px){
        #footer li{
            font-size: 16px !important;
        }

    }

</style>