<template>
    <div id="package_services">
        <b-container>
            <h2>Компания предлагает широкий комплекс услуг в IT направлении</h2>
            <b-carousel v-model="slide" ref="myCarousel" :interval="4000" background="transparent" img-width="400" img-height="205">
                <b-carousel-slide  v-for="item in myArray" :key="item.id"  img-blank>
                   <b-row>
                       <b-col cols="3">
                           <h3>{{item.name}}</h3>
                           <div class="text">{{item.descr}}</div>
                       </b-col>
                       <b-col>
                           <img :src="item.src" :alt="item.alt"/>
                       </b-col>
                   </b-row>
                </b-carousel-slide>
            </b-carousel>
            <a class="carousel-control-prev" @click="prevSlide()" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" @click="nextSlide()" data-slide="next">
                <span class="carousel-control-next-icon"></span>
            </a>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "package_services",
        data(){
            return{
                slide: 0,
                myArray: [
                    {id:1,
                        name:'Подготовка готовых рабочих мест',
                        descr:'(это могут быть ноутбуки, производительные компьютеры или компактные низкопрофильные блоки);',
                        src: "./images/package_services/pc2.png",
                        alt: "Материалы печатных_плат",
                        style: false},
                    {id:2,
                        name:'Поставка отдельных комплектующих для самостоятельной сборки и формирования системных блоков в нужной конфигурации',
                        descr:' (процессоры, жесткие диски, материнские платы, видеокарты и т.п.);',
                        src: "./images/package_services/videocarta.png",
                        alt: "Материалы печатных_плат",
                        style: false},
                    {id:3,
                        name:'Конфигурация и поставка серверов',
                        descr:'(готовые аппаратные конфигурации или отдельные комплектующие от проверенных поставщиков и производителей);',
                        src: "./images/package_services/server.png",
                        alt: "Материалы печатных_плат",
                        style: false},
                    {id:4,
                        name:'Системы хранения данных',
                        descr:'(с возможностью горячей замены жёстких дисков и с резервированием питания);',
                        src: "./images/package_services/sistema.png",
                        alt: "Материалы печатных_плат",
                        style: false},
                    {id:5,
                        name:'Поставка дисковых полок',
                        descr:'(для расширения доступного дискового пространства);',
                        src: "./images/package_services/disk.png",
                        alt: "Материалы печатных_плат",
                        style: false},
                    {id:6,
                        name:'Сетевое и монтажное оборудование, кабельная продукция, телекоммуникационные стойки/шкафы',
                        descr:'(маршрутизаторов, коммутаторов, репитеров, модемов и т.п.);',
                        src: "./images/package_services/router.png",
                        alt: "Материалы печатных_плат",
                        style: false},
                    {id:7,
                        name:'Оборудования для печати',
                        descr:'(в том числе сканеры, копиры, принтеры, многофункциональные устройства);',
                        src: "./images/package_services/printer.png",
                        alt: "Материалы печатных_плат",
                        style: false},
                    {id:8,
                        name:'Оборудования для связи',
                        descr:'(мини-АТС, IP-телефоны, маршрутизаторы, коммутаторы и пр.);',
                        src: "./images/package_services/ip-telephone.png",
                        alt: "Материалы печатных_плат",
                        style: false},
                    {id:9,
                        name:'Источники бесперебойного питания',
                        descr:'(батареи, сетевые фильтры, ИБП для ПК, ИБП для серверов и сетевых устройств и тд.);',
                        src: "./images/package_services/istochnic.png",
                        alt: "Материалы печатных_плат",
                        style: false},
                    {id:10,
                        name:'Поставки портативных цифровых устройств',
                        descr:'(фото- и видеооборудования, планшетов, смартфонов и т.п.)',
                        src: "./images/package_services/planshet.png",
                        alt: "Материалы печатных_плат",
                        style: true},
                ]
            }
        },
        methods: {
            prevSlide(){
                this.$refs.myCarousel.prev();
            },
            nextSlide(){
                this.$refs.myCarousel.next();
            },
        }
    }
</script>
<style>
    .carousel-caption{
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        bottom: auto;
    }
    .carousel-caption{
        text-align: left !important;
    }
</style>
<style scoped lang="scss">
    .col-3 {
       padding-top: 12%;
    }

    img{
        width: 100%;
    }
</style>