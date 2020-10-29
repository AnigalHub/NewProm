<template>
    <div id="footer">
        <div class="container">
            <div class="flex-container">
                <div>
                        <router-link to="/company">О компании</router-link>
                        <br>
                        <router-link to="/laboratory" id="lab">Лаборатория</router-link>
                        <br>
                        <router-link to="/laboratory">Услуги лаборатории</router-link>
                        <br>
                        <router-link to="/vhodnoi_control">Входной контроль</router-link>
                        <br>
                        <router-link to="/dop_trials">Дополнительные испытания</router-link>
                        <br>
                        <router-link to="/dop_trials">Сертификационные испытания</router-link>
                        <br>
                        <router-link to="/climatic_trials">Климатические испытания</router-link>
                        <br>
                        <router-link to="/mehanic_trials">Механические испытания</router-link>
                </div>
                <div>
                    <router-link to="/supply">Поставка ЭКБ и КИ</router-link>
                    <br>
                    <router-link to="/supply">Комплексные поставки</router-link>
                    <br>
                    <router-link to="/pcb_materials">Материалы для печатных плат</router-link>
                    <br>
                    <router-link to="/manufacturers">Производители</router-link>
                    <br>
                    <router-link to="/program">Программа поставок ЭКБ и КИ</router-link>
                    <br>
                </div>
                <div>
                    <router-link to="/selection_and_supply_it">ИТ-Решения</router-link>
                    <br>
                    <router-link to="/selection_and_supply_it">Подбор и поставка IT-оборудования</router-link>
                    <br>
                    <router-link to="/equipment">Комплекс услуг</router-link>
                    <br>
                    <router-link to="/equipment">Поставляемое оборудование</router-link>
                    <br>
                    <router-link to="/guarantee">Гарантии</router-link>
                </div>
                <div>
                    <router-link to="/smk">СМК</router-link>
                    <br>
                    <router-link to="/smk">Основные принципы СМК</router-link>
                    <br>
                    <router-link to="/use_smk">Применение СМК</router-link>
                    <br>
                    <router-link to="/events_smk">Мероприятия по улучшению СМК</router-link>
                    <br>
                    <router-link to="/smk" id="news">Новости</router-link>
                    <br>
                    <router-link to="/smk" id="contact">Контакты</router-link>
                </div>
                <div>

                    <ul>
                        <li><a href="mailto:info@promelektronservis.ru" >info@promelektronservis.ru</a></li>
                        <li><a> Пн. – Чт.: с 9:00 до 17:00,<br> Пт.: с 9:00 до 16:00</a></li>
                        <li><a href="tel:+74997695137">+7 (499) 769-51-37 </a></li>
                        <li><a >
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
        padding: 1% 2% 1% 2%;
    }
    li{
        line-height: 1.45rem !important;
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

        a{
            color: rgba(255, 255, 255, 0.53);
        }
    }

    #footer {
        a:first-child, #lab,#news,#contact{
            color: white;
        }
        a{
            color: rgba(255, 255, 255, 0.63);
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