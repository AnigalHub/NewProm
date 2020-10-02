<template>
    <div id="manufacturers">
        <b-container>
                <h2>Производители</h2>
                    <h3>ЭКБ и КИ отечественного производства</h3>
                    <p class="text">
                        ООО «Компания Промэлектронсервис» осуществляет прямые поставки ЭКБ и КИ отечественного производства. У нас заключены договора с ведущими российскими производителями, чья электронная компонентная база отвечает существующим нормативам и стандартам.
                    </p>
                    <div class="flex-container">
                        <div>
                            <img src="../../../public/images/domestic_ECB/монолит.png">
                        </div>
                        <div>
                            <img src="../../../public/images/domestic_ECB/анстрем.png">
                        </div>
                        <div>
                            <img src="../../../public/images/domestic_ECB/аедон.png">
                        </div>
                        <div>
                            <img src="../../../public/images/domestic_ECB/resurs.png">
                        </div>
                        <div>
                            <img src="../../../public/images/domestic_ECB/завод_и_атлант.png">
                        </div>
                        <div>
                            <img src="../../../public/images/domestic_ECB/исеть.png">
                        </div>
                        <div>
                            <img src="../../../public/images/domestic_ECB/северная_заря.png">
                        </div>
                        <div>
                            <img src="../../../public/images/domestic_ECB/элекон.png">
                        </div>
                        <div>
                            <img src="../../../public/images/domestic_ECB/протон.png">
                        </div>
                        <div>
                            <img src="../../../public/images/domestic_ECB/октябрь.png">
                        </div>
                        <div>
                            <img src="../../../public/images/domestic_ECB/нпп_тэз.png">
                        </div>
                        <div>
                            <img src="../../../public/images/domestic_ECB/восход.png">
                        </div>
                        <div>
                            <img src="../../../public/images/domestic_ECB/микроэлектроники.png">
                        </div>
                        <div>
                            <img src="../../../public/images/domestic_ECB/интеграл.png">
                        </div>
                        <div>
                            <img src="../../../public/images/domestic_ECB/орбита.png">
                        </div>
                        <div>
                            <img src="../../../public/images/domestic_ECB/трансформаторный_завод.png">
                        </div>
                    </div>

                    <h3>ЭКБ и КИ иностранного производства</h3>
                    <p class="text">
                        Общество с ограниченной ответственностью «Компания Промэлектронсервис» сотрудничает с передовыми иностранными производителями и осуществляет прямые поставки ЭКБ и КИ иностранного производства по всей России.
                    </p>
                    <div class="flex-container">
                        <div>
                            <img src="../../../public/images/foreign_ECB/muRata.png">
                        </div>
                        <div>
                            <img src="../../../public/images/foreign_ECB/intel.png">
                        </div>
                        <div>
                            <img src="../../../public/images/foreign_ECB/amphenol.png">
                        </div>
                        <div>
                            <img src="../../../public/images/foreign_ECB/analog_devices.png">
                        </div>
                        <div>
                            <img src="../../../public/images/foreign_ECB/avx.png">
                        </div>
                        <div>
                            <img src="../../../public/images/foreign_ECB/axon.png">
                        </div>
                        <div>
                            <img src="../../../public/images/foreign_ECB/harting.png">
                        </div>
                        <div>
                            <img src="../../../public/images/foreign_ECB/qorvo.png">
                        </div>
                        <div>
                            <img src="../../../public/images/foreign_ECB/nxp.png">
                        </div>
                        <div>
                            <img src="../../../public/images/foreign_ECB/cypress.png">
                        </div>
                        <div>
                            <img src="../../../public/images/foreign_ECB/glenair.png">
                        </div>
                        <div>
                            <img src="../../../public/images/foreign_ECB/harwin.png">
                        </div>
                        <div>
                            <img src="../../../public/images/foreign_ECB/infineon.png">
                        </div>
                        <div>
                            <img src="../../../public/images/foreign_ECB/samtec.png">
                        </div>
                        <div>
                            <img src="../../../public/images/foreign_ECB/microchip.png">
                        </div>
                        <div>
                            <img src="../../../public/images/foreign_ECB/on_semiconductor.png">
                        </div>
                        <div>
                            <img src="../../../public/images/foreign_ECB/kemet.png">
                        </div>
                        <div>
                            <img src="../../../public/images/foreign_ECB/maxim_integrated.png">
                        </div>
                        <div>
                            <img src="../../../public/images/foreign_ECB/seme_lab.png">
                        </div>
                        <div>
                            <img src="../../../public/images/foreign_ECB/st.png">
                        </div>
                        <div>
                            <img src="../../../public/images/foreign_ECB/teledyne.png">
                        </div>
                        <div>
                            <img src="../../../public/images/foreign_ECB/souriau.png">
                        </div>
                        <div>
                            <img src="../../../public/images/foreign_ECB/micron.png">
                        </div>
                        <div>
                            <img src="../../../public/images/foreign_ECB/vicor.png">
                        </div>
                    </div>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "manufacturers"
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
</style>