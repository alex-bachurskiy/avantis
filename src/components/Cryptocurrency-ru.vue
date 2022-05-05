<template>
    <div class="cryptocurrency">
        <div class="container">
            <div class="cryptocurrency__container">
                <div class="cryptocurrency__title__container">
                    <div class="blur"></div>
                    <h1 class="cryptocurrency__title">
                        Рынок криптовалют в 2021 году
                    </h1>
                    <p class="cryptocurrency__title__information">
                        Темпы роста криптовалют ускоряются благодаря вовлечению профессиональных инвесторов с 
                        классических рынков. Новым трендом является и то, что крупные компании и банки 
                        (например, Tesla, Square Inc, MicroStrategy Inc. и прочие) становятся держателями 
                        криптовалюты
                    </p>
                </div>
                <div class="cryptocurrency__info__container">
                    <div class="cryptocurrency__gradient__frame">
                        <div class="cryptocurrency__information__in__numbers">
                            <img class="arrow__up" src="@/assets/pictures/design_arrow.png" alt="up">
                            <div class="numbers__container">
                                <p class="numbers__paragraph">
                                    более  
                                </p>
                                <p class="numbers">
                                    <span class="symbol">$</span>100                      
                                </p>
                                <p class="numbers__paragraph">
                                    млрд  
                                </p>
                            </div>
                            <p class="information">
                                инвестировано в рынок криптовалют
                            </p>
                        </div>
                    </div>
                    <div class="cryptocurrency__gradient__frame">
                        <div class="cryptocurrency__information__in__numbers">
                            <img class="arrow__up" src="@/assets/pictures/design_arrow.png" alt="up">
                            <div class="numbers__container">
                                <p class="numbers">
                                    <span class="symbol">
                                        на
                                    </span>
                                        240 
                                    <span class="symbol">
                                        %
                                    </span>                    
                                </p>
                            </div>
                            <p class="information">
                                выросла стоимость крипто активов в 2021 году  
                            </p>
                        </div>
                    </div>
                    <div class="cryptocurrency__gradient__frame">
                        <div class="cryptocurrency__information__in__numbers">
                            <img class="arrow__up" src="@/assets/pictures/design_arrow.png" alt="up">
                        <div class="numbers__container">
                                <p class="numbers">
                                    <span class="symbol">
                                        $
                                    </span>
                                    2                      
                                </p>
                                <p class="numbers__paragraph">
                                    трлн  
                                </p>
                            </div>
                            <p class="information">
                                общая стоимость цифровых активов 
                            </p>
                        </div>
                    </div>
                    <div class="cryptocurrency__gradient__frame">
                        <div class="cryptocurrency__information__in__numbers">
                            <img class="arrow__up" src="@/assets/pictures/design_arrow.png" alt="up">
                            <div class="numbers__container">
                                <p class="numbers">
                                    <span class="symbol">в</span> 17                      
                                </p>
                                <p class="numbers__paragraph">
                                    раз  
                                </p>
                            </div>
                            <p class="information">
                                вырос рынок криптовалют в 2021 году  
                            </p>
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
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.cryptocurrency {

    .container {

        @media screen and (min-width:1024px) and (max-width: 1310px) { 
            padding-right: 0;
        }

        @media screen and (min-width:768px) and (max-width: 1023px) { 
            padding-right: 0;
        }

        @media screen and (min-width:320px) and (max-width: 767px) { 
            padding: 0;
        }
    }

    &__container {
        padding-top: 40px;
        background: url(../assets/pictures/diagram.png);
        background-repeat: no-repeat;
        background-position-y: 185px;
        background-position-x: 247px;
        background-size: auto;
        position: relative;
        max-width: 1220px;
        margin: 0 auto 112px auto;

        @media screen and (min-width:1024px) and (max-width: 1310px) { 
            background-position-y: 230px;
            background-position-x: 168px;
            background-size: 83%;
        }

        @media screen and (min-width:768px) and (max-width: 1023px) { 
            background-position-y: 125px;
            background-position-x: 101px;
            background-size: 86%;
            margin-bottom: 0;
            padding-bottom: 162px;
        }

        @media screen and (min-width:320px) and (max-width: 767px) { 
            padding: 0 10px;
            background-size: contain;
            background-position: center;
            margin-bottom: 100px;
        }

        .cryptocurrency__title__container {
            display: flex;
            margin-bottom: 36px;
            margin-left: 30px;

            @media screen and (min-width:320px) and (max-width: 767px) { 
                flex-direction: column;
                margin-bottom: 50px;
                margin-left: 20px;
            }

            .blur {
                width: 150px;
                height: 150px;
                background: #7000FF;
                filter: blur(158px);
                position: absolute;
                left: -6%;
                top: 46px;

                @media screen and (min-width:1024px) and (max-width: 1310px) { 
                   display: none;
                }

                @media screen and (min-width:768px) and (max-width: 1023px) { 
                    display: none;
                }   
            }

            @media screen and (min-width:1024px) and (max-width: 1310px) { 
                margin-right: 40px;
                margin-bottom: 40px;
            }

            @media screen and (min-width:768px) and (max-width: 1023px) { 
                margin-bottom: 24px;
            }

            .cryptocurrency__title {
                font-weight: 300;
                font-size: 70px;
                line-height: 75px;
                color: #FFFFFF;
                margin-right: 100px;
                width: 652px;

                @media screen and (min-width:1024px) and (max-width: 1310px) { 
                    font-size: 40px;
                    line-height: 50px;
                    margin-right: 80px;
                    width: 365px;
                }

                @media screen and (min-width:768px) and (max-width: 1023px) { 
                    font-size: 30px;
                    line-height: 40px;
                    margin-right: 18px;
                    width: 348px;
                }

                @media screen and (min-width:320px) and (max-width: 767px) { 
                    flex-direction: column;
                    margin-bottom: 6px;
                    margin-right: 0;
                    font-size: 30px;
                    line-height: 35px;
                    width: 272px;
                }

                &::before {
                    content: "";
                    width: 116px;
                    height: 0px;
                    border: 4px solid #D46BFE;
                    background: #D46BFE;
                    transform: rotate(90deg);
                    position: absolute;
                    left: -54px;
                    top: 115px;

                    @media screen and (min-width:1024px) and (max-width: 1310px) { 
                        width: 73px;
                        left: -30px;
                        top: 85px;
                    }

                    @media screen and (min-width:768px) and (max-width: 1023px) { 
                        width: 57px;
                        left: -22px;
                        top: 73px;
                    }

                    @media screen and (min-width:320px) and (max-width: 767px) { 
                        width: 54px;
                        left: -13px;
                        top: 30px;
                    }
                }
            }

            .cryptocurrency__title__information {
                width: 444px;
                line-height: 96.1%;
                margin-top: 20px;

                @media screen and (min-width:1024px) and (max-width: 1310px) { 
                    font-size: 14px;
                    width: 470px;
                }

                @media screen and (min-width:768px) and (max-width: 1023px) { 
                    font-size: 14px;
                    margin-top: 0;
                    padding-right: 34px;
                }

                @media screen and (min-width:320px) and (max-width: 767px) {
                    margin-top: 0; 
                    font-size: 14px;
                    width: 278px;
                }
            }
        }

        .cryptocurrency__info__container {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            width: 665px;
            position: relative;

            @media screen and (min-width:768px) and (max-width: 1023px) { 
                width: 320px;
                align-items: unset;
            }

            @media screen and (min-width:320px) and (max-width: 767px) { 
                max-width: 301px;
                justify-content: space-between;
            }

            .cryptocurrency__gradient__frame {
                width: 280px;
                height: 255px;
                border-radius: 18px;
                background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(255,255,255,0.42) 400%);
                box-shadow: 0px 4px 49px rgba(0, 0, 0, 0.3);
                position: relative;  
                margin-right: 24px;
                margin-bottom: 24px;

                @media screen and (min-width:768px) and (max-width: 1023px) { 
                    width: 147px;
                    height: 163px;
                    border-radius: 12px;
                    margin-bottom: 6px;
                    margin-right: 7px;
                }

                @media screen and (min-width:320px) and (max-width: 767px) { 
                    width: 147px;
                    height: 173px;
                    margin-right: 7px;
                    margin-bottom: 6px;
                    border-radius: 12px;
                }

                &:nth-of-type(1) {
                    .cryptocurrency__information__in__numbers {

                        padding-right: 23px;

                        @media screen and (min-width:768px) and (max-width: 1023px) { 
                            padding-right: 7px;
                        }

                        @media screen and (min-width:320px) and (max-width: 767px) { 
                            padding-right: 7px;
                        }

                        .arrow__up {
                            margin-bottom: 19px;

                            @media screen and (min-width:768px) and (max-width: 1023px) { 
                                margin-bottom: 9px;
                                height: 20px;
                            }

                            @media screen and (min-width:320px) and (max-width: 767px) { 
                                margin-bottom: 8px;
                            }
                        }

                        .numbers__container {
                            flex-direction: column;
                            height: 125px;
                            align-items: center;

                            @media screen and (min-width:768px) and (max-width: 1023px) { 
                                height: 74px;
                                position: relative;
                                margin-bottom: 6px;
                            }

                            @media screen and (min-width:320px) and (max-width: 767px) { 
                                height: 74px;
                                position: relative;
                            }

                            .numbers__paragraph {
                                line-height: 0;

                                @media screen and (min-width:768px) and (max-width: 1023px) { 
                                    position: absolute;
                                    top: 56px;
                                }

                                @media screen and (min-width:320px) and (max-width: 767px) { 
                                    position: absolute;
                                    top: 52px;
                                    left: 48px;
                                }

                                &:first-of-type {

                                    @media screen and (min-width:768px) and (max-width: 1023px) { 
                                        display: none;
                                    }

                                    @media screen and (min-width:320px) and (max-width: 767px) { 
                                        display: none;
                                    }
                                }
                            }

                            .numbers {
                                line-height: 88px;

                                @media screen and (min-width:768px) and (max-width: 1023px) { 
                                    position: absolute;
                                    bottom: 20px;
                                    line-height: 55px;
                                }

                                @media screen and (min-width:320px) and (max-width: 767px) { 
                                    position: absolute;
                                    bottom: 23px;
                                    line-height: 40px;
                                }
                            }
                        }
                    }
                }
                
                &:nth-of-type(2) {
                    top: 63px;

                    @media screen and (min-width:768px) and (max-width: 1023px) { 
                        top: 76px;
                    }

                    @media screen and (min-width:320px) and (max-width: 767px) { 
                        height: 176px;
                    }

                    .cryptocurrency__information__in__numbers {
                        padding-top: 31px;
                        padding-right: 24px;

                        @media screen and (min-width:768px) and (max-width: 1023px) { 
                            padding-top: 16px;
                        }

                        @media screen and (min-width:320px) and (max-width: 767px) { 
                            padding-top: 16px;
                            height: 174px;
                        }

                        .arrow__up {
                            margin-bottom: 28px;

                            @media screen and (min-width:768px) and (max-width: 1023px) { 
                                margin-bottom: 9px;
                                height: 26px;
                            }

                            @media screen and (min-width:320px) and (max-width: 767px) { 
                                margin-bottom: 10px;
                                height: 26px;
                            }
                        }

                        .numbers__container {
                            color: #D46BFE;

                            @media screen and (min-width:768px) and (max-width: 1023px) { 
                                margin-bottom: 8px;
                            }

                            @media screen and (min-width:320px) and (max-width: 767px) { 
                                margin-bottom: 8px;
                            }
                        }
                    }
                }

                &:nth-of-type(3) {
                    
                    .cryptocurrency__information__in__numbers {
                        padding-top: 31px;

                        @media screen and (min-width:768px) and (max-width: 1023px) { 
                            padding-top: 16px;
                        }

                        @media screen and (min-width:320px) and (max-width: 767px) { 
                            padding-top: 16px;
                        }

                        .arrow__up {
                            margin-bottom: 27px;

                            @media screen and (min-width:768px) and (max-width: 1023px) { 
                                margin-bottom: 9px;
                                height: 20px;
                            }

                            @media screen and (min-width:320px) and (max-width: 767px) { 
                                margin-bottom: 10px;
                            }
                        }

                        .numbers__container {

                            @media screen and (min-width:768px) and (max-width: 1023px) { 
                                margin-bottom: 11px;
                            }

                            .numbers {
                                margin-right: 15px;

                                @media screen and (min-width:768px) and (max-width: 1023px) { 
                                    margin-right: 10px;
                                }
                            }
                        }
                    }
                }

                &:nth-of-type(4) {
                    height: 191px;

                    @media screen and (min-width:768px) and (max-width: 1023px) { 
                        height: 173px;
                        position: absolute;
                        top: 74%;
                        left: 48%;
                    }

                    @media screen and (min-width:320px) and (max-width: 767px) { 
                        height: 176px;
                        top: 64px;
                    }

                    .cryptocurrency__information__in__numbers {
                        height: 189px;

                        @media screen and (min-width:768px) and (max-width: 1023px) { 
                            height: 171px;
                        }

                        @media screen and (min-width:320px) and (max-width: 767px) { 
                            height: 174px;
                            padding-top: 11px;
                        }

                        .arrow__up {
                            display: none;

                            @media screen and (min-width:768px) and (max-width: 1023px) { 
                                display: block;
                                height: 20px;
                            }

                            @media screen and (min-width:320px) and (max-width: 767px) { 
                                display: block;
                                margin-bottom: 9px;
                            }
                        }

                        .information {
                            @media screen and (min-width:768px) and (max-width: 1023px) { 
                                width: 127px;
                            }

                            @media screen and (min-width:320px) and (max-width: 767px) { 
                                width: 120px;
                            }
                        }

                        .numbers__container {
                            flex-direction: column;
                            align-items: center;

                            @media screen and (min-width:768px) and (max-width: 1023px) { 
                                height: 74px;
                                margin-bottom: 6px;
                            }

                            @media screen and (min-width:320px) and (max-width: 767px) { 
                                height: 74px;
                                margin-bottom: 6px;
                            }

                            .numbers {
                                display: flex;
                                justify-content: center;
                                align-items: baseline;
                                position: relative;
                                top: 5px;

                                @media screen and (min-width:768px) and (max-width: 1023px) { 
                                    top: 3px;
                                    right: 5px;
                                }

                                @media screen and (min-width:320px) and (max-width: 767px) { 
                                    right: 5px;
                                    top: 5px;
                                }
                            }

                            .numbers__paragraph {
                                position: relative;
                                bottom: 20px;
                                left: 5px;

                                @media screen and (min-width:768px) and (max-width: 1023px) { 
                                    bottom: 12px;
                                    left: 1px;
                                }

                                @media screen and (min-width:320px) and (max-width: 767px) { 
                                    bottom: 12px;
                                    left: 2px;
                                }
                            }
                        }
                    }
                }

                &:nth-of-type(2),
                &:nth-of-type(4) {
                    margin-right: 0;
                }

                &:nth-of-type(3),
                &:nth-of-type(4) {
                    margin-bottom: 0;
                }

                .cryptocurrency__information__in__numbers {
                    display: flex;
                    flex-direction: column;
                    align-items: baseline;
                    width: 278px;
                    height: 253px;
                    background: radial-gradient(119.49% 119.49% at 2.96% 5.05%, rgba(101, 101, 121, 0.8) 0%, rgba(40, 40, 57, 0.8) 100%);                    backdrop-filter: blur(21px);
                    border-radius: 18px;
                    padding-top: 21px;
                    padding-left: 20px;
                    color: #FFFFFF;

                    @media screen and (min-width:768px) and (max-width: 1023px) { 
                        width: 145px;
                        height: 161px;
                        border-radius: 12px;
                        padding-left: 7px;
                        padding-top: 16px;
                    }

                    @media screen and (min-width:320px) and (max-width: 767px) { 
                        width: 145px;
                        height: 171px;
                        border-radius: 12px;
                        padding-top: 16px;
                        padding-left: 7px;
                    }

                    .arrow__up {
                        margin-bottom: 25px;
                        height: 26px;

                        @media screen and (min-width:768px) and (max-width: 1023px) { 
                            margin-bottom: 9px;
                            height: 20px;
                        }

                        @media screen and (min-width:320px) and (max-width: 767px) { 
                            margin-bottom: 9px;
                            height: 20px;
                        }
                    }

                    .numbers__container {
                        display: flex;
                        align-items: baseline;
                        justify-content: center;
                        font-size: 68px;
                        line-height: 103px;
                        position: relative;
                        width: 240px;
                        background: #262637;
                        box-shadow: inset -2px -2px 4px rgba(255, 255, 255, 0.15), inset 2px 2px 4px rgba(0, 0, 0, 0.15);
                        border-radius: 14px;
                        height: 106px;
                        margin-bottom: 14px;

                        @media screen and (min-width:768px) and (max-width: 1023px) { 
                            width: 133px;
                            height: 64px;
                            border-radius: 10px;
                            font-size: 40px;
                            line-height: 61px;
                        }

                        @media screen and (min-width:320px) and (max-width: 767px) { 
                            width: 133px;
                            height: 64px;
                            border-radius: 10px;
                            font-size: 40px;
                            line-height: 61px;
                            margin-bottom: 6px;
                        }

                        .numbers__paragraph {
                            font-size: 24px;
                            line-height: 37px;
                            text-transform: uppercase;
                            font-weight: 300;

                            @media screen and (min-width:768px) and (max-width: 1023px) { 
                                font-size: 20px;
                                line-height: 30px;
                            }

                            @media screen and (min-width:320px) and (max-width: 767px) { 
                                font-size: 20px;
                                line-height: 30px;
                            }
                        }

                        .symbol {
                            font-size: 30px;
                            line-height: 46px;

                            @media screen and (min-width:768px) and (max-width: 1023px) { 
                                font-size: 20px;
                                line-height: 30px;
                            }

                            @media screen and (min-width:320px) and (max-width: 767px) { 
                                font-size: 20px;
                                line-height: 30px;
                            }
                        }
                    }

                    .information {
                        font-size: 14px;
                        line-height: 96.1%;
                        color: #B6B6DD;

                        @media screen and (min-width:768px) and (max-width: 1023px) { 
                            font-size: 12px;
                        }

                        @media screen and (min-width:320px) and (max-width: 767px) { 
                            font-size: 12px;
                        }
                    }
                }
            }

            .monero__container {
                position: absolute;
                top: 360px;
                left: 94%;

                @media screen and (min-width:1024px) and (max-width: 1310px) { 
                    top: 290px;
                    left: 87%;
                }

                @media screen and (min-width:768px) and (max-width: 1023px) { 
                    top: 182px;
                    left: 139%;
                } 

                @media screen and (min-width:320px) and (max-width: 767px) { 
                    left: 10%;
                }

                .monero {

                    @media screen and (min-width:1024px) and (max-width: 1310px) { 
                        width: 100px;
                    }

                    @media screen and (min-width:768px) and (max-width: 1023px) { 
                        width: 77px;
                    }   

                    @media screen and (min-width:320px) and (max-width: 767px) { 
                        width: 77px;
                    }
                }
            }

            .litecoin__container {
                position: absolute;
                bottom: 460px;
                left: 110%;
                
                @media screen and (min-width:1024px) and (max-width: 1310px) { 
                    bottom: 405px;
                    left: 109%;
                }
                
                @media screen and (min-width:768px) and (max-width: 1023px) { 
                    bottom: 261px;
                    left: 166%;
                }  

                @media screen and (min-width:320px) and (max-width: 767px) { 
                    bottom: 310px;
                    left: 75%;
                }

                .litecoin {
                    width: 70px;

                    @media screen and (min-width:1024px) and (max-width: 1310px) { 
                        width: 64px;
                    }

                    @media screen and (min-width:768px) and (max-width: 1023px) { 
                        width: 50px;
                    }

                    @media screen and (min-width:320px) and (max-width: 767px) { 
                        width: 39px;
                    }   
                }
            }

            .bitcoin__container {
                position: absolute;
                top: 211px;
                left: 158%;

                @media screen and (min-width:1024px) and (max-width: 1310px) { 
                    top: 330px;
                    left: 123%;
                }

                @media screen and (min-width:768px) and (max-width: 1023px) { 
                    top: 240px;
                    left: 190%;
                }

                @media screen and (min-width:320px) and (max-width: 767px) { 
                    display: none;
                }

                .bitcoin {
                    width: 200px;

                    @media screen and (min-width:1024px) and (max-width: 1310px) { 
                        width: 149px;
                    }

                    @media screen and (min-width:768px) and (max-width: 1023px) { 
                        width: 115px;
                    }   
                }
            }
        }
    }
}
</style>