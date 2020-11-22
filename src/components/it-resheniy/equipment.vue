<template>
    <div id="equipment">
        <b-container>
            <h2>Перечень поставляемого оборудования</h2>
            <div class="place_for_table">
                <pdf_and_xlsx></pdf_and_xlsx>
                <b-table sticky-header hover :items="it"></b-table>
            </div>
        </b-container>
    </div>
</template>

<script>
    import  it from '../../../public/documents/it';
    import Pdf_and_xlsx from "../pdf_and_xlsx";
    export default {
        name: "equipment",
        components: {Pdf_and_xlsx},
        data() {
            return {
                it: it,
            }
        }
    }
</script>

<style scoped lang="scss">

</style>