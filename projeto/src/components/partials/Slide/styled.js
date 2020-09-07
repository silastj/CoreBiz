import styled from 'styled-components';


export const Slide = styled.div`
    max-width:1920px;
    margin: 0 auto;

    /* INICIO SLIDE TOP */
.container {
  margin: 0 auto;
  padding: 0;
  color: #333;
  background: #419be0;
}
.bbb h3 {
  background: red;
  color: #fff;
  font-size: 36px;
  line-height: 100px;
  padding: 2%;
  position: relative;
  text-align: center;
}
.slideOne{
  position: relative;
}
.imgDice{
  position:absolute;
  top: 30%;
  left:25%;
  transform:translateY(30%);

  @media screen and (max-width:768px){
    top: 5%;
    left: 2%;
  }

  @media screen and (max-width:425px){
    top: 0px;
    left:20px;
  }
  
}
.imgDice h3{
  font-weight: bold;
  font-size: 30px;
  line-height: 41px;
  color: #FFFFFF;

  @media screen and (max-width:425px){
    font-size: 20px;
    max-width: 274px;
    line-height: 20px;
  }
}
.imgDice h2{
  font-weight: bold;
  font-size: 30px;
  line-height: 31px;
  color: #FFFFFF;
  max-width:370px;
  margin-top:10px;
  @media screen and (max-width:768px){
    max-width: 300px;
  }

}
.slideOne img{
  width:100%;
  height:430px;
}
.slideTwo{
  position:relative;
}
.slideTwo .imgDiceTwo{
  display:none;
}
.slideTwo img{
  width:100%;
  height:430px;
  object-fit: cover;
}
.slideTwo h3 {
  color: #fff;
  font-size: 20px;
  padding: 2%;
  position: relative;
 
}
.slideTwo .imgDiceTwo h2{
  width: 260px;
  font-weight: bold;
  font-size: 32px;
  color: #FFFFFF;
  line-height:33px;

}
.variable-width .slick-slide>p {
  background: blue;
  height: 100px;
  color: #fff;
  margin: 5px;
  line-height: 100px;
  text-align: center;
}
.center .slick-center h3 {
  color: #e67e22;
  opacity: 1;
  transform: scale(1.08);
}
.center h3 {
  opacity: 0.8;
  transition: all 300ms ease;
}
.content {
  padding: 20px;
  margin: auto;
  width: 90%;
}
.slick-slide .image {
  padding: 10px;
}
.slick-slide img {
  display: block;
  margin: auto;
}
.slick-slide img.slick-loading {
  border: 0;
}
.slick-slider {
  margin: 0px auto 50px;
}
.slick-dots {
  margin-left: 0;
  bottom:37px !important;
}
.slick-thumb {
  bottom: -45px;
}
.slick-thumb li {
  width: 60px;
  height: 45px;
}
.slick-thumb li img {
  filter: grayscale(100%);
}
.slick-thumb li.slick-active img {
  filter: grayscale(0%);
}
.slick-dots li button:before{
  color:#BDBDBD !important;
  opacity: 1 !important;
}
.slick-dots li.slick-active button:before{
  color: #F8475F !important;
}
.slick-dots li button:before{
  font-size:10px !important;

  @media screen and (max-width:425px){
    font-size:7px !important;
  }
}
.slick-next,
.slick-prev{
  display:none !important;
}

@media (max-width: 768px) {
  h3 {
    font-size: 24px;
  }
  .center {
    margin-left: -40px;
    margin-right: -40px;
  }
  .center .slick-center h3 {
    color: #e67e22;
    opacity: 1;
    transform: scale(1);
  }
  .center h3 {
    opacity: 0.8;
    transform: scale(0.95);
    transition: all 300ms ease;
  }
  .slideTwo .imgDiceTwo{
  display:flex;
  flex-direction:column;
  position:absolute;
  top: 20px;
  left: 33px;
  width: 200px;
}
  
}
.slick-vertical .slick-slide {
  height: 180px;
}
.slick-arrow {
  background-color: grey;
  /* color: black; */
}
.slick-arrow:hover {
  background-color: grey;
}
.slick-prev {
  z-index: 100;
  left: 20px !important;
}
.slick-next {
  z-index: 100;
  right: 20px !important;
}
/* FIM SLIDE TOP */

@media screen and (max-width:425px){
  .slick-slider .slick-track{
    height:190px;
  }
  .cnITkx .slick-slide img{
    height:190px;
  }
  .slick-dots{
    bottom: 15px !important;
  }
  .slick-dots li{
    width:10px;
  }
}

.slideOne{
    background-image:url('/assets/img/mobileF.png');
    background-size: 100%;
    background-repeat: no-repeat;
  }
`;