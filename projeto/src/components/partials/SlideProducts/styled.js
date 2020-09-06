import styled from 'styled-components';

export const Fake = styled.div`
    background-color:red;
    height:${props=>props.height || 20}px;
    margin-bottom:20px;
`;




export const Slide = styled.div`
  max-width:1040px;
    margin:0 auto 69px auto;
    

    .ContainerSlider{
      max-width:1040px;
      margin:0 auto;
      padding:0 26px;

      @media screen and (max-width:425px){
        padding:0px;
      }

      .slick-arrow.slick-next:before,
      .slick-arrow.slick-prev:before{
        color:black;

        @media screen and (max-width:425px){
        display:none;
      }
      }
    }
    .title{
        font-weight: 900;
        font-size: 18px;
        color: #000000;
        padding:16px 0 9px 0;

          @media screen and (max-width:425px){
          padding-left:20px;
        }
    }
    hr{ 
        display:inline-block;
        border:none;
        width:45px;
        height:6px;
        background-color:#C0C0C0;
        margin-bottom:26px;

        @media screen and (max-width:425px){
          margin-left:20px;
        }
    }
      .container {
      margin: 0 auto;
      padding: 0;
      color: #333;
      background: #419be0;
     }
     .calcados{
       display: flex;
       flex-direction: column;
       cursor: pointer;
       position:relative;
       outline-color:none;
       outline:0;

       &:hover .dice{
        background: #E6E8EA;
        transition: .3s ease;
        
       }
       &:hover .dice a{
        transition: .3s ease;
        visibility:visible;
       }

       @media screen and (max-width:768px){
        margin-right:18px;       
      }
     }

    .dice{
        background: #ffffff;
        transition: .3s ease;
        text-align:center;
        max-width:216px;
        height:153px;
        position:relative;
        
    }

    .dice h1{
        font-weight: 600;
        font-size: 12px;
        line-height: 16px;
        text-align: center;
        color: #7A7A7A;
        padding:4px 0;
    }
    .starsC{
       display:flex;
       justify-content:center;
       margin-bottom:4px;
    }
    .dice h4{
        font-size: 12px;
        line-height: 16px;
        text-align: center;
        color: #7A7A7A;
        margin-bottom:7px;
        height:16px;
    }
    .dice h3{
        font-weight: bold;
        font-size: 18px;
        line-height: 25px;
        text-align: center;
        color: #000000;
    }
    .dice h5{
        font-weight: normal;
        font-size: 11px;
        line-height: 15px;
        text-align: center;
        color: #7A7A7A;
        padding-bottom:8px;
    }
    .dice a{
        padding:8px 32px;
        background: #000000;
        border-radius: 5px;
        font-weight: bold;
        color:#ffffff;
        text-decoration:none;
        font-size: 12px;
        text-transform:uppercase;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 10px;
        visibility: hidden;
        transition: .3s ease;

        @media screen and (max-width:768px){
          visibility:visible;
        }
    }
    .slick-slide img{
        max-width:100%;
    }  
    p{
      font-weight: normal;
      font-size: 11px;
      line-height: 15px;
      text-align: center;
      color: #7A7A7A;
      margin-bottom:8px;
    } 
    .off{
      position:absolute;
      right:30px;
      top:0;
      width: 0; 
      height: 0; 
      border-top: 0px solid transparent;
      border-bottom: 50px solid transparent; 
      border-right:50px solid #F8475F; 
      display: flex;
      justify-content: center;

      @media screen and (max-width:425px){
        right:0px;
      }
    }
    .off p{
      text-align:center;
      font-style: normal;
      font-weight: 900;
      font-size: 16px;
      color: #FFFFFF;
      position:absolute;
      right: -45px;
      top: 8px;  
    }
  
    .slick-next:before{
      content:url('/assets/img/arrow.svg');
      transform:rotate(180deg);
      -ms-transform:rotate(180deg);
      -webkit-transform:rotate(180deg);
    }
    .slick-prev:before{
      content:url('/assets/img/arrowL.svg');
    }
    
    @media screen and (max-width:425px){
      .slick-dots li.slick-active button:before{
        color: #F8475F !important;
        width:7px !important;
        height:7px !important;
        opacity: 1 !important;
      }
      .slick-dots li button:before{
        color: #BDBDBD !important;
        width:7px !important;
        height:7px !important;
        opacity: 1 !important;
      }
      .slick-next{
        display:none !important;
      }

    }

`;