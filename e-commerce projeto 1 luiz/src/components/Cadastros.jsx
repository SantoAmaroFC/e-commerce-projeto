import {useState} from 'react'

function Cadastro() {
    const [descricao, setDescricao] = useState("")
    const [preco, setPreco] = useState("")
    const [nome, setNome] = useState("")

    
  return (
    <div className='cont-cadastro'>
        
     

         <p className='cad-text'>Digite o Nome:</p>
    <input type='text' className='input-cad' placeholder='Digite o Nome do produto'
        onChange={(e) => setNome((e.target.value))}
       
        />
        
          <label className='cad-text'> 
            Selecione o tipo:
          </label>
        <select className='input-cad'
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
        <label className='cad-text'> 
            Selecione o Tamanho:
          </label>
        <select className='input-cad'
        >
        <option value="">PP</option>
        <option value="">P</option>
        <option value="">M</option>
        <option value="">G</option>
        <option value="">GG</option>
        <option value="">XGG</option>
        <option value="">XXGG</option>
        </select>

        <label className='cad-text'> 
           <p lassName='cad-text'> Selecione a cor:</p>
          </label>
        <select className='input-cad'
        >
        <option value="">Preto</option>
        <option value="">Branco</option>
        <option value="">Marrom</option>
        <option value="">Cinza</option>
       
        </select>
          <p className='cad-text'>Digite a descrição</p>
    <input type='text' className='input-cad' placeholder='Digite a descriçao do produto'
        onChange={(e) => setDescricao((e.target.value))}
       
        />

        <p className='cad-text'>Digite o Preço</p>
    <input type='Number' className='input-cad' placeholder='Digite o Preço'
        onChange={(e) => setPreco((e.target.value))}
       
        />

      <button className='input-cad'>ENVIAR</button>
        
    </div>
  )
}

export default Cadastro