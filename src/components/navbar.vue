<template>
    <b-navbar class="navbar-expand-xl sticky-top " toggleable>
        <b-container>
            <b-navbar-brand to="/" @click="GoToLanding()">
                <img src="../../public/images/brand.jpg">
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
                            <b-dropdown-item >Сертификационные испытания</b-dropdown-item>
                            <b-dropdown-item to="/climatic_trials">Климатические испытания</b-dropdown-item>
                            <b-dropdown-item to="/mehanic_trials">Механические испытания</b-dropdown-item>
                        </b-dropdown>
                    </b-nav-item>
                    <b-nav-item>
                        <b-dropdown text="Поставка ЭКБ и КИ">
                            <b-dropdown-item  to="/supply">Комплексные поставки</b-dropdown-item>
                            <b-dropdown-item to="/pcb_materials">Материалы для печатных плат</b-dropdown-item>
                            <b-dropdown-item to="/manufacturers">Производители</b-dropdown-item>
                            <b-dropdown-item to="/program">Программа поставок ЭКБ и КИ</b-dropdown-item>
                        </b-dropdown>
                    </b-nav-item>
                    <b-nav-item>Каталог</b-nav-item>
                    <b-nav-item>
                        <b-dropdown text="ИТ-Решения">
                            <b-dropdown-item to="selection_and_supply_it">Подбор и поставка IT-оборудования</b-dropdown-item>
                            <b-dropdown-item>Комплекс услуг</b-dropdown-item>
                            <b-dropdown-item to="/equipment">Поставляемое оборудование</b-dropdown-item>
                            <b-dropdown-item to="/guarantee">Гарантии</b-dropdown-item>
                        </b-dropdown>
                    </b-nav-item>
                    <b-nav-item>
                        <b-dropdown text="СМК">
                            <b-dropdown-item>Основные принципы СМК</b-dropdown-item>
                            <b-dropdown-item>Применение СМК</b-dropdown-item>
                            <b-dropdown-item>Мероприятия по улучшению СМК</b-dropdown-item>
                        </b-dropdown>
                    </b-nav-item>
                    <b-nav-item>Новости</b-nav-item>
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
        padding: 0.5rem 0.8rem !important;
        font-weight: 600;
        font-size: 1.15rem ;
        font-family: 'Tenor Sans', sans-serif;
    }
    .dropdown-item {
        color: #ffffff !important;
        font-weight: 600 !important;
        font-size: 1.1rem;
        border: 0.5px solid rgba(0, 0, 0, 0.66) !important;
        background:linear-gradient( to right, #22414e, #1f4e21);
    }
    .dropdown-item:hover{
        background:linear-gradient( to right, #29606f, #256f27);
    }
    .btn {
        padding: 0 !important;
    }
    .dropdown-menu {
        background-color:white !important;
        padding: 0 !important;
    }
    @media screen and (min-width: 992px)and (max-width: 1200px) {
        #navbar-toggle-collapse{
            padding-bottom: 2%;
        }
        .nav-link,.dropdown-item{
            font-size: 1rem !important;
        }
        .dropdown-toggle{
            font-size: 1.1rem !important;
        }
        .nav-link,.dropdown-item,.dropdown-toggle{
            white-space:  normal !important;
        }
        #navbar-toggle-collapse  .nav-link {
            background: radial-gradient(90% 70%, #ffffff, rgb(241, 237, 242));
            border: 0.9px solid rgba(75, 105, 119, 0.66) !important;
        }
        .nav-link,.dropdown-item{
            border-radius: 4px !important;
        }
        .dropdown-menu{
            border: none !important;
            margin: 0.3rem 0 0 !important;
        }
        .navbar-toggler {
            background: radial-gradient(90% 70%, #ffffff, rgb(241, 237, 242));
            border: 0.9px solid rgba(75, 105, 119, 0.66) !important;
        }
        .dropdown-item{
            background: radial-gradient(90% 70%, #ffffff, rgb(235, 231, 236)) !important;
            border: 0.4px solid rgba(75, 105, 119, 0.66) !important;
        }
        .btn-group {
            display: block !important;
        }
        .btn-group {
            display: block !important;
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
        margin-left: 31%;
        margin-top: -19%;
        padding-bottom: 12%;
        font-size: 1.15rem;
        color: #ffffff;
        font-family: 'Times New Roman';
        transform:scaleY(1.4);
        text-shadow: 1px 1px 2px #212529;
    }
    .name_company_2{
        margin-left: 42%;
        margin-top: -16.9%;
        font-size: 1rem;
        color: #ffffff;
        font-family: "Open Sans",Arial,sans-serif;
        text-shadow: 1px 1px 2px #212529;
    }
    .navbar-nav{
        margin-left: -15%;
    }
    .navbar-brand {
        padding-right: 5% !important;
        padding-bottom: 0.25% !important;
    }

    .nav-link:hover{
        font-weight: 700;
    }

    .name_company{
        font-size: 1rem;
        color: #ffffff;
    }

    img{
        width: 200px !important;
        margin-right: 4px;
        border-radius: 7px;
    }
    @media screen and (max-width: 500px) {
        .name_company{
            font-size: 1.32rem;
            letter-spacing: 3px;
        }
        img {
            width: 28px !important;
            height: 28px !important;
        }
    }
    @media screen and (min-width: 500px)and (max-width: 768px) {
        .name_company{
            font-size: 1.45rem;
        }
        img {
            width: 30px !important;
            height: 30px !important;
        }
    }
    @media screen and (min-width: 768px)and (max-width: 992px) {
        .name_company{
            font-size: 1.5rem;
        }
    }
</style>