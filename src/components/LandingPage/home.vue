<template>
    <div id="home">
        <video autoplay muted loop playsinline webkit-playingline width="100%" poster="video/video.png" data-object-fit="fill">
            <source src="video/important_video.mp4" type="video/mp4" >
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
        line-height: 4rem;
        text-shadow: 3.5px 3.5px 5.5px #080909;
    }
    .slogan{
        font-size: 1.5rem;
        font-weight: 500 !important;
        font-family: 'Istok Web', sans-serif;
        text-shadow: 1.5px 1.5px 3.5px #080909;
    }
    @media screen and (max-width: 500px) {
        .inscription{
            font-size: 1.2rem;
            top:8% !important;
            line-height: 1.7rem;
            padding: 8% 8% 8% 5%;
        }
        video {
            height: 230px !important;
        }
        .slogan{
            font-size: 1rem;
        }
    }
    @media screen and (min-width: 500px)and (max-width: 768px) {
        .inscription{
            font-size: 1.4rem;
            top:7% !important;
            line-height: 2.25rem;
        }
        video {
            height: 260px !important;
        }
        .slogan{
            font-size: 1.15rem;
        }
    }
    @media screen and (min-width: 768px)and (max-width: 992px) {
        .inscription{
            font-size: 1.7rem;
            top:7% !important;
            line-height: 2.8rem;
        }
        video {
            height: 300px !important;
        }
        .slogan{
            font-size: 1.2rem;
        }
    }
    @media screen and (min-width: 992px)and (max-width: 1200px) {
        .inscription{
            font-size: 2rem;
            top:6% !important;
            line-height: 3rem;
        }
        video {
            height: 340px !important;
        }
    }
    @media screen and (min-width: 1200px)and (max-width: 1600px) {
        .inscription{
            font-size: 2.5rem;
            top:7.5% !important;
        }
    }
</style>