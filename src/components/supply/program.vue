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

<style scoped lang="scss">
    .tab-content{
        padding: 5% !important;
    }
    .b-table-sticky-header{
        margin: 0 !important;
    }
</style>