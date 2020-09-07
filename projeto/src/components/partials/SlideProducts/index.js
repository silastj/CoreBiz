import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Slide} from './styled';
import { Link } from 'react-router-dom';

import {  useDispatch} from 'react-redux';
import api from '../../../helpers/Api';


const SimpleSlider = () =>{

    const dispatch = useDispatch();
    const [products, setProducts ] = useState([]);
    const [qt, setQt] = useState(100);

    useEffect(()=> {        
        const getProducts = async () => {
            const pro = await api.getProducts();   
                 
                setProducts(pro);  
                                        
        };
        getProducts();
        

    }, []);

        const clicar = (e) => {
            e.preventDefault();
            dispatch({
                type:'SET_CONTAGEM'
            });
        }

       
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            initialSlide: 2            
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
            
          }
        }
      ]
    };   

    return (
        
        <Slide>
            <div className="ContainerSlider">
            <div className="title">Mais Vendidos</div> 
            <hr/>  
                <Slider {...settings}>
                
                    {products.map((i,k)=>
                                    
                                    <div className="calcados" key={k}>                                       
                                            
                                        <img src={i.imageUrl} alt=""/>
                                        <div className="dice">
                                        
                                        <h1>{i.productName}</h1>  
                                        


                                       
                                        {i.stars === 1 &&
                                        <div className="starsC">                                          
                                            <img src="/assets/img/starC.svg" alt="" />
                                            <img src="/assets/img/stars.svg" alt="" />
                                            <img src="/assets/img/stars.svg" alt="" />
                                            <img src="/assets/img/stars.svg" alt="" />
                                            <img src="/assets/img/stars.svg" alt="" />
                                            <p>{i.starts}</p>
                                         </div>  
                                        } 
                                        {i.stars === 2 &&
                                        <div className="starsC">                                          
                                            <img src="/assets/img/starC.svg" alt="" />
                                            <img src="/assets/img/starC.svg" alt="" />
                                            <img src="/assets/img/stars.svg" alt="" />
                                            <img src="/assets/img/stars.svg" alt="" />
                                            <img src="/assets/img/stars.svg" alt="" />
                                         </div>  
                                        } 
                                        {i.stars === 3 &&
                                        <div className="starsC">                                          
                                            <img src="/assets/img/starC.svg" alt="" />
                                            <img src="/assets/img/starC.svg" alt="" />
                                            <img src="/assets/img/starC.svg" alt="" />
                                            <img src="/assets/img/stars.svg" alt="" />
                                            <img src="/assets/img/stars.svg" alt="" />
                                         </div>  
                                        } 
                                        {i.stars === 4 &&
                                        <div className="starsC">                                          
                                            <img src="/assets/img/starC.svg" alt="" />
                                            <img src="/assets/img/starC.svg" alt="" />
                                            <img src="/assets/img/starC.svg" alt="" />
                                            <img src="/assets/img/starC.svg" alt="" />
                                            <img src="/assets/img/stars.svg" alt="" />
                                         </div>  
                                        } 
                                        {i.stars === 5 &&
                                        <div className="starsC">                                          
                                            <img src="/assets/img/starC.svg" alt="" />
                                            <img src="/assets/img/starC.svg" alt="" />
                                            <img src="/assets/img/starC.svg" alt="" />
                                            <img src="/assets/img/starC.svg" alt="" />
                                            <img src="/assets/img/starC.svg" alt="" />
                                         </div>  
                                        } 
                                        {i.starts === '' &&
                                           <div className="starsC">                                          
                                                <img src="/assets/img/starC.svg" alt="" />
                                                <img src="/assets/img/starC.svg" alt="" />
                                                <img src="/assets/img/starC.svg" alt="" />
                                                <img src="/assets/img/starC.svg" alt="" />
                                                <img src="/assets/img/starC.svg" alt="" />
                                            </div>  
                                        }                                        
                                        {i.listPrice > 0 &&                                         
                                            <h4>de R$ {(i.listPrice / qt).toFixed(2).replace('.', ',')}</h4> 
                                        }
                                        {i.listPrice <= 0 && 
                                            <h4 className="h4"></h4>
                                        }
                                        <h3>por R$ {(i.price / qt).toFixed(2).replace('.', ',')}</h3>
                                        
                                        {i.installments.length > 0 &&
                                            <p>ou em {i.installments[0].quantity} de R$ {(i.installments[0].value / qt).toFixed(2).replace('.', ',')}</p>                                
                                        } 
                                        {i.installments.length === 0 &&
                                            <p></p>
                                        }
                                    
                                        <Link to=""onClick={clicar}>Comprar</Link>                                       
                                    </div>

                                    {i.listPrice > 0 && 
                                        <div className="off">
                                            <p>off</p>
                                        </div>
                                         }
                                         {i.listPrice === 0 && 
                                            <div className="off">
                                                  <p></p>
                                            </div>
                                        }
                                    </div>  
                        )}
                         
                        <div><p>Carregando.... </p></div>
                        <div><p>Carregando.... </p></div>
                        <div><p>Carregando.... </p></div>
                </Slider>
            </div>
      </Slide>
    );




//   }
}

export default SimpleSlider;