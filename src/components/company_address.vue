<template>
    <div id="address">
        <div><component :is="landSVG"/>{{company_address}}</div>
        <div><component :is="metroSVG"/>{{metro}}</div>
        <div><component :is="opening_hoursSVG"/>{{opening_hours}}</div>
        <div>
            <component :is="telephoneSVG"/><a :href="'tel:'+telephone">{{telephone}}</a>,<br>
            <component :is="faxSVG"/><a :href="'tel:'+fax">{{fax}}(факс)</a>,<br>
            <component :is="receptionSVG"/><a :href="'tel:'+reception">{{reception}}(приемная секретаря)</a>
        </div>
        <div>
            <a :href="'mailto:'+mail"><component :is="mailSVG"/>{{mail}}</a>
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
    import company_address from './../../public/documents/address/company_address.json';
    import metro from './../../public/documents/address/metro.json';
    import opening_hours from './../../public/documents/address/opening_hours.json';
    import telephone from './../../public/documents/address/telephone.json';
    import fax from './../../public/documents/address/fax.json';
    import reception from './../../public/documents/address/reception.json';
    import mail from './../../public/documents/address/mail.json';
    export default {
        components: {LandSVG,MetroSVG,OpeningHoursSVG,TelephoneSVG,FaxSVG,ReceptionSVG,MailSVG},
        name: "address",
        data(){
            return{
                landSVG:LandSVG,
                metroSVG:MetroSVG,
                opening_hoursSVG:OpeningHoursSVG,
                telephoneSVG:TelephoneSVG,
                faxSVG:FaxSVG,
                receptionSVG:ReceptionSVG,
                mailSVG:MailSVG,
                company_address:company_address,
                metro:metro,
                opening_hours:opening_hours,
                telephone:telephone,
                fax:fax,
                reception:reception,
                mail:mail,
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