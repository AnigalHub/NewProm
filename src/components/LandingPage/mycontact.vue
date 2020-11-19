<template>
    <div id="mycontact">
        <b-container>
            <h2>Контакты</h2>
            <b-row>
                <b-col cols="5" class="text">
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

    import CompanyAddress from "../company_address";
    import map from "../../../public/documents/address/map.json";
    export default {
        name: "mycontact",
        components: {CompanyAddress},
        data(){
            return{
                map:map,
            }
        }
    }
</script>

<style scoped lang="scss">
    h2{
        color: #121224;
        text-align: center !important;
    }
    .col-5{
        border: 2px solid #121224;
        padding: 0.8%;
        border-radius: 15px;
    }
    .feature.map {
        iframe {
            min-height: 410px;
            height: auto;
            width:100% !important;
            border:0;
            box-shadow: none !important;
        }
    }

    @media screen and  (max-width: 768px) {
        .row{
            flex-direction: column;
            .col-5{
                max-width: 100%;
            }
            .col{
                padding: 0 !important;
            }
        }
        .feature.map {
            iframe {
                margin-top: 1.5%;
                min-height: 380px !important;
                border-radius: 0.625rem !important;
            }
        }
    }
    @media screen and (min-width: 768px)and (max-width: 992px) {
        .feature.map {
            iframe {
                min-height: 360px !important;
                border-radius: 0.625rem !important;
            }
        }
    }
</style>