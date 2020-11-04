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
                            <img :src="producer.src" :alt="producer.alt"/>
                        </div>
                    </div>
                    <h3>ЭКБ и КИ иностранного производства</h3>
                    <p class="text">
                        Общество с ограниченной ответственностью «Компания Промэлектронсервис» сотрудничает с передовыми иностранными производителями и осуществляет прямые поставки ЭКБ и КИ иностранного производства по всей России.
                    </p>
                    <div class="flex-container">
                        <div  v-for="(producer, index) in list_foreign_producers" :key="index">
                            <img :src="producer.src" :alt="producer.alt"/>
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
                        src: "./images/domestic_ECB/монолит.png",
                        alt: "Монолит",
                    },
                    {
                        src: "./images/domestic_ECB/анстрем.png",
                        alt: "Анстрем",
                    },
                    {
                        src: "./images/domestic_ECB/аедон.png",
                        alt: "Аедон",
                    },
                    {
                        src: "./images/domestic_ECB/resurs.png",
                        alt: "Resurs",
                    },
                    {
                        src: "./images/domestic_ECB/завод_и_атлант.png",
                        alt: "Завод_и_атлант",
                    },
                    {
                        src: "./images/domestic_ECB/исеть.png",
                        alt: "Исеть",
                    },
                    {
                        src: "./images/domestic_ECB/северная_заря.png",
                        alt: "Северная_заря",
                    },
                    {
                        src: "./images/domestic_ECB/элекон.png",
                        alt: "Элекон",
                    },
                    {
                        src: "./images/domestic_ECB/протон.png",
                        alt: "Протон",
                    },
                    {
                        src: "./images/domestic_ECB/октябрь.png",
                        alt: "Октябрь",
                    },
                    {
                        src: "./images/domestic_ECB/нпп_тэз.png",
                        alt: "Нпп_тэз",
                    },
                    {
                        src: "./images/domestic_ECB/восход.png",
                        alt: "Восход",
                    },
                    {
                        src: "./images/domestic_ECB/микроэлектроники.png",
                        alt: "Микроэлектроники",
                    },
                    {
                        src: "./images/domestic_ECB/интеграл.png",
                        alt: "Интеграл",
                    },
                    {
                        src: "./images/domestic_ECB/орбита.png",
                        alt: "Орбита",
                    },
                    {
                        src: "./images/domestic_ECB/трансформаторный_завод.png",
                        alt: "Трансформаторный_завод",
                    },
                ],
                list_foreign_producers:[
                    {
                        src: "./images/foreign_ECB/muRata.png",
                        alt: "MuRata",
                    },
                    {
                        src: "./images/foreign_ECB/intel.png",
                        alt: "Intel",
                    },
                    {
                        src: "./images/foreign_ECB/amphenol.png",
                        alt: "Amphenol",
                    },
                    {
                        src: "./images/foreign_ECB/analog_devices.png",
                        alt: "Analog_devices",
                    },
                    {
                        src: "./images/foreign_ECB/avx.png",
                        alt: "AVX",
                    },
                    {
                        src: "./images/foreign_ECB/axon.png",
                        alt: "Axon",
                    },
                    {
                        src: "./images/foreign_ECB/harting.png",
                        alt: "Harting",
                    },
                    {
                        src: "./images/foreign_ECB/qorvo.png",
                        alt: "Qorvo",
                    },
                    {
                        src: "./images/foreign_ECB/nxp.png",
                        alt: "NXP",
                    },
                    {
                        src: "./images/foreign_ECB/cypress.png",
                        alt: "Cypress",
                    }, {
                        src: "./images/foreign_ECB/glenair.png",
                        alt: "Glenair",
                    },
                    {
                        src: "./images/foreign_ECB/harwin.png",
                        alt: "Harwin",
                    },
                    {
                        src: "./images/foreign_ECB/infineon.png",
                        alt: "Infineon",
                    },
                    {
                        src: "./images/foreign_ECB/samtec.png",
                        alt: "Samtec",
                    },
                    {
                        src: "./images/foreign_ECB/microchip.png",
                        alt: "Microchip",
                    },
                    {
                        src: "./images/foreign_ECB/on_semiconductor.png",
                        alt: "On_semiconductor",
                    },
                    {
                        src: "./images/foreign_ECB/kemet.png",
                        alt: "Kemet",
                    },
                    {
                        src: "./images/foreign_ECB/maxim_integrated.png",
                        alt: "Maxim_integrated",
                    },
                    {
                        src: "./images/foreign_ECB/seme_lab.png",
                        alt: "Seme_lab",
                    },
                    {
                        src: "./images/foreign_ECB/st.png",
                        alt: "ST",
                    },
                    {
                        src: "./images/foreign_ECB/teledyne.png",
                        alt: "Teledyne",
                    },
                    {
                        src: "./images/foreign_ECB/souriau.png",
                        alt: "Souriau",
                    },
                    {
                        src: "./images/foreign_ECB/micron.png",
                        alt: "Micron",
                    },
                    {
                        src: "./images/foreign_ECB/vicor.png",
                        alt: "Vicor",
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    #manufacturers{
        background: url("../../../public/фон.jpg");
        background-size: 100% 100%;
        padding: 1% 0 2.5% 0;
    }
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