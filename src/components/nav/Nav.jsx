import './Nav.css';

import logo from './Hotelia horizontal blanco.svg'


function Nav(){
    return(
    <><nav>
        <img src={logo}></img>
        <div>
        <a href="#" class="item">Inicio </a>
        <a href="#" class="item">Ubícanos </a>
        <a href="#" class="item">Opiniones </a>
        <a href="/login" class="botonsesion"><i class="fa-solid fa-user"></i>Iniciar sesión</a>
        </div>  
    </nav>
    
    </>
  
  );
}

export default Nav;