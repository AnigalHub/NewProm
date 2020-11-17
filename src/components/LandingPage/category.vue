<template>
    <div class="container-inner">
        <div class="section">
            <div class="content">
                <div class="container">
                    <h2>
                        <router-link to="/selection_and_supply_it"> ИТ-Решения </router-link>
                    </h2>
                </div>
            </div>
            <div class="overlay"></div>
        </div>
        <div  class="section">
            <div class="content">
                <div class="container">
                    <h2>
                        <router-link to="/laboratory">Лаборатория</router-link>
                    </h2>
                </div>
            </div>
            <div class="overlay"></div>
        </div>
        <div  class="section">
            <div class="content">
                <div class="container">
                    <h2>
                        <router-link to="/supply">Поставка ЭКБ и КИ</router-link>
                    </h2>
                </div>
            </div>
            <div class="overlay"></div>
        </div>
    </div>
</template>


<script>
    export default {
        name: "category"
    }
</script>

<style scoped lang="scss">
    .container-inner {
        display: flex;
        height: 40vh;
        max-width: 100%;
    }
    .section {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        overflow: hidden;
        background-size: cover;
        background-position: center;
        color: #fff;
        transition: flex .4s ease;
        position: relative;
    }
    .section:first-child{
        background: url("../../../public/images/category/it.jpg") ;
    }
    .section:nth-child(2){
        background: url("../../../public/images/category/lab.jpg");
    }
    .section:last-child{
        background: url("../../../public/images/category/ekb.jpg");
    }
    .section {
        a{
            color: white;
            font-family: 'Exo 2', sans-serif;
        }
        a:hover{
            color: white;
            text-decoration:underline;
            font-weight: 600 !important;
        }
    }
    .section .overlay {
        background-color: rgba(0, 0, 0, 0.2);
        width: 100%;
        height: 100%;
        position: absolute;
        transition: background-color .8s ease;
    }
    .section .content {
        z-index: 1;
        text-shadow: #000000 3px 3px  5px;
        text-align: center;
    }
    .section:hover {
        flex: 2;
    }
    .section:hover .overlay
    {
        background:linear-gradient( to right,rgba(34, 56, 71, 0.59),rgba(34, 56, 71, 0.59));
    }
</style>