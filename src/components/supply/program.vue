<template>
    <div id="program">
        <b-container>
            <h2>Программа поставок ЭКБ и КИ</h2>
            <b-tabs  pills fill>
                <b-tab v-for="(table, index) in Row_tables" :key="index" :title=table.name_table>
                    <b-table sticky-header hover :items="table.table_itself"></b-table>
                    <pdf_and_xlsx></pdf_and_xlsx>
                </b-tab>
            </b-tabs>
        </b-container>
    </div>
</template>

<script>
    import  program from '../../../public/documents/program.json';
    import Pdf_and_xlsx from "../pdf_and_xlsx";
    export default {
        name: "program",
        components: {Pdf_and_xlsx},
        data() {
            return {
               program:program,
                Row_tables:[
                    {
                        name_table:"Активные компоненты",
                        table_itself:program.active_components,
                    },
                    {
                        name_table:"Пассивные компоненты",
                        table_itself: program.passive_components,
                    },
                    {
                        name_table:"Соединители и Разъемы",
                        table_itself: program.connectors,
                    },
                    {
                        name_table:"Дисплеи и Светодиоды",
                        table_itself:program.displays,
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