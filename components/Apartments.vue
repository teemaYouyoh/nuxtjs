<template>
<div id="firstDisplay" class="firstDisplay display section fp-section active fp-completely" data-fp-styles="null" style="height: 1026px;">
        <div class="leftBlock">
            <div class="content">
                <span class="title">
                    ЖК 3 Квартала
                </span>

                <span class="heading">
                    Квартиры 4,5 <span>млн</span> <br>  за 42 м<sup>2</sup>
                </span>
                <br>
                <span class="menuTitle">
                    10 минут  от метро
                </span>

                <ul>
                    <li>Домодедовская, Зябликово </li>
                    <li>Красногвардейская</li>
                </ul>
            </div>
        </div>

        <div class="rightBlock">
            <div class="left">
                <div class="card">
                    <span class="img">
                        <img src="../assets/Img/home-icon.svg" alt="">
                    </span>
                    <span class="Big">
                        50
                        <span>
                            га.
                        </span>
                    </span>

                    <span class="small">
                        Благоустроенная территория
                    </span>
                </div>
            </div>

            <div class="right">
                <div class="card">
                    <span class="img">
                        <img src="../assets/Img/heart-icon.svg" alt="">
                    </span>
                    <span class="Big">
                        3.5
                        <span>
                            т.
                        </span>
                    </span>

                    <span class="small">
                        Cчастливых  <br> семей.
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.firstDisplay{
        width: 1400px;
        margin: 0 auto;
        display: flex;
        height: 100%;
        .leftBlock{
            position: relative;
            display: flex;
            z-index: 50;
            width: 605px;
            height: 100%;
            flex-direction: column;
            justify-content: center;
            .content{
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: center;
                .title{
                    font-family: "Geometria", sans-serif;
                    font-style: normal;
                    font-weight: 800;
                    font-size: 18px;
                    line-height: 150%;
                    /* identical to box height, or 27px */

                    display: flex;
                    align-items: center;
                    letter-spacing: -0.03em;
                    margin-top: -80px;

                    /* Grayscale / Title-Active */

                    color: #14142B;
                }

                .heading{
                    font-family:"Avenir-bold", sans-serif;
                    font-style: normal;
                    font-weight: 800;
                    font-size: 63px;
                    //CHANGE LATER TO 72PX
                    line-height: 120%;

                    width: 700px;
                    /* or 79px */
                    margin-top: 31px !important;
                    letter-spacing: -0.03em;

                    color: #0B315E;
                }
                width: 100%;
                height: 100%;

                .menuTitle{
                    font-family: "Geometria", sans-serif;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 24px;
                    line-height: 150%;
                    /* identical to box height, or 36px */
                    margin-top: 40px;
                    letter-spacing: -0.03em;

                    /* Grayscale / Title-Active */

                    color: #14142B;
                }
                ul{
                    padding: 0;
                    margin: 0;
                    height: 0;
                    list-style-type: none;
                    li{
                        position: relative;
                        display: flex;
                        align-items: center;
                        &::before{
                            content: '';
                            position: absolute;
                            width: 12px;
                            height: 12px;
                            left: -25px;
                            align-self: center;
                            background: #0A6F20;
                            border-radius: 50%;
                        }
                        margin-top: 15px;
                        margin-left: 25px;
                        font-family: "Geometria", sans-serif;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 18px;
                        line-height: 150%;
                        /* identical to box height, or 27px */


                        /* Темный */

                        color: #0B315E;
                    }
                }
            }
        }

        position: relative;
        .rightBlock{
            width: 100%;
            z-index: 10;
            height: 100%;
            position: absolute;
            right: -255px;
            bottom: 0;
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
            .left{
                display: flex;
                justify-content: flex-end;
                align-items: flex-end;
                width: 330px;
                height:747px;
                background-image: url('../assets/Img/display1left.png');
                background-repeat: repeat-x;
                background-size: cover;
                .card{
                    width: 62.7%;
                    height: 29.48%;
                    min-width: 217px;
                    min-height: 207px;
                    background: #00BA88;
                    padding: 32px;
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    .img{
                        width: 24px;
                        height: 24px;
                    }
                    .Big{
                        display: flex;
                        align-items: flex-end;
                        font-family: "Avenir-heavy", sans-serif;
                        font-style: normal;
                        font-weight: 800;
                        font-size: 48px;
                        line-height: 150%;
                        /* identical to box height, or 72px */

                        display: flex;
                        align-items: center;
                        letter-spacing: -0.03em;

                        /* Белый */

                        color: #FFFFFF;
                        span{
                            margin-top: 14px;
                            font-size: 24px;
                        }
                    }
                    .small{
                        font-family: "Avenir-heavy", sans-serif;
                        font-style: normal;
                        font-weight: 800;
                        font-size: 18px;
                        line-height: 150%;
                        /* or 27px */

                        display: flex;
                        align-items: center;

                        /* Белый */

                        color: #FFFFFF;
                    }
                }

            }

            .right{
                margin-left: 30px;
                display: flex;
                justify-content: flex-start;
                align-items: flex-end;
                width: 825px;
                height: 909px;
                background-image: url('../assets/Img/display1right.png');
                background-repeat: repeat-x;
                background-size: cover;
                .card{
                    width: 25%;
                    height: 24.3%;
                    min-width: 217px;
                    min-height: 207px;
                    background: #0B315E;
                    padding: 32px;
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    .img{
                        width: 24px;
                        height: 24px;
                    }
                    .Big{
                        display: flex;
                        align-items: flex-end;
                        font-family: "Avenir", sans-serif;
                        font-style: normal;
                        font-weight: 800;
                        font-size: 48px;
                        line-height: 150%;
                        /* identical to box height, or 72px */

                        display: flex;
                        align-items: center;
                        letter-spacing: -0.03em;

                        /* Белый */

                        color: #FFFFFF;
                        span{
                            margin-top: 14px;
                            font-size: 24px;
                        }
                    }
                    .small{
                        font-family: "Avenir-heavy", sans-serif;
                        font-style: normal;
                        font-weight: 800;
                        font-size: 18px;
                        line-height: 150%;
                        /* or 27px */

                        display: flex;
                        align-items: center;

                        /* Белый */

                        color: #FFFFFF;
                    }
                }
            }
            align-self: flex-end;
        }
    }






