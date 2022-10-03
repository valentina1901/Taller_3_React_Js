import './Inicio.css';

import logo from './Hotelia horizontal negro.svg'


function Inicio(){
    return(

<body class="bodyin">
 <div class="formin">
    <form action="" class="formuin">
      <div class="logologin">
    <img class="logologin" src={logo}></img>
    </div>
        <div class="iconologin">
        <i class="fa-solid fa-circle-user fa-4x"></i>  
        </div>  
      <div class="formcontainer">
        <label for="" class="labelogin">Usuario</label>
        <input  class="inputlogin" type="text" />
      </div>
      <div class="formcontainer">
        <label for="" class="labelogin">Contraseña</label>
        <input class="inputlogin" type="password" />
      </div>
      <div class="boton">
      <a href="/home2">Ingresar</a>
      </div>
      <div class="registro">
        <a href="#" class="sincuenta">¿No tienes cuenta?</a>
        <a href="/registro" class="registrar">Regístrate aquí</a>
      </div>
    </form>
</div>
</body>
  );
}

export default Inicio;