<template>
    <div id="home">
        <video autoplay muted loop playsinline webkit-playingline width="100%" poster="video/video.png" data-object-fit="fill">
            <source src="video/Kompozitsia_1i2_1__1.mp4" type="video/mp4" >
        </video>
        <div class="inscription" >
            <div class="container">
                Сертификационные испытания и комплексная поставка электронных компонентов
                <div class="slogan">
                    «Успех создают детали»
                </div>
               <b-button type="submit" to="/company">Подробнее о компании...</b-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped lang="scss">
    video
    {   height: 410px !important;
        position: relative;
        filter: brightness(45%);
        object-fit: cover;
        z-index: -10000;
        width: 100%;
    }
    .btn-secondary {
        border: 2px solid white !important;
        font-weight: 700;
        color: #ffffff;
        border-radius: 7px;
        font-size: 1rem;
        background: rgba(0, 0, 0, 0.1) !important;
        padding: 0.5% !important;
    }
    .inscription{
        font-family: 'Istok Web', sans-serif;
        font-size: 3rem;
        position: absolute;
        top:5%;
        padding: 5% 8% 8% 14%;
        color:white !important;
        line-height: 65px;
        text-shadow: 3.5px 3.5px 5.5px #080909;
    }
    .slogan{
        font-size: 1.5rem;
        font-weight: 500 !important;
        font-family: 'Istok Web', sans-serif;
        text-shadow: 1.5px 1.5px 3.5px #080909;
    }

</style>