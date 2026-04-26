import {useState} from 'react'

function Cadastro() {
    const [descricao, setDescricao] = useState("")
    const [preco, setPreco] = useState("")
    const [nome, setNome] = useState("")

    
  return (
    <div className='cont-cadastro'>
        
     

         <p>Digite o Nome:</p>
    <input type='text' className='nome-produto' placeholder='Digite o Nome do produto'
        onChange={(e) => setNome((e.target.value))}
       
        />
        
          <label className='tipo-cad'> 
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
        <label className='tamanho-cad'> 
            Selecione o Tamanho:
          </label>
        <select
        >
        <option value="">PP</option>
        <option value="">P</option>
        <option value="">M</option>
        <option value="">G</option>
        <option value="">GG</option>
        <option value="">XGG</option>
        <option value="">XXGG</option>
        </select>

        <label className='cor-cad'> 
            Selecione a cor:
          </label>
        <select
        >
        <option value="">Preto</option>
        <option value="">Branco</option>
        <option value="">Marrom</option>
        <option value="">Cinza</option>
       
        </select>
          <p>Digite a descrição</p>
    <input type='text' className='descricao' placeholder='Digite a descriçao do produto'
        onChange={(e) => setDescricao((e.target.value))}
       
        />

        <p>Digite o Preço</p>
    <input type='Number' className='Preco' placeholder='Digite o Preço'
        onChange={(e) => setPreco((e.target.value))}
       
        />

      <button>ENVIAR</button>
        
    </div>
  )
}

export default Cadastro