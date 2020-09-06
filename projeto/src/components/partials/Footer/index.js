import React from 'react';
import { ContainerFooter, Logo, Link } from './styled';


const Page = () => {
    return (
        <ContainerFooter>
          <div className="footerDice">
              <div className="footerLocation">
                  <h3>Localização</h3>
                  <h5 className="h5">-</h5>
                  <p>Avenida Andrômeda, 2000. Bloco 6 e 8 </p>
                  <p>Alphavile SP</p>
                  <p>brasil@corebiz.ag</p>
                  <p>+55 11 3090 1039</p>
              </div>
              <div className="footerContact">
                  <Link to="">
                    <Logo src="/assets/img/email.png" />
                    <p>Entre em contato</p>
                  </Link>
                  
                    <Link to="">
                        <Logo src="/assets/img/fone.png" />
                        <p>Fale com o nosso Consultor Online</p>             
                    </Link>
                 
              </div>
              <div className="footerLogos">
                  <div className="footerCorebiz">
                      <p>Created by</p>
                      <Logo src="/assets/img/footerLogo.png"/>
                  </div>
                  <div className="footerVtex">
                      <p>Powered by</p>
                      <Logo src="/assets/img/vTex.png"/>
                  </div>
              </div>
          </div>
        </ContainerFooter>
    )
}


export default Page;