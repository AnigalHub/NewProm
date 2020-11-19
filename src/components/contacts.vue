<template>
   <div id="contacts">
        <b-container>
           <h2>Контактная информация</h2>
            <b-row>
                <b-col cols="4" class="text">
                    <CompanyAddress></CompanyAddress>
                </b-col>
                <b-col>
                    <div id="mymap">
                        <div class="feature map" id="map-wrap">
                            <iframe :src="map"></iframe>
                        </div>
                    </div>
                </b-col>
            </b-row>

        </b-container>
    </div>

</template>

<script>
    import CompanyAddress from "./company_address";
    import map from './../../public/documents/address/map.json';
    export default {
        name: "contacts",
        components: {CompanyAddress},
        data(){
            return{
                map:map,
            }
        }
    }
</script>

<style scoped lang="scss">
    a{
        color: #121224;
    }
    .text{
        padding-bottom: 1%;
    }
    .col-4{
        border: 2px solid #121224;
        padding: 1%;
        border-radius: 15px;
        flex: 0 0 30% !important;
        max-width: 30% !important;
    }
    .col{
        padding-left: 35px !important;
    }
    .feature.map {
        iframe {
            min-height: 55vh;
            height: auto;
            width:100% !important;
            border:0;
            box-shadow: none !important;
        }
    }
    @media screen and (max-width: 500px) {
        .feature.map {
            iframe {
                margin-top: 1.5%;
                min-height: 380px !important;
                border-radius: 0.625rem !important;
            }
        }
        .row{
            flex-direction: column;
            .col-4{
                max-width: 100% !important;
            }
            .col{
                padding: 0 !important;
            }
        }
    }
    @media screen and (min-width: 500px)and (max-width: 768px) {
        .feature.map {
            iframe {
                margin-top: 1.5%;
                min-height: 380px !important;
                border-radius: 0.625rem !important;
            }
        }
        .row{
            flex-direction: column;
            .col-4{
                max-width: 100% !important;
            }
            .col,.col-4{
                padding: 0 !important;
            }
        }

    }
    @media screen and (min-width: 768px)and (max-width: 992px) {

        .col-4 {
            flex: 0 0 40% !important;
            max-width: 40% !important;
        }
        .feature.map {
            iframe {
                min-height: 40vh;
            }
        }
    }
    @media screen and (min-width: 992px)and (max-width: 1200px) {

        .col-4 {
            flex: 0 0 42% !important;
            max-width: 42% !important;
        }
        .feature.map {
            iframe {
                min-height: 50vh;
            }
        }
    }

</style>