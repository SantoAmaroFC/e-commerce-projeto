import { Link } from "react-router-dom"
import './Navbar.css'
function Navbar() {
  return (
    <nav className="navbar">
        <img src="./public/logo_aura_semBG.png"  className='logo' />
        <Link to="/">Home</Link>
        <Link to="/cadastro">Cadastro</Link>
        <Link to="/cadastroconta">CadastroConta</Link>
        
    </nav>
  )
}

export default Navbar