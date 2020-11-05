<template>
    <div id="smk">
        <b-container>
            <b-row class="row_smk">
                <h2>Система менеджмента качества организации</h2>
                <b-col cols="7">
                    <p class="text">
                        Система менеджмента качества организации разработана, задокументирована, внедрена, поддерживается в рабочем состоянии и соответствует требованиям ГОСТ Р ИСО 9001-2015, ГОСТ РВ 0015-002-2012, ЭС РД 09-2014, ЭС РД 010-2015, что подтверждается сертификатом соответствия, выданным Органом по сертификации систем менеджмента качества Автономной некоммерческой организацией "Центр испытаний и сертификации "Промтехносерт" (СДС "Электронсерт").
                    </p>
                    <b-table  hover :items="smk"></b-table>
                    <b-row>
                        <b-col  v-for="(guest, index) in guests" :key="index">
                            <img :src="guest.src" :alt="guest.alt"/>
                            <p class="text">{{guest.name}}</p>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col>
                    <img src="../../../public/images/smk.jpg" class="certificate">
                    <a class="link">
                        Посмотреть "Сертификат Соответствия"
                    </a>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import  smk from '../../../public/documents/smk';
    export default {
        name: "smk",
        data(){
            return{
                smk:smk,
                guests:[
                    {
                        src: "./images/iso17025.png",
                        alt: "ГОСТ_Р_ИСО_9001-2015",
                        name:'ГОСТ Р ИСО 9001-2015',
                    },
                    {
                        src: "./images/vvt.png",
                        alt: "ГОСТ_РВ_0015-002-2012",
                        name:'ГОСТ РВ 0015-002-2012',
                    },
                    {
                        src: "./images/es.png",
                        alt: "СДС_Электронсерт",
                        name:'СДС "Электронсерт"',
                    },

                ]
            }
        }
    }

</script>

<style>
    .table td, .table th{
         font-weight: 600 !important;
            padding: 1% 1% 1% 15% ;
    }
    .table th, .table td {
        border: 1px solid rgba(18, 23, 37, 0.71) !important;
        background: rgba(255, 255, 255, 0.52);

    }
    tr:hover{
        background: rgb(124, 150, 169) !important;
    }
    .table thead th {
        vertical-align: middle !important;
        background: rgb(121, 147, 164) !important;
        color: white !important;
    }
</style>
<style scoped lang="scss">
    #smk{
        background: url("../../../public/фон.jpg");
        background-size: 100% 100%;
        padding: 1% 0 2.5% 0;
    }
    .col-7 .col{
        padding: 0 3% 0 3%;
        text-align: center;
    }
    .link{
        display: none;
        color: #161640 !important;
        font-weight: 600;
    }


    @media screen and (max-width: 992px) {
        .row_smk{
             flex-direction: column;
            .col-7{
                 max-width: 100% !important;
            }
        }
        .certificate{
            display: none;
        }
        .link{
            display: block;
        }
    }
    @media screen and (min-width: 992px)and (max-width: 1200px) {

    }

</style>