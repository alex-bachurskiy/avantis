<template>
    <div class="main__banner">
        <Header/>
        <div class="container">
            <div class="main__banner__container">
                <div class="main__banneer__info__container">
                <h1 class="main__banner_title">
                    Avantis  <span class="title__span"> Trust </span>
                </h1>
                <p class="main__banner__paragraph">
                    Уникальный инвестиционный проект, объединяющий капитал частных инвесторов, 
                    знания и опыт лучшей команды аналитиков в сфере криптовалют                    
                </p>
                <div class="banner__button__container">
                    <div class="google-play__app-store">
                        <div class="app-store banner__button">
                            <img class="logo" src="@/assets/pictures/apple_inc.-logo.png" alt="app-store">
                            <div class="download__container">
                                <p class="download">
                                    Загрузите в
                                </p>
                                <p class="download">
                                    App Store
                                </p>
                            </div>
                        </div>
                        <div class="google-play banner__button">
                            <img class="logo" src="@/assets/pictures/google_play-icon.png" alt="google-play">
                            <div class="download__container">
                                <p class="download">
                                    Загрузите в
                                </p>
                                <p class="download">
                                    Google Play
                                </p>
                            </div>
                        </div>
                        <p class="qr__text">
                            *Наведите камеру и отсканируйте QR код чтобы скачать приложение 
                        </p>
                    </div>
                    <img class="qr-code" src="@/assets/pictures/qr-code.png" alt="qr-code">
                </div>
                <div class="banner__information__container">
                    <div class="information__in__numbers__container">
                        <div class="first__numbers">
                            <div class="banner__gradient__frame">
                                <div class="information__in__numbers">
                                    <p class="numbers">
                                        <span class="dollar">
                                            $
                                        </span>
                                        100
                                    </p>
                                    <p class="information">
                                        инвестиции от 
                                    </p>
                                </div>
                            </div>
                            <div class="banner__gradient__frame">
                                <div class="information__in__numbers">
                                    <p class="information">
                                        Автоматизированная работа
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="second__numbers">
                            <div class="banner__gradient__frame">
                                <div class="information__in__numbers">
                                    <p class="information">
                                        Удобный функционал бота
                                    </p>
                                </div>
                            </div>
                            <div class="banner__gradient__frame">
                                <div class="information__in__numbers">
                                    <p class="numbers">
                                        12
                                    </p>
                                    <p class="information">
                                        инвестиционных планов 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="banner__gradient__frame">
                        <div class="information__in__numbers">
                            <p class="numbers">
                                0,3-1,8 <span class="percent">%</span>                       
                            </p>
                            <p class="information">
                                доходность в день 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="litecoin__container">
                <img class="litecoin" src="@/assets/pictures/litecoin.png" alt="litecoin">
            </div>
            <div class="monero__container">
                <img class="monero" src="@/assets/pictures/monero.png" alt="monero">
            </div>
            <div class="bitcoin__container">
                <img class="bitcoin" src="@/assets/pictures/bitcoin.png" alt="bitcoin">
            </div>
            <div class="main__banner__composition__container">
                <img class="composition" src="@/assets/pictures/main__composition.png" alt="composition">
                <div class="blur"></div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>

import Header from "./Header-ru.vue";

export default {
    name: "main__banner",
    components: {
        Header,
    }
}
</script>

