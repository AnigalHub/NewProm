<template>
    <div>
        <home></home>
        <advantages></advantages>
        <category></category>
        <stages></stages>
        <feedback></feedback>
        <mycontact></mycontact>
    </div>
</template>

<script>
    import Home from "./LandingPage/home";
    import Advantages from "./LandingPage/advantages";
    import LandingPage from "./LandingPage";
    import Category from "./LandingPage/category";
    import Stages from "./LandingPage/stages";
    import Feedback from "./LandingPage/feedback";
    import Mycontact from "./LandingPage/mycontact";
    export default {
        name: "LandingPage",
        components: {
            Mycontact,
            Feedback,
            Stages,
            Category,
            LandingPage,
            Advantages,
            Home,
        }
    }
</script>

<style lang="scss">

</style>