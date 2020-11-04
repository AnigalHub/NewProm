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
                    <img :src="producer.src" :alt="producer.alt"/>
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
                        src: "./images/guarantees/cisco.png",
                        alt: "Cisco",
                    },
                    {
                        src: "./images/guarantees/kingston.png",
                        alt: "Kingston",
                    },
                    {
                        src: "./images/guarantees/kramer.png",
                        alt: "Kramer",
                    },
                    {
                        src: "./images/guarantees/lenovo.png",
                        alt: "Lenovo",
                    },
                    {
                        src: "./images/guarantees/logitech.png",
                        alt: "Logitech",
                    },
                    {
                        src: "./images/guarantees/microsoft.png",
                        alt: "Microsoft.png",
                    },
                    {
                        src: "./images/guarantees/msi.png",
                        alt: "Msi",
                    },
                    {
                        src: "./images/guarantees/nvidia.png",
                        alt: "Nvidia",
                    },
                    {
                        src: "./images/guarantees/hp.png",
                        alt: "HP",
                    },
                    {
                        src: "./images/guarantees/philips.png",
                        alt: "Philips",
                    },
                    {
                        src: "./images/guarantees/samsung.png",
                        alt: "Samsung",
                    },
                    {
                        src: "./images/guarantees/sigur.png",
                        alt: "Sigur",
                    },
                    {
                        src: "./images/guarantees/sony.png",
                        alt: "Sony",
                    },
                    {
                        src: "./images/guarantees/supermicro.png",
                        alt: "Supermicro",
                    },
                    {
                        src: "./images/guarantees/view_sonic.png",
                        alt: "View_sonic",
                    },
                    {
                        src: "./images/guarantees/western_digital.png",
                        alt: "Western_digital",
                    },
                    {
                        src: "./images/guarantees/xerox.png",
                        alt: "Xerox",
                    },
                    {
                        src: "./images/guarantees/yealink.png",
                        alt: "Yealink",
                    },
                    {
                        src: "./images/guarantees/zyxel.png",
                        alt: "Zyxel",
                    },
                    {
                        src: "./images/guarantees/крипто_про.png",
                        alt: "Крипто_про",
                    },
                    {
                        src: "./images/guarantees/asus.png",
                        alt: "Asus",
                    },
                    {
                        src: "./images/guarantees/adobe.png",
                        alt: "Adobe",
                    },
                    {
                        src: "./images/guarantees/amd.png",
                        alt: "Amd",
                    },
                    {
                        src: "./images/guarantees/benq.png",
                        alt: "Benq",
                    },
                    {
                        src: "./images/guarantees/hikvision.png",
                        alt: "Hikvision",
                    },
                    {
                        src: "./images/guarantees/dell.png",
                        alt: "Dell",
                    },
                    {
                        src: "./images/guarantees/huawei.png",
                        alt: "Huawei",
                    },
                    {
                        src: "./images/guarantees/sanDisk.png",
                        alt: "SanDisk",
                    },
                    {
                        src: "./images/guarantees/gigabyte.png",
                        alt: "Gigabyte",
                    },
                    {
                        src: "./images/guarantees/русбитех.png",
                        alt: "Русбитех",
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    #guarantee{
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