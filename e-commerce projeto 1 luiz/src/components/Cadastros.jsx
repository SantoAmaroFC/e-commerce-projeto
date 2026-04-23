import {useState} from 'react'

function Cadastro() {
    const [tipo, settipo] = useState("")
    const [tamanho, settamanho] = useState("")
    const [cor, setCor] = useState("")
  return (
    <div>
        
        
          <label> 
            Selecione o tipo:
          </label>
        <select
        >
        <option value="">Acessório</option>
        <option value="">Camisa</option>
        <option value="">Blusa</option>
        <option value="">Calça</option>
        <option value="">Short</option>
        <option value="">Cinto</option>
        <option value="">Meia</option>
        <option value="">Sapato</option>
        </select>
        <label> 
            Selecione o Tamanho:
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
            Marca:
          </label>
        <select
        >
        <option value="">Nike</option>
        <option value="">Adidas</option>
        <option value="">Puma</option>
        <option value="">Lacoste</option>
        <option value="">Louis Vuitton</option>
        <option value="">Balenciaga</option>
        
        </select>
        <label> 
            Gênero: 
          </label>
        <select
        >
        <option value="">Masculino</option>
        <option value="">Feminino</option>
       
        
        </select>
        
        
    </div>
  )
}

export default Cadastro