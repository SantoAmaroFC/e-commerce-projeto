import {useState} from 'react'

function Cadastro() {
    const [tipo, settipo] = useState("")
    const [tamanho, settamanho] = useState("")
    const [cor, setCor] = useState("")
  return (
    <div>
        
        
          <label> 
            selecione o tipo
          </label>
        <select
        >
        <option value="">Camisa</option>
        <option value="">Calça</option>
        <option value="">Sapato</option>
        <option value="">Meia</option>
        <option value="">Short</option>
        <option value="">Chapeu</option>
        <option value="">Cinto</option>
        </select>
        <label> 
            selecione o tamanho
          </label>
        <select
        >
        <option value="">P</option>
        <option value="">M</option>
        <option value="">G</option>
        <option value="">GG</option>
        <option value="">PP</option>
        <option value="">XGG</option>
        <option value="">XPP</option>
        </select>

        <label> 
            Marca
          </label>
        <select
        >
        <option value="">Nike</option>
        <option value="">Adidas</option>
        <option value="">Puma</option>
        <option value="">Lacoste</option>
        <option value="">louis vuitton</option>
        <option value="">Balenciaga</option>
        
        </select>
        <label> 
            Genero
          </label>
        <select
        >
        <option value="">M</option>
        <option value="">F</option>
       
        
        </select>
        
        
    </div>
  )
}

export default Cadastro