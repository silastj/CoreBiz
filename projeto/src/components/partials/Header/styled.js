import styled from 'styled-components';

export const ContainerHeader = styled.div`
    max-width:1040px;
    height:80px;
    background-color:#fff;
    margin:0 auto;
    display:grid;
    grid-template-columns:0px 300px 1fr 140px 48px;
    grid-template-areas:"menu logo search myAccount cart";
                        

    @media screen and (max-width:768px){
        padding:0 20px;
        grid-template-columns:50px 1fr 40px ;
        grid-template-areas:"menu logo cart"
                        "search search search";        
    }


    .menu{
        grid-area:menu;
        display:none;
        cursor:pointer;

        @media screen and (max-width:768px){
            display:flex;
            flex-direction:column;
            align-items:center;
            align-self:center;
            padding-top:10px;
        }
    }
    .menu span{
        width:22.5px;
        height:3px;
        background: #000000;
        margin:2px 0;
    }
    .search{
        display:flex;
        align-items:center;
        align-self:center;
        position:relative;
        grid-area:search;
    }
    .search button{
        border:none;
        background-color:transparent;
        outline:0;
        position:absolute;
        right:0px;
        cursor:pointer;
    }
    .search input{
        width:100%;
        border:none;
        border-bottom:1px solid #7A7A7A;
        outline:0;
        cursor:pointer;
    }
    .myAccount{
        display: flex;
        align-items: center;
        justify-content: center;
        grid-area:myAccount;
        cursor:pointer;

        @media screen and (max-width:768px){
            display:none;
        }

        p{
            font-weight:normal;
            font-size:13px;
            color: #7A7A7A;
            margin-left:6px;
        }
    }
    
    .cart{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        grid-area:cart;

        @media screen and (max-width:768px){
            padding-top:10px;
        }
    }
    .cart span{
        width:20px;
        height:20px;
        border-radius:50%;
        background-color:red;
        color:#fff;
        font-weight:bold;
        font-size:13px;
        margin-left:9px;
        line-height: 20px;
        text-align: center;
    }
    .logo{
        displaY:flex;
        align-items:center;
        align-self:center;
        grid-area:logo;

        @media screen and (max-width:768px){
            justify-content:center;
            margin-bottom:7px 20px 0 0;
        }
        
    }
`;

export const Logo = styled.img`
  
`;