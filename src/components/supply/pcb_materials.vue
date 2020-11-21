<template>
    <div id="pcb_materials">
        <b-container>
            <h2>Материалы печатных плат</h2>
            <b-row class="isola_ventec">
                <b-col v-for="(pcb,index) in name_pcb" :key="index">
                    <img class="emblem" :src="pcb.src" :alt="pcb.alt"/>
                    <p class="text" v-html="pcb.descr"></p>
                </b-col>
            </b-row>
            <b-tabs  pills fill>
                <b-tab title="Базовые материалы компании ISOLA" active>
                    <pcb v-for="pcb in Isola" :descr_pcb="pcb.descr_pcb" :descr_pcb_double="pcb.descr_pcb_double" :pcb_src_img="pcb.pcb_src_img"
                    :pcb_src_alt="pcb.pcb_src_alt" :descr_pcb_triple="pcb.descr_pcb_triple" :pcb_src_img_double="pcb.pcb_src_img_double"
                    :pcb_src_alt_double="pcb.pcb_src_alt_double" :descr_pcb_quadruple="pcb.descr_pcb_quadruple">
                    </pcb>
                    <b-row>
                        <b-col><p class="text">{{isola_descr}}</p></b-col>
                        <b-col cols="3">
                            <b-carousel id="carousel-no-animation" style="text-shadow: 0px 0px 2px #000" animation indicators>
                                <b-carousel-slide img-src="./images/supply/lab_isola.jpg"></b-carousel-slide>
                                <b-carousel-slide img-src="./images/supply/shipment_isola.jpg"></b-carousel-slide>
                                <b-carousel-slide img-src="./images/supply/supply_isola.jpg"></b-carousel-slide>
                                <b-carousel-slide img-src="./images/supply/warehouse_isola.jpg"></b-carousel-slide>
                            </b-carousel>
                        </b-col>
                    </b-row>
                </b-tab>
                <b-tab title="Базовые материалы компании VENTEC">
                    <pcb v-for="pcb in Ventec" :descr_pcb="pcb.descr_pcb" :descr_pcb_double="pcb.descr_pcb_double" :pcb_src_img="pcb.pcb_src_img"
                         :pcb_src_alt="pcb.pcb_src_alt" :descr_pcb_triple="pcb.descr_pcb_triple" :pcb_src_img_double="pcb.pcb_src_img_double"
                         :pcb_src_alt_double="pcb.pcb_src_alt_double" :descr_pcb_quadruple="pcb.descr_pcb_quadruple">
                    </pcb>
                    <b-row>
                        <b-col><p class="text">{{ventec_descr}}</p></b-col>
                        <b-col cols="3">
                            <b-carousel id="carousel-no-animation" style="text-shadow: 0px 0px 2px #000" animation indicators>
                                <b-carousel-slide img-src="./images/supply/lab_ventec.jpg"></b-carousel-slide>
                                <b-carousel-slide img-src="./images/supply/shipment_ventec.jpg"></b-carousel-slide>
                                <b-carousel-slide img-src="./images/supply/company_ventec.jpg"></b-carousel-slide>
                                <b-carousel-slide img-src="./images/supply/supply_ventec.jpg"></b-carousel-slide>
                            </b-carousel>
                        </b-col>
                    </b-row>
                </b-tab>
            </b-tabs>
        </b-container>
    </div>
</template>

