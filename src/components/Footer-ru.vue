<template>
    <div class="footer">
        <div class="container">
            <div class="footer__container">
                <div class="footer__main__container">
                    <div class="footer__product__container">
                        <h1 class="footer__product__title">
                            Продукты
                        </h1>
                        <p class="footer__product__info">
                            Avantis Pump
                        </p>
                        <p class="footer__product__info">
                            Avantis Signal
                        </p>
                        <p class="footer__product__info">
                            Ambassador Program
                        </p>
                        <p class="footer__product__info">
                            Avantis Education
                        </p>
                    </div>
                    <div class="footer__menu__container">
                        <div class="footer__menu">
                            <div class="footer__menu__item">
                                Уведомление о рисках
                            </div>
                            <div class="footer__menu__item">
                                Условия использования
                            </div>
                            <div class="footer__menu__item">
                                Политика конфиденциальности
                            </div>
                        </div>
                        <div class="footer__menu">
                            <div class="footer__menu__item">
                                Политика AML
                            </div>
                            <div class="footer__menu__item">
                                KYC
                            </div>
                            <div class="footer__menu__item">
                                Политика возврата
                            </div>
                        </div>
                    </div>
                    <div class="footer__contact__container">
                        <h1 class="footer__contact__title">
                            Контакты
                        </h1>
                        <p class="footer__email">
                            avantiswealth@gmail.com 
                        </p>
                        <div class="contact__cooperation__container">
                            <h1 class="contact__cooperation__title">
                                Сотрудничество
                            </h1>
                            <p class="contact__cooperation__info">
                                avantiswealth@gmail.com
                            </p>
                        </div>
                        <div class="social__network__container">
                            <img class="social__network" src="@/assets/pictures/facebook.png" alt="facebook">
                            <img class="social__network" src="@/assets/pictures/youtube.png" alt="youtube">
                            <img class="social__network" src="@/assets/pictures/instagram.png" alt="instagram">
                            <img class="social__network" src="@/assets/pictures/telegram.png" alt="telegram">
                        </div>
                    </div>
                </div>
                <div class="footer__copyright__container">
                    <p class="footer__copyright">
                        Copyright © 2022, Avantis Trust<br>
                        Все торговые марки и авторские права принадлежат их настоящим владельцам.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.footer {

    &__container {
        padding-bottom: 42px;
        max-width: 1440px;
        margin: 0 auto;

        @media screen and (min-width:768px) and (max-width: 1023px) { 
            padding-bottom: 46px;
        }

        @media screen and (min-width:320px) and (max-width: 767px) { 
            padding-bottom: 44px;
        }

        .footer__main__container {
            border-bottom: 1px solid #43435B;
            display: flex;
            justify-content: space-between;
            align-items: center;
            
            @media screen and (min-width:768px) and (max-width: 1023px) { 
                font-size: 12px;
                line-height: 96.1%;
            }

            @media screen and (min-width:320px) and (max-width: 767px) { 
                font-size: 12px;
                line-height: 96.1%;
                flex-wrap: wrap;
                align-items: baseline;
            }

            .footer__product__container {

                .footer__product__title {
                    font-weight: 400;
                    font-size: 28px;
                    line-height: 96.1%;
                    color: #FFFFFF;
                    margin-bottom: 33px;

                    @media screen and (min-width:768px) and (max-width: 1023px) { 
                        font-size: 22px;
                        margin-bottom: 24px;
                    }

                    @media screen and (min-width:320px) and (max-width: 767px) { 
                        font-size: 22px;
                        margin-bottom: 24px;
                    }
                }

                .footer__product__info {
                    margin-bottom: 10px;
                    line-height: 96.1%;
                    cursor: pointer;

                    @media screen and (min-width:768px) and (max-width: 1023px) { 
                        margin-bottom: 13px;
                    }

                    @media screen and (min-width:320px) and (max-width: 767px) { 
                        margin-bottom: 13px;
                    }

                    &:nth-of-type(4) {
                        margin-bottom: 56px;
                    }
                }
            }

            .footer__menu__container {
                display: flex;

                @media screen and (min-width:320px) and (max-width: 767px) { 
                    order: 2;
                    justify-content: space-between;
                    width: 450px;
                    padding-bottom: 64px;
                }

                .footer__menu {
                    margin-right: 150px;

                    @media screen and (min-width:1024px) and (max-width: 1310px) { 
                        margin-right: 85px;
                    }

                    @media screen and (min-width:768px) and (max-width: 1023px) { 
                        margin-right: 65px;
                    }

                    @media screen and (min-width:320px) and (max-width: 767px) { 
                        margin-right: 28.7px;
                    }

                    
                    @media screen and (min-width:375px) and (max-width: 424px) { 
                        margin-right: 54.7px;
                    }

                    @media screen and (min-width:425px) and (max-width: 767px) { 
                        margin-right: 103.7px;
                    }

                    .footer__menu__item {
                        margin-bottom: 10px;
                        cursor: pointer;
                        line-height: 96.1%;

                        &:last-of-type {
                            margin-bottom: 0;
                        }
                    }

                    &:nth-of-type(2) {
                        margin-right: 0;
                    }
                }
            }

            .footer__contact__container {

                .footer__contact__title {
                    font-weight: 400;
                    font-size: 28px;
                    line-height: 96.1%;
                    color: #FFFFFF;
                    margin-bottom: 33px;

                    @media screen and (min-width:768px) and (max-width: 1023px) { 
                        font-size: 22px;
                        margin-bottom: 24px;
                    }

                    @media screen and (min-width:320px) and (max-width: 767px) { 
                        font-size: 22px;
                        margin-bottom: 24px;
                    }

                }

                .footer__email {
                    margin-bottom: 12px;
                    cursor: pointer;
                    line-height: 96.1%;
                }

                .contact__cooperation__container {
                    margin-bottom: 21px;

                    .contact__cooperation__title {
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 126%;

                        @media screen and (min-width:768px) and (max-width: 1023px) {
                            font-size: 12px;
                            line-height: 126%;
                        }

                        @media screen and (min-width:320px) and (max-width: 767px) { 
                            font-size: 12px;
                            line-height: 126%;
                        }
                    }

                    .contact__cooperation__info {
                        cursor: pointer;
                        line-height: 96.1%;
                    }
                }

                .social__network__container {
                    display: flex;
                    align-items: center;

                    .social__network {
                        margin-right: 33px;
                        cursor: pointer;

                        @media screen and (min-width:768px) and (max-width: 1023px) { 
                            margin-right: 23px;
                            
                            &:nth-of-type(1) {
                                height: 20px;
                            }

                            &:nth-of-type(2) {
                                height: 14px;
                            }

                            &:nth-of-type(3) {
                                height: 18px;
                            }

                            &:nth-of-type(4) {
                                height: 14px;
                            }
                        }

                        @media screen and (min-width:320px) and (max-width: 767px) { 
                            margin-right: 23px;

                            &:nth-of-type(1) {
                                height: 20px;
                            }

                            &:nth-of-type(2) {
                                height: 14px;
                            }

                            &:nth-of-type(3) {
                                height: 18px;
                            }

                            &:nth-of-type(4) {
                                height: 14px;
                            }
                        }

                        &:last-of-type {
                            margin-right: 0;
                        }
                    }
                }
            }
        }

        .footer__copyright__container {
            padding-top: 19px;

            @media screen and (min-width:768px) and (max-width: 1023px) { 
                padding-top: 16px;
            }

            @media screen and (min-width:320px) and (max-width: 767px) { 
                padding-top: 15px;
            }

            .footer__copyright {
                line-height: 120%;
                max-width: 677px;

                @media screen and (min-width:768px) and (max-width: 1023px) { 
                    font-size: 12px;
                }

                @media screen and (min-width:320px) and (max-width: 767px) { 
                    font-size: 12px;
                }
            }
        }
    }
}
</style>