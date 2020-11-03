<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
    <myfooter></myfooter>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
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
    HelloWorld
  }
}
</script>

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
  .card-header,h5{
    font-family: "Open Sans",Arial,sans-serif;
    font-size: 1.15rem !important;
    font-weight: 700 !important;
  }

  .card-body,.text,li,h6{
    font-family: "Open Sans",Arial,sans-serif;
    color: #161640 !important;
    font-size: 1.15rem !important;
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
      color: #161640 !important;
      font-size: 1rem !important;
      line-height: 1.5rem;
      cursor: default;
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
    .card-body,.text,li,.text_news,.year_news{
      font-size: 0.85rem !important;
      line-height: 1rem;
    }
  }
  @media screen and (min-width: 500px)and (max-width: 768px) {
    h2{
      padding: 0.5% 0 0.5% 0;
      font-size: 1.5rem !important;
    }
    h5{
      font-size: 0.9rem !important;
    }
    h6{
      font-size: 0.7rem !important;
    }
    h3{
      font-size: 1.05rem !important;
    }
    h4{
      font-size: 1rem !important;
    }
    .card-body,.text,li,.text_news,.year_news{
      font-size: 0.8rem !important;
      line-height: 1rem;
    }
  }
  @media screen and (min-width: 768px)and (max-width: 992px) {
    h5{
      font-size: 0.9rem !important;
    }
    h4{
      font-size: 1rem !important;
    }
    h6{
      font-size: 0.8rem !important;
      line-height: 1rem;
    }
    .card-body,.text,li,.text_news,.year_news{
      font-size: 0.9rem !important;
      line-height: 1.1rem;
    }
  }
  @media screen and (min-width: 992px)and (max-width: 1200px) {
    h6{
      font-size: 0.9rem !important;
    }
    h5{
      font-size: 1.1rem !important;
    }
    h4{
      font-size: 1.2rem !important;
    }
    .card-body,.text,li,h6,.text_news,.year_news{
      font-size: 0.9rem !important;
      line-height: 1.4rem;
    }
  }
</style>
