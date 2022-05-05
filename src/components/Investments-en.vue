<template>
    <div id="investments">
        <div class="container">
            <div class="investments__container">
                <div class="investments__title__container">
                    <h1 class="investments__title">
                        Investment plans
                        <span class="semi__bold">Avantis </span>
                        <span class="text__stroke">Trust</span>
                    </h1>
                </div>
                <div class="investments__table__container">
                    <table class="investments__table">
                        <div class="overflow__img">
                            <img class="overflow" src="@/assets/pictures/overflow.png" alt="overflow">
                        </div>
                        <tr>
                            <th>Deposit, USD</th>
                            <th>50 days,% per day</th>
                            <th>100 days,% per day</th>
                            <th>365 days,% per day</th>
                        </tr>
                        <tr>
                            <td>100-2000</td>
                            <td>0,3-0,4</td>
                            <td>0,5-0,6</td>
                            <td>0,7-0,8</td>
                        </tr>
                        <tr>
                            <td>2001-5000</td>
                            <td>0,4-0,5</td>
                            <td>0,7-0,8</td>
                            <td>0,9-1</td>
                        </tr>
                        <tr>
                            <td>5001-25000</td>
                            <td>0,6-0,7</td>
                            <td>1-1,1</td>
                            <td>1,2-1,3</td>
                        </tr>
                        <tr>
                            <td>25001 and above</td>
                            <td>0,8-0,9</td>
                            <td>1,2-1,3</td>
                            <td>1,6-1,8</td>
                        </tr>
                    </table>
                    <p class="investments__table__info">
                        *Initial investment returned at the end of validity of the tariff
                    </p>
                </div>
                <div class="investments__profit__container">
                    <h1 class="profit__title">
                        Calculate your potential profit
                    </h1>
                    <div class="investments__profit__info__container">
                        <div class="investments__profit__calculator__container">
                            <div class="investments__profit__calculator__gradient__frame">
                                <div class="wrapper">
                                    <div class="period__container">
                                        <p class="period__info">
                                            Choose the period
                                        </p>
                                        <div class="period__btn">
                                            <label>
                                                <input type="radio" name="test" style="display:none"/>
                                                <span class="period">50 days</span>
                                            </label>
                                            <label>
                                                <input type="radio" name="test" style="display:none"/>
                                                <span class="period">100 days</span>
                                            </label>
                                            <label>
                                                <input type="radio" name="test" style="display:none"/>
                                                <span class="period">365 days</span>
                                            </label>
                                        </div>
                                    </div>
                                    <input class="number" type="tel" v-model="value" placeholder="Enter of investment amount" />
                                    <p class="number__info">*The minimal amount of investment is 100 USD</p>
                                    <div class="range__container">
                                        <range-slider class="slider" id="myRange" type="range" min="100" max="1000000" step="100" v-model="value"/>
                                        <div class="slider__period__container">
                                            <p class="slider__period">
                                                100 USD
                                            </p>
                                            <p class="slider__period">
                                                1000000 USD
                                            </p>
                                        </div>
                                        <p class="total__info">
                                        Quick amount selection
                                        </p>
                                        <span class="total" v-text="total"></span>
                                    </div>
                                    <input type="submit" value="Invest now" class="submit">
                                </div>
                            </div>
                        </div>
                        <div class="investments__estimation__gradient__frame">
                            <div class="investments__estimation__container">
                            <h1 class="investments__estimation__title">
                                Preliminary calculation
                            </h1>
                            <ul class="investments__estimation__list">
                                <li class="list">15 <span class="persent">$ <span class="slash">/</span></span><span class="estimation__period">per day</span></li>
                                <li class="list">150 <span class="persent">$ <span class="slash">/</span></span><span class="estimation__period">per week</span></li>
                                <li class="list">1500 <span class="persent">$ <span class="slash">/</span></span><span class="estimation__period">per month</span></li>
                                <li class="list">15000 <span class="persent">$ <span class="slash">/</span></span><span class="estimation__period">per year</span></li>
                            </ul>
                            <div class="daily__percentage__container">
                                <h1 class="daily__percentage__title">
                                    Daily percentage
                                </h1>
                                <p class="daily__percentage__paragraph">
                                    1,2%
                                </p>
                                <div class="cryptocurrency">
                                    <img class="monero__bot" src="@/assets/pictures/monero__bot.png" alt="monero">
                                    <img class="bitcoin__bot" src="@/assets/pictures/bitcoin__bot.png" alt="bitcoin">
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import RangeSlider from "vue-range-slider";
    import "vue-range-slider/dist/vue-range-slider.css";

    export default {
        components: {
          RangeSlider
        },

        data() {
            return {
                value: ""
            }
        },
        computed: {
            total: function () {
                return this.value + "  "+"USD"
            }
        }
    }
