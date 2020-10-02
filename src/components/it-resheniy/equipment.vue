<template>
    <div id="equipment">
        <b-container>
            <h2>
                Перечень поставляемого оборудования
            </h2>
            <div class="place_for_table">
                <b-table sticky-header hover :items="it"></b-table>
            </div>
        </b-container>
    </div>
</template>

<script>
    import  it from '../../../public/documents/it';
    export default {
        name: "equipment",
        data() {
            return {
                it: it,
            }
        }
    }
</script>
<style>
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
        max-height: 75vh !important;
    }
    tr:hover{
        background: rgb(91, 114, 131) !important;
    }
</style>
<style scoped lang="scss">
    #equipment{
        background: url("../../../public/фон.jpg");
        background-size: 100% 100%;
        padding: 1% 0 2.5% 0;
    }
</style>