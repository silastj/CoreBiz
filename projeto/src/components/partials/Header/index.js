import React from 'react';
import { ContainerHeader, Logo } from  './styled';


import { useSelector} from 'react-redux';


const Page = () => {

    const contagem = useSelector(state => state.contagem.contagem);

    return (

        <ContainerHeader>
            <div className="menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="logo">
                <Logo src="/assets/img/logo.png" alt=""/>
            </div>
           <div className="search">
               <input 
               type="text"
               placeholder="O que está procurando?"/>
                <button>
                    <img src="/assets/img/search.png" alt=""/>
                </button>
           </div>
           <div className="myAccount">
               <img src="/assets/img/myAccount.png" alt=""/>
               <p>Minha Conta</p>
           </div>
           <div className="cart">
               <img src="/assets/img/cart.png" alt=""/>
               <span>{contagem}</span>
           </div>
        </ContainerHeader>
    )
}


export default Page;