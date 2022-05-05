<template>
    <Slide :closeOnNavigation="true" disableOutsideClick>
        <router-link class="language" to="/en">
            en
        </router-link>
        <a class="menu-item" href="#about" v-scroll-to="'#about'">О нас </a>
        <a class="menu-item" href="#benefits" v-scroll-to="'#benefits'">Преимущества</a>
        <a class="menu-item" href="#investments" v-scroll-to="'#investments'">Тарифы и калькулятор</a>
        <a class="menu-item" href="#convenience" v-scroll-to="'#convenience'">Функционал</a>
        <a class="menu-item" href="#referral__program__container" v-scroll-to="'#referral__program__container'">Реферальная программа </a> 
    </Slide>
</template>

<script>
import { Slide } from 'vue-burger-menu';
 
export default {
  components: {
    Slide
  }
}
</script>

<style lang="scss">
.bm-menu {
    background-color: rgba(0, 0, 0, .6);
    z-index: 77777;
    height: 100%;
    padding-top: 0;

    .bm-item-list {
        padding: 31px 34px 34px 34px;
        margin: 0;
        background-color: #322751;
        background-image: url(../assets/pictures/burger_banner.png);
        background-repeat: no-repeat;
        background-blend-mode: lighten;
        background-size: 112%;
        background-position: right;
        background-position-y: -28px;
        height: 247px;

        @media screen and (min-width:320px) and (max-width: 767px) { 
            background-image: url(../assets/pictures/burger_banner__small.png);
            background-repeat: no-repeat;
            background-size: 281%;
        }

        .menu-item {
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #B6B6DD;
            padding-bottom: 3px;

            &:last-of-type {
                padding-bottom: 0;
            }
        }

        >* {
            display: block;
            padding: 0;
            text-decoration: none;
        }

        .language {
            padding-bottom: 28px;
            font-weight: 400;
            font-size: 14px;
            line-height: 21px;
            color: #D46BFE;
        }
    }

    .bm-cross-button {
        width: 52px;
        height: 52px;
        background: url(../assets/pictures/burger__menu__clouse.png);
        right: 2%;
        top: 2.5%;

        .bm-cross {
            display: none;
        }
    }
}

.bm-burger-button {
    display: none;
    justify-content: center;
    flex-direction: column;
    border-radius: 5px;
    width: 52px;
    height: 52px;
    padding-right: 13px;
    padding-left: 13px;
    background: url(../assets/pictures/burger__menu.png);

    @media screen and (min-width: 768px) and (max-width: 1023px) { 
        display: flex;
    }

    @media screen and (min-width: 320px) and (max-width: 760px) { 
        display: flex;
    }

    .bm-burger-bars {
        background: rgba(255, 255, 255, 1);
    }

    .line-style {
        display: none;
    }
}
</style>