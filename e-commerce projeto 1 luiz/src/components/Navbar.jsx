// Importa o componente Link para navegação entre páginas
import { Link } from "react-router-dom"
// Importa o arquivo de estilos da barra de navegação
import './Navbar.css'
function Navbar() {
  return (
    // Container principal do cabeçalho
    <div className="cont-header">
      {/* Barra de navegação */}
      <nav className="nav">
        {/* <img src="./public/logo_aura_semBG.png" className="logo" />
        <Link to="/" className="botoes-nav">Home</Link> */}
         {/* Logo do sistema.
           Ao clicar na imagem o usuário é direcionado para a página inicial. */}
        <Link to="/"><img src="./public/logo_aura_semBG.png" className="logo" alt="Aura Logo" /></Link>
        {/* Botão que leva para a tela de cadastro de produtos */}
        <Link to="/cadastro" className="botoes-nav">Cadastro de Produto</Link>
        {/* Botão que leva para o Dashboard */}
        <Link to="/dashboard" className="botoes-nav">Dashboard</Link>
        {/* <Link to="/cadastroconta">CadastroConta</Link> */}

      </nav>
    </div>
  )
}

export default Navbar