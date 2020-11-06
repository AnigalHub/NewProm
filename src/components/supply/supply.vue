<template>
    <div id="supply">
        <b-container>
            <h2>Комплексные поставки ЭКБ и КИ</h2>
            <b-row>
                <b-col cols="5">
                <p class="text">
                    <b>ООО «Компания Промэлектронсервис» </b> включена в реестр квалифицированных поставщиков ЭКБ и КИ в СДС «Электронсерт».
                </p>
                <p class="text">
                    Мы предлагаем комплексные поставки электронных компонентов от ведущих мировых и отечественных производителей.
                </p>
                </b-col>
                <b-col>
                    <div class="flex-container">
                        <div v-for="(item, index) in catalog_supply" :key="index">
                            <router-link :to="item.link">
                                <img :src="item.src" :alt="item.alt"/>
                                <h6><b> {{item.name}}</b></h6>
                            </router-link>
                        </div>
                    </div>
                </b-col>
            </b-row>
            <ul class="text">
                <li v-for="(item, index) in  list_supply" :key="index">{{item}}</li>
            </ul>
            <p class="text">
                Если Вам нужен ответственный поставщик электронных компонентов, обращайтесь в ООО «Компания Промэлектронсервис». Мы гарантируем отличное качество продукции и лучший сервис на рынке.
            </p>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "supply",
        data() {
            return {
                catalog_supply: [
                    {
                        link: "../pcb_materials",
                        src: "./images/supply/print.png",
                        alt: "Материалы печатных_плат",
                        name: "Материалы печатных плат",
                    },
                    {
                        link: "../manufacturers",
                        src: "./images/supply/producers.jpg",
                        alt: "Производители_ЭКБ _и_КИ",
                        name: "Производители ЭКБ и КИ",
                    },
                    {
                        link: "../program",
                        src: "./images/supply/program.png",
                        alt: "Программа_поставок_ЭКБ_и_КИ",
                        name: "Программа поставок",
                    },
                ],
                list_supply:[
                    'Большой каталог электронных компонентов для различных отраслей (машиностроение, IT-разработка, медицинское и промышленное оборудование, радиоэлектроника, телекоммуникации).',
                    'Работаем по прямым договорам с отечественными заводами-изготовителями, и дистрибьюторами ЭКБ и КИ иностранного производства.',
                    'Оказываем техническую помощь при подборе ЭКБ и КИ, предлагаем проектное содействие, консультируем.',
                    'Обеспечиваем индивидуальный график поставок с минимальный промежутком времени от оформления заказа до доставки.',
                    'Поставка ЭКБ и КИ проходит процедуру входного контроля. Это позволяет исключить потенциальные заводские дефекты и выявить наличие подделок.',
                ],
            }
        }
    }
</script>

<style scoped lang="scss">
    h6{
        text-align: center;
        height: 2.6rem;
        padding-top: 2%;
        background: rgba(226, 238, 235, 0.53);
        margin-bottom: 0 !important;
    }
    .flex-container {
        display: flex;
        flex-wrap: wrap;
    }
    .flex-container > div {
        background: rgba(255, 255, 255, 0.69);
        width: 30.5%;
        margin: 0 1% 2% 1% !important;
        box-shadow: 5px 5px 5px #696969;
    }
    .col,.col-5{
        padding: 0 !important;
    }
    li {
        cursor: default;
        list-style-type: none;
        padding-top: 1%;
        padding-bottom: 0.8%;
    }
    .row_ch{
        margin-right: 28% !important;
        .col{
            background: rgba(255, 255, 255, 0.36);
            box-shadow: 5px 5px 5px #828282;
            margin: 10px;
            padding: 0;
        }
        img{
            padding: 10px;
        }
    }

    ul{
        -webkit-margin-before: 0 !important;
        margin-block-start: 0 !important;
        -webkit-padding-start: 5px !important;
        padding-inline-start: 5px !important;
    }

    li:before {
        content: " — ";
    }
    @media screen and (max-width: 768px) {
        .row{
            flex-direction: column;
            .col-5{
                max-width: 100% !important;
            }
            .col{
                max-width: 85% !important;
            }
        }
        .flex-container > div {
            width: 31%;
            margin: 0 1% 2% 1% !important;
        }
        h6{
            height: 2.2rem;
        }
    }
    @media screen and (min-width: 768px)and (max-width: 992px) {
        .row{
            flex-direction: column;
            .col-5{
                max-width: 100% !important;
            }
            .col{
                max-width: 75% !important;
            }
        }
        .flex-container > div {

            margin: 0 1.15% 2% 1.15% !important;
        }
        h6{
            height: 2.3rem;
        }
    }

</style>