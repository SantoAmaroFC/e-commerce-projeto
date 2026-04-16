import './Paginas.css'
 import Cadastros from '../components/Cadastros'

function Cadastro() {
  return (
   
   <div>
        <h1> cadastre seus produtos.. </h1>
       <Cadastros />
            <p>
       <br/> <input type="text"/>
        <button>Enviar</button> <br/>
            </p>
            
    </div>
  )
}

export default Cadastro