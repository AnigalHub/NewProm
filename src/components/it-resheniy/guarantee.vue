<template>
    <div id="guarantee">
        <b-container>
            <h2>Гарантии</h2>
            <p class="text">
                На всю поставляемую технику и комплектующие предоставляется официальная гарантия. В случае возникновения гарантийного случая (заводской брак или дефект, выявившийся в процессе эксплуатации) мы берем на себя все хлопоты, связанные с гарантийным ремонтом оборудования. Вы связываетесь с нами, а мы решаем все возникшие проблемы.
            </p>
            <p class="text">
                Срок гарантии на большую часть оборудования – от 24 месяцев. Также мы предлагаем постгарантийное обслуживание. Вы можете быть уверены в долгой эксплуатации поставляемого нами ИТ-оборудования и быстром решении любых возникших с ним проблем.
            </p>
            <div class="flex-container">
                <div  v-for="(producer, index) in list_producers" :key="index">
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
        name: "guarantee",
        data(){
            return{
                list_producers:[
                    {
                        link:"https://www.cisco.com",
                        src: "./images/guarantees/cisco.png",
                        alt: "Cisco",
                    },
                    {
                        link:"https://www.kingston.com/ru",
                        src: "./images/guarantees/kingston.png",
                        alt: "Kingston",
                    },
                    {
                        link:"https://www.kramer.ru/",
                        src: "./images/guarantees/kramer.png",
                        alt: "Kramer",
                    },
                    {
                        link:"https://www.lenovo.com/ru/ru/",
                        src: "./images/guarantees/lenovo.png",
                        alt: "Lenovo",
                    },
                    {
                        link:"https://www.logitech.com/ru-ru",
                        src: "./images/guarantees/logitech.png",
                        alt: "Logitech",
                    },
                    {
                        link:"https://www.microsoft.com/ru-ru/",
                        src: "./images/guarantees/microsoft.png",
                        alt: "Microsoft",
                    },
                    {
                        link:"https://ru.msi.com/",
                        src: "./images/guarantees/msi.png",
                        alt: "Msi",
                    },
                    {
                        link:"https://www.nvidia.com/en-us/",
                        src: "./images/guarantees/nvidia.png",
                        alt: "Nvidia",
                    },
                    {
                        link:"https://www8.hp.com/us/en/home.html",
                        src: "./images/guarantees/hp.png",
                        alt: "HP",
                    },
                    {
                        link:"https://www.philips.ru/",
                        src: "./images/guarantees/philips.png",
                        alt: "Philips",
                    },
                    {
                        link:"https://www.samsung.com/ru/",
                        src: "./images/guarantees/samsung.png",
                        alt: "Samsung",
                    },
                    {
                        link:"https://sigur.com/",
                        src: "./images/guarantees/sigur.png",
                        alt: "Sigur",
                    },
                    {
                        link:"https://www.sony.ru/",
                        src: "./images/guarantees/sony.png",
                        alt: "Sony",
                    },
                    {
                        link:"https://www.supermicro.com/en/",
                        src: "./images/guarantees/supermicro.png",
                        alt: "Supermicro",
                    },
                    {
                        link:"https://www.viewsonic.com/ru/",
                        src: "./images/guarantees/view_sonic.png",
                        alt: "ViewSonic",
                    },
                    {
                        link:"https://www.westerndigital.com/",
                        src: "./images/guarantees/western_digital.png",
                        alt: "Western_digital",
                    },
                    {
                        link:"https://www.xerox.com/",
                        src: "./images/guarantees/xerox.png",
                        alt: "Xerox",
                    },
                    {
                        link:"https://www.yealink.com/",
                        src: "./images/guarantees/yealink.png",
                        alt: "Yealink",
                    },
                    {
                        link:"https://www.zyxel.com/ru/ru/",
                        src: "./images/guarantees/zyxel.png",
                        alt: "Zyxel",
                    },
                    {
                        link:"https://www.cryptopro.ru/",
                        src: "./images/guarantees/крипто_про.png",
                        alt: "Крипто_про",
                    },
                    {
                        link:"https://www.asus.com/ru/",
                        src: "./images/guarantees/asus.png",
                        alt: "Asus",
                    },
                    {
                        link:"https://www.adobe.com/",
                        src: "./images/guarantees/adobe.png",
                        alt: "Adobe",
                    },
                    {
                        link:"https://www.amd.com/ru",
                        src: "./images/guarantees/amd.png",
                        alt: "Amd",
                    },
                    {
                        link:"https://www.benq.com",
                        src: "./images/guarantees/benq.png",
                        alt: "Benq",
                    },
                    {
                        link:"https://hikvision.ru/",
                        src: "./images/guarantees/hikvision.png",
                        alt: "Hikvision",
                    },
                    {
                        link:"http://www1.euro.dell.com/content/default.aspx?c=ru&l=ru&s=&s=gen&~ck=cr",
                        src: "./images/guarantees/dell.png",
                        alt: "Dell",
                    },
                    {
                        link:"https://huawei.ru/",
                        src: "./images/guarantees/huawei.png",
                        alt: "Huawei",
                    },
                    {
                        link:"https://shop.westerndigital.com/ru-ru",
                        src: "./images/guarantees/sanDisk.png",
                        alt: "SanDisk",
                    },
                    {
                        link:"https://www.gigabyte.com/",
                        src: "./images/guarantees/gigabyte.png",
                        alt: "Gigabyte",
                    },
                    {
                        link:"https://rusbitech.ru/",
                        src: "./images/guarantees/русбитех.png",
                        alt: "Русбитех",
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
        margin: 0 0.05% 2% 0.05% !important;
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