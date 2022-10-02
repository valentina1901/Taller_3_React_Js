import './Inicio.css';

import logo from './Hotelia horizontal negro.svg'


function Inicio(){
    return(

<body class="body">
 <div class="form">
    <form action="" class="formu">
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
      <a href="#">Ingresar</a>
      </div>
      <div class="registro">
        <a href="#" class="sincuenta">¿No tienes cuenta?</a>
        <a href="formhd.html" class="registrar">Regístrate aquí</a>
      </div>
    </form>
</div>
</body>
  );
}

export default Inicio;