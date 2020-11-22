<template>
    <div class="place_for_svg">
        <b-row>
            <b-col cols="2">
                <div class="icon_file xls">XLS</div>
            </b-col>
            <b-col>
                <p class="text"><a :href="xlsx">Скачать таблицу в формате .xlsx</a></p>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="2">
                <div class="icon_file pdf">PDF</div>
            </b-col>
            <b-col>
                <p class="text"><a :href="pdf">Скачать таблицу в формате .pdf</a></p>
            </b-col>
        </b-row>
        </div>
</template>

<script>
    export default {
        name: "pdf_and_xlsx",
        props:{
            xlsx:String,
            pdf:String,
        }
    }
</script>

<style scoped lang="scss">
    .place_for_svg{
        display: none;
    }
    .icon_file {
        display: block;
        width:95px;
        height:160px;
        background:#000;
        border-radius:5px;
        color:#fff;
        font-family: 'Open Sans', sans-serif;
        line-height:60px;
        font-size:30px;
        padding-left:20px;
        text-shadow: 3px 1px 1px rgba(0,0,0,0.4);
        transition:all 300ms ease-in-out;
        transform-style:preserve-3d;
        perspective:600;
        transform: perspective(600);
    }
    .icon_file:before {
        content:'';
        float:right;
        width:40px;
        height:40px;
        background-image:linear-gradient(to bottom left, rgba(255,255,255,1) 50%, rgba(255,255,255,0.4) 50%);
        border-radius:0 0 0 6px;
    }
    .row:hover .icon_file{
        transform:scale(1.05);
    }
    .pdf {
        background:#c7211d;
    }
    .xls {
        background:#63b345;
    }
    .row .col{
        display: flex;
        align-items: center;
    }
    .row:hover a{
        text-decoration: underline !important;
    }
    .row{
        padding-bottom: 5%;
    }
    @media screen and (max-width: 500px) {
        .icon_file {
            display: block;
            width: 60px;
            height: 95px;
            font-size:25px;
            padding-left: 5px;
        }
        .icon_file:before {
            width:20px !important;
            height:20px !important;
        }
        .row .col{
            margin-left: 15%;
        }
    }
    @media screen and (min-width: 500px) and (max-width: 768px) {
        .icon_file {
            display: block;
            width:65px;
            height:110px;
            padding-left:7px;
        }
        .icon_file:before {
            width:20px !important;
            height:20px !important;
        }
    }
    @media screen and  (max-width: 1200px) {
        .place_for_svg{
            display: block;
        }
    }
</style>