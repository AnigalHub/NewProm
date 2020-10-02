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
                <div>
                    <img src="../../../public/images/guarantees/cisco.png">
                </div>
                <div>
                    <img src="../../../public/images/guarantees/kingston.png">
                </div>
                <div>
                    <img src="../../../public/images/guarantees/kramer.png">
                </div>
                <div>
                    <img src="../../../public/images/guarantees/lenovo.png">
                </div>
                <div>
                    <img src="../../../public/images/guarantees/logitech.png">
                </div>
                <div>
                    <img src="../../../public/images/guarantees/microsoft.png">
                </div>
                <div>
                    <img src="../../../public/images/guarantees/msi.png">
                </div>
                <div>
                    <img src="../../../public/images/guarantees/nvidia.png">
                </div>
                <div>
                    <img src="../../../public/images/guarantees/hp.png">
                </div>
                <div>
                    <img src="../../../public/images/guarantees/philips.png">
                </div>
                <div>
                    <img src="../../../public/images/guarantees/samsung.png">
                </div>
                <div>
                    <img src="../../../public/images/guarantees/sigur.png">
                </div>
                <div>
                    <img src="../../../public/images/guarantees/sony.png">
                </div>
                <div>
                    <img src="../../../public/images/guarantees/supermicro.png">
                </div>
                <div>
                    <img src="../../../public/images/guarantees/view_sonic.png">
                </div>
                <div>
                    <img src="../../../public/images/guarantees/western_digital.png">
                </div>
                <div>
                    <img src="../../../public/images/guarantees/xerox.png">
                </div>
                <div>
                    <img src="../../../public/images/guarantees/yealink.png">
                </div>
                <div>
                    <img src="../../../public/images/guarantees/zyxel.png">
                </div>
                <div>
                    <img src="../../../public/images/guarantees/крипто_про.png">
                </div>
                <div>
                    <img src="../../../public/images/guarantees/asus.png">
                </div>
                <div>
                    <img src="../../../public/images/guarantees/adobe.png">
                </div>
                <div>
                    <img src="../../../public/images/guarantees/amd.png">
                </div>
                <div>
                    <img src="../../../public/images/guarantees/benq.png">
                </div>
                <div>
                    <img src="../../../public/images/guarantees/hikvision.png">
                </div>
                <div>
                    <img src="../../../public/images/guarantees/dell.png">
                </div>
                <div>
                    <img src="../../../public/images/guarantees/huawei.png">
                </div>
                <div>
                    <img src="../../../public/images/guarantees/sanDisk.png">
                </div>
                <div>
                    <img src="../../../public/images/guarantees/gigabyte.png">
                </div>
                <div>
                    <img src="../../../public/images/guarantees/русбитех.png">
                </div>
            </div>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "guarantee"
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
</style>