<template>
    <div>
            <p class="text">{{descr_pcb}}</p>
            <b-row>
                <b-col>
                    <p class="text">{{descr_pcb_double}}</p>
                    <b-row>
                        <b-col cols="3">
                            <img :src="pcb_src_img" :alt="pcb_src_alt" >
                        </b-col>
                        <b-col>
                            <p class="text">{{descr_pcb_triple}}</p>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col cols="4">
                    <img :src="pcb_src_img_double" :alt="pcb_src_alt_double" >
                </b-col>
            </b-row>
            <p class="text">{{descr_pcb_quadruple}}</p>
    </div>
</template>

<script>
    export default {
        name: "pcb",
        props:{
            descr_pcb:String,
            descr_pcb_double:String,
            pcb_src_img:String,
            pcb_src_alt:String,
            descr_pcb_triple:String,
            pcb_src_img_double:String,
            pcb_src_alt_double:String,
            descr_pcb_quadruple:String,
        }
    }
</script>

<style scoped lang="scss">
    .col-2 {
        flex: 0 0 10% !important;
        max-width: 10% !important;
    }
    .col-4 {
        flex: 0 0 30% !important;
        max-width: 30% !important;
    }
    .col{
        padding: 0 !important;
    }
    @media screen and (max-width: 500px) {
        .tab-pane .row{
            flex-direction: column;
        }
        .col-4,.col-3,.col-3:last-child {
            max-width: 65% !important;
            display: block;
            margin-right: auto;
            margin-left: auto;
        }
    }
    @media screen and (min-width: 500px) and (max-width: 768px) {
        .row .row .col{
            margin-right:-120% ;
        }
        .row .col-4,.row .col-3{
            flex: 0 0 40% !important;
            max-width: 40% !important;
        }
    }
    @media screen and  (max-width: 992px) {
        .isola_ventec{
            flex-direction: column;
        }
    }
    @media screen and (min-width: 768px)and (max-width: 992px) {
        .row .row .col{
            margin-right:-90% ;
        }
        .row .col-4,.row .col-3{
            flex: 0 0 35% !important;
            max-width: 35% !important;
        }
    }

</style>