<template>
    <div id="events_smk">
        <b-container>
            <h2>Мероприятия организации по постоянному улучшению системы менеджмента качества</h2>
            <b-row>
                <b-col cols="4">
                    <img src="../../../public/images/smk/smk_events.jpg" alt="рабочее_место_офисного_работника">
                </b-col>
                <b-col>
                    <div class="arrow arrow-bottom text" v-for="(arrow,index) in arrow_bottom" :key="index">
                        {{arrow.paragraph}}
                    </div>
                    <div class="arrow text">
                        Принятие мер, необходимых для достижения
                        запланированных результатов и постоянного улучшения качества процессов
                    </div>
                </b-col>
            </b-row>


        </b-container>
    </div>
</template>

<script>
    export default {
        name: "events_smk",
        data(){
            return{
                arrow_bottom:[
                    {
                        paragraph:'Определение процессов, необходимых для эффективного функционирования системы менеджмента качества'
                    },
                    {
                        paragraph:'Определение последовательности и взаимодействия процессов'
                    },
                    {
                        paragraph:'Определения критериев и методов обеспечения результативности при осуществлении процессов и управления ими'
                    },
                    {
                        paragraph:'Обеспечение наличия ресурсов и информации, необходимых для поддержания процессов и их мониторинга'
                    },
                    {
                        paragraph:'Осуществление мониторинга, измерения и анализа качества'
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    img{
        margin-top: 5%;
    }

    .text{
        padding: 1.8% !important;
    }
    .arrow {
        background: rgba(149, 180, 197, 0.13);
        border-radius: 20px;
        border: 2px solid #94afc1;
        text-align: center;
        margin-bottom: 25px;
    }
    .arrow:hover {
        border: 2px solid #839eb0;
        cursor: default;
        background: rgba(255, 255, 255, 0.73);
    }
    .arrow-bottom:hover:before {
        border-top: 25px solid #839eb0;
    }
    .arrow-bottom{
        position: relative;
        z-index: 10;
    }
    .arrow-bottom::before{
        content: '';
        width: 0;
        height: 5px;
        display: block;
        position: absolute;
        z-index: 10;
        border: 0;
        border-left: 33px solid transparent;
        border-right: 30px solid transparent;
        margin-left: -17px;
        left: 49.4%;
        border-top: 25.5px solid rgba(148, 175, 193, 0.63);
        bottom: -26.5px;
    }
    .arrow-bottom::after{
        content: '';
        width: 0;
        height: 5px;
        display: block;
        position: absolute;
        z-index: 10;
        border: 0;
        border-left: 30px solid transparent;
        border-right: 30px solid transparent;
        margin-left: -25px;
        left: 50%;
        bottom: -26.5px;
    }

    @media screen and (max-width: 992px) {
        .row{
            flex-direction: column-reverse;
            .col-4{
                display: none;
            }
        }
    }

</style>