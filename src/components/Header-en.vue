<template>
    <div class="header">
        <div class="container">
            <div class="header__container">
                <div class="header__logo__container">
                    <img class="logo" src="@/assets/pictures/logo.png" alt="Avantis-logo">
                    <div class="blur"></div>
                </div>
                <Burger/>
                <div class="menu__container">
                    <a class="menu-item" href="#about" v-scroll-to="'#about'">About</a>
                    <a class="menu-item" href="#benefits" v-scroll-to="'#benefits'">Privileges</a>
                    <a class="menu-item" href="#investments" v-scroll-to="'#investments'">Rates and calculator</a>
                    <a class="menu-item" href="#convenience" v-scroll-to="'#convenience'">Functional</a>
                    <a class="menu-item" href="#referral__program__container" v-scroll-to="'#referral__program__container'">Referral program</a> 
                </div>
                <div class="language__container">
                    <router-link class="language" to="/">ru</router-link>
                </div>
                <div class="header__button__container">
                    <div class="google-play header__button">
                        <img class="logo" src="@/assets/pictures/google-play.png" alt="google-play">
                    </div>
                    <div class="app-store header__button">
                        <img class="logo" src="@/assets/pictures/apple.png" alt="app-store">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Burger from "./Burger-en.vue";
export default {
    name: "header",
    components: {
        Burger,
    }
}
</script>

<style lang="scss">
.header {

    &__container {
        align-items: center;
        display: flex;
        max-width: 1440px;
        margin: 0 auto;
        padding-top: 20px;
        justify-content: space-between;

        .header__logo__container {
            margin-right: 80px;
            position: relative;

            @media screen and (min-width:1024px) and (max-width: 1310px) { 
                margin-right: 35px;
            }

            .logo {
                z-index: 777;
            }
            
            .blur {
                width: 130px;
                height: 601px;
                background: #7000FF;
                filter: blur(158px);
                transform: rotate(90deg);
                position: absolute;
                left: 175%;
                top: -275px;

                @media screen and (min-width:320px) and (max-width: 767px) { 
                    width: 75px;
                    height: 280px;
                    filter: blur(360px);
                    transform: rotate(90deg);
                    top: -118px;
                    left: 100%;
                }
            }
        }

        .menu__container {
            z-index: 777;
            margin-right: 47px;

            @media screen and (min-width:1024px) and (max-width: 1310px) { 
                margin-right: 35px;
            }

            @media screen and (min-width:768px) and (max-width: 1023px) { 
                display: none;
            }

            @media screen and (min-width:320px) and (max-width: 767px) { 
                display: none;
            }

            .menu-item {
                color: #B6B6DD;
                margin-right: 55px;
                font-size: 14px;
                transition: all .5s ease-in-out;
                -webkit-text-stroke: 0;

                @media screen and (min-width:1024px) and (max-width: 1310px) { 
                    margin-right: 30px;
                }

                &:hover {
                    color: #D46BFE;
                }

                &:last-of-type {
                    margin-right: 0;
                }
            }
        }

        .language__container {

            @media screen and (min-width:768px) and (max-width: 1023px) { 
                display: none;
            }

            @media screen and (min-width:320px) and (max-width: 767px) { 
                display: none;
            }

            .language {
                font-size: 14px;
                line-height: 21px;
                color: #D46BFE;
                text-transform: uppercase;
                transition: all .5s ease-in-out;

                &:hover {
                    color: #dc85ff;
                    font-weight: 600;
                }
            }
        }

        .header__button__container {
            display: flex;
            margin-left: 48px;
            
            @media screen and (min-width:1024px) and (max-width: 1310px) { 
                margin-left: 20px;
            }

            @media screen and (min-width:768px) and (max-width: 1023px) { 
                display: none;
            }

            @media screen and (min-width:320px) and (max-width: 767px) { 
                display: none;
            }

            .header__button {
                margin-right: 20px;

                &:last-of-type {
                    margin-right: 0;
                }
            }   
        }
    }
}
</style>