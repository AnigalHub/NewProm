<template>
    <div id="equipment">
        <b-container>
            <h2>Перечень поставляемого оборудования</h2>
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

<style scoped lang="scss">

</style>