</script>

<style lang="scss" scoped>
#investments {
    color: #fff;

    .investments__container {
        padding-bottom: 145px;
        max-width: 1440px;
        margin: 0 auto;

        @media screen and (min-width:1024px) and (max-width: 1310px) { 
            padding-bottom: 155px;
        }

        @media screen and (min-width:768px) and (max-width: 1023px) { 
            padding-bottom: 71px;
        }

        @media screen and (min-width:320px) and (max-width: 767px) { 
            padding-bottom: 71px;
        }

        .investments__title__container {
            position: relative;
            margin-left: 30px;
            margin-bottom: 52px;

            @media screen and (min-width:1024px) and (max-width: 1310px) { 
                margin-bottom: 33px;
            }

            @media screen and (min-width:768px) and (max-width: 1023px) { 
                margin-bottom: 32px;
            }

            @media screen and (min-width:320px) and (max-width: 767px) { 
                margin-bottom: 42px;
            }

            .investments__title {
                font-weight: 300;
                font-size: 70px;
                line-height: 50%;
                width: 621px;

                @media screen and (min-width:1024px) and (max-width: 1310px) { 
                    font-size: 40px;
                    line-height: 95%;
                    width: 550px;
                }

                @media screen and (min-width:768px) and (max-width: 1023px) { 
                    font-size: 30px;
                    line-height: 95%;
                    width: 270px;
                }

                @media screen and (min-width:320px) and (max-width: 767px) { 
                    font-size: 30px;
                    line-height: 95%;
                    width: 275px;
                }

                .semi__bold {
                    font-weight: 600;
                    line-height: 106px;

                    @media screen and (min-width:1024px) and (max-width: 1310px) { 
                        line-height: 61px;
                    }

                    @media screen and (min-width:768px) and (max-width: 1023px) { 
                        line-height: 37px;
                    }

                    @media screen and (min-width:320px) and (max-width: 767px) { 
                        line-height: 40px;
                    }
                }

                .text__stroke {
                    font-weight: 600;
                    color: transparent;
                    -webkit-text-stroke: 1px #fff;

                    @media screen and (min-width:1024px) and (max-width: 1310px) { 
                        line-height: 61px;
                    }

                    @media screen and (min-width:768px) and (max-width: 1023px) { 
                        line-height: 37px;
                    }
                }

                &::before {
                    content: "";
                    width: 116px;
                    height: 0px;
                    border: 4px solid #D46BFE;
                    background: #D46BFE;
                    transform: rotate(90deg);
                    position: absolute;
                    left: -85px;
                    top: 50px;

                    @media screen and (min-width:1024px) and (max-width: 1310px) { 
                        left: -65px;
                        top: 40px;
                        width: 80px;
                    }

                    @media screen and (min-width:768px) and (max-width: 1023px) { 
                        width: 49px;
                        left: -48px;
                        top: 25px;
                    }

                    @media screen and (min-width:320px) and (max-width: 767px) { 
                        left: -55px;
                        top: 29px;
                        width: 66px;
                    }
                }
            }

        }

        .investments__table__container {
            

            .investments__table {
                border-spacing: 0;
                width: 100%;
                text-align: left;
            
                .overflow__img {
                    display: none;

                    @media screen and (min-width:320px) and (max-width: 767px) { 
                        display: flex;
                        position: absolute;
                        align-items: center;
                        justify-content: center;
                        width: 300px;
                        height: 175px;
                        left: 5%;

                        &:active,
                        &:hover,
                        &:focus {
                            opacity: 0;
                        }
                    }

                    @media screen and (min-width:375px) and (max-width: 424px) { 
                        left: 10%;
                    }

                    @media screen and (min-width:425px) and (max-width: 767px) { 
                        left: 15%;
                    }

                    @media screen and (min-width:355px) and (max-width: 374px) { 
                        left: 8%;
                    }
                }

                @media screen and (min-width:320px) and (max-width: 767px) { 
                    display: block;
                    overflow-x: auto;
                    white-space: nowrap;
                    position: relative;

                    &::-webkit-scrollbar {
                        display: none;
                    }
                }
            
                th {
                    border-right: 1px solid rgba(182, 182, 221, 0.5);
                    font-size: 28px;
                    line-height: 96.1%;
                    font-weight: 400;
                    color: #D46BFE;
                    padding: 5px 65px 15px 20px;

                    @media screen and (min-width:1024px) and (max-width: 1310px) { 
                        font-size: 22px;
                        line-height: 96.1%;
                        padding-right: 10px;
                        width: 240px;
                        text-align: left;
                    }

                    @media screen and (min-width:768px) and (max-width: 1023px) { 
                        font-size: 14px;
                        padding-right: 60px;
                        padding-bottom: 5px;
                        padding-left: 15px;
                    }

                    @media screen and (min-width:320px) and (max-width: 767px) { 
                        font-size: 14px;
                        padding: 0 15px 0 10px;
                        height: 35px;
                        text-align: left;
                    }

                    &:first-of-type {
                        padding-left: 0;
                        padding-right: 35px;

                        @media screen and (min-width:1024px) and (max-width: 1310px) { 
                            padding-right: 54px;
                        }

                        @media screen and (min-width:768px) and (max-width: 1023px) { 
                            padding-right: 60px;
                        }

                        @media screen and (min-width:320px) and (max-width: 767px) { 
                            padding-right: 15px;
                        }
                    }

                    &:nth-of-type(4) {
                        border-right: 0;
                    }
                }

                td {
                    border-top: 1px solid rgba(182, 182, 221, 0.5);
                    border-right: 1px solid rgba(182, 182, 221, 0.5);
                    padding: 12px 25px 9px 20px;

                    &:first-of-type {
                        padding-left: 0;
                    }

                    &:nth-of-type(4){
                        border-right: 0;
                    }

                    &:nth-of-type(5){
                        border-bottom: 0;
                    }

                    @media screen and (min-width:320px) and (max-width: 767px) { 
                        height: 35px;
                        padding: 0 15px 0 10px;
                    }
                }

                tr {
                    font-size: 22px;
                    line-height: 96.1%;
                    font-weight: 400;

                    @media screen and (min-width:768px) and (max-width: 1023px) { 
                        font-size: 14px;
                    }

                    @media screen and (min-width:320px) and (max-width: 767px) { 
                        font-size: 14px;
                    }
                }
            }

            .investments__table__info {
                margin-top: 18px;
                line-height: 96.1%;
                color: #B6B6DD;

                @media screen and (min-width:1024px) and (max-width: 1310px) { 
                    margin-top: 28px;
                }

                @media screen and (min-width:768px) and (max-width: 1023px) { 
                    margin-top: 17px;
                    font-size: 12px;
                }

                @media screen and (min-width:320px) and (max-width: 767px) { 
                    margin-top: 20px;
                    font-size: 12px;
                }
            }
        }

        .investments__profit__container {
            display: flex;
            flex-direction: column;
            align-items: center;

            .profit__title {
                font-weight: 400;
                font-size: 40px;
                line-height: 95%;
                margin-top: 38px;
                margin-bottom: 23px;

                @media screen and (min-width:768px) and (max-width: 1023px) { 
                    font-size: 20px;
                    line-height: 95%;
                    margin-bottom: 27px;
                }

                @media screen and (min-width:320px) and (max-width: 767px) { 
                    margin-top: 20px;
                    margin-bottom: 11px;
                    font-size: 20px;
                    line-height: 95%;
                    text-align: center;
                }
            }

            .investments__profit__info__container {
                display: flex;

                @media screen and (min-width:320px) and (max-width: 767px) { 
                    flex-direction: column;
                    align-items: center;
                }

                .investments__profit__calculator__container {
                    margin-right: 47px;

                    @media screen and (min-width:1024px) and (max-width: 1310px) { 
                        margin-right: 24px;
                    }

                    @media screen and (min-width:768px) and (max-width: 1023px) { 
                        margin-right: 17px;
                    }

                    @media screen and (min-width:320px) and (max-width: 767px) { 
                        margin-right: 0;
                    }

                    .investments__profit__calculator__gradient__frame {
                        height: 442px;
                        width: 568px;
                        border-radius: 12px;
                        background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(255,255,255,0.42) 400%);
                        box-shadow: 0px 4px 49px rgba(0, 0, 0, 0.3);

                        @media screen and (min-width:768px) and (max-width: 1023px) { 
                            width: 300px;
                            height: 350px;
                        }

                        @media screen and (min-width:320px) and (max-width: 767px) { 
                            max-width: 300px;
                            border-radius: 8px;
                            height: 350px;
                            margin-bottom: 11px;
                        }

                        @media screen and (min-width:350px) and (max-width: 374px) { 
                            max-width: 340px;
                        }

                        @media screen and (min-width:375px) and (max-width: 399px) { 
                            max-width: 355px;
                        }

                        @media screen and (min-width:400px) and (max-width: 767px) { 
                            max-width: 390px;
                        }

                        .wrapper {
                            display: flex;
                            flex-direction: column;
                            height: 440px;
                            width: 566px;
                            background: radial-gradient(119.49% 119.49% at 2.96% 5.05%, rgba(101, 101, 121, 0.8) 0%, rgba(40, 40, 57, 0.8) 100%);
                            backdrop-filter: blur(21px);
                            border-radius: 12px;
                            padding: 30px 38px;

                            @media screen and (min-width:768px) and (max-width: 1023px) { 
                                width: 298px;
                                height: 348px;
                                padding: 20px 17px;
                            }

                            @media screen and (min-width:320px) and (max-width: 767px) { 
                                max-width: 298px;
                                padding: 20px 17px;
                                border-radius: 8px;
                                height: 348px;
                            }

                            @media screen and (min-width:350px) and (max-width: 374px) { 
                                max-width: 338px;
                            }
                            
                            @media screen and (min-width:375px) and (max-width: 399px) { 
                                max-width: 353px;
                            }

                            @media screen and (min-width:400px) and (max-width: 767px) { 
                                max-width: 388px;
                            }

                            .period__container {
                                border-bottom: 1px solid #262637;
                                order: -1;
                                margin-bottom: 16px;
                                padding-bottom: 16px;

                                @media screen and (min-width:768px) and (max-width: 1023px) { 
                                    margin-bottom: 10px;
                                    padding-bottom: 10px;
                                }

                                @media screen and (min-width:320px) and (max-width: 767px) { 
                                    margin-bottom: 11px;
                                    padding-bottom: 10px;
                                }

                                .period__info {
                                    font-weight: 400;
                                    font-size: 24px;
                                    line-height: 96.1%;
                                    color: #FFFFFF;
                                    margin-bottom: 13px;

                                    @media screen and (min-width:768px) and (max-width: 1023px) { 
                                        font-size: 16px;
                                        margin-bottom: 10px;
                                    }

                                    @media screen and (min-width:320px) and (max-width: 767px) { 
                                        font-size: 16px;
                                        margin-bottom: 10px;
                                    }
                                }

                                .period__btn {
                                    display:flex;
                                    width: 100%;
                                    justify-content: space-between;

                                    .period {
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                        width: 154px;
                                        height: 48px;
                                        background: #262637;
                                        box-sizing: border-box;
                                        box-shadow: inset -2px -2px 4px rgba(255, 255, 255, 0.15), inset 2px 2px 4px rgba(0, 0, 0, 0.15);
                                        border-radius: 8px;
                                        font-weight: 400;
                                        font-size: 18px;
                                        line-height: 96.1%;
                                        text-align: center;
                                        color: #FFFFFF;
                                        cursor: pointer;
                                        border: 0;

                                        @media screen and (min-width:768px) and (max-width: 1023px) { 
                                            width: 84px;
                                            height: 34px;
                                            font-size: 14px;
                                        }

                                        @media screen and (min-width:320px) and (max-width: 767px) { 
                                            width: 84px;
                                            height: 34px;
                                            font-size: 14px;
                                            border-radius: 6px;
                                        }
                                    }

                                    label input[type="radio"]:checked + .period {
                                        border: 1px solid #FFFFFF;
                                    }
                                }

                            }

                            .range__container {
                                display:flex;
                                flex-direction: column;
                                background: #262637;
                                box-shadow: inset -2px -2px 4px rgba(255, 255, 255,   0.15), inset 2px 2px 4px rgba(0, 0, 0, 0.15);
                                border-radius: 8px;
                                padding-left: 13px;
                                padding-right: 24px;
                                padding-bottom: 15px;
                                margin-bottom: 19px;

                                @media screen and (min-width:1024px) and (max-width: 1310px) { 
                                    padding-left: 12px;
                                    padding-right: 22px;
                                }

                                @media screen and (min-width:768px) and (max-width: 1023px) { 
                                    padding-right: 16px;
                                    padding-bottom: 11px;
                                    padding-left: 15px;
                                    margin-bottom: 8px;
                                }

                                @media screen and (min-width:320px) and (max-width: 767px) { 
                                    padding-right: 16px;
                                    padding-bottom: 11px;
                                    padding-left: 15px;
                                    margin-bottom: 8px;
                                }

                                .slider {
                                    width: 98%;
                                    height: 5px;
                                    border-radius: 12px;

                                    @media screen and (min-width:768px) and (max-width: 1023px) { 
                                        width: 97%;
                                    }
                                    
                                    @media screen and (min-width:320px) and (max-width: 767px) { 
                                        width: 97%;
                                    }

                                    &.range-slider::v-deep {
                                    position: relative;
                                    top: -10px;

                                        .range-slider-inner {
                                            position: absolute;
                                            width: 98%;

                                            @media screen and (min-width:768px) and (max-width: 1023px) { 
                                                width: 97%;
                                            }

                                            @media screen and (min-width:320px) and (max-width: 767px) { 
                                                width: 97%;
                                            }
                                        }

                                        .range-slider-rail {
                                            background-color: #696977 ;
                                            height: inherit;
                                        }

                                        .range-slider-fill {
                                            background-color: #D46BFE;
                                            height: 5px;
                                        }

                                        .range-slider-knob {
                                            background-color: #D46BFE;
                                            width: 12px;
                                            height: 12px;
                                        }
                                    }
                                }

                                .slider__period__container {
                                    display: flex;
                                    justify-content: space-between;
                                    font-size: 10px;
                                    line-height: 96.1%;
                                    color: #B6B6DD;
                                    width: 100%;
                                    margin-top: 6px;
                                }

                                .total__info {
                                    order: -2;
                                    font-size: 14px;
                                    line-height: 96.1%;
                                    text-align: center;
                                    color: #B6B6DD;
                                    margin-top: 11px;

                                    @media screen and (min-width:768px) and (max-width: 1023px) { 
                                        font-size: 12px;
                                    }

                                    @media screen and (min-width:320px) and (max-width: 767px) { 
                                        font-size: 12px;
                                    }
                                }

                                .total {
                                    order: -1;
                                    color: #FFFFFF;
                                    font-weight: 400;
                                    font-size: 24px;
                                    line-height: 96.1%;
                                    text-align: center;
                                    margin-top: 6px;
                                    margin-bottom: 22px;

                                    @media screen and (min-width:768px) and (max-width: 1023px) { 
                                        font-size: 20px;
                                    }

                                    @media screen and (min-width:320px) and (max-width: 767px) { 
                                        font-size: 20px;
                                        margin-bottom: 25px;
                                    }
                                }
                            }

                            .submit {
                                width: 300px;
                                height: 54px;
                                padding-top: 17px;
                                padding-bottom: 18px;
                                border: 1px solid #FFFFFF;
                                box-sizing: border-box;
                                border-radius: 8px;
                                background: transparent;
                                font-weight: 400;
                                font-size: 20px;
                                line-height: 96.1%;
                                color: #FFFFFF;
                                margin: 0 auto;
                                cursor: pointer;
                                transition: all .5s ease-in-out;

                                @media screen and (min-width:768px) and (max-width: 1023px) { 
                                    width: 265px;
                                }

                                @media screen and (min-width:320px) and (max-width: 767px) { 
                                    width: 265px;
                                }

                                &:hover {
                                    background: #b6b6dd2b;
                                }

                                &:focus {
                                    box-shadow: 3px 3px 3px #B6B6DD;
                                    background: transparent;
                                }
                            }

                            .number {
                                background: #262637;
                                box-shadow: inset -2px -2px 4px rgba(255, 255, 255, 0.15), inset 2px 2px 4px rgba(0, 0, 0, 0.15);
                                border-radius: 8px;
                                color: #B6B6DD;
                                order: -1;
                                height: 48px;
                                padding-left: 16px;
                                padding-top: 16px;
                                padding-bottom: 17px;
                                padding-right: 0;
                                border: 0;

                                @media screen and (min-width:768px) and (max-width: 1023px) { 
                                    padding-top: 10px;
                                    padding-bottom: 9px;
                                    font-size: 12px;
                                }

                                @media screen and (min-width:320px) and (max-width: 767px) { 
                                    padding-top: 10px;
                                    padding-bottom: 9px;
                                    font-size: 12px;
                                    height: 34px;
                                }

                                &::placeholder {
                                    color: #B6B6DD;
                                }
                            }

                            .number__info {
                                order: -1;
                                font-weight: 400;
                                font-size: 14px;
                                line-height: 96.1%;
                                color: #B6B6DD;
                                margin-top: 7px;
                                margin-bottom: 16px;

                                @media screen and (min-width:768px) and (max-width: 1023px) { 
                                    font-size: 12px;
                                    line-height: 96.1%;
                                    margin-top: 8px;
                                    margin-bottom: 9px;
                                    margin-left: 15px;
                                }

                                @media screen and (min-width:320px) and (max-width: 767px) { 
                                    font-size: 12px;
                                    margin-top: 8px;
                                    margin-bottom: 9px;
                                    margin-left: 15px;
                                }
                            }
                        }
                    }
                }
                
                .investments__estimation__gradient__frame {
                    border-radius: 12px;
                    background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(255,255,255,0.42) 400%);
                    width: 378px;
                    height: 442px;
                    display: flex;

                    @media screen and (min-width:1024px) and (max-width: 1310px) { 
                        width: 336px;
                    }

                    @media screen and (min-width:768px) and (max-width: 1023px) {
                        height: 350px;
                        width: 279px;
                    }

                    @media screen and (min-width:320px) and (max-width: 767px) { 
                        max-width: 300px;
                        border-radius: 8px;
                        height: 352px;
                    }

                    @media screen and (min-width:350px) and (max-width: 374px) {
                        max-width: 340px;
                    }

                    @media screen and (min-width:375px) and (max-width: 399px) {
                        max-width: 355px;
                    }

                    @media screen and (min-width:400px) and (max-width: 767px) { 
                        width: 390px;
                        max-width: unset;
                    }

                    .investments__estimation__container {
                        display: flex;
                        flex-direction: column;
                        background: radial-gradient(119.49% 119.49% at 2.96% 5.05%, rgba(101, 101, 121, 0.8) 0%, rgba(40, 40, 57, 0.8) 100%);
                        box-shadow: 0px 4px 49px rgba(0, 0, 0, 0.3);
                        padding-top: 29px;
                        backdrop-filter: blur(21px);
                        border-radius: 12px;
                        position: relative;
                        height: 440px;

                        @media screen and (min-width:1024px) and (max-width: 1310px) { 
                            width: 334px;
                        }

                        @media screen and (min-width:768px) and (max-width: 1023px) {
                            height: 348px;
                            width: 277px;
                        }

                        @media screen and (min-width:320px) and (max-width: 767px) { 
                            width: 298px;
                            border-radius: 8px;
                            height: 350px;
                        }

                        @media screen and (min-width:350px) and (max-width: 374px) { 
                            width: 338px;
                        }
                            
                        @media screen and (min-width:375px) and (max-width: 399px) { 
                            width: 353px;
                        }

                        @media screen and (min-width:400px) and (max-width: 767px) { 
                            width: 388px;
                        }

                        .investments__estimation__title {
                            font-weight: 400;
                            font-size: 24px;
                            line-height: 96.1%;
                            padding-bottom: 18px;
                            border-bottom: 1px solid #262637;
                            margin-left: 33px;
                            margin-right: 74px;

                            @media screen and (min-width:1024px) and (max-width: 1310px) { 
                                margin-right: 25px;
                            }

                            @media screen and (min-width:768px) and (max-width: 1023px) {
                                font-size: 16px;
                                margin-left: 17px;
                                margin-right: 17px;
                                padding-bottom: 10px;
                            } 

                            @media screen and (min-width:320px) and (max-width: 767px) { 
                                font-size: 16px;
                                margin-left: 17px;
                                margin-right: 17px;
                                padding-bottom: 10px;
                            }
                        }

                        .investments__estimation__list {
                            font-weight: 600;
                            font-size: 30px;
                            line-height: 96.1%;
                            margin-top: 21px;
                            margin-left: 33px;
                            margin-right: 75px;
                            margin-bottom: 37px;

                            @media screen and (min-width:1024px) and (max-width: 1310px) { 
                                margin-right: 23px;
                            }

                            @media screen and (min-width:768px) and (max-width: 1023px) {
                                font-size: 20px;
                                margin-left: 17px;
                                padding-bottom: 10px;
                                margin-bottom: 42px;
                            }

                            @media screen and (min-width:320px) and (max-width: 767px) { 
                                margin-left: 20px;
                                font-size: 20px;
                                margin-right: 0;
                                margin-bottom: 24px;
                            }

                            .list {
                                list-style: url(../assets/pictures/check.png);
                                margin-left: 38px;
                                margin-bottom: 25px;

                                @media screen and (min-width:768px) and (max-width: 1023px) {
                                    list-style: url(../assets/pictures/check__768.png);
                                    margin-left: 22px;
                                    margin-bottom: 14px;
                                }  

                                @media screen and (min-width:320px) and (max-width: 767px) { 
                                    list-style: url(../assets/pictures/check__320.png);
                                    margin-left: 20px;
                                    padding-left: 3px;
                                }

                                &:last-child {
                                    margin-bottom: 0;
                                }

                                .persent {
                                    font-size: 20px;
                                    line-height: 96.1%;
                                    margin-left: 5px;
                                    margin-right: 5px;

                                    @media screen and (min-width:768px) and (max-width: 1023px) {
                                        font-size: 10px;
                                        margin-left: 3px;
                                    }

                                    @media screen and (min-width:320px) and (max-width: 767px) { 
                                        font-size: 8px;
                                        margin-left: 3px;
                                    }

                                    .slash {
                                        font-size: 30px;
                                        margin-left: 5px;
                                        
                                        @media screen and (min-width:768px) and (max-width: 1023px) {
                                            font-size: 20px;
                                        }

                                        @media screen and (min-width:320px) and (max-width: 767px) { 
                                            font-size: 20px;
                                        }
                                    }
                                }

                                .estimation__period {
                                    font-weight: 400;
                                    font-size: 24px;
                                    line-height: 96.1%;
                                    margin-left: 6px;

                                    @media screen and (min-width:768px) and (max-width: 1023px) {
                                        font-size: 16px;
                                        margin-left: 0;
                                    }

                                    @media screen and (min-width:320px) and (max-width: 767px) { 
                                        font-size: 16px;
                                        margin-left: 0;
                                    }
                                }
                            }

                        }

                        .daily__percentage__container {
                            background: url(../assets/pictures/bot_banner.png);
                            height: 133px;
                            border-bottom-left-radius: 12px;
                            border-bottom-right-radius: 12px;
                            padding-top: 21px;
                            padding-left: 37px;

                            @media screen and (min-width:768px) and (max-width: 1023px) { 
                                padding-left: 20px;
                                height: 100px;
                                border-bottom-left-radius: 8px;
                                border-bottom-right-radius: 8px;
                            }

                            @media screen and (min-width:320px) and (max-width: 767px) { 
                                padding-left: 20px;
                                padding-top: 14px;
                                height: 100px;
                                border-bottom-left-radius: 8px;
                                border-bottom-right-radius: 8px;
                            }

                            .daily__percentage__title {
                                font-size: 14px;
                                line-height: 96.1%;
                                font-weight: 400;
                            }

                            .daily__percentage__paragraph {
                                font-weight: 600;
                                font-size: 64px;
                                line-height: 96.1%;

                                @media screen and (min-width:768px) and (max-width: 1023px) { 
                                    font-size: 50px;
                                    margin-top: 3px;
                                }

                                @media screen and (min-width:320px) and (max-width: 767px) { 
                                    font-size: 50px;
                                    margin-top: 3px;
                                }
                            }

                            .cryptocurrency {
                                position: absolute;
                                top: 284px;
                                left: 185px;

                                @media screen and (min-width:1024px) and (max-width: 1310px) { 
                                    left: 160px;
                                }

                                @media screen and (min-width:768px) and (max-width: 1023px) {
                                    top: 245.5px;
                                    left: 170px;
                                }

                                @media screen and (min-width:320px) and (max-width: 767px) { 
                                    top: 248.5px;
                                }

                                .monero__bot {
                                    position: absolute;
                                    top: 96px;
                                    width: 92px;
                                    z-index: 777;

                                    @media screen and (min-width:768px) and (max-width: 1023px) {
                                        width: 58px;
                                        top: 64.5px;
                                    }

                                    @media screen and (min-width:320px) and (max-width: 767px) { 
                                        width: 58px;
                                        top: 64.5px;
                                    }
                                }

                                .bitcoin__bot {
                                    width: 175px;
                                    position: absolute;
                                    top: 11px;

                                    @media screen and (min-width:768px) and (max-width: 1023px) {
                                        width: 110px;
                                    }

                                    @media screen and (min-width:320px) and (max-width: 767px) { 
                                        width: 110px;
                                    }
                                }
                            }
                        }

                    }
                }
            }
        }

    }
}
</style>
