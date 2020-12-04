<template>
    <div id="address">
        <div><component :is="landSVG"/>{{address.address}}</div>
        <div><component :is="metroSVG"/>{{address.metro}}</div>
        <div><component :is="opening_hoursSVG"/>{{address.working_hours}}</div>
        <div>
            <component :is="telephoneSVG"/><a :href="'tel:'+address.phone">{{address.phone}}</a>,<br>
            <component :is="faxSVG"/><a :href="'tel:'+address.fax">{{address.fax}}(факс)</a>,<br>
            <component :is="receptionSVG"/><a :href="'tel:'+address.reception">{{address.reception}}(приемная секретаря)</a>
        </div>
        <div>
            <a :href="'mailto:'+mail"><component :is="mailSVG"/>{{address.mail}}</a>
        </div>
    </div>
</template>

<script>
    import LandSVG from './address_svg/land_svg';
    import MetroSVG from './address_svg/metro_svg';
    import OpeningHoursSVG from './address_svg/opening_hours_svg';
    import TelephoneSVG from './address_svg/telephone_svg';
    import FaxSVG from './address_svg/fax_svg';
    import ReceptionSVG from './address_svg/reception_svg';
    import MailSVG from './address_svg/mail_svg';
    import address from './../../public/documents/address.json';
    export default {
        components: {LandSVG,MetroSVG,OpeningHoursSVG,TelephoneSVG,FaxSVG,ReceptionSVG,MailSVG},
        name: "company_address",
        data(){
            return{
                landSVG:LandSVG,
                metroSVG:MetroSVG,
                opening_hoursSVG:OpeningHoursSVG,
                telephoneSVG:TelephoneSVG,
                faxSVG:FaxSVG,
                receptionSVG:ReceptionSVG,
                mailSVG:MailSVG,
                address:address,
            }
        }
    }
</script>

<style scoped lang="scss">
    h2{
        color: #121224;
        text-align: center !important;
    }
    svg{
        width: 50px;
        height: 50px;
    }
    .text,a{
        color: #121224;
    }

    .col-5{
        border: 2px solid #121224;
        padding: 1.5%;
        border-radius: 15px;
    }

    @media screen and (max-width: 992px) {
        svg{
            width: 40px;
            height: 40px;
        }
    }

</style>