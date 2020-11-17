<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
    <myfooter></myfooter>
  </div>
</template>

<script>
import Navbar from "./components/navbar";
import Home from "./components/LandingPage/home";
import Advantages from "./components/LandingPage/advantages";
import LandingPage from "./components/LandingPage";
import Category from "./components/LandingPage/category";
import Stages from "./components/LandingPage/stages";
import Feedback from "./components/LandingPage/feedback";
import Mycontact from "./components/LandingPage/mycontact";
import Myfooter from "./components/myfooter";


export default {
  name: 'App',
  components: {
      Myfooter,
      Mycontact,
      Feedback,
      Stages,
      Category,
      LandingPage,
      Advantages,
      Home,
      Navbar,
  }
}
</script>
<style>
  ul{
    margin-block-start: 0 !important;
    padding-inline-start: 5px !important;
  }
  .table th, .table td {
    padding: 0.1% !important;
    border: 1px solid rgba(18, 23, 37, 0.71) !important;
    text-align: center !important;
    background: rgba(255, 255, 255, 0.72);
  }
  .table thead th {
    vertical-align: middle !important;
    max-width: 20% !important;
    background: rgb(91, 114, 131) !important;
  }
  th {
    color: white !important;
    text-shadow: 1.5px 1.5px 2px rgba(18, 23, 37, 0.71);
  }
  td{
    text-shadow: 0.25px 0.25px .5px rgba(18, 23, 37, 0.71);
  }
  .b-table-sticky-header {
    max-height: 70vh !important;
  }
  tr:hover{
    background: rgb(91, 114, 131) !important;
  }
  .tab-content {
    border: 1.5px solid #183018  !important;
    border-radius: 10px;
    padding: 0.8%;
    background: rgba(255, 255, 255, 0.53);
  }
  .nav-pills .nav-link.active {
    background-color: #3e5262 !important;
    color: white !important;
  }
  .nav-pills .nav-link {
    color: #183018 !important;
    border: 1.5px solid rgba(62, 82, 98, 0.65) !important;
    background: rgba(62, 82, 98, 0.15);
    padding: 0.2rem !important;
  }

  .b-table-sticky-header {
    max-height: 65vh !important;
  }
