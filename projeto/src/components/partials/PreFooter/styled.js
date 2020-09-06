import styled from 'styled-components';

export const Container = styled.div``;
export const Button = styled.button`
        width:140px;
        height:48px;
        font-weight: bold;
        font-size: 14px;
        color:#ffffff;
        border:none;
        background:${props=>props.status ? '#000000' : '#333333'};
        border-radius: 5px;
        margin-left:8px;
        cursor:pointer;
        outline:0;
        font-family: 'Lato', sans-serif;

        @media screen and (max-width:768px){
                width:100%;
                margin: 16px 0;
                margin-left:0px;
            }
`;
export const Input = styled.input`
    width:280px;
    height:48px;
    margin-right:8px;
    border:none;
    border-radius:5px;
    padding-left:16px;
    font-weight: bold;
    font-size: 12px;
    color: #585858;   
    outline:0;
    border:${props=>props.status ? '1px solid red' : '1px solid transparent'};
    font-family: 'Lato', sans-serif;

    &:focus{
        border: 1px solid #BDBDBD;
    }
    @media screen and (max-width:768px){
        width: 100%;
    }
    @media screen and (max-width:768px){
    .preFooter-footer input[type="email"]{
        margin:22px 0 7px 0;
    }
    }
`;
 

export const ContainerPreFooter = styled.div`
    background-color: #F2F2F2;;
    height:146px;
    max-width:1920px;
    margin:0 auto;
    display:${props=>props.status ? 'flex': 'none'};
    justify-content:center;

    @media screen and (max-width:768px){
        height:100%;
    }

    .preFooter-dice{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        align-self:center;
        height:100%;
        position:relative;

        @media screen and (max-width:768px){
            align-items:flex-start;
            margin:0 16px;
            width:100%;
        }

        h2{
            font-weight: bold;
            font-size: 22px;
            color: #333333;
            font-family: 'Lato', sans-serif;
            margin-bottom:16px;
            

            @media screen and (max-width:768px){
                margin: 24px 0 19px 0;
            }
        }
    }
    .preFooter-footer{
        display: flex;
        align-items: center;
        justify-content: center;
        align-self: center;

        @media screen and (max-width:768px){
            display: flex;
            flex-direction: column;
            width: 100%;
        }

        .cInputN,
        .cInputE{
            position:relative;
            
            @media screen and (max-width:768px){
                width: 100%;
                margin:11px 0;
            }
        }
    }
`;
export const Modal = styled.div`
    position:fixed;
    left:0;
    right:0;
    top:0;
    bottom:0;
    background-color:rgba(0,0,0, 0.7);
    display:${props=>props.status ? 'flex' : 'none'};
    justify-content:center;
    align-items:center;
`;

export const ModalBody = styled.div`
    width:390px;
    height:150px;
    background-color:#fff;
    border-radius:4px;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    padding:10px;

    h1{
        color:#20a56d;
        font-size:21px;
    }
    p{
        text-align:center;
    }
    
`;
export const ContainerModal = styled.div`

`;
export const ErroName = styled.div`
    display:${props=>props.status ? 'block' : 'none'};
    position:absolute;
    left: 17%;
    transform: translateX(-25%);
    bottom: -25px;
    font-family: 'Lato', sans-serif !important;

    @media screen and (max-width:768px){
        left:45px;  
        bottom: -20px;
    }
`;

export const TextName = styled.p`
    color: #D7182A;
    font-family: 'Lato', sans-serif !important;
    font-size: 12px;
    font-weight:bold;
`;
export const ErroEmail = styled.div`
    display:${props=>props.status ? 'block' : 'none'};
    position:absolute;
    left: 36%;
    transform: translateX(-60%);
    bottom: -25px;
    font-family: 'Lato', sans-serif !important;

    @media screen and (max-width:768px){
        left:100px;  
        bottom: -20px;
    }
`;
export const TextEmail = styled.p`
    color: #D7182A;
    font-family: 'Lato', sans-serif !important;
    font-size: 12px;
    font-weight:bold;
`;

export const BemailSucesso = styled.button`
        width:328px;
        height:48px;
        font-weight: bold;
        font-size: 14px;
        color:#ffffff;
        border:none;
        background-color:#000000;
        border-radius: 5px;
        margin-left:8px;
        cursor:pointer;
        outline:0;
    

        @media screen and (max-width:768px){
                width:100%;
                margin-bottom: 16px;
                margin-left:0px;
            }

`;

 

export const ContainerEmailSucesso = styled.div`
    background-color: #F2F2F2;;
    height:146px;
    max-width:1920px;
    margin:0 auto;
    display:${props=>props.status? 'flex': 'none'};
    justify-content: center;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width:768px){
        padding:20px;
    }

    h5{
        font-family: 'Lato', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 14px;
        text-align: center;
        color: #000000;
    }
    p{
        font-family: 'Nunito', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 14px;
        text-align: center;
        color: #000000;
        margin-bottom:15px;
    }

    @media screen and (max-width:768px){
        height:100%;
    }

    .preFooter-dice{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        align-self:center;
        height:100%;
        position:relative;

        @media screen and (max-width:768px){
            align-items:flex-start;
            margin:0 16px;
        }

        h2{
            font-weight: bold;
            font-size: 22px;
            color: #333333;           
            

            @media screen and (max-width:768px){
                margin: 24px 0 19px 0;
            }
        }
    }
    .preFooter-footer{
        display: flex;
        align-items: center;
        justify-content: center;
        align-self: center;

        @media screen and (max-width:768px){
            display: flex;
            flex-direction: column;
            width: 100%;
        }
        .cInputN,
        .cInputE{
            position:relative;
        }
    }




`;





