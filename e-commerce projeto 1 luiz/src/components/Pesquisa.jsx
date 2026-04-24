import React from 'react'

function Pesquisa() {
    const[pesquisa, setPesquisa] = useState("")
  return (
    <div>

    <input type="text" className='pesquisa' placeholder='Digite o tipo'
            onChange={(e) => setPesquisa((e.target.value))} 
        />

    </div>
  )
}

export default Pesquisa