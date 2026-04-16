import {useState} from 'react'

function Cadastro() {
    const [tipo, settipo] = useState("")
    const [tamanho, settamanho] = useState("")
  return (
    <div>
        
        <input type="text" className='tipo' placeholder='Digite o tipo'
            onChange={(e) => settipo((e.target.value))} 
        />
        <input type="text" className='tipo' placeholder='Digite o tamanho'
            onChange={(e) => settamanho((e.target.value))} 
        />
        <button></button>
    </div>
  )
}

export default Cadastro