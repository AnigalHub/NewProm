<template>
    <div id="company">
        <b-container>
            <h2>О компании</h2>
            <p class="text">
                На сегодняшний день <b>ООО «Компания Промэлектронсервис»</b> - это динамично развивающаяся компания, которая хорошо зарекомендовала себя на рынке сертификационных испытаний ЭКБ и комплексных поставок ЭКБ и КИ.
                Работы проводятся в соответствии с Федеральным законом от 29.12.2012 года № 275-ФЗ «О государственном оборонном заказе».
            </p>
            <div class="row_history">
                <h3>История компании:</h3>
                <b-row>
                    <b-col>
                        <b-row v-for="(year,index) in history" :key="index">
                            <b-col>
                                <div class="circle">
                                    <div class="yaer_number">{{year.year}}</div>
                                    <div class="year">год</div>
                                </div>
                            </b-col>
                            <b-col cols="10"><p class="text">{{year.descr_year}}</p></b-col>
                        </b-row>
                    </b-col>
                    <b-col cols="3">
                        <img  v-for="(img,index) in history_img" :key="index"  :src="img.src" :alt="img.alt"/>
                    </b-col>
                </b-row>
            </div>
            <h3>Основные направления деятельности</h3>
            <b-row class="row_activity">
                <b-col cols="4">
                    <b-carousel v-model="slide" ref="myCarousel" :interval="4000" background="transparent">
                        <b-carousel-slide  v-for="test in tests" :key="test.id"  img-blank>
                            <img :src="test.src" :alt="test.alt"/>
                        </b-carousel-slide>
                    </b-carousel>
                </b-col>
                <b-col>
                    <ul><li class="text" v-for="(direction,index) in list_activity" :key="index">{{direction}}</li></ul>
                </b-col>
            </b-row>
            <h3>Репутация:</h3>
            <p class="text">
                За время существования организации, Общество с ограниченной ответственностью "Компания Промэлектронсервис" (ООО "Компания Промэлектронсервис"), ОГРН 115027002727 было аттестовано органами сертификации по разным отраслям профессиональной деятельности.
            </p>
            <b-card no-body>
                <b-tabs pills card vertical nav-wrapper-class="w-50">
                    <b-tab class="text" v-for="(certificate,index) in reputation" :key="index" :title=certificate.title >
                        <b-card-text class="text">
                            <p><b>{{certificate.title}}</b></p>
                            <i><u>Выдан:</u></i>
                            {{certificate.issued}}
                            <p><i><u>Дата получения: </u></i> {{certificate.from}}</p>
                            <p> <i><u>Действителен до:</u></i> {{certificate.to}}</p>
                        </b-card-text>
                    </b-tab>
                </b-tabs>
            </b-card>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "company",
        data(){
            return{
                history:[
                    {
                        year:'2011',
                        descr_year:'Общество с ограниченной ответственностью «Компания Промэлектронсервис» было основано как поставщик электронной компонентной базы отечественного и иностранного производства.',
                    },
                    {
                        year:'2014',
                        descr_year:'По мере развития организация расширяла область поставляемых компонентов, на базе компании была основана Испытательная лаборатория по сертификации ЭКБ.',
                    },
                    {
                        year:'2017',
                        descr_year:'Испытательная лаборатория ввела в эксплуатацию два комплекса для электротермотренировки (ЭТТ) радиоэлектронных элементов, устройство ДМТ-145, камеру статической и динамической пыли.',
                    },
                    {
                        year:'2020',
                        descr_year:'ООО «Компания Промэлектронсервис» расширила площадь Испытательной лаборатории на территории города Котельники.',
                    },
                ],
                history_img:[
                    {
                        src: "./images/company/oscilloscope.jpg",
                        alt: "Осцилограф",
                    },
                    {
                        src: "./images/company/voltmeter.jpg",
                        alt: "Вольтметр",
                    },
                ],
                list_activity:[
                    'Комплексная поставка ЭКБ и КИ отечественного и иностранного производства.',
                    'Проведение испытаний ЭКБ и КИ отечественного производства и сертификационных испытаний ЭКБ иностранного производства на соответствие требований',
                    'Проведение испытаний РЭА отечественного производства и сертификационных испытаний комплектующих изделий иностранного производства на соответствие требований, установленных в КГВС «Мороз-6».',
                    'Поставка электроизоляционных материалов для изготовления печатных плат.',
                    'Оказание услуг по проведению испытаний ЭКБ и КИ на стойкость к воздействию специальных факторов.',
                    'Оказание услуг по организации проведения специальных проверок ЭКБ и КИ иностранного производства.',
                    'Оказание услуг по проведению технической экспертизы обоснованности выбора и правильности применения ЭКБ и КИ иностранного производства при разработке(модернизации) вооружения, военной и специальной техники и их составных частей.',
                ],
                slide: 0,
                tests: [
                    {
                        id:1,
                        src: "./images/company/test1.jpg",
                        alt: "Тест_номер_1",
                        style: false},
                    {
                        id:2,
                        src: "./images/company/test2.jpg",
                        alt: "Тест_номер_2",
                        style: false},
                    {
                        id:3,
                        src: "./images/company/test3.jpg",
                        alt: "Тест_номер_3",
                        style: false},
                    {
                        id:4,
                        src: "./images/company/test4.jpg",
                        alt: "Тест_номер_4",
                        style: true},
                ],
                reputation:[
                    {
                        title:"Аттестат аккредитации испытательной лаборатории № ЭС 01.061.0102-2020",
                        issued:'Центральным органом Системы «Электронсерт»',
                        from:'24 марта 2020',
                        to:'24 марта 2023',
                    },
                    {
                        title:"Аттестат аккредитации испытательной лаборатории № ЭС 01.061.0081-2019",
                        issued:'Центральным органом Системы «Электронсерт»',
                        from:'16 октября 2019',
                        to:'06 марта 2020',
                    },
                    {
                        title:"Cертификат соответствия № ЭС 02.094.0227-2019",
                        issued:'Оргнаном по сертификации систем менеджмента качества Автономной некоммерческой организацией "Центр испытаний и сертификации Промтехносерт"',
                        from:'26 апреля 2019',
                        to:'24 апреля 2020',
                    },
                    {
                        title:"Свидетельство об аттестации №885",
                        issued:'Филиалом федерального государственного бюджетного учреждения "46 Центральный научно-исследовательский институт "Министерства обороны РФ"',
                        from:'07 декабря 2016',
                        to:'07 декабря 2019',
                    },
                    {
                        title:"Сертификат № ФСС КТ 134.01.3.1.000000.25.19",
                        issued:'Федеральной системой сертификации космической техники',
                        from:'04 апреля 2019',
                        to:'04 апреля 2022',
                    },
                    {
                        title:"Свидетельство о квалификации № ЭС 01.101.0731",
                        issued:'Центральным органом Системы «Электронсерт»',
                        from:'29 сентября 2020',
                        to:'29 сентября 2022',
                    },

                    {
                        title:"Cертификат соответствия № ВР 22.1.13549-2019",
                        issued:'Органом по сертификации систем менеджмента качества',
                        from:'24 апреля 2019',
                        to:'11 мая 2020',
                    },
                    {
                        title:"Cертификат соответствия № ВР 22.1.13679-2019",
                        issued:'Органом по сертификации систем менеджмента качества',
                        from:'25 июня 2019',
                        to:'26 июля 2020',
                    },
                    {
                        title:"Сертификат соответствия № ВР 22.1.14463-2020",
                        issued:'Органом по сертификации систем менеджмента качества',
                        from:'22 июня 2020',
                        to:'22 июня 2023',
                    },
                    {
                        title:"Cертификат соответствия № ВР 22.1.11413-2017",
                        issued:'Органом по сертификации систем менеджмента качества',
                        from:'26 июля 2017',
                        to:'26 июля 2020',
                    },
                    {
                        title:"Сертификат соответствия № ВР 22.1.11162-2017",
                        issued:'Органом по сертификации систем менеджмента качества',
                        from:'11 мая 2017',
                        to:'11 мая 2020',
                    },
                ]
            }
        }
    }
