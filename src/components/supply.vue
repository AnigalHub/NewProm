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
                        <div>
                            <a href="#PCB_materials">
                                <img src="../../public/images/supply/print.png" alt="материалы печатных плат" >
                                <h6><b>Материалы печатных плат (Isola | Ventec)</b></h6>
                            </a>
                        </div>
                        <div>
                            <a href="#domestic_ECB">
                                <img src="../../public/images/supply/18.jpg" alt="материалы печатных плат" >
                                <h6><b>ЭКБ и КИ отечественного производства</b></h6>
                            </a>
                        </div>
                        <div>
                            <a href="#foreign_ECB">
                                <img src="../../public/images/supply/eng.jpg" alt="материалы печатных плат" >
                                <h6><b>ЭКБ и КИ иностранного производства</b></h6>
                            </a>
                        </div>
                    </div>
                </b-col>
            </b-row>
                    <ul class="text">
                        <li>Большой каталог электронных компонентов для различных отраслей (машиностроение, IT-разработка, медицинское и промышленное оборудование, радиоэлектроника, телекоммуникации).</li>
                        <li>
                            Работаем по прямым договорам с отечественными заводами-изготовителями, и дистрибьюторами ЭКБ и КИ иностранного производства.
                        </li>
                        <li>
                            Оказываем техническую помощь при подборе ЭКБ и КИ, предлагаем проектное содействие, консультируем.
                        </li>
                        <li>
                            Обеспечиваем индивидуальный график поставок с минимальный промежутком времени от оформления заказа до доставки.
                        </li>
                        <li>
                            Поставка ЭКБ и КИ проходит процедуру входного контроля. Это позволяет исключить потенциальные заводские дефекты и выявить наличие подделок.
                        </li>
                    </ul>
                    <p class="text">
                        Если Вам нужен ответственный поставщик электронных компонентов, обращайтесь в ООО «Компания Промэлектронсервис». Мы гарантируем отличное качество продукции и лучший сервис на рынке.
                    </p>
        </b-container>

    </div>
</template>

<script>
    export default {
        name: "supply"
    }
</script>

<style scoped lang="scss">
    #supply{
        background: url("../../public/фон.jpg");
        background-size: 100% 100%;
        padding: 1% 0 2.5% 0;
    }
    .text,h6{
        color: #183018 !important;
    }
    h2{
        color: rgba(26, 78, 26, 0.79);
    }
    h6{
        text-align: center;
        height: 40px;
    }
    .flex-container {
        display: flex;
        flex-wrap: wrap;
    }
    .flex-container > div {
        background: rgba(255, 255, 255, 0.69);
        width: 30%;
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
</style>