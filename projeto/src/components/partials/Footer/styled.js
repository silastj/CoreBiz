import styled from 'styled-components';
export const Link = styled.a``;
export const ContainerFooter = styled.div `
    background-color:#000000;
    height:213px;
    max-width:1920px;
    margin:0 auto;
   

    @media screen and (max-width:768px){
    height:100%;
    }


    .footerDice{
        max-width:1040px;
        margin:0 auto;
        display:grid;
        grid-template-columns:238px 1fr 214px;
        height: 100%;

        @media screen and (max-width:768px){
            grid-template-columns:1fr;
        }
    }
    .footerLocation{
        display:flex;
        flex-direction:column;
        align-self: center;

        @media screen and (max-width:768px){
            margin: 27px 0 45px 16px;
        }
        
    }
    .footerLocation h3{
        font-weight: bold;
        font-size: 20px;
        line-height: 27px;
        color: #FFFFFF;
    }
    .footerLocation h5{
        width:45px;
        height:6px;
        background-color:#ffffff;
        margin:16px 0 20px 0;
    }
    .footerLocation p{
        font-weight: normal;
        font-size: 13px;
        color: #FFFFFF; 
        margin-bottom:6px;
    }

    .footerContact{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items: center;
    }
    .footerContact a{
        background: #FFFFFF;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        color: #000000;
        text-decoration:none;
        text-transform:uppercase;
        width:195px;
        height:38px;
        margin-bottom:25px;
        cursor: pointer;
    }
    .footerContact a:last-child img{
        margin-left:20px;
    }
    .footerContact a p{
        margin-left:20px;
    }
    .footerLogos{
        display: flex;
        align-self: center;
        justify-content: space-between;

        @media screen and (max-width:768px){
            justify-content: space-around;
            margin-bottom: 10px;
        }
}

    }
    .footerCorebiz p{
        color:#ffffff;
        font-size:11px;
        font-weight:normal;
        margin-bottom:2px;
    }
    .footerVtex p{
        color:#ffffff;
        font-size:11px;
        font-weight:normal;
        margin-bottom:2px;
    }

`;

export const Logo = styled.img`

`;