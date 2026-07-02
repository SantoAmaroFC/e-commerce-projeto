import './Paginas.css'
import Cadastros from '../components/Cadastros'

import Navbar from '../components/Navbar'

function Cadastro() {
  return (

    <div>
      {/* Componente de navegação (menu superior do sistema) */}
      <Navbar /> 
      {/* Componente responsável pelo formulário de cadastro de produtos */}                     
      <Cadastros />
      

    </div>
  )
}

export default Cadastro