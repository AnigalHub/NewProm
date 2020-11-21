<template>
    <b-navbar class="navbar-expand-xl sticky-top " toggleable>
        <b-container>
            <b-navbar-brand to="/">
                <img src="../../public/images/brand.png">
                <div class="name_company">Промэлекстронсервис</div>
                <div class="name_company_2">COMPANY</div>
            </b-navbar-brand>
            <b-navbar-toggle target="navbar-toggle-collapse">
                <template v-slot:default="{ expanded }">
                    <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                    <b-icon v-else icon="chevron-bar-down"></b-icon>
                </template>
            </b-navbar-toggle>
            <b-collapse id="navbar-toggle-collapse" class="justify-content-center" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="/company">О нас</b-nav-item>
                    <b-nav-item>
                        <b-dropdown text="Лаборатория">
                            <b-dropdown-item to="/laboratory">Услуги лаборатории</b-dropdown-item>
                            <b-dropdown-item to="/vhodnoi_control">Входной контроль</b-dropdown-item>
                            <b-dropdown-item to="/dop_trials">Дополнительные испытания</b-dropdown-item>
                            <b-dropdown-item to="/certification_trials">Сертификационные испытания</b-dropdown-item>
                            <b-dropdown-item to="/climatic_trials">Климатические испытания</b-dropdown-item>
                            <b-dropdown-item to="/mehanic_trials">Механические испытания</b-dropdown-item>
                        </b-dropdown>
                    </b-nav-item>
                    <b-nav-item>
                        <b-dropdown text="Поставка ЭКБ и КИ">
                            <b-dropdown-item to="/supply">Комплексные поставки</b-dropdown-item>
                            <b-dropdown-item to="/pcb_materials">Материалы для печатных плат</b-dropdown-item>
                            <b-dropdown-item to="/manufacturers">Производители</b-dropdown-item>
                            <b-dropdown-item to="/program">Программа поставок ЭКБ и КИ</b-dropdown-item>
                        </b-dropdown>
                    </b-nav-item>
                    <b-nav-item>
                        <b-dropdown text="ИТ-Решения">
                            <b-dropdown-item to="/selection_and_supply_it">Подбор и поставка IT-оборудования</b-dropdown-item>
                            <b-dropdown-item to="/package_services" >Комплекс услуг</b-dropdown-item>
                            <b-dropdown-item to="/equipment">Поставляемое оборудование</b-dropdown-item>
                            <b-dropdown-item to="/guarantee">Гарантии</b-dropdown-item>
                        </b-dropdown>
                    </b-nav-item>
                    <b-nav-item>
                        <b-dropdown text="Система менеджмента качества">
                            <b-dropdown-item to="/smk">Основные принципы СМК</b-dropdown-item>
                            <b-dropdown-item to="/use_smk">Применение СМК</b-dropdown-item>
                            <b-dropdown-item to="/events_smk">Мероприятия по улучшению СМК</b-dropdown-item>
                        </b-dropdown>
                    </b-nav-item>
                    <b-nav-item to="/news">Новости</b-nav-item>
                    <b-nav-item to="/contacts">Контакты</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>

</template>

<script>
    export default {
        name: "navbar"
    }
</script>
<style>
    .dropdown-toggle {
        color: white !important;
        padding-right: 0.5rem !important;
        padding-left: 0.5rem !important;
        font-weight: 600 !important;
        font-size: 1.15rem !important;
        font-family: 'Tenor Sans', sans-serif;
        background: none !important;
        border: none !important;
    }
    .nav-link{
        color: white !important;
        padding: 0.55rem 0.55rem !important;
        font-weight: 600;
        font-size: 1.15rem ;
        font-family: 'Tenor Sans', sans-serif;
    }
    .dropdown-item {
        color: #ffffff !important;
        font-weight: 600 !important;
        border: 0.5px solid rgba(0, 0, 0, 0.36) !important;
        background: linear-gradient( to right, #22414e,#22414e, #1f4e21);
    }
    .dropdown-item:hover{
        background:linear-gradient( to right, #255765, #206321);
    }
    .btn {
        padding: 0 !important;
    }
    .dropdown-menu {
        background-color:white !important;
        padding: 0 !important;
    }

    @media screen and  (max-width: 1200px) {
        .btn-group {
            display: block !important;
        }
        .btn-group {
            display: block !important;
        }
        .dropdown-item {
            border: 0.5px solid rgba(28, 63, 76, 0.93) !important;
        }
    }
    @media screen and (min-width: 1200px)and (max-width: 1350px) {
       .dropdown-toggle{
            font-size: 1rem !important;
        }
        .dropdown-item {
            padding: 0.15rem 0.5rem !important;
        }
    }
    @media screen and (min-width: 1350px)and (max-width: 1400px) {
        .dropdown-toggle{
            font-size: 1.1rem !important;
        }
        .dropdown-item {
            padding: 0.2rem 1rem !important;
        }
    }
</style>

<style scoped lang="scss">
    .navbar{
        background:linear-gradient( to right, #282f50, #273f50, #225024, #0d502d);
        color: white;
        background-size:cover;
        padding: 0 !important;
    }
    .name_company{
        margin-left:35%;
        margin-top: -17%;
        padding-bottom: 12%;
        font-size: 0.78rem;
        color: rgba(255, 255, 255, 0.54);
        font-weight: 800;
        font-family: 'Times New Roman';
        transform:scaleY(1.6);
        text-shadow: 0.4px 0.4px #eeeeee;
    }
    .name_company_2{
        margin-left: 54%;
        margin-top: -15.5%;
        font-size: 0.68rem;
        color: rgba(255, 255, 255, 0.54);
        font-weight: 700;
        font-family: "Open Sans",Arial,sans-serif;
        text-shadow: 0.4px 0.4px #eeeeee;
    }

    .navbar-brand {
        padding-right: 5% !important;
        padding-bottom: 0.25% !important;
    }

    .nav-link:hover{
        font-weight: 700;
    }
    img{
        width: 175px !important;
        margin-right: 4px;
        border-radius: 7px;
        margin-top: -5%;
    }

    @media screen and (max-width: 500px) {
        img{
            width: 155px !important;
            margin-top: -1.8%;
        }
    }
    @media screen and (min-width: 500px)and (max-width: 992px) {
        img{
            width: 155px !important;
            margin-top: -3%;
        }
    }
    @media screen and  (max-width: 1200px) {
        .nav-link {
            padding: 0.25rem 0.25rem !important;
        }
    }
    @media screen and (min-width: 1200px)and (max-width: 1250px) {
        .navbar-nav{
            margin-left: -12%;
        }
        a,li,.nav-link {
            font-size: 1rem !important;
        }
        .nav-link{
            padding: 0.35rem 0.35rem !important;
        }
    }
    @media screen and (min-width: 1250px)and (max-width: 1350px) {
        .navbar-nav{
            margin-left: -12%;
        }
        li,.nav-link {
            font-size: 1rem !important;
        }
        .nav-link{
            padding: 0.45rem 0.45rem !important;
        }
    }
    @media screen and (min-width: 1350px)and (max-width: 1400px) {
        .navbar-nav{
            margin-left: -7%;
        }
        li,.nav-link {
            font-size: 1rem !important;
        }
    }
    @media screen and (min-width: 1400px)and (max-width: 1600px) {
        .navbar-nav{
            margin-left: -3%;
        }
    }
</style>