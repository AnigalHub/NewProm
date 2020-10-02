<template>
    <div id="contacts">
        <b-container>
            <h2>Контактная информация</h2>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "contacts"
    }
</script>

<style scoped lang="scss">
    #contacts{
        background: url("../../public/фон.jpg");
        background-size: 100% 100%;
        padding: 1% 0 2.5% 0;
    }
    h2{
        color: rgba(5, 35, 71, 0.75);
    }
</style>