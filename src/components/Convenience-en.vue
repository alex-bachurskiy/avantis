<template>
    <div id="convenience">
        <div class="container">
            <div class="convenience__container">
                <div class="convenience__title__container">
                    <h1 class="convenience__title">
                        All in one place
                    </h1>
                </div>
                <div class="convenience__bot__container">
                    <div class="convenience__bot__info">
                        <div class="convenience__list__gradient">
                            <div class="convenience__list">
                                <img class="convenience__img" src="@/assets/pictures/convenience__small.png" alt="convenience">
                                <p class="convenience__list__info">
                                    Replenish and withdraw in one click  
                                </p>
                            </div>
                        </div>
                        <div class="convenience__list__gradient">
                            <div class="convenience__list">
                                <img class="exchange__img" src="@/assets/pictures/exchange__small.png" alt="exchange">
                                <p class="convenience__list__info">
                                    Monitor the turnover of your structure
                                </p>
                            </div>
                        </div>
                        <div class="convenience__list__gradient">
                            <div class="convenience__list">
                                <img class="handshake__img" src="@/assets/pictures/handshake.png" alt="handshake">
                                <p class="convenience__list__info">
                                    Get referral bonus
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="phone__bot"></div>
                    <div class="convenience__bot__info">
                        <div class="convenience__list__gradient">
                            <div class="convenience__list">
                                <img class="coins__img" src="@/assets/pictures/coins.png" alt="coins">
                                <p class="convenience__list__info">
                                    Manage your finances  
                                </p>
                            </div>
                        </div>
                        <div class="convenience__list__gradient">
                            <div class="convenience__list">
                                <img class="support__img" src="@/assets/pictures/support.png" alt="support">
                                <p class="convenience__list__info">
                                    Supporting 24/7 
                                </p>
                            </div>
                        </div>
                        <div class="convenience__list__gradient">
                            <div class="convenience__list">
                                <img class="notifications__img" src="@/assets/pictures/notifications.png" alt="notifications">
                                <p class="convenience__list__info">
                                    Daily notifications
                                </p>
                            </div>
                        </div>
                        <div class="convenience__list__gradient">
                            <div class="convenience__list">
                                <img class="instructions__img" src="@/assets/pictures/instructions.png" alt="instructions">
                                <p class="convenience__list__info">
                                    Detailed instructions 
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
#convenience {
    background: url(../assets/pictures/vector.png);
    background-repeat: no-repeat;
    background-size: 90%;
    background-position-x: right;
    background-position-y: 100%;

    @media screen and (min-width:1024px) and (max-width: 1310px) { 
        background-size: 94%;
        background-position-x: 98%;
        background-position-y: 94%;
    }

    @media screen and (min-width:320px) and (max-width: 767px) { 
        background-position-y: 26%;
    }

    .convenience__container {
        color: #fff;
        max-width: 1440px;
        margin: 0 auto 87px auto;
        height: 654px;
        
        @media screen and (min-width:1024px) and (max-width: 1310px) { 
            height: 591px;
        }

        @media screen and (min-width:768px) and (max-width: 1023px) { 
            height: 496px;
            margin-bottom: 54px;
        }

        @media screen and (min-width:320px) and (max-width: 767px) { 
            height: auto;
            margin-bottom: 68px;
        }
        

        .convenience__title__container {
            position: relative;
            margin-left: 30px;
            margin-bottom: 79px;
            width: 293px;

            @media screen and (min-width:768px) and (max-width: 1023px) { 
                margin-bottom: 44px;
            }

            @media screen and (min-width:320px) and (max-width: 767px) { 
                margin-bottom: 25px;
                width: 250px;
            }

            .convenience__title {
                font-weight: 300;
                font-size: 50px;
                line-height: 95%;

                @media screen and (min-width:768px) and (max-width: 1023px) { 
                    font-size: 30px;
                }
                
                @media screen and (min-width:320px) and (max-width: 767px) { 
                    font-size: 30px;
                    line-height: 95%;
                }
                
                &::before {
                    content: "";
                    width: 82px;
                    height: 0px;
                    border: 4px solid #D46BFE;
                    background: #D46BFE;
                    transform: rotate(90deg);
                    position: absolute;
                    left: -65px;
                    top: 45px;

                    @media screen and (min-width:768px) and (max-width: 1023px) { 
                        width: 21px;
                        left: -35px;
                        top: 8px;
                    }

                    @media screen and (min-width:320px) and (max-width: 767px) { 
                        width: 28px;
                        left: -39px;
                        top: 12px;
                    }
                }
            }

        }

        .convenience__bot__container {
            display: flex;
            position: relative;
            max-width: 1307px;

            @media screen and (min-width:320px) and (max-width: 767px) { 
                flex-direction: column;
                align-items: center;
            }

            @media screen and (min-width:375px) and (max-width: 767px) { 
                flex-direction: column;
                align-items: unset;
                margin-left: 30px;
            }

            .phone__bot {
                background: url(../assets/pictures/phone.png);
                background-repeat: no-repeat;
                width: 491.19px;
                height: 628px;
                position: absolute;
                top: -50%;
                z-index: 777;
                left: 32%;

                @media screen and (min-width:1024px) and (max-width: 1310px) { 
                    height: 513px;
                    width: 390px;
                    background-size: contain;
                }

                @media screen and (min-width:768px) and (max-width: 1023px) { 
                    height: 342px;
                    width: 261px;
                    background-size: contain;
                    top: 18%;
                    left: 33.5%;
                }

                @media screen and (min-width:320px) and (max-width: 767px) { 
                    height: 342px;
                    width: 261px;
                    background-size: contain;
                    position: unset;
                    margin: 0 auto;
                }
            }

            .convenience__bot__info {

                &:first-of-type {
                    margin-right: 87px;
                    height: 316px;
                    position: relative;
                    top: 30px;

                    @media screen and (min-width:1024px) and (max-width: 1310px) { 
                        top: -10px;
                    }

                    @media screen and (min-width:320px) and (max-width: 767px) { 
                        position: unset;
                        margin-bottom: 40px;
                        margin-right: 0;
                        height: unset;
                    }

                    &::after {
                        content: url(../assets/pictures/left__convenience.png);
                        position: relative;
                        left: 100%;
                        bottom: 92%;

                        @media screen and (min-width:768px) and (max-width: 1023px) { 
                            content: unset;
                        }

                        @media screen and (min-width:320px) and (max-width: 767px) { 
                            content: unset;
                        }
                    }
                    
                    .convenience__list__gradient {
                        &:nth-of-type(1) {
                            .convenience__list {
                                .convenience__list__info {
                                    margin-left: 19px;
                                    width: 165px;

                                    @media screen and (min-width:768px) and (max-width: 1023px) { 
                                        width: 140px;
                                    }

                                    @media screen and (min-width:320px) and (max-width: 767px) { 
                                        width: 160px;
                                    }
                                }
                            }
                        }

                        &:nth-of-type(2) {
                            .convenience__list {
                                .convenience__list__info {
                                    margin-left: 12px;
                                    width: 174px;

                                    @media screen and (min-width:768px) and (max-width: 1023px) { 
                                        width: 150px;
                                    }
                                }
                            }
                        }

                        &:nth-of-type(3) {
                            .convenience__list {
                                .convenience__list__info {
                                    margin-left: 10px;
                                    width: 194px;
                                }
                            }
                        }
                    }
                }

                &:last-of-type {
                    margin-left: 32px;
                    position: absolute;
                    left: 71.5%;                    
                    bottom: -13%;
                    height: 445px;

                    @media screen and (min-width:1024px) and (max-width: 1310px) { 
                        bottom: -10%;
                    }

                    @media screen and (min-width:768px) and (max-width: 1023px) { 
                        left: 64%;
                        bottom: -39%;
                    }

                    @media screen and (min-width:320px) and (max-width: 767px) { 
                        position: unset;
                        margin-left: 0;
                        margin-top: 25px;
                        height: unset;
                    }

                    &::before {
                        content: url(../assets/pictures/right__convenience.png);
                        position: absolute;
                        left: -61.3%;
                        bottom: 4.5%;

                        @media screen and (min-width:768px) and (max-width: 1023px) { 
                            content: unset;
                        }

                        @media screen and (min-width:320px) and (max-width: 767px) { 
                            content: unset;
                        }
                    }

                    .convenience__list__gradient {
                        &:nth-of-type(1) {
                            .convenience__list {
                                .convenience__list__info {
                                    margin-left: 18px;
                                    width: 170px;
                                }
                            }
                        }

                        &:nth-of-type(2) {
                            .convenience__list {
                                .convenience__list__info {
                                    margin-left: 19px;
                                }
                            }
                        }

                        &:nth-of-type(3) {
                            .convenience__list {
                                .convenience__list__info {
                                    margin-left: 22px;
                                }
                            }
                        }

                        &:nth-of-type(4) {
                            .convenience__list {
                                .convenience__list__info {
                                    margin-left: 23px;
                                }
                            }
                        }
                    }
                }

                .convenience__list__gradient {
                    border-radius: 10px;
                    background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(255,255,255,0.42) 400%);   
                    box-shadow: 0px 4px 49px rgba(0, 0, 0, 0.15);
                    margin-bottom: 75.5px;
                    width: 254px;
                    padding-bottom: 2px;

                    @media screen and (min-width:768px) and (max-width: 1023px) { 
                        width: 220px;
                        height: 55px;
                        margin-bottom: 35px;
                    }

                    @media screen and (min-width:320px) and (max-width: 767px) { 
                        margin-bottom: 10px;
                    }

                    @media screen and (min-width:350px) and (max-width: 374px) {
                        width: 260px;
                    }

                    @media screen and (min-width:375px) and (max-width: 399px) {
                        width: 295px;
                    }

                    @media screen and (min-width:400px) and (max-width: 767px) { 
                        width: 350px;
                    }

                    &:last-of-type {
                        margin-bottom: 0;
                    }

                    .convenience__list {
                        background: radial-gradient(119.49% 119.49% at 2.96% 5.05%, rgba(101, 101, 121, 1) 0%, rgba(40, 40, 57, 1) 100%);                       
                        border-radius: 10px;
                        display: flex;
                        align-items: center;
                        padding: 10px 0 11px 13px;
                        width: 252px;

                        @media screen and (min-width:768px) and (max-width: 1023px) { 
                            width: 218px;
                            height: 53px;
                        }

                        @media screen and (min-width:350px) and (max-width: 374px) {
                            width: 258px;
                        }

                        @media screen and (min-width:375px) and (max-width: 399px) {
                            width: 293px;
                        }

                        @media screen and (min-width:400px) and (max-width: 767px) { 
                            width: 348px;
                        }

                        .convenience__list__info {
                            font-size: 18px;
                            line-height: 96.1%;
                            width: 159px;

                            @media screen and (min-width:768px) and (max-width: 1023px) { 
                                font-size: 14px;
                                width: 150px;
                            }
                        }
                    }
                }
            }

        }
    }
}
</style>