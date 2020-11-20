<template>
    <div id="use_smk">
        <b-container>
            <h2>Применение системы менеджмента качества</h2>
            <p class="text">
                В целях улучшения результативности системы менеджмента качества, повышения удовлетворенности потребителей, путем выполнения их требований, при разработке и внедрении системы менеджмента качества в организации был применен «процессный подход», что позволило:
            </p>
            <b-row>
                <b-col v-for="(doing,index) in permission" :key="index">
                    <ul>
                        <li v-for="(value, index) in doing.doings" :key="index">
                            {{value.paragraph}}</li>
                    </ul>
                </b-col>
            </b-row>
            <div>
                <figure class="fi-chart">
                    <div class="chart-wrap">
                        <div class="chart-container">
                            <div class="chart">
                                <div class="circle fill sanity">
                                    <div class="circle four">
                                        <div class="circle fill one">
                                            <span class="line vert"></span>
                                            <span class="line iso"></span>
                                            <span class="line iso rev"></span>
                                            <div class="circle four">
                                                <div class="circle fill two remain">
                                                    <span class="line vert"></span>
                                                    <div class="circle four">
                                                        <div class="circle fill three">
                                                            <div class="circle four center">
                                                                <span class="text">Преимущества организации от применения СМК</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="options-contain">
                        <div class="valign">
                            <ul class="list-options">
                                <li class="three text"><span class="number one">1</span> Способность стабильно предоставлять продукцию и услуги, удовлетворяющие требованиям потребителей</li>
                                <li class="two text"><span class="number two">2</span> Создание возможностей для повышения удовлетворенности потребителей</li>
                                <li class="one text"><span class="number three">3</span> Направление усилий на риски и возможности, связанные со средой и целями организации</li>
                                <li class="sanity text"><span class="number four">4</span> Возможность продемонстрировать соответствие установленным требованиям системы менеджмента качества</li>
                            </ul>
                        </div>
                    </div>
                </figure>
            </div>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "use_smk",
        data(){
            return{
                permission:[
                    {
                        doings:[
                            {
                                paragraph:"Рассматривать процессы с точки зрения добавления им ценности;",
                            },
                            {
                                paragraph:"Понимать и постоянно выполнять требования;",
                            },
                        ]
                    },
                    {
                        doings:[
                            {
                                paragraph:"Достигнуть результативного функционирования процессов;",
                            },
                            {
                                paragraph:"Улучшить процессы на основе оценивания данных и информации.",
                            },
                        ]
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    figure{
        margin: 0 !important;
    }
    .col{
        padding: 0 !important;
    }
    .fi-chart {
        display: flex;
        flex-flow: row wrap;
        overflow: hidden;
    }
    .chart-wrap {
        min-width: 300px;
        max-width: 525px;
        flex: 2;
    }
    .chart-container {
        position: relative;
        padding-bottom: 100%;
    }
    .chart {
        width: 100%;
        height: 100%;
        position: absolute;
    }
    .circle {
        position: relative;
        border-radius: 50%;
        height: 100%;
    }
    li {
        cursor: default;
        list-style-type: none;
    }
    li:before {
        content: " — ";
    }
    .circle.fill {
        padding: 5%;
        background: rgba(36, 116, 190, 0.6);
        -webkit-transition: background-color 1s ease;
        -moz-transition: background-color 1s ease;
        transition: background-color 1s ease;
    }
    .circle.fill.one {
        padding: 7%;
        background: rgba(61, 158, 191, 0.6);
    }
    .circle.fill.two {
        padding: 9%;
        background: rgba(71, 180, 215, 0.76);
    }
    .circle.fill.three {
        padding: 12%;
        background: rgba(127, 220, 255, 0.8);
    }
    .circle.four {
        background: rgba(39, 43, 52, 0.3);
        padding: 3.4%;
    }
    .list-options li:before {
        content: "";
        position: absolute;
        left: -225px;
        border-top: 1px dotted #000000;
        width: 225px;
        top: 50%;
    }
    .list-options li:hover:before {
        border-top: 1.2px solid #2826ff;
    }
    .list-options li.two:before {
        width: 240px;
        left: -240px;
    }
    .list-options li.one:before {
        left: -170px;
        width: 170px;
    }
    .list-options li.sanity:before {
        left: -125px;
        width: 125px;
    }
    .list-options li:hover:after {
        background: #2826ff;
    }
    .list-options li:after {
        content: "";
        position: absolute;
        left: -225px;
        background-color: #000000;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        display: block;
        top: calc(50% - 4px);
    }
    .list-options li.two:after {
        left: -240px;
    }
    .list-options li.one:after {
        left: -170px;
    }
    .list-options li.sanity:after {
        left: -125px;
    }
    .line {
        position: absolute;
        display: block;
        width: 100%;
        height: 4px;
        background: rgba(18, 20, 25, 0.2);
        top: 50%;
    }
    .line.vert {
        left: 50%;
        transform: translate(-50%,-50%);
        width: 3px;
        height: 100%;
    }
    .line.iso {
        transform: rotate(30deg);
        left: -1px;
    }
    .line.iso.rev {
        transform: rotate(150deg);
        left: 1px;
    }
    span.text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        display: block;
        width: 100%;
        text-align: center;
        color: #000000;
        line-height: 25px !important;
        font-weight: 600 !important;
    }
    .options-contain{
        margin-left: 3%;
    }
    .text-contain, .options-contain {
        padding: 1em;
        position: relative;
        width: 700px;
    }
    .text-contain {
        line-height: 1.5em;
    }
    .list-options li {
        list-style-type: none;
        padding: .8em;
        border: 1.2px solid black;
        margin: 1.1rem 0;
        position: relative;
    }
    .list-options li .number {
        font-size: 1.75em;
        line-height: 1em;
        padding-bottom: .1em;
        display: block;
    }
    .list-options li > .number {
        display: inline-block;
        line-height: 16px;
    }
    @media screen and (max-width: 300px) {
        .list-options li{
            padding: 0.4em;
        }
        .chart[data-v-2998d07b] {
            width: 82%;
            height: 82%;
        }
        .options-contain{
            margin-top: -30%;
        }
        span.text {
            line-height: 1rem !important;
        }
    }
</style>