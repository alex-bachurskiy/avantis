<template>
    <div class="main__ru">
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

import MainBanner from "../components/Main-banner-ru.vue";
import About from "../components/About-ru.vue";
import Cryptocurrency from "../components/Cryptocurrency-ru.vue";
import Benefits from "../components/Benefits-ru.vue";
import Investments from "../components/Investments-ru.vue";
import Convenience from "../components/Convenience-ru.vue";
import Bonus from "../components/Bonus-ru.vue";
import Footer from "../components/Footer-ru.vue";

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
