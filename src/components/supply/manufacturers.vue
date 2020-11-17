<template>
    <div id="manufacturers">
        <b-container>
                <h2>Производители</h2>
                    <h3>ЭКБ и КИ отечественного производства</h3>
                    <p class="text">
                        ООО «Компания Промэлектронсервис» осуществляет прямые поставки ЭКБ и КИ отечественного производства. У нас заключены договора с ведущими российскими производителями, чья электронная компонентная база отвечает существующим нормативам и стандартам.
                    </p>
                    <div class="flex-container">
                        <div  v-for="(producer, index) in list_domestic_producers" :key="index">
                            <a :href="producer.link" target="_blank">
                                <img :src="producer.src" :alt="producer.alt"/>
                            </a>
                        </div>
                    </div>
                    <h3>ЭКБ и КИ иностранного производства</h3>
                    <p class="text">
                        Общество с ограниченной ответственностью «Компания Промэлектронсервис» сотрудничает с передовыми иностранными производителями и осуществляет прямые поставки ЭКБ и КИ иностранного производства по всей России.
                    </p>
                    <div class="flex-container">
                        <div  v-for="(producer, index) in list_foreign_producers" :key="index">
                            <a :href="producer.link" target="_blank">
                                <img :src="producer.src" :alt="producer.alt"/>
                            </a>
                        </div>
                    </div>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "manufacturers",
        data(){
            return{
                list_domestic_producers:[
                    {
                        link:"http://www.monolit.by/Monolit.html",
                        src: "./images/domestic_ECB/монолит.png",
                        alt: "Монолит",
                    },
                    {
                        link:"https://www.angstrem.ru/ru",
                        src: "./images/domestic_ECB/анстрем.png",
                        alt: "Анстрем",
                    },
                    {
                        link:"https://aedon.ru/",
                        src: "./images/domestic_ECB/аедон.png",
                        alt: "Аедон",
                    },
                    {
                        link:"http://aoresurs.com/",
                        src: "./images/domestic_ECB/resurs.png",
                        alt: "Resurs",
                    },
                    {
                        link:"http://zavodatlant.ru/",
                        src: "./images/domestic_ECB/завод_и_атлант.png",
                        alt: "Завод_и_атлант",
                    },
                    {
                        link:"http://www.uzes-iset.ru/",
                        src: "./images/domestic_ECB/исеть.png",
                        alt: "Исеть",
                    },
                    {
                        link:"https://relays.ru/",
                        src: "./images/domestic_ECB/северная_заря.png",
                        alt: "Северная_заря",
                    },
                    {
                        link:"https://zavod-elecon.ru/",
                        src: "./images/domestic_ECB/элекон.png",
                        alt: "Элекон",
                    },
                    {
                        link:"https://www.proton-orel.ru/",
                        src: "./images/domestic_ECB/протон.png",
                        alt: "Протон",
                    },
                    {
                        link:"http://www.neywa.ru/",
                        src: "./images/domestic_ECB/октябрь.png",
                        alt: "Октябрь",
                    },
                    {
                        link:"https://www.npptez.ru/",
                        src: "./images/domestic_ECB/нпп_тэз.png",
                        alt: "Нпп_тэз",
                    },
                    {
                        link:"http://www.voshod-krlz.ru/oao/about",
                        src: "./images/domestic_ECB/восход.png",
                        alt: "Восход",
                    },
                    {
                        link:"http://www.okbmel.ru/",
                        src: "./images/domestic_ECB/микроэлектроники.png",
                        alt: "Микроэлектроники",
                    },
                    {
                        link:"https://integral.by/",
                        src: "./images/domestic_ECB/интеграл.png",
                        alt: "Интеграл",
                    },
                    {
                        link:"http://orbita.su/",
                        src: "./images/domestic_ECB/орбита.png",
                        alt: "Орбита",
                    },
                    {
                        link:"http://www.oaogtz.ru/",
                        src: "./images/domestic_ECB/трансформаторный_завод.png",
                        alt: "Трансформаторный_завод",
                    },
                ],
                list_foreign_producers:[
                    {
                        link:"https://www.murata.com/",
                        src: "./images/foreign_ECB/muRata.png",
                        alt: "MuRata",
                    },
                    {
                        link:"https://www.intel.com/content/www/us/en/homepage.html",
                        src: "./images/foreign_ECB/intel.png",
                        alt: "Intel",
                    },
                    {
                        link:"https://www.amphenol.com/",
                        src: "./images/foreign_ECB/amphenol.png",
                        alt: "Amphenol",
                    },
                    {
                        link:"https://www.analog.com/ru",
                        src: "./images/foreign_ECB/analog_devices.png",
                        alt: "Analog_devices",
                    },
                    {
                        link:"http://www.avx.com/",
                        src: "./images/foreign_ECB/avx.png",
                        alt: "AVX",
                    },
                    {
                        link:"https://www.axon-cable.com/en/00_home/00_start/00/index.aspx",
                        src: "./images/foreign_ECB/axon.png",
                        alt: "Axon",
                    },
                    {
                        link:"https://www.harting.com/RU/ru",
                        src: "./images/foreign_ECB/harting.png",
                        alt: "Harting",
                    },
                    {
                        link:"https://www.qorvo.com/",
                        src: "./images/foreign_ECB/qorvo.png",
                        alt: "Qorvo",
                    },
                    {
                        link:"https://www.nxp.com/",
                        src: "./images/foreign_ECB/nxp.png",
                        alt: "NXP",
                    },
                    {
                        link:"https://www.cypress.com/",
                        src: "./images/foreign_ECB/cypress.png",
                        alt: "Cypress",
                    },
                    {
                        link:"https://www.glenair.com/",
                        src: "./images/foreign_ECB/glenair.png",
                        alt: "Glenair",
                    },
                    {
                        link:"https://www.harwin.com/",
                        src: "./images/foreign_ECB/harwin.png",
                        alt: "Harwin",
                    },
                    {
                        link:"https://www.infineon.com/",
                        src: "./images/foreign_ECB/infineon.png",
                        alt: "Infineon",
                    },
                    {
                        link:"https://www.samtec.com/",
                        src: "./images/foreign_ECB/samtec.png",
                        alt: "Samtec",
                    },
                    {
                        link:"https://www.microchip.com/",
                        src: "./images/foreign_ECB/microchip.png",
                        alt: "Microchip",
                    },
                    {
                        link:"https://www.onsemi.com/",
                        src: "./images/foreign_ECB/on_semiconductor.png",
                        alt: "On_semiconductor",
                    },
                    {
                        link:"https://www.kemet.com/en/us.html",
                        src: "./images/foreign_ECB/kemet.png",
                        alt: "Kemet",
                    },
                    {
                        link:"https://www.maximintegrated.com/en.html",
                        src: "./images/foreign_ECB/maxim_integrated.png",
                        alt: "Maxim_integrated",
                    },
                    {
                        link:"https://www.ttelectronics.com/products/brands/semelab/",
                        src: "./images/foreign_ECB/seme_lab.png",
                        alt: "Seme_lab",
                    },
                    {
                        link:"https://www.st.com/content/st_com/en.html",
                        src: "./images/foreign_ECB/st.png",
                        alt: "ST",
                    },
                    {
                        link:"http://www.teledyne.com/",
                        src: "./images/foreign_ECB/teledyne.png",
                        alt: "Teledyne",
                    },
                    {
                        link:"https://www.souriau.com/en-en",
                        src: "./images/foreign_ECB/souriau.png",
                        alt: "Souriau",
                    },
                    {
                        link:"https://www.micron.com/",
                        src: "./images/foreign_ECB/micron.png",
                        alt: "Micron",
                    },
                    {
                        link:"http://www.vicorpower.com/",
                        src: "./images/foreign_ECB/vicor.png",
                        alt: "Vicor",
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .flex-container {
        display: flex;
        flex-wrap: wrap;
    }
    .flex-container > div {
        width: 16.5%;
        margin: 0 0.05% 1% 0.05% !important;
        filter: grayscale(90%);
    }
    .flex-container > div:hover{
        filter: contrast(200%);
    }
    @media screen and (max-width: 768px) {
        .flex-container > div {
            width: 33%;
            margin: 0 0.05% 0.05% 0.05% !important;
        }
    }
    @media screen and (min-width: 768px)and (max-width: 992px) {
        .flex-container > div {
            width: 24%;
            margin: 0 0.05% 0.05% 0.05% !important;
        }
    }
    @media screen and (min-width: 992px)and (max-width: 1200px) {
        .flex-container > div {
            width: 19%;
        }
    }
</style>