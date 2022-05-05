<template>
    <div id="about">
        <div class="container">
            <div class="about__container">
                <div class="avantis__signal__container">
                    <p class="avantis">
                        Avantis Signal
                    </p>
                </div>
                <div class="avantis__buying__container">
                    <p class="avantis">
                        Avantis Buying
                    </p>
                </div>
                <div class="about__information__container">
                    <div class="about__information__title__container">
                        <p class="light__title">
                            What is
                            <span class="semi__bold">Avantis</span>
                            <span class="text__stroke">Trust?</span>
                        </p>
                    </div>
                    <p class="about__information__paragraph">
                        Avantis Trust- are alternative investments. The essence lies in the fact that your money 
                        is directed to all types of activities of the company. It is the fund, which supports 
                        all the products of the company. 
                        We propose to investors transparent conditions of assets management with the reduced 
                        threshold and assume all the responsibilities of the registration and service of funds.
                    </p>
                </div>
                <div class="ambasador__program__container">
                    <p class="avantis">
                        Ambassador program
                    </p>
                </div>
                <div class="avantis__training__container">
                    <p class="avantis">
                        Avantis Education
                    </p>
                </div>
                <div class="avantis__pump__container">
                    <p class="avantis">
                        Avantis Pump
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#about {
    background: url(../assets/pictures/stars.png); 
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;

    @media screen and (min-width:1024px) and (max-width: 1310px) { 
        background-size: auto;
    }

    @media screen and (min-width:768px) and (max-width: 1023px) { 
        background-size: cover;
    }

    &::before {
        content: "";
        width: 100%;
        height: 161px;
        background: linear-gradient(180deg, rgba(45, 45, 63, 0) 0%, #2B2B3D 100%);
        transform: matrix(1, 0, 0, -1, 0, 0);
        position: absolute;

        @media screen and (min-width:1024px) and (max-width: 1310px) { 
            height: 115px;
        }

        @media screen and (min-width:768px) and (max-width: 1023px) { 
            height: 114px;
        }

        @media screen and (min-width:320px) and (max-width: 767px) { 
            height: 144px;
        }
    }

    &::after{
        content: "";
        width: 100%;
        height: 161px;
        background: linear-gradient(180deg, rgba(45, 45, 63, 0) 0%, #2B2B3D 100%);; 
        position: absolute;
        top: 598px;

        @media screen and (min-width:1024px) and (max-width: 1310px) { 
            height: 103px;
        }

        @media screen and (min-width:768px) and (max-width: 1023px) {
            top: 524px; 
            height: 103px;
        }

        @media screen and (min-width:320px) and (max-width: 767px) { 
            height: 131px;
            top: 531px;
        }
    }

    .about__container {
        max-width: 1440px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 248px;
        padding-bottom: 268px;
        color: #fff;
        position: relative;

        @media screen and (min-width:1024px) and (max-width: 1310px) { 
            padding-top: 217px;
            padding-bottom: 237px;
        }

        @media screen and (min-width:768px) and (max-width: 1023px) { 
            padding-top: 198px;
            padding-bottom: 203px;
        }

        @media screen and (min-width:320px) and (max-width: 767px) { 
            padding-top: 218px;
            padding-bottom: 248px;
        }

        .about__information__container {
            width: 303px;

            @media screen and (min-width:768px) and (max-width: 1023px) { 
                width: 220px;
            }

            @media screen and (min-width:320px) and (max-width: 767px) { 
                width: 219px;
            }

            .about__information__title__container {
                .light__title {
                    font-size: 50px;
                    line-height: 35px;
                    font-weight: 300;

                    @media screen and (min-width:768px) and (max-width: 1023px) { 
                        font-size: 30px;
                        line-height: 30px;
                    }

                    @media screen and (min-width:320px) and (max-width: 767px) { 
                        font-size: 30px;
                        line-height: 35px;
                    }

                    .semi__bold {
                        font-weight: 600;
                        font-size: 50px;
                        line-height: 70px;

                        @media screen and (min-width:768px) and (max-width: 1023px) { 
                            font-size: 30px;
                            line-height: 46px;
                        }

                        @media screen and (min-width:320px) and (max-width: 767px) { 
                            font-size: 30px;
                            line-height: 46px;
                        }
                    }

                    .text__stroke {
                        font-weight: 600;
                        font-size: 50px;
                        line-height: 70px;
                        color: transparent;
                        -webkit-text-stroke: 2px #fff;

                        @media screen and (min-width:768px) and (max-width: 1023px) { 
                            font-size: 30px;
                            line-height: 46px;
                        }

                        @media screen and (min-width:320px) and (max-width: 767px) { 
                            font-size: 30px;
                            line-height: 46px;
                        }
                    }
                }
            }

            .about__information__paragraph {
                font-size: 16px;
                line-height: 96.1%;
                color: #B6B6DD;

                @media screen and (min-width:768px) and (max-width: 1023px) { 
                    font-size: 14px;
                }

                @media screen and (min-width:320px) and (max-width: 767px) { 
                    font-size: 12px;
                }
            }
        }

        .avantis {
            font-size: 30px;
            line-height: 46px;
            position: relative;

            @media screen and (min-width:768px) and (max-width: 1023px) { 
                font-size: 20px;
                line-height: 30px;
            }

            @media screen and (min-width:320px) and (max-width: 767px) { 
                font-size: 14px;
                line-height: 21px;
            }
        }

        .avantis__signal__container {
            width: 325px;
            height: 254px;
            background: url(../assets/pictures/avantis__signal.png);
            position: absolute;
            right: 74%;
            bottom: 70%;

            @media screen and (min-width:1024px) and (max-width: 1310px) { 
                right: 72%;
            }

            @media screen and (min-width:768px) and (max-width: 1023px) { 
                background: url(../assets/pictures/avantis__signal__768.png);
                background-position: top;
                width: 215px;
                height: 198px;
                right: 72%;
                bottom: 79%;
            }

            @media screen and (min-width:320px) and (max-width: 767px) { 
                background: url(../assets/pictures/avantis__signal__320.png);
                width: 171px;
                height: 125px;
                background-position: center;
                right: 45%;
                bottom: 70%;
            }

            &::before {
                content: "";
                position: absolute;
                left: 92%;
                top: 86%;
                width: 184px;
                background: linear-gradient(90.07deg, #D46BFE -18.85%, #3D3DD5 101.27%);
                height: 2px;
                transform: rotate(-140.31deg);

                @media screen and (min-width:1024px) and (max-width: 1310px) { 
                    width: 134px;
                    transform: rotate(-135.31deg);
                    left: 79%;
                    top: 82%;
                }

                @media screen and (min-width:768px) and (max-width: 1023px) { 
                    width: 100px;
                    transform: rotate(-129.31deg);
                    left: 74%;
                    top: 106%;
                }

                @media screen and (min-width:320px) and (max-width: 767px) { 
                    width: 37px;
                    transform: rotate(-116.31deg);
                    left: 44%;
                    top: 100%;
                }
            }

            .avantis {
                top: 72%;
                left: 49%;

                @media screen and (min-width:768px) and (max-width: 1023px) { 
                    top: 67%;
                    left: 37%;
                }

                @media screen and (min-width:320px) and (max-width: 767px) { 
                    top: 65%;
                    left: 30%;
                }
            }
        }

        .avantis__buying__container {
            width: 468px;
            height: 430px;
            background: url(../assets/pictures/avantis__buying.png);
            position: absolute;
            right: 63%;
            bottom: 12%;

            @media screen and (min-width:1024px) and (max-width: 1310px) { 
                background: url(../assets/pictures/avantis__buying__1024.png);
                width: 401px;
                height: 393px;
                right: 56%;
                bottom: 5%;
            }

            @media screen and (min-width:768px) and (max-width: 1023px) {
                background: url(../assets/pictures/avantis__buying__768.png);
                width: 290px;
                height: 270px;
                right: 58%;
                bottom: 17%;
            }

            @media screen and (min-width:320px) and (max-width: 767px) { 
                background: url(../assets/pictures/avantis__buying__320.png);
                width: 145px;
                height: 220px;
                background-position: bottom;
                right: 54%;
                bottom: 7%;
                background-repeat: no-repeat;
            }

            &::before {
                content: "";
                position: absolute;
                left: 69%;
                top: 36%;
                width: 120px;
                background: linear-gradient(90.07deg, #D46BFE -18.85%, #3D3DD5 101.27%);
                height: 2px;
                transform: rotate(-19.94deg);

                @media screen and (min-width:1024px) and (max-width: 1310px) { 
                    width: 88px;
                    transform: rotate(-39.94deg);
                    left: 52%;
                    top: 19%;
                }

                @media screen and (min-width:768px) and (max-width: 1023px) {
                    width: 75px;
                    left: 50%;
                    transform: rotate(-47.94deg);
                    top: 13%;
                }

                @media screen and (min-width:320px) and (max-width: 767px) { 
                    width: 70.51px;
                    transform: rotate(-69.94deg);
                    left: 33%;
                    top: 26%;
                }
            }

            .avantis {
                top: 56%;
                left: 36%;

                @media screen and (min-width:1024px) and (max-width: 1310px) { 
                    top: 48%;
                    left: 20%;
                }

                @media screen and (min-width:768px) and (max-width: 1023px) {
                    top: 51%;
                    left: 19%;
                }

                @media screen and (min-width:320px) and (max-width: 767px) { 
                    top: 70%;
                    left: 10%;
                }
            }
        }

        .ambasador__program__container {
            width: 295px;
            height: 263px;
            background: url(../assets/pictures/ambasador__program.png);
            position: absolute;
            left: 56%;
            bottom: 9%;

            @media screen and (min-width:1024px) and (max-width: 1310px) { 
                left: 59%;
                bottom: 11%;
            }

            @media screen and (min-width:768px) and (max-width: 1023px) {
                background: url(../assets/pictures/ambasador__program__768.png);
                width: 220px;
                height: 245px;
                left: 63%;
                bottom: 9%;
            }

            @media screen and (min-width:320px) and (max-width: 767px) { 
                background: url(../assets/pictures/ambasador__program__320.png);
                width: 145px;
                height: 160px;
                background-position: center;
                left: 50%;
                bottom: 15%;
                background-repeat: no-repeat;
            }

            &::before {
                content: "";
                position: absolute;
                left: 18%;
                top: 5%;
                width: 121px;
                background: linear-gradient(90.07deg, #D46BFE -18.85%, #3D3DD5 101.27%);
                height: 2px;
                transform: rotate(50.49deg);

                @media screen and (min-width:1024px) and (max-width: 1310px) { 
                    transform: rotate(56.49deg);
                    left: 22%;
                    top: 5%;
                }

                @media screen and (min-width:768px) and (max-width: 1023px) {
                    width: 135px;
                    transform: rotate(44.49deg);
                    left: -4%;
                    top: 1%;
                }

                @media screen and (min-width:320px) and (max-width: 767px) { 
                    width: 33px;
                    transform: rotate(55.49deg);
                    left: 18%;
                    top: 25%;
                }
            }

            .avantis {
                top: 62%;
                left: 15%;

                @media screen and (min-width:320px) and (max-width: 767px) { 
                    top: 65%;
                    left: 5%;
                }
            }
        }

        .avantis__training__container {
            width: 271px;
            height: 324px;
            background: url(../assets/pictures/avantis__training.png);
            position: absolute;
            left: 75%;
            top: 5%;

            @media screen and (min-width:1024px) and (max-width: 1310px) { 
                background: url(../assets/pictures/avantis__training__1024.png);
                background-repeat: no-repeat;
                width: 250px;
                left: 728px;
                top: 1%;
            }

            @media screen and (min-width:768px) and (max-width: 1023px) {
                background: url(../assets/pictures/avantis__training__768.png);
                width: 200px;
                height: 245px;
                left: 73%;
                top: 7%;
            }

            @media screen and (min-width:320px) and (max-width: 767px) { 
                background: url(../assets/pictures/avantis__training__320.png);
                width: 115px;
                height: 100px;
                background-position: right;
                background-repeat: no-repeat;
                left: 61%;
                top: 21%;
            }

            &::before {
                content: "";
                position: absolute;
                left: -60%;
                top: 83%;
                width: 222px;
                background: linear-gradient(90.07deg, #D46BFE -18.85%, #3D3DD5 101.27%);
                height: 2px;
                transform: rotate(-10.75deg);

                @media screen and (min-width:1024px) and (max-width: 1310px) { 
                    width: 157px;
                    transform: rotate(-9.75deg);
                    left: -32%;
                    top: 83%;
                }

                @media screen and (min-width:768px) and (max-width: 1023px) {
                    width: 110px;
                    left: -28%;
                    top: 80%;
                    transform: rotate(-12.75deg);
                }

                @media screen and (min-width:320px) and (max-width: 767px) { 
                    width: 50px;
                    transform: rotate(155.49deg);
                    left: -17%;
                    top: 105%;
                }
            }

            .avantis {
                top: 85%;

                @media screen and (min-width:1024px) and (max-width: 1310px) { 
                    top: 89%;
                }

                @media screen and (min-width:768px) and (max-width: 1023px) {
                    left: 10%;
                }

                @media screen and (min-width:320px) and (max-width: 767px) { 
                    top: 70%;
                    left: -16%;
                }
            }
        }

        .avantis__pump__container {
            width: 285px;
            height: 280px;
            background: url(../assets/pictures/avantis__pump.png);
            position: absolute;
            left: 56%;
            top: -11%;

            @media screen and (min-width:768px) and (max-width: 1023px) {
                background: url(../assets/pictures/avantis__pump__768.png);
                width: 230px;
                height: 245px;
                left: 53%;
                top: -13%;
            }

            @media screen and (min-width:320px) and (max-width: 767px) { 
                background: url(../assets/pictures/avantis__pump__320.png);
                width: 117px;
                height: 144px;
                background-position: right;
                background-repeat: no-repeat;
                left: 55%;
                top: 4%;
            }

            &::before {
                content: "";
                position: absolute;
                left: -3%;
                top: 87%;
                width: 127px;
                background: linear-gradient(90.07deg, #D46BFE -18.85%, #3D3DD5 101.27%);
                height: 2px;
                transform: rotate(-60.3deg);

                @media screen and (min-width:1024px) and (max-width: 1310px) { 
                    transform: rotate(-56.3deg);
                    width: 126.83px;
                    top: 97%;
                    left: 2%;
                }

                @media screen and (min-width:768px) and (max-width: 1023px) {
                    width: 100px;
                    left: 9%;
                    top: 87%;
                    transform: rotate(-62.3deg);
                }

                @media screen and (min-width:320px) and (max-width: 767px) { 
                    width: 90px;
                    left: -39%;
                    top: 111%;
                    transform: rotate(-68.3deg);
                }
            }

            .avantis {
                top: 50%;

                @media screen and (min-width:1024px) and (max-width: 1310px) { 
                    top: 56%;
                    left: 8%;
                }

                @media screen and (min-width:768px) and (max-width: 1023px) {
                    top: 53%;
                    left: 12%;
                }

                @media screen and (min-width:320px) and (max-width: 767px) { 
                    top: 65%;
                    right: 15%;
                }
            }
        }
    }

}
</style>