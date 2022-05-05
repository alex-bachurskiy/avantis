<template>
    <div class="main__en">
        <MainBanner/>
        <About/>
        <Cryptocurrency/>
        <Benefits/>
        <Investments/>
        <Convenience/>
        <Bonus/>
        <Footer/>
    </div>
</template>

<script>

import MainBanner from "../components/Main-banner-en.vue";
import About from "../components/About-en.vue";
import Cryptocurrency from "../components/Cryptocurrency-en.vue";
import Benefits from "../components/Benefits-en.vue";
import Investments from "../components/Investments-en.vue";
import Convenience from "../components/Convenience-en.vue";
import Bonus from "../components/Bonus-en.vue";
import Footer from "../components/Footer-en.vue";

export default {
    name: "main__banner",
    components: {
        MainBanner,
        About,
        Cryptocurrency,
        Benefits,
        Investments,
        Convenience,
        Bonus,
        Footer
    }
}
</script>
