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

</style>
