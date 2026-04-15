import {useState} from 'react'

function Cadastro() {
    const [nome, setNome] = useState("")
    const [senha, setSenha] = useState("")
  return (
    <div>
        {nome}
        <input type="Number"
            onChange={(e) => setNome(Number(e.target.value))}

            
        />
        <button></button>
    </div>
  )
}

export default Cadastro