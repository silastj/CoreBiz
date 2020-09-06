import React,{ useState }from 'react';
import { Container,BemailSucesso,ContainerEmailSucesso, ContainerPreFooter,ErroName,TextName,ErroEmail,TextEmail,Input,Button} from './styled';
import api from '../../../helpers/Api';



const Page = () => {    

    const [name, setName ] = useState('');
    const [email, setEmail ] = useState('');
    const [errorName, setErrorName] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [border, setBorder ] = useState(false);
    const [buttonError, setButtonError] = useState(true);
    const [emailSucesso, setEmailSucesso] = useState(false);
    const [preFooter, setPreFooter] = useState(true);
  
    const handlePreFooter = () =>{
        setPreFooter(true);
        setEmailSucesso(false);
        setButtonError(true);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

            if(name !== '' && email !== ''){

            let response = await api.register(name, email);

            if(response.message !== undefined){
                setEmail('');
                setName('');
                setErrorName(false);
                setErrorEmail(false);
                setBorder(false);
                setButtonError(false);
                setEmailSucesso(true);
                setPreFooter(false);
                }
            }
            if(name === '' && email === ''){
                setErrorName(true);
                setErrorEmail(true);
                setButtonError(false);
                setBorder(true);
                setButtonError(true);
                
            }if (name === '' && email !== ''){
                setErrorName(false);
                setButtonError(false);
                
            }if ( email === '' && name !== ''){
                setErrorEmail(true);
                setButtonError(false);
                
            }if(setEmail !== '' && setEmail !== ''){
                setButtonError(true);
            }
    }

    
    return(
        <Container>
        <ContainerPreFooter
            status={preFooter}
            setStatus={setPreFooter}
        >
            <div className="preFooter-dice">
              <h2>Participe de nossas news com promoções e novidades!</h2>  
              <form onSubmit={handleSubmit} className="preFooter-footer">
                  <div className="cInputN">
                  <Input
                    type="text"
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={e=>setName(e.target.value)}
                    status={border}
                    setStatus={setBorder}
                    />
                    
                    <ErroName status={errorName} setStatus={setErrorName}>
                        <TextName>Preencha com seu nome completo</TextName>
                    </ErroName>   
                  </div>

                <div className="cInputE">
                  <Input
                     type="email"
                     placeholder="Digite seu email"
                     value={email}
                     onChange={e=>setEmail(e.target.value)}
                     status={border}
                     setStatus={setBorder}                    
                     />
                     <ErroEmail status={errorEmail} setStatus={setErrorEmail}>
                      <TextEmail>Preencha com um e-mail válido</TextEmail>
                    </ErroEmail>  
                </div>
                  <Button 
                    type="submit"
                    status={buttonError}
                    setStatus={setButtonError}
                    >Eu quero!
                  </Button>
              </form>  
            </div>
      
        </ContainerPreFooter>
              <ContainerEmailSucesso
                 status={emailSucesso}
                 setStatus={setEmailSucesso}         
              >
                <h5>Seu e-mail foi cadastrado com sucesso!</h5>
                <p>A partir de agora você receberá as novidade e ofertas exclusivas.</p>
                <BemailSucesso
                    onClick={handlePreFooter}
                >Cadastrar novo e-mail</BemailSucesso>            
              </ContainerEmailSucesso>
              </Container>
    )
}
export default Page;