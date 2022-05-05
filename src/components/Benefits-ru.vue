<template>
    <div id="benefits">
        <div class="container">
            <div class="benefits__container">
                <div class="benefits__items__container">
                    <div class="benefits__items__info__container">
                        <div class="benefits__items__info">
                            <div class="benefits__icon__gradient__frame">
                                <div class="benefits__icon">
                                    <img class="bitcoin" src="@/assets/pictures/bitcoin__icon.png" alt="bitcoin">
                                </div>
                            </div>
                            <div class="benefits__items__info__flex">
                                <h6 class="benefits__items__info__title">
                                    Лучшие трейдеры и аналитики
                                </h6>
                                <p class="benefits__items__info__paragraph">
                                    Avantis проводит тщательный отбор всех сотрудников, 
                                    HR совместно с нашим отделом 
                                    андеррайтинга исследуют каждого кандидата 
                                    по более 100 параметрам.
                                </p>
                            </div>
                        </div>
                        <div class="benefits__items__info">
                            <div class="benefits__icon__gradient__frame">
                                <div class="benefits__icon">
                                    <img class="protection" src="@/assets/pictures/protection.png" alt="protection">
                                </div>
                            </div>
                            <div class="benefits__items__info__flex">
                                <h6 class="benefits__items__info__title">
                                    Прозрачность 
                                </h6>
                                <p class="benefits__items__info__paragraph">
                                    Мы предоставляем обширную документальную базу, где объяснены все юридические 
                                    аспекты взаимодействия Avantis и её партнёров.
                                </p>
                            </div>
                        </div>
                        <div class="benefits__items__info">
                            <div class="benefits__icon__gradient__frame">
                                <div class="benefits__icon">
                                    <img class="convenience" src="@/assets/pictures/convenience.png" alt="convenience">
                                </div>
                            </div>
                            <div class="benefits__items__info__flex">
                                <h6 class="benefits__items__info__title">
                                    Удобство пользовательского интерфейса
                                </h6>
                                <p class="benefits__items__info__paragraph">
                                    Мы отказались от платформы. В связи с ненадобностью наших инвесторов 
                                    непосредственно участвовать в торгах, команда Avantis создала Telegram-бот, 
                                    который будет иметь все необходимые инструменты для контроля своих финансов.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="benefits__items__title__container">
                        <p class="benefits__items__title">
                            Преимущества инвестирования вместе с
                            <span class="semi__bold">Avantis </span> 
                            <span class="text__stroke">Trust</span>
                        </p>
                        <div class="dark"></div>
                        <div class="blur"></div>
                    </div>
                    <div class="benefits__items__info__container">
                        <div class="benefits__items__info">
                            <div class="benefits__icon__gradient__frame">
                                <div class="benefits__icon">
                                    <img class="exchange" src="@/assets/pictures/exchange.png" alt="exchange">
                                </div>
                            </div>
                            <div class="benefits__items__info__flex">
                                <h6 class="benefits__items__info__title">
                                    Низкие транзакционные издержки
                                </h6>
                                <p class="benefits__items__info__paragraph">
                                    Децентрализация процесса обмена крипто активами, 
                                    позволяет снизить комиссии, благодаря исключению посредников.
                                </p>
                            </div>
                        </div>
                        <div class="benefits__items__info">
                            <div class="benefits__icon__gradient__frame">
                                <div class="benefits__icon">
                                    <img class="mobile-cryptocurrency" src="@/assets/pictures/mobile-cryptocurrency.png" alt="mobile-cryptocurrency">
                                </div>
                            </div>
                            <div class="benefits__items__info__flex">
                                <h6 class="benefits__items__info__title">
                                    Быстрые финансовые операции
                                </h6>
                                <p class="benefits__items__info__paragraph">
                                    Операции в блокчейне используются практически мгновенно, а системы 
                                    смарт контрактов автоматизируют остальные процессы.
                                </p>
                            </div>
                        </div>
                        <div class="benefits__items__info">
                            <div class="benefits__icon__gradient__frame">
                                <div class="benefits__icon">
                                    <img class="risk" src="@/assets/pictures/risk.png" alt="risk">
                                </div>
                            </div>
                            <div class="benefits__items__info__flex">
                                <h6 class="benefits__items__info__title">
                                    Диверсификация рисков
                                </h6>
                                <p class="benefits__items__info__paragraph">
                                    Avantis Trust позволяет вложить свои средства не в одну стратегию, а в несколько. 
                                    Таким образом, распределение (диверсификация) 
                                    дает возможность получать большую прибыль и снижает риск проседания капитала.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#benefits {
    max-width: 2155px;
    margin: 0 auto;
    background-size: auto;
    background: url(../assets/pictures/vector.png);
    background-repeat: no-repeat;
    background-position-x: 205px;
    background-position-y: 73px;
    background-size: 87%;

    @media screen and (min-width:1024px) and (max-width: 1310px) { 
        background-size: 93%;
        background-position-x: 71px;
        background-position-y: 113px;
    }

    @media screen and (min-width:768px) and (max-width: 1023px) { 
        background-position-x: 0px;
        background-position-y: 163px;
        background-size: contain;
    }

    .benefits__container {
        color: #fff;
        margin-bottom: 142px;

        @media screen and (min-width:1024px) and (max-width: 1310px) { 
            margin-bottom: 117px;
        }

        @media screen and (min-width:768px) and (max-width: 1023px) { 
            margin-bottom: 96px;
        }

        @media screen and (min-width:320px) and (max-width: 767px) { 
            margin-bottom: 50px;
        }
    }

    .benefits__items__container {
        display: flex;
        justify-content: space-between;
        position: relative;
        max-width: 1270px;
        margin: 0 auto;

        @media screen and (min-width:320px) and (max-width: 767px) { 
            flex-direction: column;
            max-width: 350px;
        }

        .benefits__items__info__container {
            display: flex;
            flex-direction: column;

            @media screen and (min-width:320px) and (max-width: 767px) { 
                width: auto;
            }

            &:first-of-type {

                @media screen and (min-width:320px) and (max-width: 767px) { 
                    margin-bottom: 20px;
                }

                .benefits__items__info  {

                    margin-bottom: 125px;

                    @media screen and (min-width:768px) and (max-width: 1023px) { 
                        margin-bottom: 50px;
                    }

                    @media screen and (min-width:320px) and (max-width: 767px) { 
                        margin-bottom: 20px;
                    }

                    &:last-of-type {
                        margin-bottom: 0;
                    }

                    &:nth-of-type(1) {

                        @media screen and (min-width:1024px) and (max-width: 1310px) { 
                            margin-bottom: 57px;
                        }

                        @media screen and (min-width:768px) and (max-width: 1023px) { 
                            margin-bottom: 305px;
                        }

                        .benefits__items__info__flex {
                            width: 275px;
                            
                            @media screen and (min-width:768px) and (max-width: 1023px) { 
                                width: 227px;
                            }
                        }
                    }

                    &:nth-of-type(2) {

                        @media screen and (min-width:1024px) and (max-width: 1310px) { 
                            margin-bottom: 67px;
                        }

                        @media screen and (min-width:768px) and (max-width: 1023px) { 
                            margin-bottom: 67px;
                        }

                        .benefits__items__info__flex {
                            width: 178px;

                            @media screen and (min-width:768px) and (max-width: 1023px) { 
                                width: 220px;
                            }
                        }
                    }

                    &:nth-of-type(3) {
                        .benefits__items__info__flex {
                            width: 300px;

                            @media screen and (min-width:768px) and (max-width: 1023px) { 
                                width: 227px;
                            }
                        }
                    }
                    
                }
            }

            &:last-of-type {
                width: 345px;

                @media screen and (min-width:1024px) and (max-width: 1310px) { 
                    width: 356px;
                }

                @media screen and (min-width:768px) and (max-width: 1023px) { 
                    align-items: flex-end;
                }

                @media screen and (min-width:320px) and (max-width: 767px) { 
                    width: auto;
                }

                .benefits__items__info  {
                    margin-bottom: 122px;

                    @media screen and (min-width:1024px) and (max-width: 1310px) {
                        justify-content: end;
                    } 

                    @media screen and (min-width:320px) and (max-width: 767px) { 
                        margin-bottom: 20px;
                    }

                    &:last-of-type {
                        margin-bottom: 0;
                    }

                    &:nth-of-type(1) {
                        position: relative;
                        right: 35px;
                        margin-bottom: 147px;

                        @media screen and (min-width:1024px) and (max-width: 1310px) { 
                            margin-bottom:61px;
                            right: 0;
                        }

                        @media screen and (min-width:768px) and (max-width: 1023px) { 
                            margin-bottom: 305px;
                            position: unset;
                        }

                        @media screen and (min-width:320px) and (max-width: 767px) { 
                            margin-bottom: 20px;
                            position: unset;
                        }

                        .benefits__items__info__flex {
                            width: 247px;

                            @media screen and (min-width:768px) and (max-width: 1023px) { 
                                width: 215px;
                            }

                            .benefits__items__info__title {
                                @media screen and (min-width:768px) and (max-width: 1023px) { 
                                    width: 220px;
                                }
                            }
                        }
                    }

                    &:nth-of-type(2) {

                        @media screen and (min-width:1024px) and (max-width: 1310px) { 
                            margin-bottom: 81px;
                        }

                        @media screen and (min-width:768px) and (max-width: 1023px) { 
                            margin-bottom: 77px;
                        }

                        .benefits__items__info__flex {
                            width: 227px;
                            
                            @media screen and (min-width:1024px) and (max-width: 1310px) { 
                                width: 210px;
                            }

                            @media screen and (min-width:768px) and (max-width: 1023px) { 
                                width: 215px;
                            }
                        }
                    }

                    &:nth-of-type(3) {
                        position: relative;
                        right: 40px;
                        bottom: 15px;

                        @media screen and (min-width:1024px) and (max-width: 1310px) { 
                            right: 0;                        
                        }

                        @media screen and (min-width:768px) and (max-width: 1023px) { 
                            position: unset;
                        }

                        @media screen and (min-width:320px) and (max-width: 767px) { 
                            position: unset;
                        }

                        .benefits__items__info__flex {
                            width: 276px;

                            @media screen and (min-width:1024px) and (max-width: 1310px) { 
                                width: 259px;
                            }

                            @media screen and (min-width:768px) and (max-width: 1023px) { 
                                width: 227px;
                            }
                        }
                    }
                    
                }
            }

            .benefits__items__info {
                display: flex;

                .benefits__icon__gradient__frame {
                    width: 72px;
                    height: 72px; 
                    border-radius: 10px;
                    background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(255,255,255,0.42) 400%);
                    box-shadow: 0px 4px 49px rgba(0, 0, 0, 0.3);
                    margin-right: 27px;

                    @media screen and (min-width:768px) and (max-width: 1023px) { 
                        width: 54px;
                        height: 54px;
                        margin-right: 19px;
                    }

                    @media screen and (min-width:320px) and (max-width: 767px) { 
                        width: 54px;
                        height: 54px;
                        margin-right: 19px;
                    }

                    .benefits__icon {
                        align-items: center;
                        display: flex;
                        justify-content: center;
                        background: radial-gradient(119.49% 119.49% at 2.96% 5.05%, rgba(101, 101, 121, 0.8) 0%, rgba(40, 40, 57, 0.8) 100%);                        backdrop-filter: blur(21px);
                        border-radius: 10px;
                        padding: 0 35px;
                        width: 70px;
                        height: 70px;

                        @media screen and (min-width:768px) and (max-width: 1023px) { 
                            width: 52px;
                            height: 52px;
                            padding: 0;
                        }

                        @media screen and (min-width:320px) and (max-width: 767px) { 
                            width: 52px;
                            height: 52px;
                            padding: 0;
                        }
                    }
                }

                .benefits__items__info__flex {

                    .benefits__items__info__title {
                        font-weight: 400;
                        font-size: 20px;
                        line-height: 96.1%;
                        margin-bottom: 8px;

                        @media screen and (min-width:320px) and (max-width: 767px) { 
                            font-size: 20px;
                            line-height: 96.1%;
                        }
                    }

                    .benefits__items__info__paragraph {
                        font-size: 14px;
                        line-height: 96.1%;
                        color: #B6B6DD;

                        @media screen and (min-width:768px) and (max-width: 1023px) { 
                            font-size: 12px;
                        }

                        @media screen and (min-width:320px) and (max-width: 767px) { 
                            font-size: 14px;
                        }
                    }
                }
            }
        }

        .benefits__items__title__container {
            font-weight: 600;
            line-height: 61px;
            background: url(../assets/pictures/hero_spin.png);
            background-position: center;
            background-repeat: no-repeat;
            background-size: auto;
            width: 520px;
            bottom: 23px;
            height: 519px;
            position: relative;

            @media screen and (min-width:1315px) and (max-width: 1510px) { 
                width: 500px;
                height: 499px;
                position: absolute;
                background-size: contain;
                left: 25%;
                bottom: 15%;
            }

            @media screen and (min-width:1024px) and (max-width: 1310px) { 
                width: 412px;
                height: 411px;
                position: absolute;
                background-size: contain;
                left: 28%;
                bottom: 8%;
            }

            @media screen and (min-width:768px) and (max-width: 1023px) { 
                position: absolute;
                background-size: contain;
                width: 326px;
                height: 325px;
                left: 24%;
                bottom: 45%;
            }

            @media screen and (min-width:320px) and (max-width: 767px) { 
                order: -1;
                width: 310px;
                background-size: 110%;
                height: 300px;
                bottom: 0;
                left: 0;
                margin: 0 auto;
            }

            .dark {
                width: 154px;
                height: 78px;
                position: absolute;
                top: 85%;
                left: 64%;
                background: linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, rgba(38, 38, 55, 0) 0.01%, #2B2B3D 100%);
            
                @media screen and (min-width:1024px) and (max-width: 1310px) { 
                    top: 81%;                     
                }

                @media screen and (min-width:768px) and (max-width: 1023px) { 
                    top: 76%;
                    left: 61%;
                    width: 108px;
                }

                @media screen and (min-width:320px) and (max-width: 767px) { 
                    top: 74%;
                    left: 61%;
                    width: 108px;
                }
            }

            .blur {
                width: 239.47px;
                height: 123px;
                background: #7000FF;
                filter: blur(158px);
                transform: rotate(-22.34deg);
                position: absolute;
                left: 55%;
                top: 440px;

                @media screen and (min-width:1024px) and (max-width: 1310px) { 
                    filter: blur(400px);
                    width: 186px;
                    height: 78px;
                    left: 65%;
                    top: 370px;
                }

                @media screen and (min-width:768px) and (max-width: 1023px) { 
                    display: none;
                }

                @media screen and (min-width:320px) and (max-width: 767px) { 
                    width: 180.76px;
                    height: 78.45px;
                    background: #7000FF;
                    filter: blur(400px);
                    transform: rotate(-10.34deg);
                    left: 40%;
                }
            }

            .benefits__items__title {
                font-size: 40px;
                line-height: 95%;
                font-weight: 300; 
                width: 270px; 
                position: absolute;
                top: 28%;
                left: 17%;

                @media screen and (min-width:1024px) and (max-width: 1310px) { 
                    font-size: 30px;
                    max-width: 214px;
                    left: 20%;
                    width: 165px;
                }

                @media screen and (min-width:768px) and (max-width: 1023px) { 
                    font-size: 24px;
                    width: 164px;
                    top: 29%;
                    left: 23%;
                }

                @media screen and (min-width:320px) and (max-width: 767px) { 
                    font-size: 24px;
                    line-height: 95%;
                    width: 165px;
                    left: 21%;
                }

                .text__stroke {
                    color: transparent;
                    -webkit-text-stroke: 1px #fff;
                    line-height: 51px;

                    @media screen and (min-width:1024px) and (max-width: 1310px) { 
                        line-height: 36px;
                    }

                    @media screen and (min-width:768px) and (max-width: 1023px) { 
                        line-height: 37px
                    }

                    @media screen and (min-width:320px) and (max-width: 767px) { 
                        line-height: 30px
                    }
                }

                .semi__bold {
                    font-weight: 600;
                    line-height: 51px;

                    @media screen and (min-width:1024px) and (max-width: 1310px) { 
                        line-height: 36px;
                    }

                    @media screen and (min-width:768px) and (max-width: 1023px) { 
                        line-height: 37px
                    }

                    @media screen and (min-width:320px) and (max-width: 767px) { 
                        line-height: 30px
                    }
                }

                &::before {
                    content: "";
                    width: 139px;
                    height: 0px;
                    border: 4px solid #D46BFE;
                    background: #D46BFE;
                    transform: rotate(90deg);
                    position: absolute;
                    left: -85px;
                    top: 75px;
                    
                    @media screen and (min-width:1024px) and (max-width: 1310px) { 
                        left: -71px;
                        top: 56px;
                        width: 105px;
                    }

                    @media screen and (min-width:768px) and (max-width: 1023px) { 
                        width: 97px;
                        left: -72px;
                        top: 46px;
                    }

                    @media screen and (min-width:320px) and (max-width: 767px) { 
                        width: 90px;
                        left: -63px;
                        top: 43px;
                    }
                }
            }
            
        }


    }
}
</style>