let BASE = 'https://corebiz-test.herokuapp.com/api/v1';

export default {

    //PRODUTOS
    getProducts: async ( ) => {

        let queryString = new URLSearchParams();
        
        const res = await fetch(BASE+'/products?'+queryString);
        //RESPOSTA
        const json = await res.json();        
        // console.log(json);
        return(json);        
    },

    //NAME E EMAIL
    register:async (name, email) => {

        if(name !== '' && email !== ''){
            let body = {name, email} 

            const res = await fetch(BASE+'/newsletter',{
                method:'POST',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(body)
            });  

            const json = await res.json();            
            return json;          
        }        
    }   
}