<script>
    import Pcb from "../pcb";
    export default {
        name: "pcb_materials",
        components: {Pcb},
        data(){
            return{
                name_pcb:[
                    {
                        src:"./images/supply/emblem_isola.jpg",
                        alt:"материалы_печатных_плат",
                        descr:'<b> ISOLA </b>- мировая компания, которая разрабатывает и производит ламинаты с медным покрытием' +
                            'и диэлектрические препреги, используемые для изготовления передовых многослойных печатных плат.',
                    },
                    {
                        src:"./images/supply/emblem_ventec.png",
                        alt:"материалы_печатных_плат",
                        descr:'<b>VENTEC </b> - компания, разрабатывающая высококачественные ламинаты, покрытые медью, и препреговые связующие материалы для изготовления' +
                            'широкого спектра применения с печатными платами.',
                    }
                ],
                Isola:[
                    {
                        descr_pcb:"Это базовые материалы класса FR-4 с температурой стеклования 135°C (серия DE104) и высокотемпературные с температурой стеклования 180°С (серия 370HR); условно-нетекучие препреги (серия FR406N) и полугибкие материалы для изготовления ГЖПП; материалы с высокой теплопроводностью; материалы на полиимидной основе (Серия P96 и P95); СВЧ-материалы (серии FR408HR, Astra, I-tera, Tachyon).",
                        descr_pcb_double:"Базовые материалы компании ISOLA (Германия) одни из первых импортных материалов, появившихся на российском рынке, завоевали неоспоримый авторитет и уважение. Отборное сырье и тщательно согласованные рецептуры являются основанием для признанного во всем мире стандарта качества.",
                        pcb_src_img:"./images/supply/map_isola.jpg",
                        pcb_src_alt:"материалы_печатных_плат",
                        descr_pcb_triple:"В 2014 году наша компания разработала и согласовала в соответствии п. 5.1. РДВ 319.010-98 с Министерством обороны РФ «Технические условия поставщика ТУ5970.001.90152558-2013» на базовые электроизоляционные материалы фирмы ISOLA DURAVER-E-Cu для использования в аппаратуре военного назначения.",
                        pcb_src_img_double:"./images/supply/isola.jpg",
                        pcb_src_alt_double:"материалы_печатных_плат",
                        descr_pcb_quadruple:"«Технические условия поставщика» содержат технические требования, методы контроля, правила приемки, гарантийные обязательства и т.д. применительно к конкретным типам базовых материалов ISOLA.",
                    }

                ],
                isola_descr:"Соответствие материалов фирмы ISOLA DURAVER-E-Cu требованиям нормативно-технических документов Минобороны России и разработанным ТУ осуществлено путем проведения сертификационных испытаний." +
                    "Поставка базовых материалов ISOLA позволит обеспечить уверенность потребителей в полном соответствии требованиям нормативных документов Минобороны России (КГВС «Климат-7»), а также сократит расходы на проведения самостоятельных сертификационных испытаний каждой закупаемой партии материалов.",
                Ventec:[
                    {
                        descr_pcb:"Это базовые материалы класса FR-4 с температурой стеклования 140°C (серия VT-42) и термостабильные с температурой стеклования 180°С (серия VT-47); условно-нетекучие препреги и полугибкие материалы для изготовления ГЖПП; материалы с высокой теплопроводностью; материалы на полиимидной основе; СВЧ-материалы",
                        descr_pcb_double:"Компания Ventec существует на рынке с 2000 года и имеет широкий перечень производимых материалов. Компания ведет активную научно-исследовательскую деятельность и разработки в части материалов на основе эпоксидной смолы, фторопластов и материалов с высокой теплопроводностью. Производственные площадки компании Ventec находятся в КНР, США и в Тайване.",
                        pcb_src_img:"./images/supply/map_ventec.png",
                        pcb_src_alt:"материалы_печатных_плат",
                        descr_pcb_triple:"Материалы этой компании представлены на рынке США, Евросоюза, Израиля, Англии, Сингапура, Японии, Кореи, Тайваня и КНР и используются в изделиях таких глобальных компаний как Siemens, LG Electronics, Bosch, Nokia, Apple, BenQ, SAGEM Group и другие.",
                        pcb_src_img_double:"./images/supply/ventec.jpg",
                        pcb_src_alt_double:"материалы_печатных_плат",
                        descr_pcb_quadruple:"Базовые материалы Ventec сертифицированы для использования в аэрокосмической промышленности, сертификат соответствия FR005377.На предприятии введен стандарт системы менеджмента качества EN 9100:2009 / AS 9100C / JIS Q 9100:2009 для предприятий гражданской, военной и коммерческой авиации.",
                    }
                ],
                ventec_descr:"Качество базовых материалов Ventec подтверждено сертификатами соответствия требованиям ISO 9001:2008, ISO 14001:2014, GB/T 28001-2001, ISO/TS 16949 UNI CEI 11170-3, выданными на основании испытаний аккредитованных центров сертификации: Генеральным комитетом по сертификации Bureau Veritas Certification, Европейской лабораторией LAPI S.P.A., компанией SGS United Kingdom Ltd, международной компанией Intertek Testing_Services."
            }
        }
    }
</script>

<style>
    @media screen and (max-width: 992px) {
        .nav-fill .nav-item {
            width: 100% !important;
        }
    }

</style>
<style scoped lang="scss">
    .col-5{
        float: left;
    }
    .emblem{
      width: 15% !important;
      margin-right:2% ;
      display: block;
      float: left;
    }
    .col-3{
        flex: 0 0 22% !important;
        max-width: 22% !important;
    }
    .tab-content .col{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .col{
        padding: 0 !important;
    }
    @media screen and (max-width: 500px) {
        .tab-pane .row{
            flex-direction: column;
        }
        .col-3{
            max-width: 65% !important;
            display: block;
            margin-right: auto;
            margin-left: auto;
        }
        .emblem{
            width: 20% !important;
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