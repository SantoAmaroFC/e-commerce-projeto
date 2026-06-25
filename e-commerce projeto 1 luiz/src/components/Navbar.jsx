import { Link } from "react-router-dom"
import './Navbar.css'
function Navbar() {
  return (
        <div className="cont-header">
      <nav className="nav">
        <img src="./public/logo_aura_semBG.png"  className="logo"/>
        <Link to="/" className="botoes-nav">Home</Link>
        <Link to="/cadastro" className="botoes-nav">Cadastro de Produto</Link>
        <Link to="/dashboard" className="botoes-nav">Dashboard</Link>
        {/* <Link to="/cadastroconta">CadastroConta</Link> */}
        
    </nav>
    </div>
  )
}

export default Navbar