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
                    <router-link :to="producer.link">
                        <img :src="producer.src" :alt="producer.alt"/>
                    </router-link>
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
                        link:"www.cisco.com",
                        src: "./images/guarantees/cisco.png",
                        alt: "Cisco",
                    },
                    {
                        link:"",
                        src: "./images/guarantees/kingston.png",
                        alt: "Kingston",
                    },
                    {
                        link:"",
                        src: "./images/guarantees/kramer.png",
                        alt: "Kramer",
                    },
                    {
                        link:"",
                        src: "./images/guarantees/lenovo.png",
                        alt: "Lenovo",
                    },
                    {
                        link:"",
                        src: "./images/guarantees/logitech.png",
                        alt: "Logitech",
                    },
                    {
                        link:"",
                        src: "./images/guarantees/microsoft.png",
                        alt: "Microsoft.png",
                    },
                    {
                        link:"",
                        src: "./images/guarantees/msi.png",
                        alt: "Msi",
                    },
                    {
                        link:"",
                        src: "./images/guarantees/nvidia.png",
                        alt: "Nvidia",
                    },
                    {
                        link:"",
                        src: "./images/guarantees/hp.png",
                        alt: "HP",
                    },
                    {
                        link:"",
                        src: "./images/guarantees/philips.png",
                        alt: "Philips",
                    },
                    {
                        link:"",
                        src: "./images/guarantees/samsung.png",
                        alt: "Samsung",
                    },
                    {
                        link:"",
                        src: "./images/guarantees/sigur.png",
                        alt: "Sigur",
                    },
                    {
                        link:"",
                        src: "./images/guarantees/sony.png",
                        alt: "Sony",
                    },
                    {
                        link:"",
                        src: "./images/guarantees/supermicro.png",
                        alt: "Supermicro",
                    },
                    {
                        link:"",
                        src: "./images/guarantees/view_sonic.png",
                        alt: "View_sonic",
                    },
                    {
                        link:"",
                        src: "./images/guarantees/western_digital.png",
                        alt: "Western_digital",
                    },
                    {
                        link:"",
                        src: "./images/guarantees/xerox.png",
                        alt: "Xerox",
                    },
                    {
                        link:"",
                        src: "./images/guarantees/yealink.png",
                        alt: "Yealink",
                    },
                    {
                        link:"",
                        src: "./images/guarantees/zyxel.png",
                        alt: "Zyxel",
                    },
                    {
                        link:"",
                        src: "./images/guarantees/крипто_про.png",
                        alt: "Крипто_про",
                    },
                    {
                        link:"",
                        src: "./images/guarantees/asus.png",
                        alt: "Asus",
                    },
                    {
                        link:"",
                        src: "./images/guarantees/adobe.png",
                        alt: "Adobe",
                    },
                    {
                        link:"",
                        src: "./images/guarantees/amd.png",
                        alt: "Amd",
                    },
                    {
                        link:"",
                        src: "./images/guarantees/benq.png",
                        alt: "Benq",
                    },
                    {
                        link:"",
                        src: "./images/guarantees/hikvision.png",
                        alt: "Hikvision",
                    },
                    {
                        link:"",
                        src: "./images/guarantees/dell.png",
                        alt: "Dell",
                    },
                    {
                        link:"",
                        src: "./images/guarantees/huawei.png",
                        alt: "Huawei",
                    },
                    {
                        link:"",
                        src: "./images/guarantees/sanDisk.png",
                        alt: "SanDisk",
                    },
                    {
                        link:"",
                        src: "./images/guarantees/gigabyte.png",
                        alt: "Gigabyte",
                    },
                    {
                        link:"",
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