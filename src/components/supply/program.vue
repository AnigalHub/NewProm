<template>
    <div id="program">
        <b-container>
            <h2>Программа поставок ЭКБ и КИ</h2>
            <b-tabs  pills fill>
                <b-tab title="Активные компоненты" active>
                    <b-table sticky-header hover :items="active_components"></b-table>
                </b-tab>
                <b-tab title="Пассивные компоненты">

                </b-tab>
                <b-tab title="Соединители и Разъемы">

                </b-tab>
                <b-tab title="Дисплеи и Светодиоды">

                </b-tab>
            </b-tabs>
        </b-container>
    </div>
</template>

<script>
    import  active_components from '../../../public/documents/active_components';

    export default {
        name: "program",
        data() {
            return {
                active_components:active_components,

            }
        }
    }
</script>
<style>
    .tab-content {
        border: 1.5px solid #183018  !important;
        border-radius: 10px;
        padding: 1%;
    }
    .nav-pills .nav-link.active {
        background-color: #3e5262 !important;
        color: white !important;
    }
    .nav-pills .nav-link {
        color: #183018 !important;
        border: 1.5px solid rgba(62, 82, 98, 0.65) !important;
        background: rgba(255, 255, 255, 0.13);
    }
    .table th, .table td {
        padding: 0.1% !important;
        border: 1px solid rgba(18, 23, 37, 0.71) !important;
        text-align: center !important;
        background: rgba(255, 255, 255, 0.72);
    }
    .table thead th {
        vertical-align: middle !important;
        max-width: 20% !important;
        background: rgb(91, 114, 131) !important;
    }
    th {
        color: white !important;
        text-shadow: 1.5px 1.5px 2px rgba(18, 23, 37, 0.71);
    }
    td{
        text-shadow: 0.25px 0.25px .5px rgba(18, 23, 37, 0.71);
    }
    .b-table-sticky-header {
        max-height: 60vh !important;
    }
    tr:hover{
        background: rgb(91, 114, 131) !important;
    }
</style>
<style scoped lang="scss">
    #program{
        background: url("../../../public/фон.jpg");
        background-size: 100% 100%;
        padding: 1% 0 2.5% 0;
    }
</style>