</style>
<style lang="scss">
  @media (min-width: 1200px){
    .container, .container-lg, .container-md, .container-sm, .container-xl {
      max-width: 1400px !important;
      max-height: 100%;
    }
  }
  #app{
    height: 100%;
    margin: 0 !important;
    padding: 0 !important;
  }
  #company,#laboratory, #vhodnoi_control,#dop_trials,#climatic_trials,#certification_trials,
  #mehanic_trials,#supply,#pcb_materials,#manufactures,#program,#selection_and_supply_it,#package_services,
  #equipment,#guarantee,#smk,#use_smk,#events_smk,#news,#contacts, #advantages,#stages,#mycontact{
    background: url("../public/images/background/background_all.jpg");
    background-size: 100% 100%;
    padding: 1% 0 2% 0;
  }
  .container-fluid{
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  .container{
    padding-right: 15px !important;
    padding-left: 15px !important;
  }
  .row {
    margin: 0 !important;
  }

  h2{
    font-family: "Open Sans",Arial,sans-serif;
    color: rgba(5, 35, 71, 0.75);
    font-size: 1.5rem !important;
    text-transform: uppercase;
    text-align: left;
    margin: 10px 0;
    padding-bottom: 0.5%;
    padding-top: 1.25%;
    font-weight: 700 !important;
  }
  h3{
    font-family: "Open Sans",Arial,sans-serif;
    font-size: 1.3rem !important;
    color: rgba(5, 35, 71, 0.85);
    text-decoration: underline;
    padding-bottom: 0.8%;
    padding-top: 0.8%;
    font-weight: 700 !important;
  }
  #vhodnoi_control h3,#dop_trials h3,#climatic_trials h3,#certification_trials h3,
  #mehanic_trials h3{
    color: #161640 !important;
  }
  .card-header,h5{
    font-family: "Open Sans",Arial,sans-serif;
    font-size: 1.15rem !important;
    color: #161640 !important;
    font-weight: 700 !important;
    padding: .25rem 0.5rem !important;
    background: rgba(42, 74, 89, 0.27) !important;
    border: 2px solid rgba(5, 35, 71, 0.49) !important;
    border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0 !important;
  }
  .card{
    background: rgba(255, 255, 255, 0.61) !important;
  }
  .card-body,.text,li,h6{
    font-family: "Open Sans",Arial,sans-serif;
    color: #161640 !important;
    font-size: 1.1rem !important;
    line-height: 1.9rem;
    font-weight: 600;
  }
  .text_news{
      line-height: 1.5rem;
      font-weight: 600 !important;
      font-family: "Open Sans",Arial,sans-serif;
      color: rgba(5, 35, 71, 0.85);
      font-size: 1rem !important;
  }
  tr,th{
      font-family: "Open Sans",Arial,sans-serif;
      font-size: 1rem !important;
      line-height: 1.5rem;
      cursor: default;
  }
  tr{
    color: #161640 !important;
  }
  h6{
      font-weight: 700 !important;
      font-size: 1rem !important;
  }
  .card-body{
    font-weight: 400 !important;
  }
  img{
    width: 100%;
  }
  .row_step {
    .col-5 {
      flex: 0 0 40% !important;
      max-width: 40% !important;
      padding-left: 5px !important;
      .carousel{
        padding: 2.5% !important;
        background: rgba(255, 255, 255, 0.26) !important;
        box-shadow: 2px 2px 5px rgba(5, 35, 71, 0.28),0 0 1.5em rgba(5, 35, 71, 0.28),0 0 0.9em rgba(5, 35, 71, 0.27) !important;
      }
    }
    .col {
      padding-left: 0 !important;
      padding-right: 15px !important;
    }
  }



  @media screen and (max-width: 500px) {
    h2{
      padding: 3% 0 0.2% 0;
      font-size: 1.2rem !important;
    }
    h5{
      font-size: 0.8rem !important;
    }
    h6{
      font-size: 0.6rem !important;
    }
    h3{
        font-size: 1rem !important;
    }
    h4{
      font-size: 0.9rem !important;
    }
    .card-body,.card-header,.table th,.table td,.text,li,.text_news,.year_news{
      font-size: 0.95rem !important;
      line-height: 1rem;
    }
    a{
       font-size: 0.9rem !important;
    }
  }
  @media screen and (min-width: 500px)and (max-width: 768px) {
    h2{
      padding: 0.5% 0 0.5% 0;
      font-size: 1.2rem !important;
    }
    h5{
      font-size: 0.85rem !important;
    }
    h6{
      font-size: 0.8rem !important;
    }
    h3{
      font-size: 0.95rem !important;
    }
    h4{
      font-size: 0.9rem !important;
    }
    .card-body,.card-header,.table th,.table td,.text,li,.text_news,.year_news{
      font-size: 0.95rem !important;
      line-height: 1rem;
    }
    a{
       font-size: 0.82rem !important;
    }
    .row_step{
      flex-direction: column-reverse;
      padding: 0 !important;
      .col-5{
        max-width: 45% !important;
        padding-bottom: 1%;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
      .col{
        padding: 0 !important;
      }
    }
  }
  @media screen and (min-width: 768px)and (max-width: 992px) {
    h5{
      font-size: 0.95rem !important;
    }
    h2{
      font-size: 1.25rem !important;
    }
    h3{
      font-size: 1.15rem !important;
    }
    h4{
      font-size: 1rem !important;
    }
    h6{
      font-size: 0.9rem !important;
      line-height: 1rem;
    }
    .card-body,.card-header,.table th,.table td,.text,li,.text_news,.year_news{
      font-size: 0.9rem !important;
      line-height: 1.1rem;
    }
    a{
      font-size: 1rem !important;
    }
    .row_step{
      flex-direction: column-reverse;
      padding: 0 !important;
      .col-5{
        max-width: 45% !important;
        padding-bottom: 1%;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
      .col{
        padding: 0 !important;
      }
    }
  }
  @media screen and (min-width: 992px)and (max-width: 1200px) {
    h6{
      font-size: 0.9rem !important;
    }
    h5{
      font-size: 0.95rem !important;
    }
    h4{
      font-size: 1rem !important;
    }
    h2{
      font-size: 1.3rem !important;
    }
    h3{
      font-size: 1.2rem !important;
    }
    .card-body,.card-header,.table th,.table td,.text,li,h6,.text_news,.year_news{
      font-size: 0.9rem !important;
      line-height: 1.4rem;
    }
      a{
          font-size: 1rem !important;
      }
  }
</style>