</script>

<style>
    #company .carousel-caption{
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        bottom: auto;
        padding: 0 !important;
    }
    #company .w-50 {
        width: 52% !important;
    }
    @media screen and (max-width: 992px) {
        #company .w-50{
            width: 100% !important;
        }
    }
    #company .tabs{
        border: none !important;
    }
    #company .w-50 .nav-link {
        padding: 0.1rem 0.15rem !important;
    }
    #company .card-header {
        padding: 0!important;
    }
</style>
<style scoped lang="scss">
    h3{
        text-align: center;
    }
    .house{
        margin-top: 15%;
    }
   .carousel,.col-3 img{
        padding: 2.5% !important;
        background: rgba(255, 255, 255, 0.26) !important;
        box-shadow: 2px 2px 5px rgba(5, 35, 71, 0.28),0 0 1.5em rgba(5, 35, 71, 0.28),0 0 0.9em rgba(5, 35, 71, 0.27) !important;
    }
   p{
       margin-bottom: 0.5rem !important;
   }
    .col-2 {
        flex: 0 0 14% !important;
        max-width: 14% !important;
    }
    li {
       list-style: none;
        cursor: default;
        margin-bottom: 0.5px;
        padding: 5px;
    }
    li:before {
        content: " — ";
    }
    .row_history .col{
        padding: 0 !important;
    }
    .cert_row .col, .row_activity .col{
        padding: 0 !important;
    }
    .col-3 {
        flex: 0 0 18% !important;
        max-width: 18% !important;
        padding-right: 0 !important;
        padding-left: 0 !important;
        img{
           margin-top: 15px !important;
        }
    }
    .col-4{
        padding: 0 !important;
    }
    .col-10{
        padding: 0 !important;
    }
    .yaer_number{
        font-weight: 400 !important;
        font-family: 'Raleway', sans-serif;
        font-size: 2.5rem;
        text-align: center;
    }
    .year{
        font-family: 'Raleway', sans-serif;
        font-size: 1rem;
        text-align: center;
        font-weight: 700;
        margin-top: -10%;
    }
    .circle{
        float: left;
        border-radius: 50%;
        padding: 0.5%;
        margin-top: -7%;
        margin-bottom: 5%;
        border: 6px solid rgba(0, 0, 0, 0.16);
        box-shadow: 0.5px 0.5px 0.5px rgba(26, 78, 26, 0.92),
        0 0 0.2em rgba(38, 93, 40, 0.67),
        0 0 0.2em rgba(26, 78, 26, 0.85) !important;
    }
    .row_history{
        .row p{
            margin-left: -8%;
        }
        .row{
            padding-bottom: 0.95% !important;
        }
    }
    @media screen and (max-width: 300px) {
        .yaer_number{
            font-size: 1rem !important;
        }
        .year{
            font-size: 0.7rem !important;
        }
    }
    @media screen and (max-width: 500px) {
        .row_history{
            .row p{
                margin-left: 1%;
            }
            .col-3{
                display: none;
            }
        }
        .row_activity{
            flex-direction: column;
            .col-4{
                flex: 0 0 45% !important;
                display: block;
                margin-right: auto;
                margin-left: auto;
                max-width: 55%;
                margin-bottom: 1%;
            }
        }
        .yaer_number{
            font-size: 1.2rem;
        }
        .year{
            font-size: 0.8rem;
        }
        .circle{
            border: 2px solid rgba(0, 0, 0, 0.16);
        }
        .card .row{
            flex-direction: column;
        }
        .card-body{
            padding: 0.8rem !important;
        }

    }
    @media screen and (min-width: 500px)and (max-width: 768px) {
        .row_history{
            .row p{
                margin-left: -2%;
            }
        }
        .row_activity{
            flex-direction: column;
            .col-4{
                flex: 0 0 45% !important;
                display: block;
                margin-right: auto;
                margin-left: auto;
                max-width: 45%;
                margin-bottom: 1%;
            }
        }
        .yaer_number{
            font-size: 1.3rem;
        }
        .year{
            font-size: 0.8rem;
        }
        .circle{
            border: 2px solid rgba(0, 0, 0, 0.16);
        }
        .card .row{
            flex-direction: column;
        }
        .card-body{
            padding: 0.8rem !important;
        }
    }
    @media screen and (min-width: 768px)and (max-width: 992px) {
        .row_history{
            .row p{
                margin-left: 1%;
            }
        }
        .row_activity{
            flex-direction: column;
            .col-4{
                flex: 0 0 45% !important;
                display: block;
                margin-right: auto;
                margin-left: auto;
                max-width: 45%;
                margin-bottom: 1%;
            }
        }
        .yaer_number{
            font-size: 2rem;
        }
        .year{
            font-size: 1rem;
        }
        .card .row{
            flex-direction: column;
        }
        .card-body{
            padding: 1rem !important;
        }
    }
    @media screen and (min-width: 992px)and (max-width: 1200px) {
        .row_history{
            .row p{
                margin-left: -2%;
            }
        }
        .carousel{
            margin-top: 15%;
        }
    }
</style>