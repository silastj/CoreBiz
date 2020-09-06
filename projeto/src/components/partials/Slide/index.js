import React, { Component } from "react";
import Slider from "react-slick";
import { Slide } from './styled';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        }
      ]
    };

    return (
        <Slide>
            <div>
                <Slider {...settings}>
                <div className="slideOne">
                    <div className="imgDice">
                        <h3>Olá, o que você está buscando?</h3>
                        <h2>Criar ou migrar seu e-commerce</h2>
                    </div>
                     <img src="/assets/img/banner.png" alt=""/>
                </div>
                <div className="slideTwo">
                    <div className="imgDiceTwo">
                        <h3>Olá, o que você está buscando?</h3>
                        <h2>Criar ou migrar seu e-commerce</h2>
                    </div>
                    <img src="/assets/img/mobilef.png" alt=""/>                    
                </div>





                <div className="slideOne ">
                    <div className="imgDice">
                        <h3>Olá, o que você está buscando?</h3>
                        <h2>Criar ou migrar seu e-commerce</h2>
                    </div>
                     <img src="/assets/img/banner.png" alt=""/>
                </div>

                <div className="slideTwo">
                    <div className="imgDiceTwo">
                        <h3>Olá, o que você está buscando?</h3>
                        <h2>Criar ou migrar seu e-commerce</h2>
                    </div>
                     <img src="/assets/img/mobileF.png" alt=""/>
                </div>

                
                <div className="slideOne">
                    <div className="imgDice">
                        <h3>Olá, o que você está buscando?</h3>
                        <h2>Criar ou migrar seu e-commerce</h2>
                    </div>
                     <img src="/assets/img/banner.png" alt=""/>
                </div>

                
                <div className="slideTwo">
                    <div className="imgDiceTwo">
                        <h3>Olá, o que você está buscando?</h3>
                        <h2>Criar ou migrar seu e-commerce</h2>
                    </div>
                     <img src="/assets/img/mobileF.png" alt=""/>
                </div>
                </Slider>
            </div>
      </Slide>
    );
  }
}