@media(max-width:1500px){
  .firstDisplay{
        width: 100%;
        box-sizing: border-box;
        padding: 0 50px;
    }
}




@media(max-width:1199px){
  .firstDisplay{
            height: 100%;
            .leftBlock{
                width: 100%;
            }
            .rightBlock{
                background:url('../assets/Img/display1mobile.png');
                background-size: cover;

                position: absolute;
                width: 100%;
                left:0;
                right: 0;
                .left{
                    height: 100%;
                    width: 50%;
                    background:none;
                    .card{
                        width: 25%;
                        height: 24.3%;
                    }
                }
                .right{
                    height: 100%;
                    background:none;
                    width: 50%;
                margin-left: 0;                }
            }
        }

  .firstDisplay{
            padding: 0 15px;
            .leftBlock{
                .content{
                    .title{
                        display: none;
                    }
                    .heading{
                        margin-top: -120px !important;

                        font-family: "Avenir", sans-serif;
                        font-style: normal;
                        font-weight: 800;
                        font-size: 36px;
                        line-height: 90%;
                        /* or 43px */

                        letter-spacing: -0.03em;

                        /* Темный */

                        color: #0B315E;
                        span{
                            font-size: 30px;
                        }
                    }

                    .menuTitle{
                        margin-top: 20px;
                        font-family: "Geometria", sans-serif;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 18px;
                        line-height: 150%;
                        /* identical to box height, or 27px */

                        letter-spacing: -0.03em;

                        /* Grayscale / Title-Active */

                        color: #14142B;
                    }

                    ul{
                        li{
                            font-family: "Geometria", sans-serif;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 14px;
                            line-height: 150%;
                            /* identical to box height, or 21px */
                            margin-top: 2px;
                            letter-spacing: -0.03em;

                            /* Grayscale / Title-Active */

                            color: #14142B;
                        }
                    }
                }
            }

            .rightBlock{
                padding: 0 15px;
                box-sizing: border-box;
                .left{
                    .card{
                        box-sizing: border-box;
                        padding:10px 14px 0;
                        min-width: 145px;
                        min-height: 150px;
                        width: 100%;
                        justify-content: center ;
                        .Big{
                            font-size: 36px;
                            line-height: 100%;
                            span{
                                margin-top: 8px;
                            }
                        }
                        .small{
                            font-size: 14px;
                        }
                    }
                }
                .right{
                    .card{
                        justify-content: center !important;
                        box-sizing: border-box;
                        padding:10px 14px 0;
                        min-width: 145px;
                        min-height: 150px;
                        width: 100%;
                        .Big{
                            font-size: 36px;
                            line-height: 100%;
                            span{
                                margin-top: 8px;
                            }
                        }
                        .small{
                            font-size: 14px;
                        }
                    }
                }
            }
        }
}



@media(max-width:700px){
    .firstDisplay{
        padding: 0 25px;
        .leftBlock{
            .content{
                .heading{
                    width: 100%;
                    span{
                        font-size: 50px;
                    }
                }
            }
        }
    }
}
@media(max-width:500px){
.firstDisplay{
        padding: 0 25px;
        .leftBlock{
            .content{
                .title{
                    margin-top: -160px;
                }
                .heading{
                    font-size: 56px;
                    span{
                        font-size: 46px;
                    }
                }
            }
        }
    }
}
</style>
