<template>
    <div id="program">
        <b-container>
            <h2>Программа поставок ЭКБ и КИ</h2>
            <b-tabs  pills fill>
                <b-tab v-for="(table, index) in Row_tables" :key="index" :title=table.name_table>
                    <b-table sticky-header hover :items="table.table_itself"></b-table>
                </b-tab>
            </b-tabs>
        </b-container>
    </div>
</template>

<script>
    import  active_components from '../../../public/documents/active_components';
    import  passive_components from '../../../public/documents/passive_components';
    import  connectors from '../../../public/documents/connectors';
    import  displays from '../../../public/documents/displays';
    export default {
        name: "program",
        data() {
            return {
                active_components:active_components,
                passive_components:passive_components,
                connectors:connectors,
                displays:displays,
                Row_tables:[
                    {
                        name_table:"Активные компоненты",
                        table_itself:active_components,
                    },
                    {
                        name_table:"Пассивные компоненты",
                        table_itself: passive_components,
                    },
                    {
                        name_table:"Соединители и Разъемы",
                        table_itself: connectors,
                    },
                    {
                        name_table:"Дисплеи и Светодиоды",
                        table_itself:displays,
                    },
                ]
            }
        }
    }
</script>
<style>
    .tab-content {
        border: 1.5px solid #183018  !important;
        border-radius: 10px;
    }
    .nav-pills .nav-link.active {
        background-color: #3e5262 !important;
        color: white !important;
    }
    .nav-pills .nav-link {
        color: #183018 !important;
        border: 1.5px solid rgba(62, 82, 98, 0.65) !important;
        background: rgba(255, 255, 255, 0.13);
        padding: 0.2rem !important;
    }
    .table th, .table td {
        padding: 0.25% !important;
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
        max-height: 65vh !important;
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
    .tab-content{
        padding: 5% !important;
    }
    .b-table-sticky-header{
        margin: 0 !important;
    }
</style>