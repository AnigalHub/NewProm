<template>
    <div>
        <b-row>
            <b-col cols="3">
                <video autoplay muted loop playsinline webkit-playingline width="100%">
                    <source :src="trials_video" type="video/mp4" >
                </video>
            </b-col>
            <b-col>
                <p class="text descr">
                    {{trials_description}}
                </p>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: "trials_video",
        props:{
            trials_video: Object,
            trials_description: String,
        },
    }
</script>

<style scoped lang="scss">
    .col-3{
        padding: 0 !important;
        flex: 0 0 30% !important;
        max-width: 30% !important;
    }
    video{
        padding: 2.5% !important;
        background: rgba(255, 255, 255, 0.26) !important;
        box-shadow: 2px 2px 5px rgba(5, 35, 71, 0.28),0 0 1.5em rgba(5, 35, 71, 0.28),0 0 0.9em rgba(5, 35, 71, 0.27) !important;
    }
    .descr{
        margin-top: 5%;
    }
    @media screen and (max-width: 500px) {
        .row {
            flex-direction: column;
            .col-3 {
                display: block;
                margin-right: auto;
                margin-left: auto;
                flex: 0 0 60% !important;
                max-width: 60% !important;
            }
            .col{
                padding: 0 !important;
            }
        }
    }

</style>