import './Nav.css';

import logo from './Hotelia horizontal blanco.svg'


function Nav(){
    return(
    <><nav>
        <img src={logo}></img>
        <div>
        <a href="#" class="item">Inicio </a>
        <a href="#" class="item">Ubicanos </a>
        <a href="#" class="item">Opiniciones </a>
        <a href="../login/Login.jsx" class="botonsesion"><i class="fa-solid fa-user"></i>Iniciar sesion</a>
        </div>  
    </nav>
    
    </>
  
  );
}

export default Nav;