<style lang="scss" scoped>
.main__banner {
    background: url(../assets/pictures/vector.png), url(../assets/pictures/safe.png);
    background-repeat: no-repeat;
    background-size: auto;
    background-position-x: right;
    max-width: 1440px;
    margin: 0 auto;

    @media screen and (min-width:1024px) and (max-width: 1310px) { 
        background-position: 125px 59px, 633px top;
        background-size: 100%, 55%;
    }

    @media screen and (min-width:768px) and (max-width: 1023px) { 
        background: url(../assets/pictures/vector__small.png), url(../assets/pictures/safe__small.png);
        background-position: -120px 197px, 414px 65px;
        background-repeat: no-repeat;
        background-size: 139%, 55%;
    }

    @media screen and (min-width:320px) and (max-width: 767px) { 
        background: url(../assets/pictures/vector__small.png), url(../assets/pictures/safe__small.png);
        background-position: 10px 534px, 30px 264px;
        background-repeat: no-repeat;
        background-size: 101%, 117%;
    }

    &__container {
        display: flex;
        max-width: 1440px;
        margin: 0 auto;
        justify-content: space-between;
        position: relative;
        padding-bottom: 90px;

        @media screen and (min-width:768px) and (max-width: 1023px) { 
            flex-direction: column;
            padding-bottom: 290px;
        }

        @media screen and (min-width:320px) and (max-width: 767px) { 
            padding-bottom: 50px;
            justify-content: center;
        }

        .main__banneer__info__container {
            max-width: 525px;
            margin-top: 50px;
            
            @media screen and (min-width:768px) and (max-width: 1023px) { 
                max-width: 310px;
            }

            .main__banner_title {
                font-weight: 600;
                font-size: 90px;
                line-height: 137px;
                color: #FFFFFF;

                @media screen and (min-width:1024px) and (max-width: 1310px) { 
                    font-size: 50px;
                    line-height: 76px;
                }

                @media screen and (min-width:768px) and (max-width: 1023px) {
                    font-size: 50px;
                    line-height: 76px;
                }

                @media screen and (min-width:320px) and (max-width: 767px) { 
                    font-size: 40px;
                    line-height: 61px;
                }
                
                .title__span {
                    color: transparent;
                    -webkit-text-stroke: 2px #fff;
                }

            }

            .main__banner__paragraph {

                @media screen and (min-width:1024px) and (max-width: 1310px) { 
                    font-size: 14px;
                    line-height: 21px;
                    max-width: 410px;
                }

                @media screen and (min-width:768px) and (max-width: 1023px) {
                    font-size: 14px;
                    line-height: 21px;
                    width: 330px;
                }

                @media screen and (min-width:320px) and (max-width: 767px) { 
                    font-size: 14px;
                    line-height: 21px;
                    max-width: 310px;
                }
            }     

            .banner__button__container {
                margin-top: 33px;
                display: flex;
                width: 366px;

                @media screen and (min-width:320px) and (max-width: 767px) { 
                    margin-right: 0;
                    margin-bottom: 6px;
                    margin-top: 480px;
                    justify-content: space-between;
                    max-width: 300px;
                }

                @media screen and (min-width:350px) and (max-width: 374px) {
                    max-width: 325px;
                }

                @media screen and (min-width:375px) and (max-width: 399px) {
                    max-width: 345px;
                }

                @media screen and (min-width:400px) and (max-width: 767px) { 
                    max-width: 385px;
                }

                .google-play__app-store {

                    .banner__button {
                        display: flex;
                        border: 1px solid #FFFFFF;
                        border-radius: 6px;
                        margin-bottom: 30px;
                        align-items: center;
                        cursor: pointer;
                        width: 195px;
                        transition: all .5s ease-in-out;
                        box-shadow: 0px 0px 0px #B6B6DD;
                        padding-right: 15px;
                        padding-left: 15px;
                        margin-right: 20px;

                        @media screen and (min-width:768px) and (max-width: 1023px) {
                            width: 180px;
                        }

                        @media screen and (min-width:320px) and (max-width: 767px) { 
                            width: 145px;
                            padding-right: 3px;
                            padding-left: 9px;
                            margin-right: 15px;
                        }

                        &:hover {
                            box-shadow: 3px 3px 3px #B6B6DD;
                        }

                        &:last-of-type {
                            margin-bottom: 0;
                        }

                        .download__container {
                            color: #fff;
                            margin-left: 5px;
                            padding-top: 4px;
                            padding-bottom: 3px;

                            .download {
                                font-size: 11px;
                                line-height: 17px;

                                &:last-of-type {
                                    font-weight: 600;
                                    font-size: 20px;
                                    line-height: 30px;
                                }
                            }
                        }

                        .logo {
                            height: 26px;
                            margin-right: 17px;
                            
                            @media screen and (min-width:320px) and (max-width: 767px) { 
                                height: 22px;
                                margin-right: 6px;
                            }
                        }
                    }

                    .qr__text {
                        font-size: 14px;
                        line-height: 96.1%;
                        color: #8A8AA4;
                        margin-top: 20px;
                        width: 174px;

                        @media screen and (min-width:320px) and (max-width: 767px) { 
                            font-size: 12px;
                            width: 160px;
                        }
                    }
                }

                .qr-code {
                    border-radius: 6px;
                    
                    @media screen and (min-width:768px) and (max-width: 1023px) { 
                        height: 174px;
                    }

                    @media screen and (min-width:320px) and (max-width: 767px) { 
                        height: 174px;
                    }
                }
            }

            .banner__information__container {
                width: 490px;
                display: flex;
                margin-top: 51px;

                @media screen and (min-width:768px) and (max-width: 1023px) { 
                    position: absolute;
                    margin-top: 82px;
                    left: 18%;
                }

                @media screen and (min-width:320px) and (max-width: 767px) { 
                    width: 300px;
                    flex-direction: column;
                }

                .banner__gradient__frame {
                    height: 114px;
                    width: 150px;
                    border-radius: 10px;
                    background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(255,255,255,0.42) 400%);   
                    box-shadow: 0px 4px 49px rgba(0, 0, 0, 0.15);

                    @media screen and (min-width:320px) and (max-width: 767px) { 
                        width: 147px;
                    }

                    &:nth-of-type(2) {
                        @media screen and (min-width:320px) and (max-width: 767px) { 
                            height: 76px;
                        }
                    }

                    .information__in__numbers {
                        background: radial-gradient(119.49% 119.49% at 2.96% 5.05%, rgba(101, 101, 121, 0.5) 0%, rgba(40, 40, 57, 0.5) 100%);                        border-radius: 10px;
                        height: 112px;
                        padding-top: 13px;
                        text-align: center;
                        width: 148px;
                        position: relative;

                        @media screen and (min-width:320px) and (max-width: 767px) { 
                            width: 145px;
                            height: 74px;
                            padding-top: 7px;
                        }

                        .numbers {
                            font-size: 40px;
                            line-height: 61px;
                            color: #fff;
                            display: flex;
                            align-items: baseline;
                            justify-content: center;

                            @media screen and (min-width:320px) and (max-width: 767px) { 
                                font-size: 30px;
                                line-height: 39px;
                            }   

                            .percent {
                                font-size: 30px;
                            }
                        }

                        .information {
                            font-size: 12px;
                            line-height: 96.1%;
                            color: #A5A5C2;
                        }
                    }                   
                }

                .information__in__numbers__container {
                    display: flex;
                    margin-right: 6px;

                    @media screen and (min-width:320px) and (max-width: 767px) { 
                        margin-right: 0;
                        margin-bottom: 6px;
                    }

                    .first__numbers {
                        margin-right: 6px;

                        .banner__gradient__frame {

                            &:nth-of-type(1) {

                                .information__in__numbers {

                                    @media screen and (min-width:320px) and (max-width: 767px) { 
                                        height: 112px;
                                        padding-top: 13px;
                                    }

                                    .numbers {
                                        font-size: 60px;

                                        @media screen and (min-width:320px) and (max-width: 767px) { 
                                            line-height: 61px;
                                        }   

                                        .dollar {
                                            font-size: 30px;
                                        }
                                    }
                                }
                            }
                            &:nth-of-type(2) {
                                height: 41px;
                                margin-top: 6px;
                                .information__in__numbers {
                                    height: 39px;
                                    padding-top: 8px;
                                }
                            }
                        }
                    }

                    .second__numbers {

                        .banner__gradient__frame {
                            &:nth-of-type(1) {
                                height: 41px;
                                margin-bottom: 6px;

                                .information__in__numbers {
                                    height: 39px;
                                    padding-top: 8px;

                                    .information {
                                        padding: 0 13px;
                                    }
                                }
                            }

                            &:nth-of-type(2) {

                                @media screen and (min-width:320px) and (max-width: 767px) { 
                                    height: 114px;
                                }

                                .information__in__numbers {

                                    @media screen and (min-width:320px) and (max-width: 767px) { 
                                        height: 112px;
                                        padding-top: 13px;
                                    }   
                                    
                                    .numbers {
                                        font-size: 60px;

                                        @media screen and (min-width:320px) and (max-width: 767px) { 
                                            line-height: 61px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        .monero__container {
            position: absolute;
            right: 50%;
            top: 40%;

            @media screen and (min-width:1024px) and (max-width: 1310px) { 
                left: 44%;
                top: 45%;
            }

            @media screen and (min-width:768px) and (max-width: 1023px) { 
                top: 45%;
                right: 45%;
            }

            @media screen and (min-width:320px) and (max-width: 767px) { 
                right: 87%;
            }

            .monero {
                @media screen and (min-width:1024px) and (max-width: 1310px) { 
                    width: 90px;
                }

                @media screen and (min-width:768px) and (max-width: 1023px) { 
                    width: 35px;
                }

                @media screen and (min-width:320px) and (max-width: 767px) { 
                    width: 35px;
                }
            }
        }

        .bitcoin__container {
            position: absolute;
            left: 97%;
            top: 75%;

            @media screen and (min-width:1024px) and (max-width: 1310px) { 
                display: none;
            }

            @media screen and (min-width:768px) and (max-width: 1023px) { 
                display: none;
            }

            @media screen and (min-width:320px) and (max-width: 767px) { 
                display: none;
            }

            .bitcoin {
                width: 148px;
            }
        }

        .litecoin__container {
            position: absolute;
            right: 9%;
            top: 8%;

            @media screen and (min-width:1024px) and (max-width: 1310px) { 
                left: 88%;
                top: 10.5%;
            }

            @media screen and (min-width:768px) and (max-width: 1023px) { 
                right: 2%;
                top: 5%;
            }

            @media screen and (min-width:320px) and (max-width: 767px) { 
                top: 21%;
            }

            .litecoin {

                @media screen and (min-width:1024px) and (max-width: 1310px) { 
                    width: 132px;
                }

                @media screen and (min-width:768px) and (max-width: 1023px) { 
                    width: 82px;
                }

                @media screen and (min-width:320px) and (max-width: 767px) { 
                    width: 82px;
                }
            }
        }
            
        .main__banner__composition__container {
            z-index: 777;
            margin-top: 60px;

            @media screen and (min-width:768px) and (max-width: 1023px) { 
                position: absolute;
                width: 350px;
                margin-top: 0;
                left: 47%;
                top: 0%;
            }

            @media screen and (min-width:320px) and (max-width: 767px) { 
                position: absolute;
                top: 14%;
            }

            .blur {
                width: 818px;
                height: 100px;
                background: #7000FF;
                filter: blur(300px);
                transform: rotate(-10deg);
                position: absolute;
                right: -122px;
                top: 98%;

                @media screen and (min-width:1024px) and (max-width: 1310px) { 
                    width: 575px;
                    height: 99px;
                    right: -28px;
                    top: 98%;
                }

                @media screen and (min-width:768px) and (max-width: 1023px) { 
                    width: 475.75px;
                    height: 75.03px;
                    filter: blur(250px);
                    transform: rotate(-10.61deg);
                    right: 16px;
                    top: 87%;
                }

                @media screen and (min-width:320px) and (max-width: 767px) { 
                    width: 82px;
                    height: 323px;
                    filter: blur(360px);
                    transform: rotate(90deg);
                    top: 123px;
                    left: 30%;
                }
            }

            .composition {
                width: 100%;

                @media screen and (min-width:1024px) and (max-width: 1310px) { 
                    width: 103%;
                }

                @media screen and (min-width:768px) and (max-width: 1023px) { 
                    width: 115%;
                }
            }
        }
        
    }
}
</style>