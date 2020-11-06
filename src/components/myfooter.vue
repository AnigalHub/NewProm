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
                    <router-link to="/certification_trials">Сертификационные испытания</router-link>
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
                    <router-link to="/package_services">Комплекс услуг</router-link>
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
                    <router-link to="/news" id="news_button">Новости</router-link>
                    <br>
                    <router-link to="/contacts" id="contact">Контакты</router-link>

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
        margin: 0 0.5% 5% 0.55% !important;
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
        a:first-child, #lab,#news_button,#contact{
            color: white;
        }
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